<template>
  <div>
    <div class="webapp-page">
      <component :is="step.step" :formValidate="formValidate" :log="log"></component>
    </div>
  </div>
</template>

<script>
import Add from '@/pages/webapp/add'
import Log from '@/pages/webapp/log'
import Doc from '@/pages/webapp/doc'
export default {
  name: 'webapp',
  components: {
    Add,
    Log,
    Doc
  },
  data () {
    return {
      step: this.$store.state.step,
      formValidate: {
        name: '',
        version: '1.0.0',
        desc: '',
        vueVersion: '2.5.17',
        css: [],
        ajax: true,
        eslint: true,
        chart: [],
        store: []
      },
      log: {
        package: 1,
        babel: 1,
        webpackBase: 1,
        webpackDev: 1,
        webpackProd: 1,
        router: 1,
        app: 1,
        template: 1,
        indexHtml: 1,
        indexVue: 1,
        main: 1,
        config: 1,
        util: 1,
        bus: 1,
        eslintRc: 1,
        eslintIgnore: 1,
        gitignore: 1
      }
    }
  },
  destroyed () {
    this.$store.dispatch('UPDATE_STEP', 'Add')
  }
}
</script>

<style scoped lang="scss">
.webapp-page {
  padding: 0 200px;
}
</style>
