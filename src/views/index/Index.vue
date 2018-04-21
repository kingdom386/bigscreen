<template>
  <div class="b_main">
    <el-container>
      <el-main>
        <!-- el-row -->
        <el-row :gutter="20">
          <!-- el-col -->
          <el-col :span="8">
            <!-- 任务达成信息 -->
            <info-pane></info-pane>
          </el-col>
          <!--/ el-col -->
          <!-- el-col -->
          <el-col :span="8">
            <!-- 团队信息 -->
            <group-info></group-info>
          </el-col>
          <!--/ el-col -->
          <!-- el-col -->
          <el-col :span="8">
            <!-- 小组实时信息 -->
            <team-rank-list></team-rank-list>
          </el-col>
          <!--/ el-col -->
        </el-row>
        <!--/ el-row -->
        <el-row class="rank_month">
           <el-col :span="8" class="rank_month_box">
             <rank-month :rankName = "registerName"></rank-month>
           </el-col>
           <el-col :span="8" class="rank_month_box">
             <rank-month :rankName = "loseName"></rank-month>
           </el-col>
           <el-col :span="8" class="rank_month_box">
             <rank-month :rankName = "unregisteredName"></rank-month>
           </el-col>
        </el-row>
        <!--/ rank_month -->
      </el-main>
      <el-aside style="font-size: 50px;color: #f0f0f0;">aside</el-aside>
    </el-container>
  </div>
</template>

<script>
// import { fetchList } from '@/api/api';
import InfoPane from '@/views/pages/InfoPane';
import GroupInfo from '@/views/pages/GroupInfo';
import TeamRankList from '@/views/pages/TeamRankList';
import RankMonth from '@/views/pages/RankMonth';

export default {
  name: 'Index',
  components: {
    InfoPane,
    GroupInfo,
    TeamRankList,
    RankMonth
  },
  data () {
    return {
      title: '今日实时达成率',
      registerName: '新注册用户组当月排名',
      loseName: '流失用户组当月排名',
      unregisteredName: '未激活用户组当月排名'
    };
  },
  created () {
    this.handlerRuleList();
  },
  methods: {
    handlerRuleList () {
      // fetchList().then(res => {
      //   console.log(res);
      // });
    }
  }
};
</script>

<style lang="less" scoped>
  .b_main{
    .rank_month{
      padding: 20px;
      margin-top: 30px;
      background: #191f28;
      .rank_month_box{
        padding-left:27px;
        border-right:  1px solid #0e131a;
        box-shadow: 1px 0 0 rgba(45,52,61,1);
        -webkit-box-shadow: 1px 0 0 rgba(45,52,61,1);
        -moz-box-shadow: 1px 0 0 rgba(45,52,61,1);
        &:first-child{
          padding-left: 0;
        }
        &:last-child{
          border-right: none;
          box-shadow: 1px 0 0 rgba(45,52,61,0);
          -webkit-box-shadow: 1px 0 0 rgba(45,52,61,0);
          -moz-box-shadow: 1px 0 0 rgba(45,52,61,0);
        }
      }
    }
  }
</style>
