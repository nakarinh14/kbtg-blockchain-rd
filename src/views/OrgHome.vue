<template>
    <div>
        <v-card-title>
            <b>Donated Sum Amount:</b>
            <hr>
            <b style="color: forestgreen"> ฿{{total_balance}}</b>
        </v-card-title>
        <v-data-table
            :headers="balance_headers"
            :items="balance"
            :loading="balanceLoading"
            class="elevation-1"
        >
            <template v-slot:item.balance="{ item }">
                <b style="color: forestgreen"> ฿{{item.balance}}</b>
            </template>
        </v-data-table>
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
        ></v-data-table>
    </div>
</template>

<script>
import axios from "axios";
import data from "@/utils/orgs-data";

export default {
    name: "OrgHome",
    data() {
        return {
            search: '',
            loading: true,
            balanceLoading: true,
            total_balance: '',
            history: [],
            balance: [],
            balance_headers: [
                {text: 'Cause', align: 'start', value: 'cause'},
                {text: 'Total Donated Amount', value: 'balance'}
            ] ,
            headers: [
                {text: 'Transaction ID', align: 'start', value: 'txId'},
                {text: 'Donor ID', align: 'start', value: 'from',},
                {text: 'Fullname', value: 'fullname'},
                {text: 'Cause', value: 'cause'},
                {text: 'Amount (฿)', value: 'amount'},
                {text: 'Timestamp', value: 'timestamp'},
            ],
        }
    },
    methods: {
        async fetchTransactions() {
            try {
                const res = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/activity/${this.org_name}`)
                const data = res.data.data
                this.history = data.map((item) => {
                    const parsedDate = new Date(item.timestamp);
                    return {
                        txId: item.txId.substring(0,15)+'...',
                        timestamp: parsedDate.toLocaleString(),
                        from: item.data.from.substring(0,15)+'...',
                        fullname: item.data.fullname,
                        amount: item.data.value,
                        cause: item.data.cause
                    }
                })
                this.loading = false
            } catch (err) {
                console.log(err)
            }
        },
        async fetchBalanace() {
            try {
                const res = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/api/donee/balance/${this.org_name}`)
                const data = res.data.balance
                this.total_balance = data.total_balance
                this.balance = Object.keys(data.causes).map((cause) => ({
                  cause,
                  balance: data.causes[cause]
                }))
                this.balanceLoading = false
            } catch (err) {
                console.log(err)
            }
        },
    },
    created() {
        this.fetchTransactions();
        this.fetchBalanace();
    },
    computed:{
        org_name(){
            return data[this.$route.params.org].org_name
        }
    }
}
</script>

<style scoped>

</style>
