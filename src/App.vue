<template>
  <c-header />
  <keep-alive>
    <component :is="route.name" />
  </keep-alive>
    <!-- <router-view /> -->

  <c-footer />
</template>

<script>
import cHeader from '_c/header'
import cFooter from '_c/footer'
import other from './view/other'
import home from './view/home'
import { defineComponent, KeepAlive, inject, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    cHeader,
    KeepAlive,
    cFooter,
    home,
    other
  },
  setup () {

    console.log(useStore('main'), inject('main'), getCurrentInstance())
    return {
      route: useRoute()
    }
  }
})
</script>

<style lang="less" module>
@import './style/reset.css';
#app {
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}
.routerView {
  margin-top: 120px;
  margin-bottom: 120px;
}
</style>
