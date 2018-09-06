<template>
<div>
    <div class="el-footer"></div>
</div>
</template>
<script>
export default {
  name: 'firstfooter'
}
</script>
<style scoped lang="scss">
@import '@/styles/base.scss';
.el-footer{
    position: absolute;
    width: 100%;
    bottom: 0;
    height: $landing-footer-height;
    background-color: $ele-theme-color;
    z-index: $landing-zindex;
}
</style>
