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
    }
  },
  data () {
    return {
      rank_caption: ['排名头像', '排名', '姓名', '达成额', '目标额', '达成率']
    };
  }
};
</script>

<style lang="less" scoped>
  .rank_month_pane{
    width: auto;
    height: 388px;
    h2{
      margin: 0 0 32px;
      font-size: 22px;
      line-height: 23px;
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
          font-size: 18px;
          color: #f0f0f0;
          line-height: 1;
        }
      }
    }
  }
</style>
