<template>
  <div :class="$style.footer">
    <router-link activeClass="activeClass" exactActiveClass="exactActiveClass" :to="route.name === 'home' ? 'other': 'home'"> 切换路由</router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
     let route = useRoute()
    return {
      route
    }
  }
})
</script>

<style lang="less" module>
.footer {
  color:#666;
  height: 100px;
  line-height: 100px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 32px;
  z-index: 100;
  background: #ddd;
}
</style>