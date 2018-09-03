<template>
  <div class="usercenter">
    <heador></heador>
    <div class="usercenter_con">
      <div class="usercenter_con_l">
        <span>{{$t("person_info.nav[0]")}}</span>
        <ul>
          <li>
            <router-link to="personal_info">{{$t("person_info.nav[1]")}}</router-link>
          </li>
          <li>
            <router-link to="modify_password">{{$t("person_info.nav[2]")}}</router-link>
          </li>
          <!-- <li v-if="show1 == 1">
            <router-link to="nametoken">{{$t("person_info.nav[3]")}}</router-link>
          </li>
          <li v-if="show1 == 2">
            <router-link to="real_name_authentication">{{$t("person_info.nav[3]")}}</router-link>
          </li>
          <li v-if="show1 == 4">
            <router-link to="namecheck">{{$t("person_info.nav[3]")}}</router-link>
          </li> -->
           <li>
            <a href="javascript:void(0);" @click="gowhere">{{$t("person_info.nav[3]")}}</a>
          </li>
          <li v-if="show == 1">
            <router-link to="google_verification">{{$t("person_info.nav[4]")}}</router-link>
          </li>
          <li v-if="show == 2">
            <router-link to="google_status">{{$t("person_info.nav[4]")}}</router-link>
          </li>
          <!-- <li><router-link to="video_authentication">视频认证</router-link></li> -->
          <li>
            <router-link to="web_Mail">{{$t("person_info.nav[5]")}}</router-link>
          </li>
        </ul>
      </div>
      <div class="usercenter_con_r">
        <router-view></router-view>
      </div>
    </div>
    <userkonw></userkonw>
  </div>
</template>

<script>
import qs from "qs";
import heador from "../../components/home/header";
import userkonw from "../../components/home/userkonw";
export default {
  data() {
    return {
      show: 0,
      show1: 1
    };
  },
  components: {
    heador,
    userkonw
  },
  mounted() {
    this.pdbd();
    // this.shzt1();
  },
  methods: {
    gowhere(){
      this.pdggyz2();
    },
    //  判断谷歌验证
    pdggyz2() {
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
            if(res.data.data.state == 0){
              mui.alert("请先完成谷歌验证");
              return;
            }else{
              this.shzt1()
            }
            // vm.show1 = res.data.data == 1 ?  1 : 2;
                // if(res.data.data == 1){
                //   vm.show1 = 1;
                // }else if(res.data.data == 4) {
                //   vm.show1 = 4;
                // }else if(res.data.data == 2) {
                //   vm.show1 = 2;
                // }


            // mui.alert(res.data.state.msg);
            // vm.gonext = true;
            // localStorage.clear();
            // this.$router.push({
            //   path: "/personal_info",
            // });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 审核状态
    shzt1() {
      let vm = this;
      this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/getAntiaddction",
        data: qs.stringify({
          token: localStorage.token,
          languageType: localStorage.language
        })
      })
        .then(res => {
          if (res.data.state.code == 20000) {
                   console.log(res.data);
                   if(!res.data.data){
                     this.$router.push('/real_name_authentication');
                   }else  if(res.data.data.state == 4) {
                       this.$router.push('/namecheck');
                     }else if(res.data.data.state == 2){
                       mui.alert(res.data.data.reason);
                       this.$router.push('/real_name_authentication');
                     }else if(res.data.data.state == 1){
                       this.$router.push('/nametoken');
                     }else if(res.data.data.state == 0){
                       this.$router.push('/real_name_authentication');
                     }
                   //this.$router.push('/real_name_authentication');
                // if(res.data.data == 1){
                //   this.$router.push('/nametoken');
                // }else if(res.data.data == 4) {
                //   this.$router.push('/namecheck');
                // }else if(res.data.data == 2) {
                //   mui.alert("kyc验证不通过，请重新验证");
                //   this.$router.push('/real_name_authentication');
                // }

            // mui.alert(res.data.state.msg);
            // vm.gonext = true;
            // localStorage.clear();
            // this.$router.push({
            //   path: "/personal_info",
            // });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //  令牌状态
    checklb() {
      let vm = this;
      this.$axios({
        method: "post",
        url: contextPath + "/api/offering/offeringToken",
        data: qs.stringify({
          token: localStorage.token,
          languageType: localStorage.language
        })
      })
        .then(res => {
          console.log(res.data);
          if (res.data.state.code == 20000) {
            mui.alert(res.data.state.msg);
            // vm.gonext = true;
            // localStorage.clear();
            // this.$router.push({
            //   path: "/personal_info",
            // });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    pdbd() {
      let vm = this;
      this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/getAuthenticator",
        data: qs.stringify({
          token: localStorage.getItem("token"),
          languageType: localStorage.language
        })
      })
        .then(res => {
          if (res.data.state.code == 20000) {
            // mui.alert(res.data.state.msg);
            if (res.data.data.state == 1) {
              console.log(1111111111111);
              //vm.$router.push("/google_status");
              vm.show = 2;
            } else {
              console.log(22222222222);
              vm.show = 1;
            }
            // localStorage.setItem("cg1", true);
            // this.$router.push({
            //   path: "/google_status"
            //   //   query: {
            //   //     title: "恭喜您，修改成功!",
            //   //     to: "/login"
            //   //   }
            // });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    // pdbd() {
    //   let vm = this;
    //   this.$axios({
    //     method: "post",
    //     url: contextPath + "/api/googleauthenticator/getAuthenticator",
    //     data: qs.stringify({
    //       token: localStorage.getItem("token"),
    //       languageType: "zh"
    //     })
    //   })
    //     .then(res => {
    //       if (res.data.state.code == 20000) {
    //         // mui.alert(res.data.state.msg);
    //         if (res.data.data.state == 1) {
    //           console.log(1111111111111)
    //           //vm.$router.push("/google_status");
    //           vm.show = 2;
    //         }else{
    //           console.log(22222222222)
    //             vm.show = 1;
    //         }
    //         // localStorage.setItem("cg1", true);
    //         // this.$router.push({
    //         //   path: "/google_status"
    //         //   //   query: {
    //         //   //     title: "恭喜您，修改成功!",
    //         //   //     to: "/login"
    //         //   //   }
    //         // });
    //       } else if (res.data.state.code == 20002) {
    //         mui.alert(res.data.state.msg);
    //         return false;
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<style scoped lang="scss">
.usercenter {
  width: 19.2rem;
  .usercenter_con {
    width: 12rem;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 0.38rem;
    .usercenter_con_l {
      float: left;
      width: 2.33rem;
      height: 3.5rem;
      background-color: #eeeeee;
      margin-right: 0.28rem;
      span {
        display: block;
        text-align: center;
        margin-top: 0.45rem;
        font-size: 0.2rem;
        color: #333;
        font-weight: bold;
      }
      ul {
        margin-top: 0.1rem;
        li {
          height: 0.4rem;
          line-height: 0.4rem;
          text-align: center;
          font-size: 0.14rem;
          .router-link-active {
            color: #6ab1ef;
          }
          //   &:nth-of-type(1){
          //       font-weight: bold;
          //   }
        }
      }
    }
    .usercenter_con_r {
      float: left;
      width: 9.3rem;
      // height: 6.61rem;
      //   background-color: #eeeeee;
    }
  }
}
</style>