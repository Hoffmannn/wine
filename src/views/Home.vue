<template> 
    <main class="home">
       <Loja/>
    </main> 
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';  
import Loja from '../components/Loja.vue'

@Component({
  components: { 
    Loja
  },
 
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped> 
</style>