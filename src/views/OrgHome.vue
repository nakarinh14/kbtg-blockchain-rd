<template>
    <v-data-table
        :headers="headers"
        :items="history"
        :items-per-page="15"
        class="elevation-1"
    ></v-data-table>
</template>

<script>
import axios from "axios";

export default {
    name: "OrgHome",
    data() {
        return {
            history: [],
            headers: [
                {text: 'Donor ID', align: 'start', value: 'from',},
                {text: 'Fullname', value: 'fullname'},
                {text: 'Cause', value: 'cause'},
                {text: 'Amount (฿)', value: 'amount'},
                {text: 'Timestamp', align:'end', value: 'timestamp'},
            ],
        }
    },
    methods: {
        async fetchTransactions() {
            try {
                const res = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/activity/all`)
                const data = res.data.data
                console.log(data)
                this.history = data.map((item) => {
                    const parsedDate = new Date(item.timestamp);
                    return {
                        timestamp: parsedDate.toLocaleString(),
                        from: item.data.from,
                        fullname: item.data.fullname,
                        amount: item.data.value,
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
