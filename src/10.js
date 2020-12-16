import './10.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)
const data = {
  mon: [48000000,37000000,48000000,37000000,48000000,37000000,48000000,37000000,48000000,37000000],
  sto: [25,42,25,42,25,42,25,42,25,42],
  x: [
    'B06A3.5 600*600*200',
    'B06A3.6 600*600*200',
    'B06A3.5 600*600*200',
    'B06A3.6 600*600*200',
    'B06A3.5 600*600*200',
    'B06A3.6 600*600*200',
    'B06A3.5 600*600*200',
    'B06A3.6 600*600*200',
    'B06A3.5 600*600*200',
    'B06A3.6 600*600*200',
  ]
}

echart.setOption({
  grid: {
    left: 100,
    right: 100,
    top: 100
  },
  title: {
    text: '成品库存金额柱状图',
    textStyle: {
      color: 'rgba(227, 233, 255, 1)',
      fontSize: 24,
      fontWeight: 400
    },
  },
  yAxis: [
    {
      id: 'mon',
      type: 'value',
      name: '金额(元)',
      position: 'left',
      interval: 10000000,
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(38, 57, 163, .3)'
        }
      },
      axisLabel: {
        color: 'rgba(195, 206, 244, 1)',
        fontSize: 16,
        // 去除默认千位有逗号
        formatter(v) {
          return v
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(38, 57, 163, .4)'
        }
      },
      nameTextStyle: {
        padding: [0,0,10,-105],
        fontSize: 16,
        color: 'rgba(195, 206, 244, 1)'
      },
    },
    {
      type: 'value',
      position: 'right',
      id: 'sto',
      interval: 10,
      name: '库存(立方米)',
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(38, 57, 163, .3)'
        }
      },
      axisLabel: {
        color: 'rgba(195, 206, 244, 1)',
        fontSize: 16,
        padding: [0,0,0,5],
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(38, 57, 163, .4)'
        }
      },
      nameTextStyle: {
        padding: [0,0,10,110],
        fontSize: 16,
        color: 'rgba(195, 206, 244, 1)'
      },
    }
  ],
  xAxis: {
    type: 'category',
    axisLabel: {
      formatter(v) {
        const arr = v.split(' ');
        return `{a|${arr[0]}}\n{b|${arr[1]}}`
      },
      rich: {
        a: {
          color: 'rgba(195, 206, 244, 1)',
          padding: [12,0,0,0],
          fontSize: 16
        },
        b: {
          color: 'rgba(195, 206, 244, .5)',
          padding: [8,0,0,0],
          fontSize: 12
        }
      },
      interval: 0
    },
    data: data.x,
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(38, 57, 163, .3)'
      }
    },
  },
  series: [
    {
      type: 'bar',
      data: data.mon,
      barWidth: 20,
      name: '金额',
      yAxisId: 'mon',
      itemStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              color: 'rgba(254, 243, 133, 1)',
              offset: 0
            },
            {
              color: 'rgba(255, 102, 0, 1)',
              offset: 1
            }
          ]
        }
      }
    },
    {
      type: 'bar',
      data: data.sto,
      barWidth: 20,
      name: '库存',
      yAxisId: 'sto',
      itemStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              color: 'rgba(0, 144, 255, 1)',
              offset: 0
            },
            {
              color: 'rgba(0, 246, 255, 1)',
              offset: 1
            }
          ]
        }
      }
    }
  ],
  legend: {
    data: [
      {
        name: '金额',
        icon: 'circle'
      },
      {
        name: '库存',
        icon: 'circle'
      }
    ],
    itemHeight: 9,
    textStyle: {
      color: 'rgba(227, 233, 255, 1)',
      fontSize: 16,
    },
    right: 31,
    itemGap: 30
  }
})