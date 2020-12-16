import './08.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)

echart.setOption({
  title: {
    text: '{a|占用率}\n{b|80%}',
    textStyle: {
      rich: {
        a: {
          color: '#fff',
          fontSize: 12,
          align: 'center',
          padding: [0,0,8,0],
        },
        b: {
          color: '#fff',
          fontSize: 24,
          align: 'center',
        }
      }
    },
    top: 'middle',
    left: 'center'
  },
  series: [
    {
      type: 'gauge',
      radius: '80%',
      startAngle: 0,
      endAngle: 360,
      splitNumber: 70,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        length: 0.7,
        lineStyle: {
          color: 'rgba(17, 176, 255, 1)'
        }
      },
    },
    {
      type: 'pie',
      radius: ['60%', '85%'],
      data: [
        {
          value: 80,
          itemStyle: {
            color: 'rgba(229, 119, 12, 1)'
          },
          name: '占用储位',
          label: {
            color: 'rgba(229, 119, 12, 1)'
          }
        },
        {
          value: 20,
          itemStyle: {
            color: 'rgba(22, 130, 251, 1)'
          },
          name: '未占用储位',
          label: {
            color: 'rgba(22, 130, 251, 1)'
          }
        }
      ],
      itemStyle: {
        borderWidth: 3,
        borderColor: '#000'
      },
      emphasis: {
        scale: false
      },
      labelLine: {
        length: 10,
        length2: 36,
        lineStyle: {
          type: 'dotted'
        }
      },
      markPoint: {
        symbol: 'pin'
      },
      label: {
        position: 'outside',
        show: true,
        formatter(arg) {
          return `{name|${arg.name}}{value|${arg.value}}`
        },
        rich: {
          name: {
            fontSize: 16,
            padding: [0,5,0,0],
          },
          value: {
            fontSize: 16,
          }
        },
      },
    },
    {
      type: 'pie',
      radius: ['60%', '70%'],
      data: [
        {
          value: 100,
          itemStyle: {
            color: 'rgba(0,0,0,.1)'
          }
        }
      ]
    },
    {
      type: 'gauge',
      radius: '123%',
      startAngle: 0,
      endAngle: 360,
      splitNumber: 70,
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        length: 0.7,
        lineStyle: {
          color: 'rgba(17, 176, 255, 1)'
        }
      }
    }
  ]
})