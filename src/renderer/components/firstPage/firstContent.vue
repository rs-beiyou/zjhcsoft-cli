<template>
    <div class="ele-page">
        <Layout class="layout">
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
                                <MenuItem name="2-1" @click.native="load('webapp')">Web App</MenuItem>
                                <MenuItem name="2-2" @click.native="load('cordova')">Cordova Project</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem name="3" @click.native="load('resource')">
                            <Icon type="ios-analytics"></Icon>
                            前端资源
                        </MenuItem>
                        <MenuItem name="4" @click.native="openSine">
                          <Icon type="ios-book" />
                          SineUI
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <router-view class="ele-content"></router-view>
        </Layout>
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
.ele-page{
  position: absolute;
  top: $landing-top-toolbar-height;
  bottom: $landing-footer-height;
  width: 100%;
  .ele-content{
    padding: 10px 20px;
  }
}
.layout {
  position: absolute;
  background-color: #fff;
  top: 0;
  bottom: 0;
  width: 100%;
}
.layout-header{
  -webkit-app-region: drag;
  user-select: none;
  box-shadow: 0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28);
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
