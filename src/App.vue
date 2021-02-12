<template>
  <div id="app">
    <Header class="header"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator'; 
import Vue2Filters from 'vue2-filters'
import Header from '@/components/Header.vue'; // @ is an alias to /src

Vue.use(Vue2Filters)

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss"> 
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
} 

body { 
  margin: 0;  
  background-color: #F5F5F5; 
  padding-bottom: 20px;
}
</style>
