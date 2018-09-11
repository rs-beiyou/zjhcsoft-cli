<template>
    <div class="ele-page">
      <router-view></router-view>
    </div>
</template>
<script>
import logo from '@/assets/zjhcsoft.png'
export default {
  name: 'firstcontent',
  data () {
    return {
      logoUrl: logo
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/base.scss';
.ele-page{
  position: absolute;
  top: $landing-top-toolbar-height + 64;
  bottom: $landing-footer-height;
  width: 100%;
  padding: 20px;
  overflow: auto;
}
</style>
