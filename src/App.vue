<template>
    <v-app>
        <v-app-bar
            v-if="!$route.path.includes('login')"
            app
            :color="$route.path.includes('admin') ? '#4CAF50' : '#1565C0'"
            dark
        >
            <div class="d-flex align-center">
                <v-img
                    v-if="$route.path.includes('admin')"
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="require('@/Logo/kbank.png')"
                    transition="scale-transition"
                    width="150"
                />
                <v-toolbar-title>
                    {{ $route.path.includes('admin') ? 'Admin' : org_name }}
                </v-toolbar-title>
            </div>
            <v-spacer></v-spacer>
            <v-btn
                depressed
                color="primary"
                to='/login'
            >
                Sign Out
            </v-btn>

        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import data from './utils/orgs-data'
export default {
    data() {
        return {
        }
    },
    computed: {
        org_name(){
            return data[this.$route.params.org].org_name
        }
    }
}

</script>
