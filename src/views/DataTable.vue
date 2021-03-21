<template>
    <div>
        <v-card-title>
            <b>Transaction History</b>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="history"
            :items-per-page="15"
            class="elevation-1"
            :search="search"
            :loading="loading"
            loading-text="Loading... Please wait"
            sort-desc.sync="timestamp"
        >
            <template v-slot:item.tax_reduction="{ item }">
                <v-chip
                    :color="item.tax_reduction === 'YES' ? 'primary' : 'warning'"
                    dark
                >
                    <b>{{ item.tax_reduction }}</b>
                </v-chip>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            search: '',
            loading: true,
            history: [],
            headers: [
                {text: 'Transaction ID', align: 'start', value: 'txId'},
                {text: 'Donor UID', value: 'from'},
                {text: 'Fullname', value: 'fullname'},
                {text: 'Recipient', value: 'to'},
                {text: 'Cause', value: 'cause'},
                {text: 'Amount (฿)', value: 'amount'},
                {text: 'Tax Reduction', value: 'tax_reduction'},
                {text: 'Timestamp', align: 'end', value: 'timestamp'},
            ],
        }
    },
    methods: {
        async fetchTransactions() {
            console.log("Function initialized")
            try {
                const res = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/activity/all`)
                const data = res.data.data
                console.log(data)
                this.history = data.map((item) => {
                    const parsedDate = new Date(item.timestamp);
                    return {
                        txId: item.txId.substring(0,10)+'...',
                        timestamp: parsedDate.toLocaleString(),
                        from: item.data.from.substring(0,10)+'...',
                        fullname: item.data.fullname,
                        tax_reduction: JSON.parse(item.data.tax_reduction) ? "YES" : "NO",
                        to: item.data.to,
                        amount: item.data.value,
                        cause: item.data.cause
                    }
                })
                this.loading = false
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
