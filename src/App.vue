<template>
    <v-app>
        <v-app-bar
            app
            color="#4CAF50"
            dark
        >
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="require('@/Logo/kbank.png')"
                    transition="scale-transition"
                    width="150"
                />
            </div>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-main>
            <DataTable/>
        </v-main>
    </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import DataTable from "@/components/DataTable";

export default {
    name: 'App',

    components: {
        // HelloWorld,
        DataTable,
    },

    data: () => ({
        //
    }),
};
</script>
