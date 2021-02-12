<template>   
      <div class="produtos">  
            <img v-if="produtos.length===0" src="@/assets/loja/bottle.svg" class="carregando rotating"/> 
            <Produto v-for="produto in produtos" :key="produto.name" :produto="produto" />  
      </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios'
import Produto from '@/components/Loja/Produto.vue'

@Component({
  components: {
      Produto
  },
})
export default class Produtos extends Vue {  
      produtos: Array<object> = []
      created(){
            axios.get("https://run.mocky.io/v3/908ec5b5-1e5a-4602-9008-47719f7c6759")
            .then(response => (this.produtos = response.data))
      }
}
</script>

<style lang="scss" scoped> 
      .produtos {
            margin-top: 48px;
            display: flex;
            justify-content: space-between;  
            flex-wrap: wrap;
            gap: 5px;
      }

      .carregando {
            margin: 0 auto;
            height: 100px;
      }

      @keyframes rotating
      {
      from
            {
            transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            }
      to
            {
            transform: rotate(360deg);
            -o-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            }
      }
      @-webkit-keyframes rotating
      {
      from
            {
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            }
      to
            {
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            }
      }
      .rotating
      {
      -webkit-animation: rotating 1s linear infinite;
      -moz-animation: rotating 1s linear infinite;
      -ms-animation: rotating 1s linear infinite;
      -o-animation: rotating 1s linear infinite;
      animation: rotating 1s linear infinite;
      }

      @media screen and (max-width: 1150px) {
            .produtos {
                  flex-wrap: nowrap;
                  overflow: scroll;
                  gap: 16px;
            }
    
      }
</style>