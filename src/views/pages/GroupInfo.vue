<template>
  <div class="group_info">
    <swiper :options="swiperOption" ref="swiperOption">
      <swiper-slide>
        <div class="group_info_box">
          <h3>实时冠军</h3>
          <div class="team_avatar">
            <span class="avatar_box">
              <img :src="userAvatar" alt="用户头像">
            </span>
          </div>
          <!--/ team_avatar -->
          <div class="team_base_info">
            <h4>姓名：{{userName}}</h4>
            <p>组别：{{teamName}}</p>
          </div>
          <!--/ team_base_info -->
          <div class="team_day_target">
            <el-row>
              <el-col :span="12">
                <img :src="topImg" alt="当日达成率icon">
                <p class="team_day_perc">当日达成率</p>
                <p class="team_day_count">{{tCount}}%</p>
              </el-col>
              <el-col :span="12">
                <img :src="topImg" alt="当日达成率icon">
                <p class="team_day_perc">当日达成值</p>
                <p class="team_day_count">{{tValue}}万</p>
              </el-col>
            </el-row>
          </div>
          <!-- /team_day_target -->
        </div>
        <!--/ group_info_box -->
      </swiper-slide>
      <!--/ swiper-slide -->
      <swiper-slide>
        <div class="group_info_box">
          <h3>实时冠军</h3>
          <div class="team_avatar">
            <span class="avatar_box">
              <img :src="userAvatar1" alt="用户头像">
            </span>
          </div>
          <!--/ team_avatar -->
          <div class="team_base_info">
            <h4>姓名：{{userName}}</h4>
            <p>组别：{{teamName}}</p>
          </div>
          <!--/ team_base_info -->
          <div class="team_day_target">
            <el-row>
              <el-col :span="12">
                <img :src="topImg" alt="当日达成率icon">
                <p class="team_day_perc">当日达成率</p>
                <p class="team_day_count">{{tCount}}%</p>
              </el-col>
              <el-col :span="12">
                <img :src="topImg" alt="当日达成率icon">
                <p class="team_day_perc">当日达成值</p>
                <p class="team_day_count">{{tValue}}万</p>
              </el-col>
            </el-row>
          </div>
          <!-- /team_day_target -->
        </div>
        <!--/ group_info_box -->
      </swiper-slide>
      <!--/ swiper-slide -->
      <swiper-slide>
        <div class="group_info_box">
          <h3>实时冠军</h3>
          <div class="team_avatar">
            <span class="avatar_box">
              <img :src="userAvatar2" alt="用户头像">
            </span>
          </div>
          <!--/ team_avatar -->
          <div class="team_base_info">
            <h4>姓名：{{userName}}</h4>
            <p>组别：{{teamName}}</p>
          </div>
          <!--/ team_base_info -->
          <div class="team_day_target">
            <el-row>
              <el-col :span="12">
                <img :src="topImg" alt="当日达成率icon">
                <p class="team_day_perc">当日达成率</p>
                <p class="team_day_count">{{tCount}}%</p>
              </el-col>
              <el-col :span="12">
                <img :src="topImg" alt="当日达成率icon">
                <p class="team_day_perc">当日达成值</p>
                <p class="team_day_count">{{tValue}}万</p>
              </el-col>
            </el-row>
          </div>
          <!-- /team_day_target -->
        </div>
        <!--/ group_info_box -->
      </swiper-slide>
      <!--/ swiper-slide -->
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'groupswiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      userAvatar: require('../../assets/avatar5.png'),
      userAvatar1: require('../../assets/avatar1.png'),
      userAvatar2: require('../../assets/avatar2.png'),

      topImg: require('../../assets/top.png'),
      tCount: 123, // 当日达成率
      tValue: 170, // 当日达成值
      userName: '李世民',
      teamName: '第一组',
      swiperOption: {
        loop: true,
        effect: 'slide',
        speed: 300,
        autoplay: true,
        delay: 2000,
        autoplayDisableOnInteraction: false
      }
    };
  },
  computed: {
    swiper () {
      return this.$refs.swiperOption.swiper;
    }
  }
};
</script>

<style lang="less" scoped>
  .group_info{
    width:auto;
    height: 545px;
    background: #191f28;
    overflow: hidden;
    .group_info_box{
      h3{
        padding-left: 20px;
        margin: 0 0 16px;
        width: auto;
        height: 64px;
        font-size: 22px;
        line-height: 64px;
        color: #75787e;
      }
      .team_avatar{
        padding: 15px;
        margin: 0 auto;
        display: block;
        width: 190px;
        height: 190px;
        background: #282d35;
        border-radius: 190px;
        -webkit-border-radius: 190px;
        -moz-border-radius: 190px;
        overflow: hidden;
        .avatar_box{
          display: block;
          width: 160px;
          height: 160px;
          border-radius: 160px;
          -webkit-border-radius: 160px;
          -moz-border-radius: 160px;
          background: #f0f0f0;
          overflow: hidden;
          img{
            display: block;
            max-width: 100%;
            height: atuo;
          }
        }
      }
      .team_base_info{
        padding: 20px 0 66px;
        &>h4{
          margin: 0 0 10px;
          margin-bottom: 10px;
          text-align: center;
          font-size: 24px;
          line-height: 1;
          color: #f0f0f0;
        }
        &>p{
          margin: 0;
          font-size: 18px;
          line-height: 1;
          color: #75787e;
          text-align: center;
        }
      }
      .team_day_target{
        .el-col{
          position: relative;
          text-align: center;
          &::after{
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          display: block;
          height: 100%;
          width: 1px;
          border-right: 1px solid #2d343d;
          box-shadow: 0 -1px 1px rgba(0,0,0,1);
          -webkit-box-shadow: 0 -1px 1px rgba(0,0,0,1);
          }
          &:last-child::after{
            border: none;
            box-shadow: 0 -1px 1px rgba(0,0,0,0);
            -webkit-box-shadow: 0 -1px 1px rgba(0,0,0,0);
          }
          .team_day_perc{
            margin: 14px 0 10px;
            font-size: 16px;
            line-height: 1;
            color: #75787e;
          }
          .team_day_count{
            font-size: 22px;
            line-height: 1;
            color: #f0f0f0
          }
        }
      }
    }
  }
</style>
