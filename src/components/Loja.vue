<template>
    <main class="loja">
        <Banner/>
    </main>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; 
import Banner from './Loja/Banner.vue'

@Component({
  components: {
     Banner
  },
})
export default class Loja extends Vue {}
</script>

<style lang="scss" scoped>
  .loja {
      width: 60vw;
      height: 100%;
      margin: 0 auto;
      padding-top: 62px !important;
  }
</style>