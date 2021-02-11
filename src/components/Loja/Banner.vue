<template>
    <section class="banner">
        <img src="../../assets/loja/banner.png"/>
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
</style>