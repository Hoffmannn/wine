<template>
    <h1>{{produto.name}}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';  

@Component({ 
})
export default class Produto extends Vue { 
    @Prop() produto!: object
}
</script>