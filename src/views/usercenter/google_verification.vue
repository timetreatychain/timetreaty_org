<template>
    <div class="google_verification">
        <div class="google_verification_inner">
            <div class="header_title">
                {{$t("ggyz.title")}}
            </div>
            <div class="google_verification_center">
                <!-- <img class="ewm" src="" alt=""> -->
                <!-- <span class="ewm"></span> -->
                <div class="ewm">
                    <div id="qrcode" ref="qrcode"> </div>
                </div>
                <div class="google_info">
                    <p>{{$t("ggyz.p1")}}</p>
                    <p>
                        <i>{{yzm}}</i>
                        <span v-clipboard:copy="yzm" v-clipboard:success="onCopy">{{$t("ggyz.p2")}}</span>
                    </p>
                </div>
            </div>
            <div class="google_verification_bottom">
                <p class="title">{{$t("ggyz.p3")}}</p>
                <input type="text" v-model="ggyzm">
                <p class="sub" @click="ljbd">{{$t("ggyz.p4")}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import qs from "qs";

export default {
  data() {
    return {
      yzm: "DHFGSDHJKFHDJSKHFJKDSLJFDBJKDSDF",
      ggyzm: ""
    };
  },
  mounted() {
    // if (localStorage.getItem("cg1")) {
    //   this.$router.push("/google_status");
    //   return false;
    // }
    this.pdbd();
    // this.hxyzm();
  },
  methods: {
    onCopy(val) {
      console.log(val.text);
    },
    hxyzm() {
      let vm = this;
      if (!localStorage.getItem("token")) {
        this.$router.push("/login");
        return false;
      }
      this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/getkey",
        data: qs.stringify({
          token: localStorage.getItem("token"),
          languageType: localStorage.language
        })
      })
        .then(res => {
          if (res.data.state.code == 20000) {
            vm.yzm = res.data.data.secret;
            vm._getQart(res.data.data.qrcode);
            // console.log(res.data.data.secret);
            //   mui.alert(res.data.state.msg);
            //   localStorage.clear();
            //   this.$router.push({
            //     path: "/modify_password_status",
            //     query: {
            //       title: "恭喜您，修改成功!",
            //       to: "/login"
            //     }
            //   });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getQart: function(arg) {
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 100, //设置宽高
        height: 100
      });
      qrcode.makeCode(arg);
    },
    // 判断是否谷歌验证
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
             if(res.data.data.state == 0){
                  vm.hxyzm();
                //  vm.$router.push("/google_status");
             }else{
                  vm.$router.push("/google_status");
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
    },  
    ljbd() {
      let vm = this;
      this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/validation",
        data: qs.stringify({
          code: vm.ggyzm,
          token: localStorage.getItem("token"),
          languageType: localStorage.language
        })
      })
        .then(res => {
          if (res.data.state.code == 20000) {
            // mui.alert(res.data.state.msg);
            // localStorage.setItem("cg1", true);
            this.$router.push({
              path: "/google_status"
              //   query: {
              //     title: "恭喜您，修改成功!",
              //     to: "/login"
              //   }
            });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });

      //this.$router.push("/google_success");
    }
  }
};
</script>


<style lang="scss">
.ewm {
  #qrcode {
    float: left;
    width: 1.46rem;
    height: 1.46rem;
    img {
      width: 1.46rem !important;
      height: 1.46rem !important;
    }
  }
}
</style>

<style scoped lang="scss">
.google_verification {
    background-color: #eeeeee;
  width: 9.3rem;
  box-sizing: border-box;
  height: 6.61rem;
  padding: 0.33rem 0.4rem;
  .google_verification_inner {
    width: 8.51rem;
    height: 4.37rem;
    .header_title {
      width: 8.5rem;
      height: 0.3rem;
      background-color: #bddefb;
      border: solid 0.01rem #6ab1ef;
      font-family: MicrosoftYaHei;
      font-size: 0.16rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.3rem;
      letter-spacing: 0;
      color: #3288d4;
      text-indent: 0.1rem;
      box-sizing: border-box;
    }
    .google_verification_center {
      position: relative;
      width: 6.8rem;
      height: 2.14rem;
      margin: 0 auto;
      img.ewm {
        float: left;
        margin: 0.21rem 0.27rem auto 0.21rem;
        width: 1.46rem;
        height: 1.46rem;
      }
      .ewm {
        float: left;
        margin: 0.21rem 0.27rem auto 0.4rem;
        width: 1.46rem;
        height: 1.46rem;
        background: #bddefb;
        #qrcode {
          width: 1.46rem;
          height: 1.46rem;
          img {
            width: 1.46rem !important;
            height: 1.46rem !important;
          }
        }
      }
      .google_info {
        position: absolute;
        top: 50%;
        left: 30%;
        float: left;
        transform: translateY(-50%);
        p {
          font-size: 0.18rem;
          margin-bottom: 0.1rem;
          &:nth-of-type(2) {
            color: #6ab1ef;
            i {
              font-size: 0.18rem;
              text-decoration: underline;
              margin-right: 0.1rem;
            }
            span {
              font-size: 0.18rem;
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }
    }
    .google_verification_bottom {
      width: 6.8rem;
      margin: 0 auto;
      box-sizing: border-box;
      padding-left: 0.4rem;
      p.title {
        margin-bottom: 0.1rem;
      }
      input {
        width: 4.95rem;
        height: 0.4rem;
        border: none;
        border-radius: 0.08rem;
        text-indent: 0.15rem;
      }
      p.sub {
        width: 4.95rem;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.24rem;
        color: #fff;
        background: #6ab1ef;
        margin-top: 0.5rem;
        border-radius: 0.08rem;
        font-size: 0.18rem;
        cursor: pointer;
      }
    }
  }
}
</style>