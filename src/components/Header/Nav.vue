<template>
    <nav> 
      <router-link to="/clube">Clube</router-link>
      <router-link to="/">Loja</router-link>
      <router-link to="/produtores">Produtores</router-link>
      <router-link to="/ofertas">Ofertas</router-link>
      <router-link to="/eventos">Eventos</router-link>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
 
}
</script>

<style lang="scss" scoped> 
  nav {  
      * {
        text-decoration: none;
        color: #666;
        :hover {
          color: #555
        }
        margin: 20px 0 20px 40px;
        font-family: Lato;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left; 
      }
  }
</style>