<template>
  <panel :class="$style.panel" title="新品推荐">
    <section :class="$style.content">
      <slider  :items="items" :options="options" cname="product-slider" />
    </section>
  </panel>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    let options = {
      slidesPerView: 2.3,
      spaceBetween: 30,
      freeMode: true
    }
    let items = [
      {
        href: 'home', 
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/103592/33/3187/44158/5ddcf6bdE2dcc50b6/60fa36c7ddab892b.jpg?width=335&height=421',
        // render: h => h('div', 1111)
      },
      {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/69015/19/16303/39730/5ddcf7c5E681f82c5/e70c533777e4b4ad.jpg?width=335&height=421',
        // render: h => h('div', 2222)
      },
      {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t1/71502/31/16413/33604/5ddcf712Ef6cabea4/bd87b891e58e9ce9.jpg?width=335&height=421',
        // render: h => h('div', 3333)
      },
    ]
    return {
      options,
      items
    }
  }
})
</script>

<style lang="less">
.product-slider {
  color: red;
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>
<style lang="less" module>
.panel {
  .mixin-panel();
  .content {
    padding-bottom: 40px;
  }
}
</style>