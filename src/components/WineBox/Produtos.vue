<template>
    <div> 
        <Produto v-for="produto in carrinho" :key="produto.nome" :produto="produto"/> 
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import {mapState} from 'vuex'
import Produto from '@/components/WineBox/Produto.vue'

@Component({
  components: { 
      Produto
  },
  computed: mapState([ 
    'carrinho',
  ]),
})
export default class Produtos extends Vue { 
    @Prop() produto!: object
}
</script>