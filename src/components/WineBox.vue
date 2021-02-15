<template>
  <div class="wine-box">
      <main>
          <Header/>
          <Produtos/>
      </main>
      <div class="backdrop"  @click="toggleWineBox"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; 
import {mapState} from 'vuex'
import { Action } from 'vuex-class'
import Header from '@/components/WineBox/Header.vue'
import Produtos from '@/components/WineBox/Produtos.vue'

@Component({
  components: {
    Header, Produtos
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
        overflow: hidden;
        width: 100%;
        height: 100vh; 
    }

    main {
        z-index: 4;
        position: fixed;
        right: 0;
        top: 0;
        width: 352px;
        height: 100vh;
        background-color: #fff;
        
    }

    .backdrop {
        z-index: 3;
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100vh;
        background-color: #5555557e;
    }
  
  @media screen and (max-width: 1150px) {
     
  }

</style>