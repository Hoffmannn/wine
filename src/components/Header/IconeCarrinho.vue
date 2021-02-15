<template >   
 <main class="area-icone" @click="toggleWineBox" > 
      <img alt="Sacola Wine" src="../../assets/header/sacola.svg">  
      <section class="contador-itens"> 
            <p>{{carrinho.length}}</p>
      </section>     
 </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {mapState} from 'vuex'
import { Action } from 'vuex-class'

@Component({ 
  computed: mapState([ 
    'carrinho','wineBox'
  ]),
})
export default class IconeCarrinho extends Vue {
  public carrinho!: object[]; 

  @Action('TOGGLE_WINEBOX')
    TOGGLE_WINEBOX!: (TOGGLE_WINEBOX: void) => void 

    toggleWineBox(){ 
        this.TOGGLE_WINEBOX()
    }
}
</script>

<style lang="scss" scoped> 
 .area-icone {     

      .contador-itens   { 
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: #fff;
            height: 20px;
            width: 20px;
            border-radius: 50%; 
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 11px;
            line-height: 15px;  
            color: #5CB79F;  

            display: flex;
            justify-content: center;
            align-items: center;

            p {
                  position: absolute;
                  top: 50;
                  left: 50;
            }
      }
 }
</style>