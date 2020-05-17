<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
  }
})
</script>

<style lang="less">
.btn {
  .mixin-btn();
}
</style>