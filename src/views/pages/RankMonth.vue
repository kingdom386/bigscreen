<template>
  <div class="rank_month_pane">
    <h2>{{rankName}}</h2>
    <div class="rank_month_caption">
      <div class="rank_month_row">
        <template v-for="(ec, index) in rank_caption">
          <div class="rank_month_cell" :key="index">
            {{ec}}
          </div>
        <!--/ rank_month_cell -->
        </template>
      </div>
    </div>
    <!-- /rank_month_caption -->
    <div class="rank_box">
      <swiper :options="swiperOption" ref="swiperOption">
        <template v-for="(md, index) in monthData">
          <swiper-slide :key="index">
            <div class="rank_month_list">
              <div class="rank_month_list_row">
                <div class="rank_month_list_cell">
                  <div class="user_avatar">
                    <span class="img_box">
                      <img :src="md.HEADPHOTOURL === null ? userAvatar : md.HEADPHOTOURL" alt="用户头像">
                    </span>
                  </div>
                </div>
                <!-- /rank_month_list_cell -->
                <div class="rank_month_list_cell" v-if="index === 1">
                  <img src="../../assets/Champion.png" alt="头衔图标">
                </div>
                <div class="rank_month_list_cell" v-else-if="index === 2">
                  <img src="../../assets/Runnerup.png" alt="头衔图标">
                </div>
                <div class="rank_month_list_cell" v-else >
                  <img src="../../assets/seasonArmy.png" alt="头衔图标">
                </div>
                <!-- /rank_month_list_cell -->
                <div class="rank_month_list_cell">
                  {{md.USERNAME}}
                </div>
                <!-- /rank_month_list_cell -->
                <div class="rank_month_list_cell">
                  {{md.DCTZE}}万
                </div>
                <!-- /rank_month_list_cell -->
                <div class="rank_month_list_cell">
                  {{md.MBTZE}}万
                </div>
                <!-- /rank_month_list_cell -->
                <div class="rank_month_list_cell">
                  {{md.RATE}}%
                </div>
                <!-- /rank_month_list_cell -->
              </div>
              <!-- /rank_month_list_row -->
            </div>
            <!-- /rank_month_list -->
          </swiper-slide>
          <!-- /swiper-slide -->
        </template>
      </swiper>
      <!-- /swiper -->
    </div>
  </div>
  <!-- /rank_month_pane -->
</template>

<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'rankmonth',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    rankName: {
      type: String,
      default: ''
    },
    monthData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data () {
    return {
      userAvatar: require('../../assets/avatar5.png'),
      rank_caption: ['排名头像', '排名', '姓名', '达成额', '目标额', '达成率'],
      swiperOption: {
        direction: 'vertical',
        loop: true,
        effect: 'slide',
        speed: 300,
        autoplay: {
          disableOnInteraction: false
        },
        delay: 2000,
        height: 289,
        slidesPerView: 3,
        spaceBetween: 0
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
  .rank_month_pane{
    width: auto;
    height: 3.88rem;
    h2{
      margin: 0 0 0.32rem;
      font-size: 0.22rem;
      line-height: 0.23rem;
      color: #75787e;
    }
    .rank_month_caption{
      display: table;
      width: 100%;
      height: auto;
      .rank_month_row{
        display: table-row;
        .rank_month_cell{
          display: table-cell;
          vertical-align: middle;
          font-size: 0.18rem;
          color: #f0f0f0;
          line-height: 1;
          overflow: hidden;
          &:first-child{
            width: 0.95rem;
          }
          &:nth-child(2){
            width: 0.82rem;
          }
          &:nth-child(3){
            width: 0.7rem;
          }
          &:nth-child(4){
            width: 0.85rem;
          }
          &:nth-child(5){
            width: 0.8rem;
          }
          &:nth-child(6){
            width: 1.02rem;
          }
        }
      }
    }
    .rank_box{
      width: 100%;
      height: 2.89rem;
      overflow: hidden;
      .rank_month_list{
        padding: 0.1rem 0 0;
        display: table;
        width: 100%;
        height: auto;
        .rank_month_list_row{
          display: table-row;
          width: 100%;
          .rank_month_list_cell {
            display: table-cell;
            width:  auto;
            height: 0.92rem;
            font-size: 0.16rem;
            color: #75787e;
            line-height: 0.92rem;
            vertical-align: middle;
            .user_avatar{
              padding: 0.04rem;
              width: 0.74rem;
              height: 0.74rem;
              border-radius: 0.74rem;
              -webkit-border-radius: 0.74rem;
              -moz-border-radius: 0.74rem;
              background: #282d35;
              .img_box{
                display: block;
                width: 0.66rem;
                height: 0.66rem;
                overflow: hidden;
                border-radius: 0.66rem;
                -webkit-border-radius: 0.66rem;
                -moz-border-radius: 0.66rem;
              }
            }
            img{
              display: block;
              max-width: 100%;
              height: auto;
            }
            &:first-child{
              width: 0.95rem;
            }
            &:nth-child(2){
              width: 0.82rem;
            }
            &:nth-child(3){
              width: 0.7rem;
            }
            &:nth-child(4){
              width: 0.85rem;
            }
            &:nth-child(5){
              width: 0.8rem;
            }
            &:nth-child(6){
              width: 1.02rem;
            }
          }
        }
      }
    }
  }
</style>
