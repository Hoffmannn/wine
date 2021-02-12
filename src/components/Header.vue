<template>
  <header>
    <nav > 
      <Logo/>
      <Nav/>
      <IconeCarrinho/>
    </nav>
  </header> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Logo from '@/components/Header/Logo.vue'
import Nav from '@/components/Header/Nav.vue'
import IconeCarrinho from '@/components/Header/IconeCarrinho.vue'

@Component({
  components: {
    Logo, Nav, IconeCarrinho
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
  header {  
    border-bottom: 0.5px solid #D5D5D5;
    margin-top: 10px;
    width: 100vw;
    height: 65px;
  }
  nav {   
    position: relative;
    width: 60vw;
    left: 0;
    margin: 0 auto;
    display: flex;
    align-content: space-between;
    align-items: center; 
  }
</style>