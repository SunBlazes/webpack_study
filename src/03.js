import './index.css'
import './03.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)

echart.setOption({
  color: ['rgba(0, 242, 255, 1)'],
  grid: {
    top: '10%',
    containLabel: true
  },
  title: {
    text: '库存(吨)',
    textStyle: {
      fontSize: 16,
      color: 'rgba(154, 213, 248, 1)',
      fontWeight: 'normal'
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {   
      type: 'shadow'
    },
    backgroundColor: 'rgba(0,0,0,.7)',
    borderWidth: 0,
    formatter: `
      <div class='chart-tooltip'><span></span><div><div>{b}</div><div><span>{a}</span><span>{c}</span></div><div><span>{a2}</span><span>{c2}</span></div><div><span>{a1}</span><span>{c1}</span></div></div></div>
    `,
    padding: 10
  },
  xAxis: {
    type: 'category',
    data: ['石膏','淤沙','矿粉','砂石','水泥'],
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(0, 252, 255, 1)'
      }
    },
    axisLabel: {
      color: 'rgba(154, 213, 248, 1)',
      fontSize: 16
    },
    axisTick: {
      show: false
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 90,
    interval: 20,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(0, 252, 255, 1)'
      }
    },
    axisLabel: {
      color: 'rgba(154, 213, 248, 1)',
      fontSize: 16,
      formatter(value) {
        if (value<=80) return value;
      }
    },
    splitLine: {
      show: false
    },
  },
  legend: {
    show: true,
    type: "plain",
    data: [
      {
        name: '库存量',
        icon: 'circle',
      },
      '库存最高限量',
      '安全库存最低值'
    ],
    itemHeight: 8,
    itemGap: 18,
    right: 0,
    textStyle: {
      fontSize: 14,
      color: 'rgba(154, 213, 248, 1)'
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: 20,
      name: '库存量',
      data: [18,70,63,80,70],
      itemStyle: {
        color(arg) {
          console.log(arg)
          return arg.dataIndex === 0 ? 'rgba(255, 96, 16, 1)' : 'rgba(0, 242, 255, 1)'
        },
        borderRadius: 2
      }
    }, 
    {
      type: 'line',
      data: [23, 15, 30, 20, 40],
      name: '安全库存最低值',
      itemStyle: {
        color: 'rgba(24, 214, 56, 1)'
      },
      symbol: 'circle',
      symbolSize: 5
    },
    {
      type: 'line',
      data: [58, 79, 50, 90, 60],
      name: '库存最高限量',
      itemStyle: {
        color: 'rgba(255, 138, 0, 1)'
      },
      symbol: 'circle',
      symbolSize: 5
    }
  ]
})