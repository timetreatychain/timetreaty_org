<template>
  <div class="welcome2">
    <div class="nav">
      <h1 class="logo"><img src="../../assets/logo.png" alt=""></h1>
      <div class="nav_r" ref="nav_r">
        <router-link to="/login" class="nav_r_l" v-if="username1 == 2">{{$t("message.login1")}}</router-link>
        <router-link to="/personal_info" class="nav_r_l" v-if="username1 != 2">{{username1}}</router-link>
        <router-link to="/regist" class="nav_r_l" v-if="username1 == 2">{{$t("message.title_r")}}</router-link>
        <a href="javascript:void(0);" @click="tc" class="nav_r_l" v-if="username1 != 2">{{$t("message.title_l")}}</a>
        <a @click="btnmenu" :class="[{'cur' : changlan},'nav_r_l']">
          <i>{{langua}}</i>
        </a>
        <ul ref="list" class="list" :class="{'cur' : showmenu}">
          <li @click="changelang(1)" class="active">
            <a href="javascript:;">English</a>
          </li>
          <li @click="changelang(2)">
            <a href="javascript:;">简体中文</a>
          </li>
        </ul>
      </div>
    </div>
    <ul class="wel_content">
      <li>
        <router-link to="/introduce">
          <i></i>
          <p>{{$t('nav.nav_iner[0]')}}</p>
        </router-link>
      </li>
      <li>
        <router-link to="/enter">
          <i></i>
          <p>{{$t('nav.nav_iner[1]')}}</p>
        </router-link>
      </li>
      <li>
        <router-link to="/affiche">
          <i></i>
          <p>{{$t('nav.nav_iner[2]')}}</p>
        </router-link>
      </li>
      <li @click="pdggyz">
         <i v-if='!localStorage == "en"'></i>
        <i v-if='!localStorage.language || localStorage.getItem("language") == "en"'></i>
        <span v-if='localStorage.getItem("language") == "zh"'></span>
        <p>{{$t('nav.nav_iner[3]')}}</p>

      </li>
      <li>
        <router-link to="/value">
          <i></i>
          <p>{{$t('nav.nav_iner[4]')}}</p>
        </router-link>
      </li>
      <li>
        <router-link to="/roadmap">
          <i></i>
          <p>{{$t('nav.nav_iner[5]')}}</p>
        </router-link>
      </li>
      <li>
        <router-link to="/concat">
          <i></i>
          <p>{{$t('nav.nav_iner[6]')}}</p>
        </router-link>
      </li>
    </ul>
    <userkonw></userkonw>
  </div>
