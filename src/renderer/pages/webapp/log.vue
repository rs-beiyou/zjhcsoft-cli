<template>
  <div>
    <Log :content="msg.app" :state="log.app"></Log>
    <Log :content="msg.babel" :state="log.babel"></Log>
    <Log :content="msg.bus" :state="log.bus"></Log>
    <Log :content="msg.config" :state="log.config"></Log>
    <Log :content="msg.eslintRc" :state="log.eslintRc"></Log>
    <Log :content="msg.eslintIgnore" :state="log.eslintIgnore"></Log>
    <Log :content="msg.gitignore" :state="log.gitignore"></Log>
    <Log :content="msg.indexHtml" :state="log.indexHtml"></Log>
    <Log :content="msg.indexVue" :state="log.indexVue"></Log>
    <Log :content="msg.main" :state="log.main"></Log>
    <Log :content="msg.package" :state="log.package"></Log>
    <Log :content="msg.router" :state="log.router"></Log>
    <Log :content="msg.template" :state="log.template"></Log>
    <Log :content="msg.webpackBase" :state="log.webpackBase"></Log>
    <Log :content="msg.webpackDev" :state="log.webpackDev"></Log>
    <Log :content="msg.webpackProd" :state="log.webpackProd"></Log>
  </div>
</template>

<script>
import Log from '@/components/log'
export default {
  name: 'webapplog',
  components: {
    Log
  },
  props: ['formValidate', 'log'],
  computed: {
    msg () {
      let msg = {}
      for (let [key, value] of Object.entries(this.log)) {
        Object.assign(msg, {
          [key]: value === 1 ? '创建中...' : value === 2 ? '创建完成' : '创建失败'
        })
      }
      return msg
    }
  }
}
</script>
