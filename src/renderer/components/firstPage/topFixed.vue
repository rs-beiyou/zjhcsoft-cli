<template>
    <div class="ele-top-fixed">
        <div class="ele-top-toolbar"></div>
        <Header class="layout-header">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo">
                    <img :src="logoUrl" alt="zjhcsoft-cli">
                </div>
                <div class="layout-nav">
                    <MenuItem name="1" @click.native="load('index')">
                      <Icon type="ios-navigate"></Icon>
                      首页
                    </MenuItem>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            脚手架
                        </template>
                        <MenuGroup title="前端">
                            <MenuItem name="2-1" @click.native="load('webapp')">Vue Spa</MenuItem>
                            <MenuItem name="2-2" @click.native="load('cordova')">Hybird App</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="3" @click.native="load('standard')">
                        <Icon type="ios-analytics"></Icon>
                        前端规范
                    </MenuItem>
                    <MenuItem name="4" @click.native="openSine">
                      <Icon type="ios-book" />
                      SineUI
                    </MenuItem>
                </div>
            </Menu>
        </Header>
    </div>
</template>
<script>
import logo from '@/assets/zjhcsoft.png'
export default {
  name: 'topFixed',
  data () {
    return {
      logoUrl: logo
    }
  },
  methods: {
    load (name) {
      this.$router.replace({name: name})
    },
    openSine () {
      window.open('https://www.sineui.info', 'sineui')
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/styles/base.scss';
.ele-top-fixed{
  width: 100%;
  position: fixed;
  z-index: $landing-zindex;
  -webkit-app-region: drag;
  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
  user-select: none;
}
.ele-top-toolbar{
  width: 100%;
  height: $landing-top-toolbar-height;
  background-color: $ele-theme-color;
  text-align: center;
  font-size: 14px;
  line-height: $landing-top-toolbar-height;
}
.layout-logo{
  position: relative;
  float: left;
  top: 15px;
  left: 20px;
  img{
    position: absolute;
    width: 120px;
  }
}
.layout-nav {
  float: right;
  margin-right: 20px;
}
</style>
