<template>    
      <section class="produto">  
          <section class="bg">
              <img :src="produto.image" alt="" srcset="">
            <section class="detalhes">
                <span class="nome">{{produto.name}}</span>
                <section>
                    <span v-if="produto.available" :class="produto.priceMember ? 'preco riscado' : 'preco' ">
                        {{produto.pricePromotional ? produto.pricePromotional : produto.priceStock | currency("R$ ",2, { decimalSeparator: ',' })}}
                    </span>
                    <div v-if="produto.available" :v-if="produto.priceMember" class="socio">
                        <span class="socio-wine-texto">Sócio Wine</span>
                        <span class="preco-socio"> 
                        R$<p class="price-integer"> {{Math.trunc(produto.priceMember)}}</p>,
                        <p class="price-decimal">{{Math.round(produto.priceMember.toFixed(2)%1*100)}}</p>
                        </span>   
                    </div> 
                    <span v-if="produto.available" class="mobile">
                        Não sócio {{(produto.pricePromotional ? produto.pricePromotional : produto.priceStock)  | currency("R$ ",2, { decimalSeparator: ',' })}}
                    </span>
                    <BotaoAdicionar class="botao-adicionar botao-desktop" :disponivel="produto.available" :produto="produto"/> 
                </section>
            </section>
        </section>
            <BotaoAdicionar class="botao-adicionar botao-mobile" :disponivel="produto.available" :produto="produto"/> 
     </section> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';  
import ProdutoI from "@/Interfaces/Produto"
import BotaoAdicionar from '@/components/Loja/Produto/BotaoAdicionar.vue'

@Component({
  components: {
      BotaoAdicionar
  },
})
export default class Produto extends Vue { 
    @Prop() produto!: ProdutoI  
}
</script>

<style lang="scss" scoped> 
    .produto {
        color: #1D1D1B;
        display: flex;
        flex-direction: column;
        justify-content: space-around; 
        width: 380px;
        min-width: 332px;
        background-color: #fff;
        padding: 15px 15px 15px 5px; 

        .bg {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }

        .detalhes {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            max-width: 200px !important;

            section {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between
            }

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
                justify-content: space-around;
                

                .socio-wine-texto {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px; 
                    text-transform: uppercase;
                    margin-top: 10px;
                    margin-bottom: -10px;
                }

                .preco-socio {  
                    font-style: normal;
                    font-weight: bold;
                    font-size: 15px; 
                    display: flex;
                    align-items: baseline; 
                    color: #B6116E;
                }
            }
        }

        .botao-mobile {
            display: none;
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

        .bg {
            background-color: #fff;
            padding: 0 12px 13px 12px; 
            height: 340px;
            width: 180px;  
            display: block !important;
        }

        .produto { 
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch; 
            min-width: 205px; 
            width: 205px;
            padding: 20px 0;  
            margin-top: auto;
            padding-top: 0;
            background: none;
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
 
                
                .socio {
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;

                    .socio-wine-texto {
                        width: 70px;
                        margin: 0;
                    }

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

            .botao-desktop {
                display: none;
            }

            .botao-mobile {
                display: initial;
                margin-top: 7px;  
            }
        }
       

         

    }
</style>