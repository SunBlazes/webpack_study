import './07.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)

echart.setOption({
  title: {
    text: '75%',
    textStyle: {
      color: 'rgba(248, 162, 1, 1)',
      fontSize: 18,
      fontWeight: 'bold'
    },
    top: 'middle',
    left: '13%'
  },
  series: [
    {
      type: 'pie',
      labelLine: {
        show: false
      },
      name: '当前阶段',
      radius: ['80%', '100%'],
      center: ['20%', 'center'],
      data: [
        {
          value: 70,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [{
                color: '#C9FF0C',
                offset: 0
              }, {
                color: '#FF9600',
                offset: 0.99
              }]
            }
          }
        },
        {
          value: 30,
          itemStyle: {
            color: 'rgba(22, 56, 138, .7)'
          }
        }
      ]
    }
  ],
  legend: {
    right: '20%',
    orient: 'vertical',
    formatter: '{c|}{a|当前阶段} {b|收料阶段}',
    textStyle: {
      rich: {
        a: {
          color: '#fff',
          fontSize: 14,
          padding: [0,9,0,4]
        },
        b: {
          color: 'rgba(51, 218, 251, 1)',
          fontSize: 14
        },
        c: {
          width: 8,
          height: 8,
          backgroundColor: 'rgba(47, 204, 236, 1)',
          borderRadius: 4,
          opacity: 0.73,
          verticalAlign: 'top',
          borderWidth: 3,
          borderColor: 'rgba(47, 204, 236, .4)'
        }
      }
    },
    data: [{
      name: '当前阶段',
      icon: 'none'
    }],
    top: 'middle'
  }
})