</template>
<script>
import qs from "qs";
import userkonw from "../../components/home/userkonw";
export default {
  data() {
    return {
      localStorage: localStorage,
      changlan: false,
      showmenu: false,
      langua: localStorage.getItem("language") == "zh" ? "简体中文" : "English"
    };
  },
//created(){
//	location.reload();
//},
  mounted() {
    document.addEventListener("click", e => {
      if (this.$route.path == "/nav" && !this.$refs.nav_r.contains(e.target)) {
        this.changlan = false;
        this.showmenu = false;
      }
    });
  },
  computed: {
    username1() {
      return localStorage.getItem("isLogin") == 1
        ? localStorage.getItem("username")
        : 2;
    }
  },
  destroyed() {
    document.removeEventListener("click", e => {
      console.log(e.target);
      if (!this.$refs.nav_r.contains(e.target)) {
        this.changlan = false;
        this.showmenu = false;
      }
    });
  },
  methods: {
    pdggyz() {
      if (localStorage.isLogin === "1") {
      let vm = this;
      this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/getAuthenticator",
        data: qs.stringify({
          token: localStorage.token,
          languageType: localStorage.language
        })
      })
        .then(res => {
          console.log(res.data);
          if (res.data.state.code == 20000) {
            if (res.data.data.state == 0) {
              mui.alert(vm.$t("nav.google"));
              vm.$router.push("/google_verification");
            } else if (res.data.data.state == 1) {
              vm.activity();
            }
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
        } else if (localStorage.isLogin != "1") {
        this.$router.push({
          path: "/login"
        });
      }
    },
    tc() {
      localStorage.setItem("isLogin", 0);
      this.$router.push("/login");
    },
    btnmenu() {
      this.changlan = !this.changlan;
      this.showmenu = !this.showmenu;
    },
    changelang(val) {
      let vm = this;
      if (val == 1) {
        window.localStorage.setItem("language", "en");
        let locale = vm.$i18n.locale;
        vm.$i18n.locale = window.localStorage.getItem("language");
        this.langua = "English";
        location.reload();
      } else {
        window.localStorage.setItem("language", "zh");
        let locale = vm.$i18n.locale;
        vm.$i18n.locale = window.localStorage.getItem("language");
        this.langua = "简体中文";
        location.reload();
      }
      this.showmenu = !this.showmenu;
      this.changlan = !this.changlan;
    },
    activity() {
      let vm = this;
      if (localStorage.isLogin === "1") {
        $.ajax({
          type: "post",
          url: contextPath + "/api/offering/isKYC",
          async: true,
          dataType: "json",
          data: {
            languageType: localStorage.language,
            token: localStorage.token
          },
          success(res) {
            if (res.state.code == 20000) {
              if (res.data.state == 2) {
                mui.alert(res.data.reason);
                vm.$router.push({
                  path: "/real_name_authentication"
                });
              } else if(res.data.state == 4){
                vm.$router.push({
                  path: "/namecheck"
                });
              }else if(res.data.state == 1){
                vm.$router.push({
                  path: "/activity"
                });
              }else if(res.data.state == 0){
                vm.$router.push({
                  path: "/real_name_authentication"
                });
              }
            }else if(res.state.code == 20001){
               mui.alert(res.data.reason);
               return;
            }
          }
        });
      } else if (localStorage.isLogin != "1") {
        this.$router.push({
          path: "/login"
        });
      }
    }
  },
  components: {
    userkonw
  }
};
</script>

<style scoped lang="scss">
.welcome2 {
  width: 19.2rem;
  .nav {
    height: 1.8rem;
    .logo {
      width: 2.14rem;
      height: 0.43rem;
      margin: 0.2rem 0.7rem;
      float: left;
      img {
        width: 100%;
      }
    }
    .nav_r {
      float: right;
      margin-right: 0.8rem;
      margin-top: 0.1rem;
      position: relative;
      a.nav_r_l {
        text-align: center;
        height: 0.3rem;
        padding: 0.1rem 0.2rem;
        float: left;
        font-size: 0.2rem;
        position: relative;
        &:nth-of-type(1) {
          &::after {
            position: absolute;
            top: 28%;
            right: 0;
            content: "";
            width: 0;
            height: 0.2rem;
            border: 0.01rem solid #000;
          }
        }
        &:nth-of-type(3) {
          &::after {
            transition: all 0.2s linear 0s;
            position: absolute;
            top: 25%;
            right: -0.08rem;
            content: "";
            width: 0;
            height: 0;
            border: 0.08rem solid #999;
            transform: rotate(45deg);
            border-top-color: transparent;
            border-left-color: transparent;
            //border-right-color: transparent;
            transform-origin: 50%;
          }
          &.cur {
            &::after {
              position: absolute;
              top: 40%;
              transform: rotate(225deg);
            }
          }
        }
        i {
          font-style: normal;
          display: block;
        }
      }
      .list {
        position: absolute;
        top: 0.5rem;
        right: 0.1rem;
        display: none;
        &.cur {
          display: block;
        }
        li {
          line-height: 0.5rem;
          width: 1.2rem;
          text-align: center;
          height: 0.5rem;
          border: 0.01rem solid #898989;
          margin-bottom: 0.1rem;
          border-radius: 0.08rem;
        }
      }
    }
  }
  .wel_content {
    width: 12rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    li {
      width: 4rem;
      text-align: center;
      height: 3rem;
      background-color: #6ab1ef;
      border-right: 0.01rem solid #fff;
      border-bottom: 0.01rem solid #fff;
      box-sizing: border-box;
      i {
        display: inline-block;
        width: 1.3rem;
        height: 1.3rem;
        margin-top: 0.54rem;
      }
      p {
        //width: 1.2rem;
        height: 0.31rem;
        font-family: MicrosoftYaHei;
        font-size: 0.3rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.35rem;
        letter-spacing: 0;
        color: #ffffff;
        text-align: center;
      }
      &:nth-of-type(1) {
        i {
          background: url("../../common/img/welcome2/intro.png") no-repeat;
          background-size: 1.3rem;
        }
      }
      &:nth-of-type(2) {
        i {
          background: url("../../common/img/welcome2/rk.png") no-repeat;
          background-size: 1.3rem;
        }
      }
      &:nth-of-type(3) {
        i {
          background: url("../../common/img/welcome2/gg.png") no-repeat;
          background-size: 1.3rem;
        }
      }
      &:nth-of-type(4) {
        width: 12rem;
        height: 3rem;
        i {
          display: block;
          height: 3rem;
          width: 12rem;
          margin-top: 0;
          background: url("../../common/img/home/activity1.png") no-repeat;
          background-size: 12rem 3rem;
          cursor: pointer;
        }
        span {
          display: block;
          height: 3rem;
          width: 12rem;
          margin-top: 0;
          background: url("../../common/img/home/activity.png") no-repeat;
          background-size: 12rem 3rem;
          cursor: pointer;
        }
      }
      &:nth-of-type(5) {
        i {
          background: url("../../common/img/welcome2/jz.png") no-repeat;
          background-size: 1.3rem;
        }
      }
      &:nth-of-type(6) {
        i {
          background: url("../../common/img/welcome2/js.png") no-repeat;
          background-size: 1.3rem;
        }
      }
      &:nth-of-type(7) {
        i {
          background: url("../../common/img/welcome2/link.png") no-repeat;
          background-size: 1.3rem;
        }
      }
    }
  }
}
</style>