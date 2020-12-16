import './09.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)
const data = {
  x: ['00:00','01:00','02:00','03:00','04:00','05:00'],
  output: [15,29,18,29,21,37],
  currOuput: 21
}

echart.setOption({
  grid: {
    containLabel: true,
    top: 40,
    bottom: 10,
    left: '35'
  },
  title: {
    text: '产量(件)',
    textStyle: {
      color: 'rgba(195, 206, 244, 1)',
      fontSize: 16,
      fontWeight: 400
    },
  },
  xAxis: {
    data: data.x,
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'rgba(1, 174, 255, .3)'
      }
    },
    axisLabel: {
      color: 'rgba(195, 206, 244, 1)',
      fontSize: 16,
      padding: [8,0,0,0]
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    min: 0,
    max: 40,
    interval: 10,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(1, 174, 255, .3)'
      }
    },
    axisLabel: {
      color: 'rgba(195, 206, 244, 1)',
      fontSize: 16
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(1, 174, 255, .3)',
        type: 'dashed'
      }
    }
  },
  series: [
    {
      type: 'line',
      data: data.output,
      name: '当前产量',
      itemStyle: {
        color: 'rgba(254, 133, 14, 1)',
      },
      symbol: 'circle',
      symbolSize: 3,
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(254, 141, 30, 0)'
            },
            {
              offset: 1,
              color: 'rgba(254, 133, 14, 0.5)'
            }
          ],
        }
      }
    }
  ],
  legend: {
    data: [
      {
        name: '当前产量',
        icon: 'none'
      }
    ],
    right: '10%',
    textStyle: {
      rich: {
        a: {
          fontSize: 16,
          color: 'rgba(195, 206, 244, 1)',
        },
        curr: {
          fontSize: 16,
          color: 'rgba(0, 170, 255, 1)'
        }
      }
    },
    formatter: `{a|{name}：}{curr|${data.currOuput}/h}`,
  }
})