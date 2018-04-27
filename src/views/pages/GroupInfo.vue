<template>
  <div class="group_info">
    <swiper :options="swiperOption" ref="swiperOption">
      <template v-for="(gi, index) in giData">
        <swiper-slide :key="index" >
          <div class="group_info_box">
            <h3>{{gi.gName}}</h3>
            <div class="team_avatar">
              <span class="avatar_box">
                <img v-bind:src="gi.user_avatar === null ? userAvatar : gi.user_avatar" alt="用户头像">
              </span>
            </div>
            <!--/ team_avatar -->
            <div class="team_base_info">
              <h4>姓名：{{gi.userName}}</h4>
              <p>组别：{{gi.userGroup}}</p>
            </div>
            <!--/ team_base_info -->
            <div class="team_day_target">
              <el-row v-if="gi.type === 2">
                <el-col :span="12">
                  <img :src="topImg" alt="当日达成率icon">
                  <p class="team_day_perc">{{gi.userTargetRate}}</p>
                  <p class="team_day_count">{{gi.userTargetRateValue}}%</p>
                </el-col>
                <el-col :span="12">
                  <img :src="topImg" alt="当日达成率icon">
                  <p class="team_day_perc">{{gi.userTargetName}}</p>
                  <p class="team_day_count">{{gi.userCount}}万</p>
                </el-col>
              </el-row>
              <el-row v-else>
                <el-col :span="24">
                  <img :src="topImg" alt="当日达成率icon">
                  <p class="team_day_perc">{{gi.userTargetName}}</p>
                  <p class="team_day_count">{{gi.userCount}}</p>
                </el-col>
              </el-row>
            </div>
            <!-- /team_day_target -->
          </div>
          <!--/ group_info_box -->
        </swiper-slide>
        <!--/ swiper-slide -->
      </template>
    </swiper>
    <!-- swiper -->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'groupswiper',
  props: {
    giData: {
      type: Array,
      default: () => {
        return null;
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      userAvatar: require('../../assets/avatar5.png'),
      topImg: require('../../assets/top.png'),
      swiperOption: {
        loop: true,
        effect: 'slide',
        speed: 300,
        autoplay: {
          disableOnInteraction: false
        },
        delay: 5000
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
    height: 5.45rem;
    background: #191f28;
    overflow: hidden;
    .group_info_box{
      h3{
        padding-left: 0.2rem;
        margin: 0 0 0.16rem;
        width: auto;
        height: 0.64rem;
        font-size: 0.22rem;
        line-height: 0.64rem;
        color: #75787e;
      }
      .team_avatar{
        padding: 0.15rem;
        margin: 0 auto;
        display: block;
        width: 1.9rem;
        height: 1.9rem;
        background: #282d35;
        border-radius: 1.9rem;
        -webkit-border-radius: 1.9rem;
        -moz-border-radius: 1.9rem;
        overflow: hidden;
        .avatar_box{
          display: block;
          width: 1.6rem;
          height: 1.6rem;
          border-radius: 1.6rem;
          -webkit-border-radius: 1.6rem;
          -moz-border-radius: 1.6rem;
          background: #f0f0f0;
          overflow: hidden;
          img{
            display: block;
            max-width: 100%;
            height: auto;
          }
        }
      }
      .team_base_info{
        padding: 0.2rem 0 0.66rem;
        &>h4{
          margin: 0 0 0.1rem;
          margin-bottom: 0.1rem;
          text-align: center;
          font-size: 0.24rem;
          line-height: 1;
          color: #f0f0f0;
        }
        &>p{
          margin: 0;
          font-size: 0.18rem;
          line-height: 0.18rem;
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
            margin: 0.14rem 0 0.1rem;
            font-size: 0.16rem;
            line-height: 1;
            color: #75787e;
          }
          .team_day_count{
            font-size: 0.22rem;
            line-height: 1;
            color: #f0f0f0
          }
        }
      }
    }
  }
</style>
