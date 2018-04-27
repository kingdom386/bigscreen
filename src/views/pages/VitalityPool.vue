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
    top: 2rem;
    width: 4.08rem;
    height: 2.75rem;
    background: url('./wave.png') 0 0  no-repeat;
  }
  .pool_box{
    margin: 0 0 0.3rem 0.1rem;
    .pool_canvas{
      padding: 0.1rem;
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      background: #282c35;
      .pool_animation{
        position: relative;
        width: 2rem;
        height: 2rem;
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
          left: 0.3rem;
          opacity: 0.8;
          animation: wave 2s linear infinite;
          -webkit-animation: wave 2s linear infinite;
          -moz-animation: wave 2s linear infinite;
          -o-animation: wave 2s linear infinite;
          -ms-animation: wave 2s linear infinite;
        }
        .wave_down{
          .public_style;
          z-index: 2;
          left: -0.8rem;
          opacity: 0.6;
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
          font-size: 0.34rem;
          color: #fff;
          transform: translate3d(-50%, -50%, 0);
          -webkit-transform: translate3d(-50%, -50%, 0);
          -moz-transform: translate3d(-50%, -50%, 0);
        }
      }
    }
    h3{
      width: 2.2rem;
      font-size: 0.2rem;
      line-height: 0.58rem;
      color: #f0f0f0;
      text-align: center;
    }
  }

  @keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: -0.55rem;
    }
    50%{
      left: -1rem;
    }
    75%{
      left: -1.5rem;
    }
    100%{
      left: -2rem;
    }
  }

    @-webkit-keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: -0.55rem;
    }
    50%{
      left: -1rem;
    }
    75%{
      left: -1.5rem;
    }
    100%{
      left: -2rem;
    }
  }
    @-moz-keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: -0.55rem;
    }
    50%{
      left: -1rem;
    }
    75%{
      left: -1.5rem;
    }
    100%{
      left: -2rem;
    }
  }

    @-o-keyframes wave{
    0% {
      left: 0;
    }
    25%{
      left: -0.55rem;
    }
    50%{
      left: -1rem;
    }
    75%{
      left: -1.5rem;
    }
    100%{
      left: -2rem;
    }
  }
</style>
