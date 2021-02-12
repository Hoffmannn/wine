<template>
    <nav > 
      <ul ref="nav">
        <figure>
          <img src="../../assets/header/mobile_menu_icon.svg"/>
        </figure>
        <li v-for="link in links" :key="link.text"> 
            <router-link :to="link.path">{{link.text}}</router-link> 
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
 links: Array<object> = [
   {text: "Clube",
    path: "/clube"},
   {text: "Loja",
    path: "/"},
   {text: "Produtores",
    path: "/produtores"},
   {text: "Ofertas",
    path: "/ofertas"},
   {text: "Eventos",
    path: "/eventos"},
   ]
}
</script>

<style lang="scss" scoped> 
  nav {  
      ul {
        display: flex; 

        a {
          display: flex;
        }
        li {
          list-style-type: none;
          margin-right: 40px;
        }
      }
      * {
        text-decoration: none;
        color: #666;
        :hover {
          color: #555
        } 
        font-family: Lato;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left; 
      }
  }

  @media screen and (max-width: 1150px) {
    nav {  
      ul { 
      background-color: #fff; 
      position: fixed;
      left: 0;
      top: 55px;
      flex-direction: column;
      width: 150px; 
      border-right: 0.5px solid #D5D5D5;
      border-bottom: 0.5px solid #D5D5D5;
      padding-bottom: 20px;

        li {
          padding: 10px;
        }
      }
    }
  }
</style>