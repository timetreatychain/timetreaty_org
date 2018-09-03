<template>
    <div class="nav2">
        <div class="logo">
        </div>
        <div class="nav2_r">
            <!-- <p>咨询热线：020-123456789</p> -->
            <div class="nav2_r_b">
                <router-link to="/nav" class="nav2_r_b1">首页</router-link>
                <div class="userinfo" v-if="pdlogin">
                <span>已有账号，</span>
                <router-link to="/login" class="nav2_r_b2">马上登录</router-link>
                </div>
                <div class="userinfo" v-if="!pdlogin">
                <router-link to="/personal_info" class="nav2_r_b2">已登录</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        pdlogin() {
            return localStorage.getItem("isLogin") == 1 ?   false: true;
        }
    }
};
</script>

<style scoped lang="scss">
.nav2 {
  width: 19.2rem;
  height: 1.8rem;
//   background-color: #6ab1ef;
  position: relative;
  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2.2rem;
    height: 0.55rem;
    background: #fff;
  }
  .nav2_r {
      position: relative;
      top: 0.1rem;
      float: right;
      margin-right: 2rem;
      font-size: 0.2rem;
    p {
      font-size: 0.2rem;
      color: #fff;
      margin-bottom: 0.1rem;
    }
    .nav2_r_b {
      font-size: 0.24rem;
      color: #fff;
      .userinfo{
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
      span{
          font-size: 0.2rem;
      }
      .nav2_r_b2{
          font-size: 0.2rem;
          color: #ffbc75;
      }
    }
  }
}
</style>