<template>
  <div class="b_main">
    <el-container>
      <el-main>
        <!-- el-row -->
        <el-row>
          <!-- el-col -->
          <el-col :span="8">
            <info-pane></info-pane>
          </el-col>
          <!--/ el-col -->
          <!-- el-col -->
          <el-col :span="8">
          </el-col>
          <!--/ el-col -->
          <!-- el-col -->
          <el-col :span="8">
          </el-col>
          <!--/ el-col -->
        </el-row>
        <!--/ el-row -->
      </el-main>
      <el-aside>2</el-aside>
    </el-container>
  </div>
</template>

<script>
import { fetchList } from '@/api/api';
import InfoPane from '@/views/infopane/InfoPane';

export default {
  name: 'Index',
  components: {
    InfoPane
  },
  data () {
    return {
      title: '今日实时达成率'
    };
  },
  created () {
    this.handlerRuleList();
  },
  methods: {
    handlerRuleList () {
      fetchList().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>
