import './index.css'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)
echart.setOption({
  grid: {
    top: '10%'
  },  
  title: {
    text: '完成数量（模）',
    textStyle: {
      color: 'rgba(135, 188, 222, 1)',
      fontWeight: 'normal',
      fontSize: 16
    }
  },
  xAxis: {
    type: 'category',
    data: ['19:00', "20:00", "21:00", "22:00", "23:00", "00:00"],
    axisTick: {
      show: false
    },
    axisLabel: {
      fontSize: 16,
      color: 'rgba(135, 188, 222, 1)',
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(0, 114, 187, 1)'
      }
    }
  },
  yAxis: {
    type: 'value',
    max: 36,
    min: 0,
    axisLabel: {
      color: 'rgba(135, 188, 222, 1)',
      fontSize: 16
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false
    },
    splitNumber: 6,
    interval: 6,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(0, 114, 187, 1)'
      }
    },
  },
  series: [
    {
      type: 'line',
      data: [10,10,12,20,18,26],
      symbol: 'circle',
      lineStyle: {
        color: 'rgba(0, 205, 239, 1)'
      },
      symbolSize: 5,
      itemStyle: {
        color: 'rgba(0, 205, 239, 1)'
      },
      label: {
        show: true,
        color: 'rgba(0, 205, 239, 1)',
        fontSize: 16
      },
      markLine: {
        lineStyle: {
          color: 'rgba(255, 178, 0, 1)'
        },
        symbol: 'none',
        label: {
          color: 'rgba(255, 178, 0, 1)',
          fontSize: 16
        },
        data: [
          {
            yAxis: 36,
            label: {
              formatter: () => '2釜',
            },
          },
          {
            yAxis: 36,
            label: {
              formatter: () => '1釜',
            },
            yAxis: 18
          }
        ]
      }
    }
  ]
})
