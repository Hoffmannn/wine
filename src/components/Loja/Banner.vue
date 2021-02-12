<template>
    <section class="banner">
        <img class="desktop" src="../../assets/loja/banner.png"/>
        <img class="mobile" src="../../assets/loja/banner_mobile.png"/> 
    </section>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'; 
 
export default class Banner extends Vue {}
</script>

<style lang="scss" scoped>
   img {
       width: 100%;
       cursor: pointer; 
   }

   .mobile {
        display: none;
    }

    @media screen and (max-width: 600px) {
    .desktop {
        display: none;
    }
    .mobile {
        display: initial;
    }
  }
</style>