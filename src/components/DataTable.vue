<template>
    <v-data-table
        :headers="headers"
        :items="history"
        :items-per-page="15"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            history: [],
            headers: [
                {text: 'Donor ID', align: 'start', value: 'from',},
                {text: 'Recipient', value: 'to'},
                {text: 'Cause', value: 'cause'},
                {text: 'Amount (฿)', value: 'amount'},
                // {text: 'Tax Reduction', value: 'tax_reduction'},
                {text: 'Timestamp', value: 'timestamp'},
            ],
        }
    },
    methods: {
        async fetchTransactions() {
            try {
                const res = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/activity/all`)
                const data = res.data.data
                this.history = data.map((item) => {
                    return {
                        timestamp: item.timestamp,
                        from: item.data.from,
                        to: item.data.to,
                        amount: Number(item.data.value),
                        cause: item.data.cause
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        this.fetchTransactions();
    }
}
</script>

<style scoped>

</style>
