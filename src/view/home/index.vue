<template>
  <section>
    <hslider />
    <novice />
    <borrow />
    <money />
    <product />
  </section>
</template>

<script>
import { defineComponent, onUnmounted, onActivated } from 'vue'
import hslider from './hslider'
import novice from './novice'
import borrow from './borrow'
import money from './money'
import product from './product'
export default defineComponent({
  components: {
    hslider,
    novice,
    borrow,
    money,
    product
  },
  setup () {
    onActivated(() => console.log('xuanzhong'))
    onUnmounted(() => console.log(2222))
    // watch(inject('a'), (n, o) => console.log(n, o))
    // inject('a').value = 3
  }
})
</script>

<style lang="less">

</style>
