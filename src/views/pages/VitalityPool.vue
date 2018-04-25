<template>
  <div class="pool_box">
    <div class="pool_canvas">
      <div class="pool_animation">
        <div class="wave_up waving" :style="{top: thisWavePerc + 'px'}"></div>
        <div class="wave_down" :style="{top: thisWavePerc + 'px'}"></div>
        <span class="wave_percent">{{targetPerc}}%</span>
      </div>
    </div>
    <!-- /pool_canvas -->
    <h3>{{groupType}}</h3>
  </div>
  <!-- /pool_box -->
</template>

<script>
export default {
  name: 'pool',
  props: {
    groupType: {
      type: String,
      default: ''
    },
    targetPerc: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      thisWavePerc: 500
    };
  },
  watch: {
    'targetPerc': {
      handler (val, oldval) {
        this.thisWavePerc = 200 - (parseFloat(this.targetPerc) / 100 * 200);
      }
    }
  }
};
</script>

<style lang="less" scoped>
  .public_style{
    position: absolute;
    top: 200px;
    width: 408px;
    height: 275px;
    background: url('./wave.png') 0 0  no-repeat;
  }
  .pool_box{
    margin: 0 0 30px 10px;
    .pool_canvas{
      padding: 10px;
      width: 220px;
      height: 220px;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      background: #282c35;
      .pool_animation{
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 100%;
        -webkit-border-radius: 100%;
        -moz-border-radius: 100%;
        background: linear-gradient(35deg, #bb784e, #daab75);
        background: -webkit-linear-gradient(35deg, #bb784e, #daab75);
        background: -moz-linear-gradient(35deg, #bb784e, #daab75);
        overflow: hidden;
        .wave_up{
          .public_style;
          z-index: 4;
          left: 30px;
          opacity: .8;
          animation: wave 2s linear infinite;
          -webkit-animation: wave 2s linear infinite;
          -moz-animation: wave 2s linear infinite;
          -o-animation: wave 2s linear infinite;
          -ms-animation: wave 2s linear infinite;
        }
        .wave_down{
          .public_style;
          z-index: 2;
          left: -80px;
          opacity: .6;
          animation: wave 2.6s linear infinite;
          -webkit-animation: wave 2.6s linear infinite;
          -moz-animation: wave 2.6s linear infinite;
          -o-animation: wave 2.6s linear infinite;
          -ms-animation: wave 2.6s linear infinite;
        }
        .wave_percent{
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 7;
          font-size: 34px;
          color: #fff;
          transform: translate3d(-50%, -50%, 0);
          -webkit-transform: translate3d(-50%, -50%, 0);
          -moz-transform: translate3d(-50%, -50%, 0);
        }
      }
    }
    h3{
      width: 220px;
      font-size: 20px;
      line-height: 58px;
      color: #f0f0f0;
      text-align: center;
    }
  }

  @keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: -55px;
    }
    50%{
      left: -100px;
    }
    75%{
      left: -150px;
    }
    100%{
      left: -200px;
    }
  }

    @-webkit-keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: 100px;
    }
    50%{
      left: 200px;
    }
    75%{
      left: 300px;
    }
    100%{
      left: 400px;
    }
  }
    @-moz-keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: 100px;
    }
    50%{
      left: 200px;
    }
    75%{
      left: 300px;
    }
    100%{
      left: 400px;
    }
  }

    @-o-keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: 100px;
    }
    50%{
      left: 200px;
    }
    75%{
      left: 300px;
    }
    100%{
      left: 400px;
    }
  }
</style>
