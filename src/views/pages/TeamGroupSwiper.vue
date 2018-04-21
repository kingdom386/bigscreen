<template>
  <swiper :options="teamOptions" ref="teamOptions">
    <template v-for="(tid, index) in team_list_data">
      <swiper-slide :key="index">
        <div class="team_table_list">
          <div class="team_table_list_row">
            <div class="team_list_item">
              <div class="team_user_avatar">
                <img :src="tid.userAvatar" alt="用户头像">
              </div>
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{index + 1}}
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tid.userName}}
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tid.userGroup}}
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tid.reachAmount}}万
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tid.targetAmout}}万
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tid.targetRate}}
            </div>
            <!-- /team_list_item -->
          </div>
          <!-- /team_table_row -->
        </div>
        <!-- /team_table_list -->
    </swiper-slide>
    </template>
  </swiper>
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
      team_list_data: [
        {userAvatar: require('../../assets/avatar1.png'), userName: '老王', userGroup: '一组', reachAmount: 980, targetAmout: 1000, targetRate: '98%'},
        {userAvatar: require('../../assets/avatar2.png'), userName: '小王', userGroup: '一组', reachAmount: 340, targetAmout: 400, targetRate: '85%'},
        {userAvatar: require('../../assets/avatar3.png'), userName: '小刘', userGroup: '一组', reachAmount: 260, targetAmout: 600, targetRate: '35%'}
      ],
      teamOptions: {
        direction: 'vertical',
        loop: true,
        effect: 'slide',
        speed: 500,
        autoplay: true,
        delay: 500,
        autoplayDisableOnInteraction: false,
        height: 75,
        slidesPerView: 1,
        spaceBetween: 0
      }
    };
  },
  computed: {
    swiper () {
      return this.$refs.teamOptions.swiper;
    }
  }
};
</script>

<style lang="less" scoped>
  .team_table_list{
    display: table;
    width: 100%;
    .team_table_list_row{
      display: table-row;
      height: 75px;
      .team_list_item{
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        font-size: 16px;
        line-height: 1;
        color: #75787e;
        &:first-child{
          width: 60px;
        }
        .team_user_avatar{
          padding: 4px;
          width: 52px;
          height: 52px;
          background: #282d35;
          border-radius: 100%;
          -webkit-border-radius: 100%;
          -moz-border-radius: 100%;
          overflow: hidden;
          img{
            display: block;
            max-width: 100%;
            height: auto;
            border-radius: 100%;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
          }
        }
      }
    }
  }
</style>
