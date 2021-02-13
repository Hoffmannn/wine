<template>
    <div class="loja"> 
        <Banner/>
        <Produtos/>
    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';  
import Banner from '@/components/Loja/Banner.vue'
import Produtos from '@/components/Loja/Produtos.vue'

@Component({
  components: {
      Banner, Produtos
  },
})
export default class Loja extends Vue {}
</script>

<style lang="scss" scoped>
  .loja {
      width: 65vw; 
      margin: 0 auto;
      padding-top: 62px;
  }

   @media screen and (max-width: 1150px) {
    .loja {
      padding-top: 24px;
      width: 90vw;
      overflow-x: hidden;
    }
  }
</style>