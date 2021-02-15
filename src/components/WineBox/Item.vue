<template>
    <section class="produto"> 
        <img class="imagem-produto" :src="item.image"/>
        <section class="detalhes">
            <section class="top"> 
                <p class="nome">{{item.name}}</p>
                <img @click="removerItem(item)" class="imagem-remover" src="@/assets/wineBox/close.svg"/>
            </section>
            <section class="bottom">
                <div class="box-quantidade">
                    <span :class="item.quantity > 1 ? 'alterar-quantidade' : 'inativo alterar-quantidade'"
                        @click.stop="item.quantity > 1 && atualizarQuantidade({item : item, quantidade: -1})">-</span>
                    <span class="quantidade">{{item.quantity}}</span>
                    <span class="alterar-quantidade"
                        @click.stop="atualizarQuantidade({item : item, quantidade: +1})">+</span>
                </div> 
                    <span class="preco">
                        {{(this.item.priceMember * item.quantity ) | currency("R$ ",2, { decimalSeparator: ',' })}}
                    </span> 
            </section>
        </section>
    </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import { Action } from 'vuex-class' 
import {mapState} from 'vuex'

@Component({ 
   computed: mapState([ 
    'carrinho',
  ]),
}) 
export default class Item extends Vue { 
    @Prop() item!: object  
    @Action('REMOVER_ITEM')
    REMOVER_ITEM!: (REMOVER_ITEM: void) => void 
    @Action('ATUALIZAR_QUANTIDADE')
    ATUALIZAR_QUANTIDADE!: (ATUALIZAR_QUANTIDADE) => void 

     

    removerItem(item){ 
        this.REMOVER_ITEM(item)
    }

    atualizarQuantidade(payload){
        this.ATUALIZAR_QUANTIDADE(payload)
    }

}
</script>

<style lang="scss" scoped>
    .produto {
        padding: 16px 0;
        display: flex;
        flex-direction: row;  
        margin: 0 16px;

        .imagem-produto {
            height: 132px;
            width: 95px;
        }

        .detalhes {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .top {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 45px;

            .nome { 
                width: 170px;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 16px; 
                display: flex;
                align-items: center;
                letter-spacing: -0.2px; 
                color: #1D1D1B;
            }

            .imagem-remover {
                height: 19px;
                width: 19px;
                cursor: pointer;
            }

        }

        .bottom {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            .box-quantidade {
                width: 77px;
                height: 38px;
                display: flex;
                flex-direction: row;
                justify-content: space-between; 
                align-items: center;
                border: 0.5px solid #888888;
                box-sizing: border-box;
                border-radius: 3px;
                
                .alterar-quantidade {
                    font-family: Open Sans;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 20px;
                    line-height: 27px;
                    text-align: center;
                    margin: 0 10px;
                    color: #888888;
                    cursor: pointer;  
                }

                .inativo {
                    cursor: not-allowed;
                    opacity: 0.4; 
                }

                .quantidade {
                    font-family: Lato;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 16px;
                    line-height: 19px; 
                    color: #1D1D1B;
                }
                
                
            }
        }
        .preco {
            font-family: Lato;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 28px; 
            text-align: right; 
            color: #C81A78 ;
        }
    }
</style>