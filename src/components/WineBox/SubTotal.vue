<template>
    <div>
       <section>
           <span class="subtotal">Subtotal</span>
           <p v-if="total > 0" class="valor"> 
               R$ <span class="price-integer">{{Math.trunc(total)}}</span>,<span class="price-decimal">{{Math.trunc(total % 1 * 100)}}</span>  
            </p>
            <p v-else class="valor">
                R$ <span class="price-integer">0</span>,00
            </p>
       </section>
       <section>
           <button>Finalizar pedido</button>
       </section>
    </div>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';  
import {mapState} from 'vuex' 

@Component({ 
  computed: mapState([ 
    'carrinho' 
  ]), 
})

export default class SubTotal extends Vue {  
  
  get total() { 
      const carrinho: number = this.$store.state.carrinho.reduce((acc, b) => (acc + b.priceMember * b.quantity),0)
      return carrinho.toFixed(2)
  }
}
</script>

<style lang="scss" scoped>
    div {  
        background-color: #fff;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 17px; 

        section {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center; 
            max-width: 318px;
        }

        .subtotal {
            font-family: Lato;
            font-style: normal; 
            line-height: 12px; 
            text-align: right;
            text-transform: uppercase; 
            color: #666666;
        }

        

        button {
            margin: 16px auto;
            color: #fff;
            background: #7FBC44;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
            border-radius: 4px;
            width: 318px;
            height: 48px; 
            border: none;
            padding: 0;   
            font-style: normal;
            font-weight: bold;
        }

        button:hover {
            background: #659638;
        }

        button:active {
            transform: scaleY(0.95);
        }
    }
</style>