<template>
  <div>
    <div class="cordova-page">
      <Divider>新建 Hybird App 工程</Divider>
      <Form ref="formValidate" :label-width="120">
        <FormItem label="项目名称：">
            <Input v-model="formValidate.name" placeholder="请输入项目名，必须为英文且不带空格"></Input>
        </FormItem>
        <FormItem label="版本号：">
            <Input v-model="formValidate.version" placeholder="请输入版本号，例如：1.0.0"></Input>
        </FormItem>
        <FormItem label="项目介绍：">
            <Input v-model="formValidate.desc" placeholder="请输入项目介绍"></Input>
        </FormItem>
        <FormItem label="Vue 版本号：">
            <RadioGroup v-model="formValidate.vueVersion">
                <Radio label="2.5.17"></Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="CSS 预处理：">
            <CheckboxGroup v-model="formValidate.css">
                <Checkbox label="Less"></Checkbox>
                <Checkbox label="Sass"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem>
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
        <FormItem label="Eslint：">
            <i-Switch v-model="formValidate.eslint">
                <Icon type="md-checkmark" slot="open"/>
                <Icon type="md-close" slot="close"/>
            </i-Switch>
        </FormItem>
        <FormItem label="状态管理：">
            <CheckboxGroup v-model="formValidate.store">
                <Checkbox label="Vuex"></Checkbox>
                <Checkbox label="Bus.js"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="图表：">
            <CheckboxGroup v-model="formValidate.chart">
                <Checkbox label="Echarts"></Checkbox>
            </CheckboxGroup>
        </FormItem>
      </Form>
      <div class="cordova-footer">
        <Button type="primary" style="margin-right: 20px;">创建工程</Button>
        <Button style="width: 80px;">重置</Button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cordova',
    data () {
      return {
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
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.cordova-page{
  padding: 0 200px;
}
.bg-primary{
  background-color: #2d8cf0;
  border-radius: 50%;
  color: #fff;
}
.cordova-footer{
  text-align: center;
}
</style>
