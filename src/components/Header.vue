<template>
  <header>
    <nav > 
      <Logo class="desktop"/>
      <Nav/>
      <IconeCarrinho/>
    </nav>
  </header> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Logo from '@/components/Header/Logo.vue'
import Nav from '@/components/Header/Nav.vue'
import IconeCarrinho from '@/components/Header/IconeCarrinho.vue'

@Component({
  components: {
    Logo, Nav, IconeCarrinho
  },
 
})
export default class Header extends Vue {
 
}
</script>

<style lang="scss" scoped>
  header {   
    background-color: #fff;
    border-bottom: 0.5px solid #D5D5D5;
    padding-top: 10px;
    width: 100%;
    height: 65px;
  }
  nav {   
    position: relative;
    width: 60vw;
    left: 20px;
    margin: 0 auto;
    display: flex;
    align-content: space-between; 
  } 

  @media screen and (max-width: 1150px) {
    .desktop {
      display: none;
    } 
    nav {
      width: 80vw;
    } 
  }

</style>