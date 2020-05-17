<template>
  <section class="panel">
    <h4>--{{props.title}}--</h4>
    <slot/>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String
    }
  },
  setup(props) {
    return {
      props
    }
  }
})
</script>

<style lang="less">
    .panel {
      .mixin-panel();
    }
</style>