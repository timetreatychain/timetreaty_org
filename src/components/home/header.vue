<template>
    <div class="nav2">
        <div class="nav2_r">
            <div class="nav2_r_b">
                <router-link to="/nav" class="nav2_r_b1">{{$t("login.home")}}</router-link>
                <div class="userinfo" v-if="pdlogin">
                    <span>{{$t("login.yyzh")}}，</span>
                    <router-link to="/login" class="nav2_r_b2">{{$t("login.msdl")}}</router-link>
                </div>
                <div class="userinfo" v-if="!pdlogin">
                    <router-link to="/personal_info" class="nav2_r_b2">{{username1}}</router-link>
                    <a href="javascript:void(0);" @click="tc" class="nav2_r_b2"> {{$t("message.title_l")}}  </a>
                </div>
            </div>
        </div>
        <div class="logo">
         	<router-link to="/nav"> <img src="../../assets/whitelogo.png" alt=""></router-link>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    pdlogin() {
      return localStorage.getItem("isLogin") == 1 ? false : true;
    },
    username1() {
      return localStorage.getItem("isLogin") == 1
        ? localStorage.getItem("username")
        : "";
    }
  },
  methods: {
    tc() {
      localStorage.clear();
      localStorage.setItem("isLogin", 0);
      //location.reload();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss">
.nav2 {
  width: 19.2rem;
  height: 1.8rem;
  background-color: #6ab1ef;
  position: relative;
  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2.14rem;
    height: 0.43rem;
    img{
      width: 100%;
    }
  }
  .nav2_r {
    position: relative;
    top: 0.1rem;
    float: right;
    margin-right: 1.5rem;
    font-size: 0.2rem;
    .nav2_r_b {
      margin-top: 0.1rem;
      font-size: 0.24rem;
      color: #fff;
      .userinfo {
        display: inline-block;
      }
      .nav2_r_b1 {
        width: 0.52rem;
        height: 0.26rem;
        line-height: 0.26rem;
        font-size: 0.2rem;
        border-radius: 0.04rem;
        border: solid 1px #ffffff;
        color: #fff;
        padding: 0.05rem;
      }
      span {
        font-size: 0.2rem;
      }
      .nav2_r_b2 {
        font-size: 0.2rem;
        color: #ffbc75;
      }
    }
  }
}
</style>