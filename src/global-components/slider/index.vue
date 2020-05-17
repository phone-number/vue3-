<template>
  <section :class="cname" style="position: relative; overflow-x: hidden;">
    <swiper :options="props.options" :not-next-tick="props.options.notNextTick">
      <swiper-slide v-for="item in props.items" :key="item.href">
        <router-link :to="{ name: item.href }">
          <img :src="item.src" alt="">
          <renderView v-if="!!item.render" :render="item.render" />
        </router-link>
      </swiper-slide>
      <template #pagination v-if="props.options.pagination">
        <div class="swiper-pagination" ></div>
      </template>
    </swiper>
  </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from '../../plugins/vue-awesome-swiper'
import renderView from './renderView'
import 'swiper/css/swiper.css'
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    renderView
  },
  props: {
    cname: {
      type: String
    },
    // items 中可以传入render函数，在图片底部进行渲染
    items: {
      type: Array
    },
    options: {
      type: Object,
      default: () => ({
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        notNextTick: false
      })
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
  
</style>