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
      </Anchor>
      <div class="standard-content">
        <div id="standard-module">
          <h1>前端业务模块</h1>
          <p>技术服务于业务，根据不同的业务去选择不同的技术方案。</p>
          <div class="standard-chart" id="module-chart-now"></div>
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
          <h3 class="sub-header" id="standard-website">前台展示网站</h3>
          <h3 class="sub-header" id="standard-hybirdapp">Hybird App</h3>
          <h3 class="sub-header" id="standard-wechat">微信公众号开发</h3>
        </div>
        <div id="standard-code">
          <h1 class="header">前端代码规范</h1>
          <h3 class="sub-header" id="standard-webpack">前端代码规范</h3>
          <h3 class="sub-header" id="standard-es6">前端代码规范</h3>
        </div>
      </div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  name: 'standard',
  mounted () {
    let myChart = echarts.init(document.getElementById('module-chart-now'))
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
            { value: 8, name: 'Webapp' },
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
  .standard-chart{
    margin: 0 auto;
    width: 485px;
    height: 300px;
  }
  p{
    font-size: 14px;
    margin: 1em 0;
  }
  ul{
    padding-left: 30px;
    margin: 0.5em 0 1em;
  }
  li{
    margin: .5em 0;
    font-size: .875em;
  }
}
.header{
  margin: 2em 0 .25em;
}
.sub-header{
  margin: 1em 0 .25em;
}
</style>
