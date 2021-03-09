<template>

  <v-data-table
    :headers="headers"
    :items="donor"
    :items-per-page="5"
    class="elevation-1"
></v-data-table>
</template>

<script>
export default {
  data() {
    return{
      headers: [
        {
          text: 'Donor ID',
          align: 'start',
          sortable: false,
          value: 'donor',
        },
        { text: 'Recipient ID', value: 'recipient' },
        { text: 'Category', value: 'type' },
        { text: 'Amount (฿)', value: 'baht' },
        { text: 'Tax Reduction', value: 'tax' },
        { text: 'Date', value: 'date' },
      ],
      donor: [
        {
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },
        {
          donor: '1102',
          recipient: 1104,
          type: "Construction",
          baht: 2400,
          tax: 168,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },{
          donor: '1103',
          recipient: 1104,
          type: "Food",
          baht: 240,
          tax: 4.0,
          date: '02/03/2021',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>
