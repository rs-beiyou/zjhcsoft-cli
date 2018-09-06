<template>
    <div class="ele-top-toolbar"></div>
</template>
<script>
export default {
  name: 'topToolbar'
}
</script>
<style scoped lang="scss">
@import '@/styles/base.scss';
.ele-top-toolbar{
  position: absolute;
  width: 100%;
  z-index: $landing-zindex;
  height: $landing-top-toolbar-height;
  background-color: $ele-theme-color;
  text-align: center;
  -webkit-app-region: drag;
  font-size: 14px;
  line-height: $landing-top-toolbar-height;
}
</style>
