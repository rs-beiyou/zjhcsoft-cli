<template>
    <div>
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img :src="logoUrl" alt="zjhcsoft-cli">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="2" @click.native="openSine">
                          <Icon type="ios-navigate"></Icon>
                          SineUI
                        </MenuItem>
                        <MenuItem name="3">
                            <Dropdown>
                              <Icon type="ios-keypad"></Icon>
                              脚手架
                              <Icon type="ios-arrow-down"></Icon>
                              <DropdownMenu slot="list">
                                <DropdownItem>Web App</DropdownItem>
                                <DropdownItem>Cordova Project</DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-analytics"></Icon>
                            前端规范
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content>
              <SystemInformation></SystemInformation>
            </Content>
            <Footer class="layout-footer-center">&copy; zjhcsoft-cli</Footer>
        </Layout>
    </div>
</template>
<script>
import logo from '@/assets/zjhcsoft-cli.png'
import SystemInformation from '@/components/SystemInformation'
export default {
  name: 'landingpage',
  components: {
    SystemInformation
  },
  data () {
    return {
      logoUrl: logo
    }
  },
  methods: {
    openSine () {
      window.open('https://www.sineui.info', 'sineui')
    }
  }
}
</script>
<style scoped lang="scss">
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-logo{
  position: relative;
  float: left;
  top: 20px;
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
.layout-footer-center {
  text-align: center;
}
</style>
