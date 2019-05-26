<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './shared/Header'
// import Footer from './shared/Footer'

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
  created() {
    this.$store.dispatch('initTasks')
  }
}
</script>
