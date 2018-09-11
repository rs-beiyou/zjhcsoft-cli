<template>
<div class="el-footer">
  <Dropdown trigger="click">
    <Icon class="setting" type="md-settings" :size="21" />
    <DropdownMenu slot="list">
        <DropdownItem>设置</DropdownItem>
        <DropdownItem divided>检查更新</DropdownItem>
    </DropdownMenu>
  </Dropdown>
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
    position: fixed;
    width: 100%;
    bottom: 0;
    height: $landing-footer-height;
    background-color: $ele-theme-color;
    z-index: $landing-zindex;
    line-height: $landing-footer-height;
}
.setting{
  padding: 0 .2em;
  cursor: pointer;
  color: #cbccce;
  transition: color .2s linear;
  &:hover{
    color: #fff;
  }
}
</style>
