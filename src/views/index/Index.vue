<template>
  <div class="b_main">
    <el-container>
      <el-main>
        <!-- el-row -->
        <el-row :gutter="25">
          <!-- el-col -->
          <el-col :span="8">
            <!-- 任务达成信息 -->
            <info-pane :infoData = "InfoPaneData" :AchieveData="GroupAchievement"></info-pane>
          </el-col>
          <!--/ el-col -->
          <!-- el-col -->
          <el-col :span="8">
            <!-- 团队信息 -->
            <group-info :giData = "groupInfoData"></group-info>
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
             <rank-month :monthData="zuOne" :rankName = "registerName"></rank-month>
           </el-col>
           <el-col :span="8" class="rank_month_box">
             <rank-month :monthData="zuTwo" :rankName = "loseName"></rank-month>
           </el-col>
           <el-col :span="8" class="rank_month_box">
             <rank-month :monthData="zuThr" :rankName = "unregisteredName"></rank-month>
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
import { fetchToken, fetchAchievementRate, fetchGroupAchievement, fetchRealtimeChampion, fetchRealtimeChartByMonth, fetchRealtimeMonthlyRankings } from '@/api/api';
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
      InfoPaneData: {}, // 实时达成率
      GroupAchievement: [], // 各组达成情况
      groupInfoData: [],
      title: '今日实时达成率',
      registerName: '新注册用户组当月排名',
      loseName: '流失用户组当月排名',
      unregisteredName: '未激活用户组当月排名',
      unregisterGroup: '未激活用户组',
      loseGroup: '流失用户组',
      newGroup: '新注册用户组',
      zuOne: [],
      zuTwo: [],
      zuThr: [],
      unregisterCount: 0,
      loseCount: 0,
      newCount: 0
    };
  },
  created () {
    this.handlerToken();
  },
  methods: {
    handlerToken () {
      fetchToken().then(res => {
        this.$store.commit('SET_USER_TOKEN', res);
        // 今日实时达成率
        fetchAchievementRate().then(resp => {
          this.InfoPaneData = resp;
        });
        // 今日各组达成情况
        fetchGroupAchievement().then(resg => {
          this.GroupAchievement = resg;
        });
        // 实时冠军排行榜
        fetchRealtimeChampion().then(resr => {
          this.groupInfoData = [];
          // MaxCountCustomer 电话次数  MaxHightCustomer 达成率最高 MaxTimeCustomer 通话时间最长
          const mcc = (resr.MaxCountCustomer)[0];
          const mhc = (resr.MaxHightCustomer)[0];
          const mtc = (resr.MaxTimeCustomer)[0];
          // 接口数据转换
          const whdr = {type: 1, gName: '外呼达人', user_avatar: mcc.HEADPHOTOURL, userName: mcc.USERNAME, userGroup: mcc.ZUNAME, userTargetName: '呼出电话数', userCount: mcc.THCS};
          const ywdh = {type: 2, gName: '业务大亨', user_avatar: mhc.HEADPHOTOURL, userName: mhc.USERNAME, userGroup: mhc.ZUNAME, userTargetName: '实时达成值', userCount: mhc.DCTZE,userTargetRate: '实时达成率', userTargetRateValue: mhc.MBDCL};
          const cpgj = {type: 1, gName: '长跑冠军', user_avatar: mtc.HEADPHOTOURL, userName: mtc.USERNAME, userGroup: mtc.ZUNAME, userTargetName: '通话时长', userCount: mtc.THSC};
          this.groupInfoData.push(whdr);
          this.groupInfoData.push(ywdh);
          this.groupInfoData.push(cpgj);
        });
        // 获取当月的排名
        fetchRealtimeChartByMonth({zuid: 1}).then(resm => {
          this.zuOne = this.handerGetMonthRealTimeData(resm);
        });
        fetchRealtimeChartByMonth({zuid: 2}).then(resm => {
          this.zuTwo = this.handerGetMonthRealTimeData(resm);
        });
        fetchRealtimeChartByMonth({zuid: 3}).then(resm => {
          this.zuThr = this.handerGetMonthRealTimeData(resm);
        });
        // 当月组的排名
        fetchRealtimeMonthlyRankings().then(resp => {
          resp.forEach(element => {
            if (element.ZUNAME.trim() === '新注册') {
              this.newCount = element.RATE;
            } else if (element.ZUNAME.trim() === '流失') {
              this.loseCount = element.RATE;
            } else if (element.ZUNAME.trim() === '未激活') {
              this.unregisterCount = element.RATE;
            }
          });
        });
      });
    },
    // 当月的排名
    handerGetMonthRealTimeData (param) {
      let tempAry = [];
      param.forEach((element, i) => {
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
