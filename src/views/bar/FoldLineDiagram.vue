<template>
  <div class="chart" style="width: 100%;height: 100%"></div>
</template>

<script>
import echarts from 'echarts';
require('echarts/theme/macarons');

export default {
  name: 'fld',
  data () {
    return {
      eOptions: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: '#f0f0f0'
              }
            },
            data: ['新注册用户组','流失用户组','未激活用户组']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '万元',
            position: 'left',
            axisLine: {
              lineStyle: {
                color: '#f0f0f0'
              }
            },
            axisLabel: {
              formatter: '{value} 万元'
            }
          },
          {
            type: 'value',
            name: '%',
            axisPointer: {
              show: true,
              type: 'line'
            },
            min: 0,
            max: 8,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: '#2d343e'
              }
            },
            axisLabel: {
              formatter: '{value} h'
            }
          }
        ],
        series: [
          {
            name: '万元',
            type: 'line',
            smooth: false,
            data: [3456, 7263, 4732]
          },
          {
            name: '金额',
            type: 'bar',
            barWidth: '30%',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [
              {
                value: 3456,
                itemStyle: {
                  normal: {
                    color: '#f9b74c'
                  }
                }
              },
              {
                value: 7263,
                itemStyle: {
                  normal: {
                    color: '#3cd59f'
                  }
                }
              },
              {
                value: 4732,
                itemStyle: {
                  normal: {
                    color: '#ff7070'
                  }
                }
              }
            ]
          }
        ]
      }
    };
  },
  mounted () {
    this.initBarChart();
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
