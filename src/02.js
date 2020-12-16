import './index.css'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)

echart.setOption({
  color: ['rgba(0, 218, 252, 1)','rgba(246, 255, 0, 1)','rgba(90, 216, 166, 1)','rgba(126, 171, 255, 1)'],
  title: {
    text: '{a|18}\n{b|总数量(釜)}',
    textStyle: {
      rich: {
        a: {
          color: 'rgba(0, 239, 249, 1)',
          fontSize: 32,
          align: 'center',
          padding: [0,0,5,0]
        },
        b: {
          color: 'rgba(154, 213, 248, 1)',
          fontSize: 16,
          align: 'center'
        }
      }
    },
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '100%'],
      data: [{
        value: 100,
        itemStyle: {
          color: 'rgba(0, 218, 252, .1)'
        }
      }],
      hoverAnimation: false
    },
    {
      type: 'pie',
      radius: ['80%', '90%'],
      startAngle: -90,
      data: [
        {
          value: 50,
          itemStyle: {
            color: 'rgba(9, 80, 113, 1)'
          }
        },
        {
          value: 50,
          itemStyle: {
            color: 'rgba(0, 218, 252, 1)'
          }
        }
      ],
      labelLine: {
        show: false
      },
      hoverAnimation: false
    },
    {
      type: 'pie',
      radius: ['80%', '85%'],
      data: [{
        value: 100,
        itemStyle: {
          color: 'rgba(0, 218, 252, .1)'
        }
      }],
      hoverAnimation: false
    },
    {
      type: 'gauge',
      splitNumber: 40,
      startAngle: 0,
      endAngle: 360,
      radius: '105%',
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      labelLine: {
        show: false
      },
      z: 3,
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 1)',
          width: 1
        }
      },
      itemStyle: {
        borderWidth: 0
      },
      detail: {
        show: false
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    {
      type: 'pie',
      data: [35,35,20,10],
      radius: ['50%','75%'],
      label: {
        borderWidth: 2
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        normal: {
          borderWidth: 3,
          borderColor: '#fff'
        }
      }
    },
    {
      type: 'pie',
      data: [{
        value: 100,
        itemStyle: {
          color: 'rgba(0,0,0,.1)'
        }
      }],
      radius: ['50%','58%']
    },
    {
      type: 'gauge',
      startAngle: 0,
      endAngle: 360,
      splitLine: {
        length: 0.8,
        lineStyle: {
          color: 'rgba(0, 218, 252, 1)'
        }
      },
      radius: '60%',
      splitNumber: 70,
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      }
    }
  ]
})