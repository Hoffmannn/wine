<template>
    <section>
        <img @click="toggleWineBox" src="@/assets/wineBox/left-arrow.svg" alt="Voltar">
        <p>WineBox ({{carrinho.length}})</p>
    </section>
</template>

<script lang="ts">
import { Component,  Vue } from 'vue-property-decorator';  
import {mapState} from 'vuex'
import { Action } from 'vuex-class'


@Component({ 
  computed: mapState([ 
    'carrinho','wineBox'
  ]),
})

export default class Header extends Vue {  
    @Action('TOGGLE_WINEBOX')
    TOGGLE_WINEBOX!: (TOGGLE_WINEBOX: void) => void 

    toggleWineBox(){ 
        this.TOGGLE_WINEBOX()
    }
}
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        gap: 20px;
        background-color: #fff;
        padding: 25px 16px;
    }
    img {
        width: 25px; 
        cursor: pointer;
    }
    
    P { 
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 16px; 
        letter-spacing: -0.833333px; 
        color: #000000;
        margin: 0;
    }
</style>