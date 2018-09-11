<template>
  <div>
    <Divider>新建 WebApp 工程</Divider>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
      <FormItem label="项目名称：" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入项目名，必须为英文且不带空格"></Input>
      </FormItem>
      <FormItem label="版本号：" prop="version">
          <Input v-model="formValidate.version" placeholder="请输入版本号，例如：1.0.0"></Input>
      </FormItem>
      <FormItem label="项目介绍：" prop="desc">
          <Input v-model="formValidate.desc" placeholder="请输入项目介绍"></Input>
      </FormItem>
      <FormItem label="Vue 版本号：" prop="vueVersion">
          <RadioGroup v-model="formValidate.vueVersion">
              <Radio label="2.5.17"></Radio>
          </RadioGroup>
      </FormItem>
      <FormItem label="CSS 预处理：" prop="css">
          <CheckboxGroup v-model="formValidate.css">
              <Checkbox label="Less"></Checkbox>
              <Checkbox label="Sass"></Checkbox>
          </CheckboxGroup>
      </FormItem>
      <FormItem prop="ajax">
          <div slot="label">
              <span>Ajax</span>
              <Tooltip content="基于 axios" class="bg-primary">
                  <Icon type="ios-help" size="14"></Icon>
              </Tooltip>
              <span>：</span>
          </div>
          <i-Switch v-model="formValidate.ajax">
              <Icon type="md-checkmark" slot="open"/>
              <Icon type="md-close" slot="close"/>
          </i-Switch>
      </FormItem>
      <FormItem label="Eslint：" prop="eslint">
          <i-Switch v-model="formValidate.eslint">
              <Icon type="md-checkmark" slot="open"/>
              <Icon type="md-close" slot="close"/>
          </i-Switch>
      </FormItem prop="store">
      <FormItem label="状态管理：">
          <CheckboxGroup v-model="formValidate.store">
              <Checkbox label="Vuex"></Checkbox>
              <Checkbox label="Bus.js"></Checkbox>
          </CheckboxGroup>
      </FormItem prop="name">
      <FormItem label="图表：" prop="chart">
          <CheckboxGroup v-model="formValidate.chart">
              <Checkbox label="Echarts"></Checkbox>
          </CheckboxGroup>
      </FormItem>
    </Form>
    <div class="add-footer">
      <Button type="primary" style="margin-right: 20px" @click="handleSubmit('formValidate')">创建工程</Button>
      <Button style="width: 80px" @click="handleReset('formValidate')">重置</Button>
    </div>
  </div>
</template>

<script>
import create from 'service/webapp/index.js'
export default {
  name: 'webapp',
  props: ['formValidate', 'log'],
  data () {
    return {
      ruleValidate: {}
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let remote = this.$electron.remote
          let dialog = remote.dialog
          let win = remote.BrowserWindow.getAllWindows()[0]
          const saveDirectory = dialog.showOpenDialog(win, {
            properties: ['openDirectory', 'createDirectory']
          })
          if (saveDirectory) {
            create({
              data: this.formValidate,
              directory: saveDirectory[0],
              log: this.log
            })
            this.$store.dispatch('UPDATE_STEP', 'Log')
          }
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.bg-primary {
  background-color: #2d8cf0;
  border-radius: 50%;
  color: #fff;
}
.add-footer {
  text-align: center;
}
</style>
