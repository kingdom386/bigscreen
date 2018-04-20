<template>
  <div class="info_container">
    <div class="dark_gray info_box">
      <div class="info_caption">
        <h2>{{titleOne}}</h2>
        <span class="info_subTitle">投资额：{{targetVal}}万</span>
      </div>
      <!-- info_caption -->
      <div class="info_echarts">
        <div class="info_group bg_warning">
          <div class="info_progress">
            <div class="info_progress_up p_warning" :style="{width: 30 +'%'}"><span class="percentage">30%</span></div>
          </div>
          <!-- <el-progress :text-inside="true" :stroke-width="10" color="#f9b74c" :percentage="50"></el-progress> -->
        </div>
        <div class="info_group bg_success">
          <div class="info_progress">
            <div class="info_progress_up p_success" :style="{width: 89 +'%'}"><span class="percentage">89%</span></div>
          </div>
          <!-- <el-progress :text-inside="true" :stroke-width="10" color="#3cd59f" :percentage="100"></el-progress> -->
        </div>
        <div class="info_group bg_danger">
          <div class="info_progress">
            <div class="info_progress_up p_danger" :style="{width: 55 +'%'}"><span class="percentage">55%</span></div>
          </div>
          <!-- <el-progress :text-inside="true" :stroke-width="10" color="#ff7070" :percentage="2"></el-progress> -->
        </div>
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
        <fld></fld>
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
  components: {
    Fld
  },
  data () {
    return {
      titleOne: '今日实时达成率',
      titleTwo: '今日各组达成情况',
      targetVal: 1000
    };
  }
};
</script>

<style lang="less" scoped>
  .info_container{
    .dark_gray{
      background: #191f28;
    }
    .info_box{
      padding:0 20px;
      height: 258px;
      margin-bottom: 29px;
      &:last-child{
        margin-bottom: 0;
      }
    }
    .info_caption{
      margin-bottom: 12px;
      overflow: hidden;
      h2{
        margin: 0;
        float:left;
        font-size: 22px;
        line-height: 60px;
        color: #75787e;
      }
      .info_subTitle{
        display: block;
        float: right;
        color: #f0f0f0;
        font-size: 18px;
        line-height: 60px;
      }
    }
    .info_echarts{
      .info_group{
        padding-top: 15px;
        margin-bottom: 26px;
        vertical-align: middle;
        position: relative;
        padding-left: 80px;
        height: 40px;
        .info_progress{
          position: relative;
          width: 100%;
          height: 10px;
          background: linear-gradient(to bottom ,#2d343c,#303741);
          background: -webkit-linear-gradient(to bottom ,#2d343c,#303741);
          background: -moz-linear-gradient(to bottom ,#2d343c,#303741);
          box-shadow:0 0 5px rgba(0, 0, 0, .2);
          -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, .2);
          -moz-box-shadow: 0 0 5px rgba(0, 0, 0, .2);
          border-radius: 10px;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          .info_progress_up{
            position: absolute;
            z-index: 2;
            left: 0;
            top: 0;
            width: 0%;
            height: 10px;
            color: #fff;
            font-size: 12px;
            border-radius: 10px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            .percentage{
              float: right;
              margin-right: 18px;
              display: block;
              width: 24px;
              height: 10px;
              font-size: 10px;
              line-height: 10px;
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
              width: 10px;
              height: 10px;
              right: -4px;
              top: -4px;
              border-radius: 100%;
              -webkit-border-radius: 100%;
              -moz-border-radius: 100%;
              background: #fff;
              border: 4px solid #2b2f3a;
            }
          }
        }
        &.bg_warning::before {
         content: '1组';
          background: linear-gradient(to bottom ,#f8ba4d,#f89b3b);
          background: -webkit-linear-gradient(to bottom ,#f8ba4d,#f89b3b);
          background: -moz-linear-gradient(to bottom ,#f8ba4d,#f89b3b);
        }
        &.bg_success::before {
          content: '2组';
          background: linear-gradient(to bottom ,#4be2ab,#2bc48c);
          background: -webkit-linear-gradient(to bottom ,#4be2ab,#2bc48c);
          background: -moz-linear-gradient(to bottom ,#4be2ab,#2bc48c);
        }
        &.bg_danger::before{
          content: '3组';
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
          width: 60px;
          height: 40px;
          font-size: 18px;
          text-align: center;
          line-height: 40px;
          color: #f0f0f0;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
        }
      }
    }
  }
</style>
