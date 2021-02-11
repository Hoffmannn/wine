<template>   
 <main class="area-icone"> 
      <img alt="Sacola Wine" src="../../assets/header/sacola.svg">  
      <section class="contador-itens"> 
            <p>5</p>
      </section>     
 </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component 
export default class IconeCarrinho extends Vue { 
 
}
</script>

<style lang="scss" scoped> 
 .area-icone {  
       position: absolute;
       right: 0;
       top: 0; 

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