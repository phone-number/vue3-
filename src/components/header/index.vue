<template>
  <div :class="$style.header">
    <span :class="$style.left">
      <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
    </span>
    <btn :class="$style.btnDownload">App下载</btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({

})
</script>

<style lang="less" module>
  .header {
    color:#666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    font-size: 32px;
    background: #ddd url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png') center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
    .left {
      font-size: 28px;
      height: 30px;
      margin: 17px 0 0 18px;
    }
    .btnDownload {
      .mixin-btn(24px, #fff, #f04752, 0, 4px);
      float: right;
      // font-size: 24px;
      border-width: 0;
      height: 56px;
      line-height: 56px;
      min-width: 120px;
      // padding: 0;
      // border-radius: 4px;
      margin: 28px 24px 0 0;
      clear: both;
    }
  }
</style>