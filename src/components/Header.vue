<template> 
    <Nav/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Nav from '@/components/Header/Nav.vue'

@Component({
  components: {
    Nav,
  },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>

</style>