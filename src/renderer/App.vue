<template>
  <div id="app">
    <div class="ele-header"></div>
    <router-view class="ele-page"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'zjhcsoft-cli'
  }
</script>
<style lang="scss">
@import '@/styles/base.scss';
ul,li{
  list-style: none;
}
.ele-header{
  position: absolute;
  width: 100%;
  z-index: 10;
  height: 20px;
  background-color: #515a6e;
  text-align: center;
  -webkit-app-region: drag;
  font-size: 14px;
  line-height: 20px;
}
.ele-page{
  position: absolute;
  top: 20px;
  bottom: 0;
  width: 100%;
}
</style>
