<template>   
      <section class="produto">  
        <img :src="produto.image" alt="" srcset="">
        <section class="detalhes">
            <span class="nome">{{produto.name}}</span>
 
            <span v-if="produto.available" :class="produto.priceMember ? 'preco riscado' : 'preco' ">
                {{produto.pricePromotional ? produto.pricePromotional : produto.priceStock | currency("R$",2, { decimalSeparator: ',' })}}
            </span>
            <div v-if="produto.available" :v-if="produto.priceMember" class="socio">
                <span>Sócio Wine</span>
                <span class="preco-socio"> 
                    {{produto.priceMember | currency("R$",2, { decimalSeparator: ',' })}}
                </span>
                <BotaoAdicionar :disponivel="true"/>
            </div> 

            <BotaoAdicionar v-if="!produto.available" :disponivel="false"/>
        </section>
      </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import BotaoAdicionar from '@/components/Loja/Produto/BotaoAdicionar.vue'

@Component({
  components: {
      BotaoAdicionar
  },
})
export default class Produto extends Vue { 
    @Prop() produto!: object
}
</script>

<style lang="scss" scoped> 
    .produto { 
        display: flex;
        justify-content: space-around;
        width: 30%; 
        background-color: #fff;
        padding: 15px 15px 15px 5px;

        image {
            width: 100%;
        }

        .detalhes {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .nome {
                display: flex;
                text-align: left;
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                line-height: 16px;
            }

            .preco { 
                font-style: normal;
                font-weight: bold;
                font-size: 13px;
                line-height: 16px; 
            }

            .riscado {
                text-decoration-line: line-through;
                color: #888888;
            }

            .socio {
                display: flex;
                flex-direction: column;

                span {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 10px; 
                    text-transform: uppercase;
                }

                .preco-socio { 
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px;
                    line-height: 28px; 
                    display: flex;
                    align-items: center; 
                    color: #B6116E;
                }
            }
        }
    }
</style>