import './11.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)
const data = {
  x: ['YKWQ20200908123456','YKWQ20200908123456', 'YKWQ20200908123456', 'YKWQ20200908123456', 'YKWQ20200908123456'],
  colors: ['rgba(223, 130, 38, 1)','rgba(210, 181, 41, 1)', 'rgba(33, 170, 170, 1)', 'rgba(81, 147, 244, 1)'],
  data: [
    [300000,200000,400000,200000,100000],
    [200000,200000,400000,100000,100000],
    [200000,200000,400000,300000,100000],
    [200000,200000,100000],
    [200000,200000,400000,100000]
  ]
}

function genSeries() {
  const res = []
  data.data.forEach((item1, index) => {
    const _data = []
    item1.forEach(value => {
      _data.push({
        value,
        itemStyle: {
          color: data.colors[index]
        }
      })
    })
    res.push({
      type: 'bar',
      barWidth: 20,
      data: _data,
      stack: data.x[0]
    })
  })
  return res
}

echart.setOption({
  grid: {
    bottom: 60
  },  
  title: {
    text: '生产入库金额柱状图',
    textStyle: {
      color: 'rgba(227, 233, 255, 1)',
      fontSize: 24,
      fontWeight: 400
    }
  },
  xAxis: {
    data: data.x,
    axisLabel: {
      width: 86,
      formatter(v) {
        const displayNum = 9;
        return `${v.slice(0,9)}\n${v.slice(9)}`
      },
      fontSize: 16,
      color: 'rgba(195, 206, 244, 1)',
      lineHeight: 20,
      padding: [10,0,0,0],
      fontWeight: 300
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(38, 57, 163, .3)'
      }
    },
  },
  yAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(38, 57, 163, .3)'
      }
    },
    axisLabel: {
      color: 'rgba(195, 206, 244, 1)',
      fontSize: 16
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(38, 57, 163, .3)'
      }
    }
  },
  series: genSeries(),
  tooltip: {
    trigger: 'item',
    formatter() {
      console.log(arguments)
    }
  }
})