<template>    
    <button @click.stop="adicionarProduto" v-if="disponivel">Adicionar</button>
    <button v-else class="esgotado">Esgotado</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 
import { Action } from 'vuex-class'

@Component
export default class BotaoAdicionar extends Vue {
    @Prop() produto!: object
    @Prop() disponivel!: boolean 
    
    @Action('ATUALIZAR_CARRINHO')
    ATUALIZAR_CARRINHO!: (ATUALIZAR_CARRINHO: object) => void 

    @Action('TOGGLE_WINEBOX')
    TOGGLE_WINEBOX!: (TOGGLE_WINEBOX: void) => void 

    adicionarProduto(){ 
        this.ATUALIZAR_CARRINHO(
            {...this.produto, quantity: 1}
        );  
        this.TOGGLE_WINEBOX()
    }
 
}

</script>

<style lang="scss" scoped>  
    button {
        height: 40px;
        border: none;
        color: #fff;
        background: #B6116E;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
        border-radius: 4px; 
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px; 
        text-align: center;
        cursor: pointer;
    }

    button:hover {
            background: #a00f61;
        }

    .esgotado {
        background: #A0A0A0 !important;
        cursor: default;
    }
</style>