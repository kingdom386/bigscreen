<template>
  <div class="chart" style="width: 100%;height: 100%"></div>
</template>

<script>
import { debounce } from '@/utils/debunce';
import echarts from 'echarts';
require('echarts/theme/macarons');

export default {
  name: 'fld',
  props: {
    fDatas: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
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
        xAxis: {
          show: true,
          data: ['qqqq', 'qwee', 'wewewe'],
          axisLabel: {
            color: '#f0f0f0'
          }
        },
        yAxis: [
          {
            name: '万元',
            type: 'value',
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
            name: '100%',
            type: 'value',
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
            name: '实时业绩额',
            type: 'bar',
            barWidth: '30%',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            itemStyle: {
              normal: {
                barBorderRadius: [5,5,0,0],
                color: params => {
                  const colorList = ['#f8ba4d', '#4be2ab', '#ff7575'];
                  return colorList[params.dataIndex];
                }
              }
            },
            data: ''
          },
          {
            name: '目标额比值',
            type: 'line',
            smooth: false,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#f0f0f0'
              }
            },
            data: ''
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
  },
  watch: {
    'fDatas': {
      handler (val,oldval) {
        this.eOptions.xAxis.data = val[0].lg;
        this.eOptions.series[0].data = val[1].fd;
        this.eOptions.series[1].data = val[2].fdr;
        this.chart.setOption(this.eOptions);
      }
    }
  }
};
</script>
