import './06.scss'

const echarts = require('echarts')
const app = document.getElementById('app');
const echart = echarts.init(app)
const data = {
  x: ['大消光', '半消光', '色母', '油'],
  mon: [81000,180000,90000,170000],
  store: [190000,85000,150000,82000]
}

echart.setOption({
  title: {
    text: '原材料库存金额柱状图',
    textStyle: {
      color: 'rgba(227, 233, 255, 1)',
      fontSize: 16,
      fontWeight: 500
    }
  },
  xAxis: {
    data: data.x,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(27, 50, 135, 1)'
      }
    },
    axisLabel: {
      color: 'rgba(227, 233, 255, 1)',
      padding: [10,0,0,0],
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    max: 200000,
    interval: 40000,
    min: 0,
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(27, 50, 135, 1)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(38, 62, 153, 1)'
      }
    },
    axisLabel: {
      color: 'rgba(227, 233, 255, 1)',
      padding: [0,10,0,0]
    }
  },
  series: [
    {
      type: 'bar',
      data: data.mon,
      barWidth: 25,
      name: '金额: 元（RMB）',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          1,0,0,0,
          [
            {
              offset: 0,
              color: '#405CFD'
            },
            {
              offset: 1,
              color: '#16B1FF'
            }
          ]
        )
      }
    },
    {
      type: 'bar',
      data: data.store,
      name: '库存（吨）',
      barWidth: 25,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(
          1,0,0,0,
          [
            {
              offset: 0,
              color: '#FF7200'
            },
            {
              offset: 1,
              color: '#FFB034'
            }
          ]
        )
      },
    }
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      shadowStyle: {
        width: 50
      }
    },
    formatter: `
      <div style='width:157px;line-height:1;color:rgba(7, 21, 70, 1);font-size:12px;'>
        <div style='margin-bottom:15px'>{b}</div>
        <div style='display:flex;align-items:center;margin-bottom:9px'>
          <span style='height:6px;width:6px;border-radius:3px;background:rgba(23, 175, 255, 1);margin-right:4px;'></span>
          <span>{a}</span>
          <span style='flex:1;text-align:right;'>{c}</span>
        </div>
        <div style='display:flex;align-items:center;'>
          <span style='height:6px;width:6px;border-radius:3px;background:rgba(255, 132, 0, 1);margin-right:4px;'></span>
          <span>{a1}</span>
          <span style='flex:1;text-align:right;'>{c1}</span>
        </div>
      </div>
    `,
    textStyle: {
      rich: {
        a: {
          fontSize: 200
        }
      }
    }
  },
  legend: {
    itemHeight: 4,
    itemWidth: 16,
    textStyle: {
      color: 'rgba(227, 233, 255, 1)',
      padding: [0,0,0,8],
      verticalAlign: 'top'
    },
    right: '7%',
    itemGap: 24
  }
})