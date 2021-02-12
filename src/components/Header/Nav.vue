<template>
    <nav > 
      <ul :class="isMobileActive && 'active'">
        <figure class="mobile" @click="toggleNav">
          <img src="../../assets/header/logo.svg"/>
        </figure>
        <li v-for="link in links" :key="link.text"> 
            <router-link :to="link.path">{{link.text}}</router-link> 
        </li>
      </ul>

      <div class="backdrop" :class="isMobileActive && 'active'"  @click="toggleNav"></div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
  
  isMobileActive = false
  toggleNav(): void{
  this.isMobileActive = !this.isMobileActive
  }
}

</script>

<style lang="scss" scoped> 
  nav {  
      z-index: 2; 
      ul {
        display: flex; 

        a {
          display: flex;
        }
        li {
          list-style-type: none;
          margin-right: 2vw;
        }
      }
      * {
        text-decoration: none;
        color: #666;
        :hover {
          color: #444
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

  .mobile {
    display: none;
  }

  @media screen and (max-width: 1150px) {
    .mobile {
      display: initial;
      margin: 0 auto;
    }
    nav { 
      ul {  
      position: absolute;  
      flex-direction: column;
      flex-flow: column-reverse;
      background-color: #fff; 
      left: -90px;
      top: 0;
      margin: 0;
      width: 200px;  
      padding-top: 10px;
      padding-bottom: 20px;
          border-bottom: 0.5px solid #D5D5D5;

        figure {
          width: 100%;
          cursor: pointer;
        }

        li {
          display: none;
          padding: 20px 20px 20px 0; 
        } 
        &.active {
          top: -10px;  
          padding-top: 20px;
          flex-flow: column; 
          box-shadow: 2px 2px 10px #555;
          
          li {
            display: initial;
          }
        }
      }

      .backdrop {
        display: none;
        &.active {
          z-index: -1;
          display: initial;
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #5555557e;
        }
      }
      
    }
  }
</style>