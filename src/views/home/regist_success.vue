<template>
    <div class="regist_success">
        <heador></heador>
        <div class="regist_suc">
            <div class="info">
                <h3>恭喜您，注册成功！</h3>
                <img src="../../common/img/regist/yzcg.png" alt="">
                <hr>
                <p>{{second}}秒后跳转登录页面</p>
                <p @click="goto">立即前往</p>
            </div>
            <userkonw></userkonw>
        </div>
    </div>
</template>

<script>
import heador from "../../components/home/header";
import userkonw from "../../components/home/userkonw";
export default {
  data() {
    return {
      second: 3,
      timer:""
    };
  },
  mounted() {
    let vm = this;
    this.timer = setInterval(function() {
      if (vm.second == 1) {
        clearInterval(vm.timer);
        vm.$router.push("/login");
      }
      vm.second--;
    }, 1000);
  },
  beforeDestroy() {
      clearInterval(this.timer);
  },
  components: {
    heador,
    userkonw
  },
  methods: {
      goto() {
          clearInterval(this.timer);
          this.$router.push("/login");
          
      }
  }
};
</script>

<style scoped lang="scss">
.regist_success {
  width: 19.2rem;
  .regist_suc {
    width: 12rem;
    margin: 0 auto;
    .info {
      margin: 0 auto;
      padding-top: 1.75rem;
      width: 6.64rem;
      height: 2.24rem;
      h3 {
        float: left;
        font-size: 0.24rem;
        height: 0.24rem;
        line-height: 0.24rem;
        width: 2.5rem;
        font-family: MicrosoftYaHei;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0;
        color: #333333;
      }
      img {
        width: 0.5rem;
        height: 0.5rem;
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
        //   a{
        //       display: block;
        //       color: #fff;
        //       font-size: 0.2rem;
        //       line-height: 0.44rem;
        //       text-align: center;
        //   }
        }
      }
    }
  }
}
</style>