<template>
  <div class="wine-box">
      <main> 
        <Header/>
        <Itens class="itens"/> 
        <SubTotal class="subtotal"/>
      </main>
      <div class="backdrop"  @click="toggleWineBox"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; 
import {mapState} from 'vuex'
import { Action } from 'vuex-class' 
import Header from '@/components/WineBox/Header.vue'
import Itens from '@/components/WineBox/Itens.vue' 
import SubTotal from '@/components/WineBox/SubTotal.vue' 

@Component({
  components: {
  Header, Itens, SubTotal
  },
  computed: mapState([ 
    'carrinho','wineBox',
  ]),

  
})
export default class WineBox extends Vue {
    @Action('TOGGLE_WINEBOX')
    TOGGLE_WINEBOX!: (TOGGLE_WINEBOX: void) => void 

    toggleWineBox(){
        this.TOGGLE_WINEBOX()
    }
}
</script>

<style lang="scss" scoped>

    .wine-box {
        position: absolute; 
        width: 100%;
        height: 100vh; 
    }

    main {
      z-index: 4;
      position: fixed; 
      display: flex;
      flex-direction: column;
      right: 0;
      top: 0;
      width: 370px;
      height: 100vh;
      background-color: #F5F5F5; 
      overflow-y: scroll;
    }  

    .subtotal {
      margin-top: auto;
    }

    .backdrop {
      z-index: 3;
      position: fixed;
      overflow: hidden;
      width: 100%;
      height: 100%;
      background-color: #5555557e;
    }
  
  @media screen and (max-width: 500px) {
     main {
       width: 100vw;
     }
  }

</style>