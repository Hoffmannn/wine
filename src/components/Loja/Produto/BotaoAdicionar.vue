<template>   
      <button>Adicionar</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'; 

@Component 
export default class BotaoAdicionar extends Vue { 
    @Prop() produto!: object
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
</style>