import './05.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)
const data = {
  used: 80,
  unused: 20,
  total: 100
}
const toname = {
  used: '占用库存数',
  unused: '未占用库存数',
  total: '当前库位总数'
}

function percent(num) {
  const numStr = num + "";
  const numStrArr = numStr.split('.');
  let tail = '00'; 
  if (numStrArr.length > 1) {
    tail = numStrArr[1].padEnd(2, '0');
  }
  return numStrArr[0] + '.' + tail.slice(0,2) + '%';
}

echart.setOption({
  tooltip: {
    trigger: 'item',
    formatter(arg) {
      const per = percent(arg.percent);
      const color = arg.name === 'used' ? 'rgba(255, 132, 0, 1)' : 'rgba(22, 177, 255, 1)'
      return `
        <div style='display:flex;align-items:center;font-size:12px;color:rgba(7, 21, 70, 1);line-height:1;justify-content:space-between;width:126px;'>
          <span style='width:6px;height:6px;border-radius:50%;background-color:${color}'></span>
          <span>${toname[arg.name]}</span>
          <span>${per}</span>
        </div>
      `
    },
    padding: [8, 10]
  },
  title: {
    text: '80%',
    textStyle: {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: 26
    },
    left: '12%',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      center: ['20%','center'],
      radius: ['70%', '100%'],
      data: [
        {
          value: data.total,
          itemStyle: {
            color: 'rgba(34, 66, 133, 1)'
          },
          name: 'total'
        }
      ],
      emphasis: {
        scale: false
      },
      labelLine: {
        show: false
      },
      label: {
        show: false
      },
    },
    {
      type: 'pie',
      center: ['20%','center'],
      radius: ['70%', '100%'],
      data: [
        {
          value: data.unused,
          name: 'unused',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,0,1,0,
              [
                {
                  offset: 0, color: '#405DFD'
                },
                {
                  offset: 1, color: '#16B0FE'
                }
              ]
            )
          }
        },
        {
          value: data.used,
          name: 'used',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,0,1,1,
              [
                {
                  offset: 0, color: '#FF7200'
                },
                {
                  offset: 1, color: '#FFB034'
                }
              ]
            )
          }
        }
      ],
      emphasis: {
        scale: false
      },
      itemStyle: {
        borderWidth: 5,
        borderColor: '#000'
      },
      labelLine: {
        show: false
      },
      label: {
        show: false
      },
    }
  ],
  legend: { 
    formatter(arg) {
      return `${toname[arg]} {a|${data[arg]}}`
    },
    textStyle: {
      color: '#fff',
      width: 120,
      rich: {
        a: {
          padding:[0,0,0,5],
          align: 'right'
        }
      }
    },
    orient: 'vertical',
    itemHeight: 4,
    itemWidth: 16,
    top: 'middle',
    right: '10%',
    itemGap: 20,
  }
})