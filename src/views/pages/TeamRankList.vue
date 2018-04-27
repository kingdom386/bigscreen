<template>
  <div class="team_rank">
    <h3>实时排行榜</h3>
    <div class="team_table_caption">
      <div class="team_table_row">
        <template v-for="(item, index) in caption_data">
          <div class="team_table_cell" :key="index">
            {{ item }}
          </div>
          <!-- team_table_cell -->
        </template>
      </div>
      <!--/ team_table_row -->
    </div>
    <!--/ team_table_caption -->
    <div class="team_table_pane">
      <team-group-swiper :tgsData="zuDataOne"></team-group-swiper>
    </div>
    <!--/ team_table_pane -->
    <div class="team_table_pane">
      <team-group-swiper :tgsData="zuDataSecond"></team-group-swiper>
    </div>
    <!--/ team_table_pane -->
    <div class="team_table_pane">
      <team-group-swiper :tgsData="zuDataThird"></team-group-swiper>
    </div>
    <!--/ team_table_pane -->
  </div>
</template>

<script>
import { fetchToken, fetchRealtimeChartByDay } from '@/api/api';
import TeamGroupSwiper from '@/views/pages/TeamGroupSwiper';

export default {
  name: 'teamranklist',
  components: {
    TeamGroupSwiper
  },
  data () {
    return {
      caption_data: ['头像', '排名', '姓名', '组别', '达成额', '目标额', '达成率'],
      zuDataOne: [],
      zuDataSecond: [],
      zuDataThird: []
    };
  },
  mounted () {
    const zidOne = {zuid: 1};
    const zidSecond = {zuid: 2};
    const zidThird = {zuid: 3};
    fetchToken().then(res => {
      this.$store.commit('SET_USER_TOKEN', res);
      fetchRealtimeChartByDay(zidOne).then(resOne => {
        this.zuDataOne = this.handlerArray(resOne);
      });
      fetchRealtimeChartByDay(zidSecond).then(resSecond => {
        this.zuDataSecond = this.handlerArray(resSecond);
      });
      fetchRealtimeChartByDay(zidThird).then(resThird => {
        this.zuDataThird = this.handlerArray(resThird);
      });
    });
  },
  methods: {
    handlerArray (params) {
      let tempAry = [];
      params.forEach((element, i) => {
        if (i < 3) {
          tempAry.push(element);
        }
      });
      return tempAry;
    }
  }
};
</script>

<style lang="less" scoped>
  .team_rank{
    padding: 0 0.2rem 0;
    width: auto;
    height: 5.45rem;
    background: #191f28;
    overflow: hidden;
    h3{
      margin: 0 0 0.1rem;
      width: auto;
      height: 0.64rem;
      font-size: 0.22rem;
      color: #75787e;
      line-height: 0.64rem;
    }
    .team_table_caption{
      margin-left: 0.04rem;
      display: table;
      width: 100%;
      height: 0.2rem;
      .team_table_row{
        display: table-row;
        .team_table_cell{
          display: table-cell;
          font-size: 0.18rem;
          color: #f0f0f0;
          &:first-child,&:nth-child(3),&:nth-child(4),&:nth-child(6){
            width: 0.7rem;
          }
          &:nth-child(2),&:nth-child(5),&:nth-child(7){
            width: 0.68rem;
          }
          &:nth-child(8){
            width: 0.72rem;
          }
        }
      }
    }
    .team_table_pane{
     width: auto;
     height: 1.5rem;
     overflow: hidden;
     border-bottom: 1px solid #0e131a;
     box-shadow: 0 1px 0 rgba(45,52,61,1);
     -webkit-box-shadow: 0 1px 0 rgba(45,52,61,1);
     -moz-box-shadow: 0 1px 0 rgba(45,52,61,1);
     &:last-child{
      border-bottom: none;
      box-shadow: 0 1px 0 rgba(45,52,61,0);
      -webkit-box-shadow: 0 1px 0 rgba(45,52,61,0);
      -moz-box-shadow: 0 1px 0 rgba(45,52,61,0);
     }
    }
  }
</style>
