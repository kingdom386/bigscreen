<template>
  <swiper :options="teamOptions" ref="teamOptions">
    <template v-for="(tgs, index) in tgsData">
      <swiper-slide :key="index">
        <div class="team_table_list">
          <div class="team_table_list_row">
            <div class="team_list_item">
              <div class="team_user_avatar">
                <img :src="userAvatar" alt="用户头像">
              </div>
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{index + 1}}
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tgs.USERNAME}}
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tgs.ZUNAME}}
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tgs.DCTZE}}万
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tgs.MBTZE}}万
            </div>
            <!-- /team_list_item -->
            <div class="team_list_item">
              {{tgs.MBDCL}}
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
  props: {
    tgsData: {
      type: Array,
      default: () => {
        return [];
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
      teamOptions: {
        direction: 'vertical',
        loop: true,
        effect: 'slide',
        speed: 500,
        delay: 500,
        autoplay: {
          disableOnInteraction: false
        },
        height: 150,
        slidesPerView: 2,
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
        vertical-align: middle;
        font-size: 16px;
        line-height: 1;
        color: #75787e;
        &:first-child,&:nth-child(3),&:nth-child(4),&:nth-child(6){
          width: 70px;
        }
        &:nth-child(2),&:nth-child(5),&:nth-child(7){
          width: 68px;
        }
        &:nth-child(8){
          width: 72px;
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
