<template>
  <div class="b_main">
    <el-container>
      <el-main>
        <!-- el-row -->
        <el-row :gutter="25">
          <!-- el-col -->
          <el-col :span="8">
            <!-- 任务达成信息 -->
            <info-pane :infoData = "InfoPaneData"></info-pane>
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
        <!-- 当月用户组排名 -->
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
      <!-- 当月组别排名 -->
      <el-aside>
        <h1>当月组别排名</h1>
        <vitality-pool :groupType = "unregisterGroup" :targetPerc="unregisterCount"></vitality-pool>
        <vitality-pool :groupType = "loseGroup" :targetPerc="loseCount"></vitality-pool>
        <vitality-pool :groupType = "newGroup" :targetPerc="newCount"></vitality-pool>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { fetchToken, fetchAchievementRate } from '@/api/api';
import InfoPane from '@/views/pages/InfoPane';
import GroupInfo from '@/views/pages/GroupInfo';
import TeamRankList from '@/views/pages/TeamRankList';
import RankMonth from '@/views/pages/RankMonth';
import VitalityPool from '@/views/pages/VitalityPool';

export default {
  name: 'Index',
  components: {
    InfoPane,
    GroupInfo,
    TeamRankList,
    RankMonth,
    VitalityPool,
    token: ''
  },
  data () {
    return {
      InfoPaneData: [],
      title: '今日实时达成率',
      registerName: '新注册用户组当月排名',
      loseName: '流失用户组当月排名',
      unregisteredName: '未激活用户组当月排名',
      unregisterGroup: '未激活用户组',
      loseGroup: '流失用户组',
      newGroup: '新注册用户组',
      unregisterCount: '80',
      loseCount: '98',
      newCount: '100'
    };
  },
  created () {
    this.handlerToken();
  },
  methods: {
    handlerToken () {
      fetchToken().then(res => {
        this.$store.commit('SET_USER_TOKEN', res);
        fetchAchievementRate().then(resp => {
          this.InfoPaneData = resp;
        });
      });
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
    .el-aside{
      margin: 20px 0;
      padding: 0 0 0 20px;
      width: 282px;
      margin-right: 20px;
      overflow: hidden;
      background: #191f28;
      h1{
        margin: 0 0 10px 0;
        width:100%;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        color: #75787e;
      }
    }
  }
</style>
