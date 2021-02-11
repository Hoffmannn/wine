<template>   
      <div class="produtos"> 
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
</style>