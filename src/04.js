import './04.scss'

const echarts = require('echarts');
const app = document.getElementById('app');
const echart = echarts.init(app);
const data = {
  used: 1239,
  unused: 239
}
const toname = {
  used: '已用储位',
  unused: '可用储位'
}

echart.setOption({
  color: ['rgba(154, 213, 248, 1)'],
  title: {
    text: '{a|已用}\n{b|80}{c|%}',
    textStyle: {
      color: 'rgba(0, 218, 252, 1)',
      rich: {
        a: {
         color: 'rgba(154, 213, 248, 1)',
         align: 'center',
         fontSize: 16,
         padding: [0,0,8,0]
        },
        b: {
          fontSize: 30,
          align: 'center'
        },
        c: {
          align: 'center',
          fontSize: 16,
        }
      }
    },
    left: 115,
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      radius: ['60%', '100%'],
      center: [140,'center'],
      data: [
        {
          value: data.unused,
          itemStyle: {
            color: 'rgba(0, 80, 93, 1)'
          },
          name: 'unused'
        },
        {
          value: data.used,
          itemStyle: {
            color: 'rgba(0, 252, 255, 1)'
          },
          name: 'used'
        }
      ],
      labelLine: {
        show: false
      },
      emphasis: {
        scale: false
      },
      label: {
        show: false
      }
    }
  ],
  legend: {
    selectedMode: false,
    orient: 'vertical',
    right: 70,
    itemHeight: 9,
    icon: 'circle',
    top: 'middle',
    data: [
      {
        name: 'used',
      }, 
      {
        name: 'unused',
      }
    ],
    textStyle: {
      color: 'rgba(154, 213, 248, 1)',
      borderWidth: 11,
      rich: {
        name: {
          padding: [0, 0, 0, 0],
          fontSize: 16,
        },
        num: {
          fontSize: 24,
          fontWeight: 500,
          padding: [0, 0, -50, 0],
        },
        unit: {
          fontSize: 16,
          padding: [0, 0, -50, 8],
        }
      }
    },
    formatter(name) {
      return `{name|${toname[name]}}\n{num|${data[name]}}{unit|个}`
    }
  }
})