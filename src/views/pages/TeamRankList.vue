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
      <team-group-swiper></team-group-swiper>
    </div>
    <!--/ team_table_pane -->
    <div class="team_table_pane">
      <team-group-swiper></team-group-swiper>
    </div>
    <!--/ team_table_pane -->
    <div class="team_table_pane">
      <team-group-swiper></team-group-swiper>
    </div>
    <!--/ team_table_pane -->
  </div>
</template>

<script>
import TeamGroupSwiper from '@/views/pages/TeamGroupSwiper';

export default {
  name: 'teamranklist',
  components: {
    TeamGroupSwiper
  },
  data () {
    return {
      caption_data: ['头像', '排名', '姓名', '组别', '达成额', '目标额', '达成率']
    };
  }
};
</script>

<style lang="less" scoped>
  .team_rank{
    padding: 0 20px 0;
    width: auto;
    height: 545px;
    background: #191f28;
    overflow: hidden;
    h3{
      margin: 0 0 10px;
      width: auto;
      height: 64px;
      font-size: 22px;
      color: #75787e;
      line-height: 64px;
    }
    .team_table_caption{
      margin-left: 4px;
      display: table;
      width: 100%;
      height: 20px;
      .team_table_row{
        display: table-row;
        .team_table_cell{
          display: table-cell;
          font-size: 18px;
          color: #f0f0f0;
          &:first-child,&:nth-child(3),&:nth-child(4),&:nth-child(6){
            width: 70px;
          }
          &:nth-child(2),&:nth-child(5),&:nth-child(7){
            width: 68px;
          }
          &:nth-child(8){
            width: 72px;
          }
        }
      }
    }
    .team_table_pane{
     width: auto;
     height: 150px;
     overflow: hidden;
     border-bottom: 1px solid #0e131a;
     box-shadow: 0 1px 0px rgba(45,52,61,1);
     -webkit-box-shadow: 0 1px 0px rgba(45,52,61,1);
     -moz-box-shadow: 0 1px 0px rgba(45,52,61,1);
     &:last-child{
      border-bottom: none;
      box-shadow: 0 1px 0px rgba(45,52,61,0);
      -webkit-box-shadow: 0 1px 0px rgba(45,52,61,0);
      -moz-box-shadow: 0 1px 0px rgba(45,52,61,0);
     }
    }
  }
</style>
