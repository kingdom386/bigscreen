<template>
  <div class="chart" style="width: 100%;height: 100%"></div>
</template>

<script>
import { debounce } from '@/utils/debunce';
import echarts from 'echarts';
require('echarts/theme/macarons');

export default {
  name: 'fld',
  data () {
    return {
      chart: null,
      eOptions: {
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '10%',
          bottom: '15%',
          backgroundColor: 'rgba(0,0,0,0)'
        },
        xAxis: [
          {
            type: 'category',
            data: ['新注册用户组','流失用户组','未激活用户组'],
            axisLabel: {
              color: 'rgba(47,69,84,0)'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '万元',
            // interval: 50,
            axisLabel: {
              color: '#2d343d',
              formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: '#2d343d'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#2d343d'
              }
            },
            splitArea: {
              show: false
            }
          },
          {
            type: 'value',
            name: '工时',
            min: 0,
            max: 8,
            position: 'right',
            axisLabel: {
              color: '#2d343d',
              formatter: '{value}'
            },
            axisLine: {
              lineStyle: {
                color: '#2d343d'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            splitArea: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '万元',
            type: 'bar',
            barWidth: '30%',
            itemStyle: {
              normal: {
                barBorderRadius: [5,5,0,0],
                color: params => {
                  const colorList = ['#f8ba4d', '#4be2ab', '#ff7575'];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: [200, 210, 220]
          },
          {
            name: '工时',
            type: 'line',
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: '#f0f0f0'
              }
            },
            data: [200, 210, 220]
          },{
            type: 'line',
            yAxisIndex: 1,
            markLine: {
              lineStyle: {
                color: '#f00',
                width: 2,
                type: 'dashed'
              },
              data: [
                {yAxis: 5, name: '平均值'}
              ]
            }
          }
        ]
      }
    };
  },
  mounted () {
    this.initBarChart();
    this.__resizeHanlder = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener('resize', this.__resizeHanlder);
  },
  beforeDestroy () {
    if (!this.chart) {
      return;
    }
    window.removeEventListener('resize', this.__resizeHanlder);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initBarChart () {
      this.chart = echarts.init(this.$el, 'macarons');
      this.chart.setOption(this.eOptions);
    }
  }
};
</script>

<style lang="less" scoped>
</style>
