<template>
  <article>
    <slider :class="$style.slider" :items="items"/>
    <section :class="$style.list">
      <div :class="$style.item" v-for="item in enters" :key="item.img">
        <router-link :to="item.href">
          <img :src="item.img" :alt="item.title" />
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    let items = [
      { href:'home', src: '//img30.360buyimg.com/darkhouse/jfs/t1/108814/5/14371/50792/5ea6909eEda03dba6/854661a930b1d2dc.jpg' },
      { href:'home', src: '//img30.360buyimg.com/darkhouse/jfs/t1/112901/25/3044/55087/5ea568b8E0e69d23b/e4bcf166b218919a.jpg' },
      { href:'home', src: '//img30.360buyimg.com/darkhouse/jfs/t1/110979/14/3260/30188/5ea693feEe822021d/3f7ceee57a4977aa.jpg' },
      { href:'home', src: '//img30.360buyimg.com/darkhouse/jfs/t1/111046/30/3269/64052/5ea691d1Eead24595/afbd656f18a10531.jpg' },
    ]
    let enters = [
      { href: 'home', title: '优惠券', img: '//img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png' },
      { href: 'home', title: '领红包', img: '//img20.360buyimg.com/mcpageview/jfs/t1/85137/14/9816/10770/5e11d7ddE2805969c/9f4f3cdcfeb204e5.png' },
      { href: 'home', title: '抢钢镚', img: '//img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png' },
      { href: 'home', title: '领京豆', img: '//img20.360buyimg.com/mcpageview/jfs/t1/105209/4/9857/12579/5e11d770E4e458bc7/fbbbec1918b041e3.png' },
      { href: 'home', title: '白条提额', img: '//img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png' },
    ]
    return {
      items,
      enters
    }
  }
})
</script>

<style lang='less' module>
.slider {
  img {
    width: 100%;
  }
}
.list {
  .mixin-list(row);
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 26px;
      margin-top: 12px;
      color: #666;
    }
  }
}
</style>