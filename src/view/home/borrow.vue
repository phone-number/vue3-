<template>
  <panel title="急速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link to="home">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=75&height=280">
      </router-link>
    </section>
  </panel>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="less" module>
.panel {
  .mixin-panel();
  .content {
    padding-bottom: 40px;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>