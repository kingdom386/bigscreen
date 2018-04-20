<template>
  <div class="info_container">
    <div class="dark_gray info_box">
      <div class="info_caption">
        <h2>{{title1}}</h2>
        <span class="info_subTitle">投资额：{{targetVal}}万</span>
      </div>
      <!-- info_caption -->
      <div class="info_echarts">
        <div class="info_group bg_warning">
          <el-progress :text-inside="true" :stroke-width="18" color="#f9b74c" :percentage="50"></el-progress>
        </div>
        <div class="info_group bg_success">
          <el-progress :text-inside="true" :stroke-width="18" color="#3cd59f" :percentage="80"></el-progress>
        </div>
        <div class="info_group bg_danger">
          <el-progress :text-inside="true" :stroke-width="18" color="#ff7070" :percentage="55"></el-progress>
        </div>
      </div>
      <!--/ info_echarts -->
    </div>
    <!--/ info_box -->
    <div class="dark_gray info_box">
      <div class="info_caption">
        <h2>{{title2}}</h2>
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
      title1: '今日实时达成率',
      title2: '今日各组达成情况',
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
        padding-top: 11px;
        margin-bottom: 26px;
        vertical-align: middle;
        position: relative;
        padding-left: 80px;
        height: 40px;
        &.bg_warning::before {
         content: '1组';
         background: #f9b74c;
        }
        &.bg_success::before {
          content: '2组';
         background: #3cd59f;
        }
        &.bg_danger::before{
          content: '3组';
          background: #ff7070;
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
