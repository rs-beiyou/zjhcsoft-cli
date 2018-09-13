<template>
    <div class="standard-page">
      <Anchor :affix="false" class="anchor" show-ink container=".standard-page">
          <AnchorLink href="#standard-module" title="前端业务模块">
            <AnchorLink href="#standard-cms" title="中后台管理系统" />
            <AnchorLink href="#standard-website" title="前台展示网站" />
            <AnchorLink href="#standard-hybirdapp" title="Hybird App" />
            <AnchorLink href="#standard-wechat" title="微信公众号开发" />
          </AnchorLink>
          <AnchorLink href="#standard-code" title="前端代码规范">
            <AnchorLink href="#standard-webpack" title="Webpack规范" />
            <AnchorLink href="#standard-es6" title="ES6代码规范" />
          </AnchorLink>
          <AnchorLink href="#standard-last" title="写在最后"></AnchorLink>
      </Anchor>
      <div class="standard-content">
        <div id="standard-module">
          <h1>前端业务模块</h1>
          <p>技术服务于业务，根据不同的业务去选择不同的技术方案。</p>
          <div class="standard-chart" id="module-chart"></div>
          <p>
            以上是我们部门的前端业务分布图，主要为四大块：
            <ul>
              <li>PC端：中后台管理系统（CMS）</li>
              <li>PC端：前台展示网站</li>
              <li>移动端：Hybird App</li>
              <li>微信端：微信公众号开发</li>
            </ul>
          </p>
          <h3 class="sub-header" id="standard-cms">中后台管理系统</h3>
          <p>
            对于CMS系统，是PC端最常见的系统类型，架构相对统一稳定，功能相似度很高，多为数据展示、表单处理。
          </p>
          <div class="standard-chart-l" id="cms-chart"></div>
          <p>
            对于该业务类型，目前存在两种方案：
            <ul>
              <li>SineUI（目前）：前后端未分离开发方案</li>
              <li>Vue（后续）：前后端分离开发方案</li>
            </ul>
          </p>
          <h3 class="sub-header" id="standard-website">前台展示网站</h3>
          <p>
            只要做 SEO 的产品就要做服务端渲染,如果你对 SEO 需求有，但要求并不高，仅部分页面、可以曲线救国。
            <ul>
              <li>Java-Template（目前）：服务端模板解析方案</li>
              <li>Vue-SSR（后续）：Vue 的SSR方案</li>
            </ul>
          </p>
          <p>
            Vue 的SSR方案，前后端同构方案，一套代码在浏览器端和 node 端都可以运行，
            从而可以先在 node 端请求数据渲染模板，然后将渲染结果返回给浏览器最终呈现。
          </p>
          <h3 class="sub-header" id="standard-hybirdapp">Hybird App</h3>
          <p>
            混合开发，JS + Native 两者相互调用为主，从开发层面实现“一次开发，多处运行”的机制，成为真正适合跨平台的开发。
          </p>
          <div style="text-align:center;">
            <img :src="hybirdapp" alt="hybirdapp" width="400px">
          </div>
          <p>
            <ul>
              <li>移动终端 web 壳：主要功能是定义 Android / ios 应用程序与网页之间的接口，允许网页中的 JavaScript 调用 Android / ios 应用程序，
                提供基于 web 的应用程序的 Android / ios API，将Web嵌入到 Android / ios 应用程序中。目前使用 Cordova。</li>
              <li>前端交互 js：包括基础功能js和业务功能 js。</li>
              <li>前端适配器：适配不同的终端：Pad、Android、ios。</li>
            </ul>
          </p>
          <p>
            目前前端交互部分使用 Vue 开发 SPA 应用，使用 Cordova 打包发布。
          </p>
          <h3 class="sub-header" id="standard-wechat">微信公众号开发</h3>
          <p>
            对于微信公众号开发，与 Hybird App 不同之处在于“壳”不同，微信的“壳”是微信 SDK。
          </p>
        </div>
        <div id="standard-code">
          <h1 class="header">前端代码规范</h1>
          <h3 class="sub-header" id="standard-webpack">Webpack 规范</h3>
          <p>
            Webpack 是一种模块化开发的方案。
          </p>
          <div style="text-align:center;">
            <img :src="webpack" alt="webpack" width="600px">
          </div>
          <h3 class="sub-header" id="standard-es6">ES6 代码规范</h3>
          <p>
            ECMAScript 6（简称ES6）是于2015年6月正式发布的JavaScript语言的标准，正式名为ECMAScript 2015（ES2015）。
          </p>
          <p>
            添加了很多原生方法，功能更为强大，代码结构更为友好，但目前很多浏览器并不兼容或不完全兼容，
            ES5 可以兼容到 IE9，依赖 Babel 可以将 ES6 --> ES5，今天就使用未来版本的 JavaScript（ES6，ES7...）。
          </p>
        </div>
        <div id="standard-last">
          <h1 class="header">写在最后</h1>
          <p>
            按部就班，一步步完成前端架构的搭建，不做暂时不能掌控的架构级更新替换。
          </p>
          <p>
            针对 性能优化、SEO、通信协议 等具体问题。所以，前期可以不用过多考虑。
          </p>
          <p>
            我们只要知道：这个问题我们是可以解决的，但是现在可以先不去考虑，太过于“完美主义”，以至于想法不错，
            但动起手来做了几天就不做了，完美主义害死人。
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import hybirdapp from '@/assets/hybirdapp.png'
import webpack from '@/assets/webpack.jpeg'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/treemap'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  name: 'standard',
  data () {
    return {
      hybirdapp: hybirdapp,
      webpack: webpack
    }
  },
  mounted () {
    this.moduleChart()
    this.cmsChart()
  },
  methods: {
    moduleChart () {
      let myChart = echarts.init(document.getElementById('module-chart'))
      myChart.setOption({
        backgroundColor: '#515a6e',

        title: {
          text: '业务类型统计图',
          left: 'center',
          top: 15,
          textStyle: {
            color: '#ccc',
            fontWeight: 300,
            fontSize: 16
          }
        },

        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
          show: false,
          min: 1,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '前端业务类型',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 6, name: '微信公众号' },
              { value: 8, name: 'Hybird App' },
              { value: 10, name: '中后台管理系统' },
              { value: 4, name: '前台展示网站' }
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  color: 'rgba(255, 255, 255, 0.5)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.5)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      })
    },
    cmsChart () {
      let myChart = echarts.init(document.getElementById('cms-chart'))
      myChart.setOption({
        series: [
          {
            type: 'treemap',
            width: '80%',
            height: '80%',
            roam: 'move',
            data: [
              {
                name: '用户模块', // First tree
                value: 10,
                children: [
                  {
                    name: '登陆', // First leaf of first tree
                    value: 4
                  },
                  {
                    name: '用户信息', // Second leaf of first tree
                    value: 6
                  }
                ]
              },
              {
                name: '资源模块', // Second tree
                value: 10,
                children: [
                  {
                    name: '资源管理', // Son of first tree
                    value: 4
                  }
                ]
              },
              {
                name: '业务模块', // Second tree
                value: 20,
                children: [
                  {
                    name: '新增', // Son of first tree
                    value: 4
                  },
                  {
                    name: '删除', // Son of first tree
                    value: 4
                  },
                  {
                    name: '修改', // Son of first tree
                    value: 4
                  },
                  {
                    name: '查看', // Son of first tree
                    value: 4
                  }
                ]
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.standard-page {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  padding: 20px;
}
.anchor {
  position: fixed;
  font-size: 13px;
  user-select: none;
}
.standard-content {
  position: absolute;
  top: 20px;
  left: 200px;
  right: 0;
  padding: 0 20px;
  .standard-chart {
    margin: 0 auto;
    width: 485px;
    height: 300px;
  }
  .standard-chart-l {
    margin: 0 auto;
    width: 606px;
    height: 375px;
  }
  p {
    font-size: 14px;
    margin: 1em 0;
  }
  ul {
    padding-left: 30px;
    margin: 0.5em 0 1em;
  }
  li {
    margin: 0.5em 0;
    font-size: 0.9em;
  }
}
.header {
  margin: 2em 0 0.25em;
}
.sub-header {
  margin: 1em 0 0.25em;
}
</style>
