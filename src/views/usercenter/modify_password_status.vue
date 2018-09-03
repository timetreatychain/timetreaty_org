<template>
  <div class="modify_password_status">
    <div class="info">
      <h3>{{$t("findpasssword.xgcg")}}</h3>
      <img src="../../common/img/regist/yzcg.png" alt="">
      <hr>
      <p>{{second}}{{$t("xgmm.status")}}{{detalis}}{{$t("xgmm.page")}}</p>
      <p @click="goto">马上前往</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      second: 3,
      timer: "",
      detalis: this.$route.query.detalis || "登录"
    };
  },
  mounted() {
    let vm = this;
    this.timer = setInterval(function() {
      if (vm.second == 1) {
        clearInterval(vm.timer);
        vm.$router.push(vm.$route.query.to);
      }
      vm.second--;
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    goto() {
      let vm = this;
      clearInterval(this.timer);
      this.$router.push(vm.$route.query.to);
    }
  }
};
</script>

<style scoped lang="scss">
.modify_password_status {
  background-color: #eeeeee;
  width: 9.3rem;
  height: 4.58rem;
  overflow: hidden;
  .info {
    position: relative;
    margin: 0 auto;
    margin-top: 1rem;
    width: 6.64rem;
    height: 2.24rem;
    h3 {
      float: left;
      font-size: 0.24rem;
      height: 0.3rem;
      line-height: 0.3rem;
      margin-top: 0.3rem;
      margin-bottom: 0.4rem;
      font-weight: bold;
      width: 2.5rem;
      font-family: MicrosoftYaHei;
      font-stretch: normal;
      letter-spacing: 0;
      color: #333333;
      margin-right: 0.2rem;
    }
    img {
      // position: absolute;
      // left: 1rem;
      // top: 0rem;
      width: 0.8rem;
      height: 0.8rem;
    }
    hr {
      margin: 0;
      width: 6.63rem;
      height: 0.02rem;
      background-color: #6ab1ef;
    }
    p {
      margin-top: 0.2rem;
      &:nth-of-type(2) {
        text-align: center;
        margin-top: 0.8rem;
        transform: translateX(50%);
        width: 2.6rem;
        height: 0.44rem;
        background-color: #6ab1ef;
        border-radius: 0.04rem;
        color: #fff;
        line-height: 0.44rem;
        font-size: 0.2rem;
        cursor: pointer;
      }
    }
  }
}
</style>