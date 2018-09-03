<template>
  <div class="person_info">
    <div class="person_info_t">
      <div class="person_info_t_l">
        <img src="../../common/img/usercenter/avatar.png" alt="">
        <!-- <span></span> -->
        <div class="person_avator_r">
          <p>{{username}}</p>
          <p v-if="usertype == 1">{{$t("person_info.hy[0]")}}</p>
          <p v-if="usertype == 2">{{$t("person_info.hy[1]")}}</p>
          <p v-if="usertype == 3">{{$t("person_info.hy[2]")}}</p>
          <p @click="tc" style="cursor: pointer">{{$t("person_info.tcdl")}}</p>
        </div>
      </div>
      <!-- <div class="person_info_t_r">
        <p v-if="ggyzstatus == 0">
          <router-link to="/google_verification">{{$t("person_info.kq")}}</router-link>
        </p>
        <p v-if="ggyzstatus == 1">
          <router-link to="/google_verification">{{$t("person_info.gb")}}</router-link>
        </p>
        <p>   开启邮箱验证</p>
      </div> -->
    </div>
    <div class="person_info_b">
      <div class="bd">
        <i>{{$t("person_info.xb")}}： </i>
        <div class="bd_r">
          <el-radio v-model="radio" label="0">{{$t("person_info.man")}}</el-radio>
          <el-radio v-model="radio" label="1">{{$t("person_info.nv")}}</el-radio>
        </div>
      </div>
      <div class="bd">
        <i>{{$t("person_info.sjh")}}： </i>
        <div class="bd_r">
          <input type="text" v-model="phonenum1">
        </div>
      </div>
      <div class="bd">
        <i>{{$t("person_info.nc")}}： </i>
        <div class="bd_r">
          <input type="text" v-model="nichen">
        </div>
      </div>
      <div class="bd">
        <i>{{$t("person_info.gj")}}： </i>
        <div class="bd_r">
          <el-select v-model="value" :placeholder='$t("person_info.qxz")'>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="bd">
        <i>{{$t("person_info.xl")}}： </i>
        <div class="bd_r">
          <el-select v-model="value1" :placeholder='$t("person_info.qxz")'>
            <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value1">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="bd">
        <i>{{$t("person_info.nl")}}： </i>
        <div class="bd_r">
          <input type="number" v-model="age1">
        </div>
      </div>
      <div class="bd">
        <i>{{$t("person_info.ah")}}： </i>
        <div class="bd_r">
          <input type="text" v-model="hobby1">
        </div>
      </div>
    </div>
    <div class="sub" @click="saveinfo">
      {{$t("person_info.bc")}}
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      username: "",
      usertype: 1,
      ggyzstatus: 0,
      nichen: "",
      age1: "",
      hobby1: "",
      phonenum1: "",
      radio: "0",
      lv1: "",
      options: [
        {
          value: "china",
          label: "china"
        }
      ],
      value: "",
      options1: [
        {
          value1: "小学",
          label1: "小学"
        },
        {
          value1: "初中",
          label1: "初中"
        },
        {
          value1: "高中",
          label1: "高中"
        },
        {
          value1: "本科",
          label1: "本科"
        },
        {
          value1: "硕士",
          label1: "硕士"
        },
        {
          value1: "博士",
          label1: "博士"
        }
      ],
      value1: "",
      value: "china"
    };
  },
  mounted() {
    this.showinfo();
    this.pdbd();
  },
  methods: {
    // 判断开启谷歌验证
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
              //vm.$router.push("/google_status");
              vm.ggyzstatus = 1;
            } else {
              vm.ggyzstatus = 0;
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
    tc() {
      localStorage.setItem("isLogin", 0);
      //localStorage.clear();
      this.$router.push("/login");
      location.reload();
    },
    showinfo() {
      let vm = this;
      if (!localStorage.getItem("token")) {
        this.$router.push("/login");
        return false;
      }
      //   console.log(this.radio)
      //this.cheeckphone();
      //   console.log(this.radio + "xb");
      //   console.log(this.radio1 + "hun");
      //   console.log(this.value);
      this.$axios({
        method: "post",
        url: contextPath + "/api/user/getUsermsg",
        data: qs.stringify({
          languageType: localStorage.language,
          token: localStorage.getItem("token")
        })
      })
        .then(res => {
          console.log(res.data);
          if (res.data.state.code == 20000) {
            vm.value = res.data.data.nationality;
            vm.value1 = res.data.data.educationBackground;
            vm.hobby1 = res.data.data.hobby;
            vm.age1 = res.data.data.age;
            vm.radio = res.data.data.userSex.toString();
            vm.nichen = res.data.data.nickName;
            vm.username = res.data.data.email;
            vm.usertype = res.data.data.userType;
            vm.phonenum1 = res.data.data.phoneNum;
            // mui.alert(res.data.state.msg);
            // localStorage.clear();
            // this.$router.push({
            //   path: "/modify_password_status",
            //   query: {
            //     title: "恭喜您，修改成功!",
            //     to: "/login"
            //   }
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
    saveinfo() {
      let vm = this;
      //this.cheeckphone();
      console.log(this.radio + "xb");
      //   console.log(this.radio1 + "hun");
      console.log(this.value);
      this.$axios({
        method: "post",
        url: contextPath + "/api/user/modifyUser",
        data: qs.stringify({
          //  @RequestParam(required = false) String nationality,
          //              @RequestParam(required = false) String educationBackground,
          //              @RequestParam(required = false) String hobby,
          //              @RequestParam(required = false) String userRecord,
          //              @RequestParam(required = false) Integer userSex,
          //              @RequestParam(required = false) String age,
          //              @RequestParam(required = false) String areA,
          //              @RequestParam(required = false) String languageType,
          nationality: vm.value,
          educationBackground: vm.value1,
          hobby: vm.hobby1,
          age: vm.age1,
          userSex: vm.radio,
          nickName: vm.nichen,
          phoneNum: vm.phonenum1,
          languageType: localStorage.language,
          token: localStorage.getItem("token")
        })
      })
        .then(res => {
          console.log(res.data);
          if (res.data.state.code == 20000) {
            // mui.alert(res.data.state.msg);
            // localStorage.clear();
            this.$router.push({
              path: "/modify_password_status",
              query: {
                title: this.$t("findpasssword.xgcg"),
                to: "/introduce",
                detalis: this.$t("person_info.go")
              }
            });
          } else if (res.data.state.code == 20002) {
            mui.alert(res.data.state.msg);
            return false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
.person_info {
  .bd_r {
    .el-input__inner {
      height: 0.4rem;
      width: 2.48rem;
    }
    input {
      font-size: 0.2rem;
    }
    .el-radio + .el-radio {
      margin-left: 0.1rem;
    }
  }
}
</style>

<style scoped lang="scss">
.person_info {
  background-color: #eeeeee;
  width: 9.3rem;
  padding: 0.37rem 0.61rem 0.22rem 0.49rem;
  box-sizing: border-box;
  position: relative;
  height: 6.61rem;
  .person_info_t {
    height: 1.8rem;
    overflow: hidden;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      height: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 0.01rem solid #fff;
    }
    .person_info_t_l {
      width: 4.8rem;
      overflow: hidden;
      float: left;
      img {
        width: 1.35rem;
        height: 1.35rem;
        float: left;
      }
      span {
        width: 1.35rem;
        height: 1.35rem;
        float: left;
        background: deepskyblue;
      }
      .person_avator_r {
        float: left;
        overflow: hidden;
        margin-left: 0.48rem;
        p {
          font-size: 0.24rem;
          color: #333;
          &:nth-of-type(1) {
            width: 2.8rem;
            height: 0.37rem;
            font-family: ArialMT;
            font-size: 0.24rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.37rem;
            letter-spacing: 0;
            color: #333333;
            padding-top: 0.1rem;
          }
          &:nth-of-type(2) {
            width: 2rem;
            height: 0.37rem;
            font-family: MicrosoftYaHei;
            font-size: 0.16rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.37rem;
            letter-spacing: 0;
            color: #6ab1ef;
          }
          &:nth-of-type(3) {
            //   width: 56px;
            height: 0.37rem;
            font-family: MicrosoftYaHei;
            font-size: 0.14rem;
            font-weight: normal;
            font-stretch: normal;
            line-height: 0.37rem;
            letter-spacing: 0;
            color: #999999;
          }
        }
      }
    }
    .person_info_t_r {
      float: right;
      // width: 2.1rem;

      p {
        a {
          display: block;
          cursor: pointer;
          // width: 1.28rem;
          padding: 0.02rem 0.1rem;
          height: 0.34rem;
          background-color: #6ab1ef;
          border-radius: 0.06rem;
          border: solid 0.01rem #6ab1ef;
          font-size: 0.18rem;
          color: #fff;
          text-align: center;
          line-height: 0.34rem;
          margin-top: 0.1rem;
        }
        &:nth-of-type(2) {
          background: #fff;
          color: #333;
          margin-top: 0.2rem;
        }
      }
    }
  }
  .person_info_b {
    //width: 3.73rem;
    height: 3.26rem;
    overflow: hidden;
    .bd {
      width: 3.73rem;
      overflow: hidden;
      margin-top: 0.2rem;
      float: left;
      i {
        float: left;
        font-style: normal;
        font-size: 0.14rem;
        line-height: 0.4rem;
        // width: 0.8rem;
        width: 1.1rem;
        text-align: right;
        padding-top: 0.02rem;
      }
      .bd_r {
        width: 2rem;
        float: left;
        line-height: 0.4rem;
        input {
          border: none;
          height: 0.4rem;
          border-radius: 0.08rem;
          text-indent: 0.1rem;
          width: 2.48rem;
        }
        .lv {
          float: left;
          width: 2.48rem;
          border: none;
          height: 1.15rem;
          overflow-y: scroll;
          font-size: 0.2rem;
        }
      }
      &:nth-of-type(5) {
      }
      &:nth-of-type(6) {
        // margin-right: 0.72rem;
      }
    }
  }
  .sub {
    position: absolute;
    left: 50%;
    bottom: 0.6rem;
    transform: translateX(-50%);
    width: 1.26rem;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    background: #6ab1ef;
    font-size: 0.2rem;
    color: #fff;
    transform: translateX(-50%);
    border-radius: 0.08rem;
    cursor: pointer;
  }
}
</style>