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
            </div> 
            <span v-if="produto.available" class="mobile">
                Não sócio {{produto.pricePromotional ? produto.pricePromotional : produto.priceStock | currency("R$",2, { decimalSeparator: ',' })}}
            </span>
            <BotaoAdicionar class="botao-adicionar" :disponivel="produto.available" :produto="produto"/> 
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
        color: #1D1D1B;
        display: flex;
        justify-content: space-around;
        width: 30%; 
        background-color: #fff;
        padding: 15px 15px 15px 5px; 

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

    .mobile {
        display: none;
    }

    @media screen and (max-width: 1170px) {
         * {
            text-align: center !important;
        }
        .mobile {
            display: initial; 
            text-transform: uppercase; 
            color: #888888; 
        }

        .produto { 
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch; 
            width: 100%;
            padding: 20px 20px;   
                
            img { 
                    width: 130px;
                    height: 200px;
                    margin: 0 auto;
                }

            .detalhes {   
                justify-content: space-around;

                .nome {
                    width: 170px; 
                    display: block; 
                    margin: auto;
                    margin-bottom: 11px;
                }

                span {
                    margin-bottom: 11px;
                }
                
                .socio {
                    flex-direction: row;
                    justify-content: flex-end;

                    span {
                        line-height: 100%;
                        text-align: right !important;
                        width: 90px;

                    }

                    .preco-socio {
                        font-size: 110%;
                        margin-left: 15px;
                        margin-top: 8px;
                    }
                }
            } 
        }
       

         

    }
</style>