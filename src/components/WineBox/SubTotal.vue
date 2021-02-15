<template>
    <div>
       <section>
           <span class="subtotal">Subtotal</span>
           <span class="valor">
               {{total| currency("R$ ",2, { decimalSeparator: ',' })}}
            </span>
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
      return this.$store.state.carrinho.reduce((acc, b) => (acc + b.priceMember * b.quantity),0) 
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

        .valor {
            font-family: Lato;
            font-style: normal;
            font-weight: bold; 
            line-height: 17px;
            text-align: right; 
            color: #C81A78;
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