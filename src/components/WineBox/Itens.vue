<template>
    <ul class="itens"> 
      <li v-for="item in carrinho" :key="item.name"> 
        <Item :item="item"/>
      </li>
    </ul>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator'; 
import {mapState} from 'vuex'
import Item from '@/components/WineBox/Item.vue'

@Component({
  components: { 
      Item
  },
  computed: mapState([ 
    'carrinho',
  ]),
})
export default class Itens extends Vue {  
}
</script>

<style lang="scss" scoped> 
  ul {
    margin: 0;
    padding: 0;
    
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 0.5px solid #D5D5D5;
  }

  ul > li:first-of-type {
    border: none;
  }
</style>