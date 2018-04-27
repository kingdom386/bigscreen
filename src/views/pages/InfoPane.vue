<template>
  <div class="info_container">
    <div class="dark_gray info_box">
      <div class="info_caption">
        <h2>{{titleOne}}</h2>
        <span class="info_subTitle">投资额：{{infoData.MBTZE}}万</span>
      </div>
      <!-- info_caption -->
      <div class="info_echarts">
        <template v-for="(ifd, index) in infoData.seriesList">
          <div class="info_group bg_warning" :key="index" v-if="ifd.name === '新注册'">
            <div class="info_progress">
              <div class="info_progress_up p_warning" :style="{width: ifd.percent +'%'}"><span class="percentage">{{ifd.percent}}%</span></div>
            </div>
          </div>
          <!-- /info_group -->
          <div class="info_group bg_success" :key="index" v-else-if="ifd.name === '流失'">
            <div class="info_progress">
              <div class="info_progress_up p_success" :style="{width: ifd.percent +'%'}"><span class="percentage">{{ifd.percent}}%</span></div>
            </div>
          </div>
          <!-- /info_group -->
          <div class="info_group bg_danger" :key="index" v-else-if="ifd.name === '未激活'">
            <div class="info_progress">
              <div class="info_progress_up p_danger" :style="{width: ifd.percent +'%'}"><span class="percentage">{{ifd.percent}}%</span></div>
            </div>
          </div>
          <!-- /info_group -->
        </template>
      </div>
      <!--/ info_echarts -->
    </div>
    <!--/ info_box -->
    <div class="dark_gray info_box">
      <div class="info_caption">
        <h2>{{titleTwo}}</h2>
      </div>
      <!-- info_caption -->
      <div class="info_echarts" style="height: 170px;">
        <fld :fDatas="fDatas"></fld>
      </div>
      <!--/ info_echarts -->
    </div>
    <!--/ info_box -->
  </div>
</template>

<script>
import Fld from '@/views/bar/FoldLineDiagram';

export default {
  name: 'InfoPame',
  props: {
    infoData: {
      type: Object,
      default: null
    },
    AchieveData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: {
    Fld
  },
  data () {
    return {
      titleOne: '今日实时达成率',
      titleTwo: '今日各组达成情况',
      fDatas: []
    };
  },
  watch: {
    'AchieveData': {
      handler (val, oldval) {
        const flegend = [];
        const fData = [];
        const fDataRate = [];
        val.forEach(element => {
          if (element.name === '新注册' || element.name === '流失' || element.name === '未激活') {
            flegend.push(element.name);
            fData.push(element.money);
            fDataRate.push(element.percent);
          }
        });
        this.fDatas.push({lg: flegend});
        this.fDatas.push({fd: fData});
        this.fDatas.push({fdr: fDataRate});
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .info_container{
    height: 5.45rem;
    .dark_gray{
      background: #191f28;
    }
    .info_box{
      padding:0 0.2rem;
      height: 2.58rem;
      margin-bottom: 0.29rem;
      &:last-child{
        margin-bottom: 0;
      }
    }
    .info_caption{
      margin-bottom: 0.12rem;
      overflow: hidden;
      h2{
        margin: 0;
        float:left;
        font-size: 0.22rem;
        line-height: 0.6rem;
        color: #75787e;
      }
      .info_subTitle{
        display: block;
        float: right;
        color: #f0f0f0;
        font-size: 0.18rem;
        line-height: 0.6rem;
      }
    }
    .info_echarts{
      .info_group{
        padding: 0.15rem 0 0 1rem;
        margin-bottom: 0.26rem;
        vertical-align: middle;
        position: relative;
        height: 0.4rem;
        .info_progress{
          position: relative;
          width: 100%;
          height: 0.1rem;
          background: linear-gradient(to bottom ,#2d343c,#303741);
          background: -webkit-linear-gradient(to bottom ,#2d343c,#303741);
          background: -moz-linear-gradient(to bottom ,#2d343c,#303741);
          box-shadow:0 0 0.05rem rgba(0, 0, 0, .2);
          -webkit-box-shadow: 0 0 0.05rem rgba(0, 0, 0, .2);
          -moz-box-shadow: 0 0 0.05rem rgba(0, 0, 0, .2);
          border-radius: 0.1rem;
          -webkit-border-radius: 0.1rem;
          -moz-border-radius: 0.1rem;
          .info_progress_up{
            position: absolute;
            z-index: 2;
            left: 0;
            top: 0;
            width: 0%;
            height: 0.1rem;
            color: #fff;
            font-size: 0.12rem;
            border-radius: 0.1rem;
            -webkit-border-radius: 0.1rem;
            -moz-border-radius: 0.1rem;
            .percentage{
              float: right;
              margin-right: 0.2rem;
              display: block;
              width: 0.24rem;
              height: 0.1rem;
              font-size: 0.1rem;
              line-height: 0.1rem;
              color: #f0f0f0;
            }
            &.p_warning{
              background: linear-gradient(to left ,#f8ba4d,#f89b3b);
              background: -webkit-linear-gradient(to left ,#f8ba4d,#f89b3b);
              background: -moz-linear-gradient(to left ,#f8ba4d,#f89b3b);
            }
            &.p_success{
              background: linear-gradient(to left ,#4be2ab,#2bc48c);
              background: -webkit-linear-gradient(to left ,#4be2ab,#2bc48c);
              background: -moz-linear-gradient(to left ,#4be2ab,#2bc48c);
            }
            &.p_danger{
              background: linear-gradient(to left ,#ff7575,#ff5756);
              background: -webkit-linear-gradient(to left ,#ff7575,#ff5756);
              background: -moz-linear-gradient(to left ,#ff7575,#ff5756);
            }
            &::after{
              content: '';
              position: absolute;
              display: block;
              width: 0.1rem;
              height: 0.1rem;
              right: -0.04rem;
              top: -0.04rem;
              border-radius: 100%;
              -webkit-border-radius: 100%;
              -moz-border-radius: 100%;
              background: #fff;
              border: 0.04rem solid #2b2f3a;
            }
          }
        }
        &.bg_warning::before {
         content: '新注册';
          background: linear-gradient(to bottom ,#f8ba4d,#f89b3b);
          background: -webkit-linear-gradient(to bottom ,#f8ba4d,#f89b3b);
          background: -moz-linear-gradient(to bottom ,#f8ba4d,#f89b3b);
        }
        &.bg_success::before {
          content: '流失';
          background: linear-gradient(to bottom ,#4be2ab,#2bc48c);
          background: -webkit-linear-gradient(to bottom ,#4be2ab,#2bc48c);
          background: -moz-linear-gradient(to bottom ,#4be2ab,#2bc48c);
        }
        &.bg_danger::before{
          content: '未激活';
          background: linear-gradient(to bottom ,#ff7575,#ff5756);
          background: -webkit-linear-gradient(to bottom ,#ff7575,#ff5756);
          background: -moz-linear-gradient(to bottom ,#ff7575 ,#ff5756);
        }
        &:last-child{
          margin-bottom: 0;
        }
        &::before{
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          display: block;
          width: 0.7rem;
          height: 0.4rem;
          font-size: 0.18rem;
          text-align: center;
          line-height: 0.4rem;
          color: #f0f0f0;
          border-top-right-radius: 0.2rem;
          border-bottom-right-radius: 0.2rem;
        }
      }
    }
  }
</style>
