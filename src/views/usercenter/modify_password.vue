<template>
  <div class="modify_password">
    <div class="form">
      <!-- <h3>注册账号</h3> -->
      <!-- <p>
                <input type="text" placeholder="输入11位数手机号码" v-model="phonenum">
                <i>手 机 号 码 ：</i>
            </p>
            <em v-if="phonenum1" v-html="phonenumtip"></em> -->
      <p>
        <input type="text" placeholder="例如：example@npacn.com" v-model="username">
        <i>{{$t("findpasssword.yydz")}} ：</i>
      </p>
      <em v-if="zh1" v-html="zh"></em>
      <p>
        <span v-if="timer == 'yw'" @click="createCode1">{{$t("findpasssword.djhq")}}</span>
        <span v-if="timer != 'yw'">{{code1}}{{$t("findpasssword.m")}}</span>
        <input type="text" class="yzm" v-model.trim="yzm">
        <i>{{$t("findpasssword.yxtyzm")}} ：</i>
      </p>
      <em v-if="checkyzm1" v-html="checkyzm"></em>
      <p>
        <input type="password" :placeholder="$t('login.plhd')" @keyup="psdstrong" v-model.trim="psd">
        <i>{{$t("findpasssword.xmm")}} ：</i>
      </p>
      <em v-if="mm1" v-html="mm"></em>
      <ul v-if="grade !=0" class="password_strong">
        <li v-if="grade >=1">{{$t("findpasssword.dd")}}</li>
        <li v-if="grade >=2">{{$t("findpasssword.zz")}}</li>
        <li v-if="grade >=3">{{$t("findpasssword.strong")}}</li>
      </ul>
      <p>
        <input type="password" v-model.trim="psd1">
        <i>{{$t("findpasssword.cxsrmm")}} ：</i>
      </p>
      <em v-if="rm1" v-html="rm"></em>
      <!-- <p>
                <span @click="createCode" v-html="code"></span>
                <input type="text" class="yzm" v-model.trim="yzm">
                <i>验 证 码 ：</i>
            </p>
            <em v-if="checkyzm1" v-html="checkyzm"></em> -->
      <div @click="zc" class="sub">
        {{$t("findpasssword.qd")}}
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      code1: "点击获取",
      yzm: "",
      username: "",
      psd: "",
      psd1: "",
      grade: 0,
      zh: "",
      zh1: false,
      mm1: false,
      mm: "",
      rm1: false,
      rm: "",
      checkyzm: "",
      checkyzm1: false,
      phonenum: "",
      phonenum1: false,
      phonenumtip: "",
      timer: "yw",
      second: 60
    };
  },
  mounted() {
    //this.createCode();
  },
  methods: {
    // 创建验证码
    // createCode() {
    //   if (this.timer == 'yw') {
    //     this.code = 60;
    //     clearInterval(this.timer);
    //     this.timer = setInterval(() => {
    //       if (this.code == 1) {
    //         clearInterval(this.timer);
    //         this.code ="点击获取"
    //         this.timer = 'yw';
    //       }
    //       this.code--;
    //     }, 1000);
    //   }
    // },

    // 创建验证码
    createCode1() {
      console.log(this.timer);
      if (this.username == "") {
        mui.alert(this.$t("findpasssword.yywk"));
        return false;
      }
      if (this.timer == "yw") {
        this.code1 = 60;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.code1 == 1) {
            clearInterval(this.timer);
            //this.code1 = "点击获取";
            this.timer = "yw";
          }
          this.code1--;
        }, 1000);
        this.getphoneyz();
      }
    },
    // 获取邮箱验证码
    getphoneyz() {
      let vm = this;
      if (this.username != "") {
        console.log("woyaofayoujian");
        this.$axios({
          method: "post",
          url: contextPath + "/api/reg/findPwdVerficode",
          data: qs.stringify({
            account: vm.username,
            languageType: "zh"
          })
        })
          .then(res => {
            //console.log(res)
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        mui.alert(this.$t("findpasssword.yywk"));
        return false;
      }
    },

    // 验证码验证
    validate() {
      var yzm = this.yzm.toUpperCase();
      var code3 = this.code.toUpperCase();
      if (this.yzm.trim().length == 0) {
        // alert("验证码不能为空");
        this.checkyzm = this.$t("findpasssword.yzmwk");
        this.checkyzm1 = true;
        return false;
      } else if (yzm != code3) {
        // mui.alert("验证码不正确，请重新输入");
        this.checkyzm = this.$t("findpasssword.yzmnr");
        this.checkyzm1 = true;
        this.yzm = "";
        yzm = "";
        code3 = "";
        this.createCode();
        return false;
      } else {
        //mui.alert("cg");
        //this.checkyzm = "验证码不正确，请重新输入";
        this.checkyzm1 = false;
        return true;
      }
    },
    // 手机号码验证
    cheeckphone() {
      let val4 = this.phonenum;
      if (!/^1(3|4|5|7|8)\d{9}$/.test(val4)) {
        // alert("手机号码有误，请重填");
        this.phonenumtip = "手机号码有误，请重填";
        this.phonenum1 = true;
        return false;
      }
      this.phonenum1 = false;
      return true;
    },
    // 账户名验证
    checkusername() {
      let useinfo = this.username;
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); //正则表达式 //var obj = document.getElementById("mazey"); //要验证的对象
      if (useinfo === "") {
        //输入不能为空
        //alert("邮箱输入不能为空!");
        this.zh = this.$t("findpasssword.yywk");
        this.zh1 = true;
        return false;
      } else if (!reg.test(useinfo)) {
        //正则验证不通过，格式不对
        // alert("邮箱验证不通过!");
        this.zh = this.$t("findpasssword.yxyzbtg");
        this.zh1 = true;
        return false;
      } else {
        //alert("通过！");
        this.zh1 = false;
        return true;
      }
    },
    // 密码验证
    checkpassword() {
      var reg = /[A-Za-z]/;
      var reg1 = /[0-9]/;
      if (this.psd.length < 6) {
        // mui.alert("密码少于6位，请重新输入");
        this.mm = this.$t("findpasssword.mmsy");
        this.mm1 = true;
        this.psd = "";
        return false;
      }
      if (!reg.test(this.psd)) {
        // mui.alert("密码没有字母，请重新输入");
        this.mm = this.$t("findpasssword.mmmyzm");
        this.mm1 = true;
        return false;
      }
      if (!reg1.test(this.psd)) {
        // mui.alert("密码没有数字，请重新输入");
        this.mm = this.$t("findpasssword.mmmysz");
        this.mm1 = true;
        return false;
      }
      this.mm1 = false;
      return true;
    },
    // 密码再次验证
    checkpassword1() {
      let psd1 = this.psd;
      let psd2 = this.psd1;
      if (psd2 == "") {
        // mui.alert("再次输入密码不能为空");
        this.rm = this.$t("findpasssword.zcmmwk");
        this.rm1 = true;
        return false;
      }
      if (psd1 != psd2) {
        // mui.alert("密码不一致,请重新输入");
        this.rm = this.$t("findpasssword.mmbyz");
        this.rm1 = true;
        return false;
      }
      this.rm1 = false;
      return true;
    },
    psdstrong() {
      this.grade = 0;
      let val = this.psd;
      var reg = /[A-Za-z]/;
      var reg1 = /[0-9]/;
      var reg3 = /[!#$%^&*.]/;
      if (val.length >= 6) {
        if (reg.test(val)) {
          this.grade = 1;
          console.log(0);
          if (reg.test(val) && reg1.test(val)) {
            console.log(1);
            this.grade = 2;
          }
          if (reg.test(val) && reg1.test(val) && reg3.test(val)) {
            console.log(3);
            this.grade = 3;
          }
        }
      }
    },
    zc() {
      let vm = this;
      let ty = document.querySelector(".ty");
      // let v1 = this.cheeckphone();
      let v2 = this.checkpassword();
      let v3 = this.checkpassword1();
      // let v4 = this.validate();
      let v5 = this.checkusername();
      // this.$router.push('/modify_password_status')
      if (v2 && v3 && v5) {
        // if (!ty.checked) {
        //   mui.alert("您需要同意本协议，才能进行下步操作");
        //   return false;
        // }

        this.$axios({
          method: "post",
          url: contextPath + "/api/reg/updatePwdByAccount",
          data: qs.stringify({
            account: vm.username,
            code: vm.yzm,
            pwd: vm.psd,
            languageType: "zh"
          })
        })
          .then(res => {
            console.log(res.data);
            if (res.data.state.code == 20000) {
              // mui.alert(res.data.state.msg);
              localStorage.clear();
              localStorage.setItem("isLogin", 0);
              this.$router.push({
                path: "/modify_password_status",
                query: {
                  title:  this.$t("findpasssword.xgcg"),
                  to: "/login"
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

        // mui.alert("我提交拉");
        // this.$router.push("/registSuccess");
        // localStorage.clear();
        // this.$router.push({
        //   path: "/modify_password_status",
        //   query: {
        //     title: "恭喜您，修改成功!",
        //     to:'/login'
        //   }
        // });
      } else {
        //mui.alert("失败");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.modify_password {
  background-color: #eeeeee;
  width: 9.3rem;
  padding-top: 0.88rem;
  height: 5.54rem;
  .form {
    width: 6rem;
    
    margin: 0 auto;
    em {
      display: block;
      height: 0.5rem;
      color: red;
      width: 3.7rem;
      font-style: normal;
      margin-left: 2.3rem;
      font-size: 0.2rem;
    }
    h3 {
      font-size: 0.24rem;
      font-weight: 400;
      text-indent: 0.7rem;
      margin-bottom: 0.2rem;
    }
    p {
      font-size: 0.2rem;
      overflow: hidden;
      margin-bottom: 0.2rem;
      // padding: 0 0.1rem;
      i {
        float: right;
        height: 0.44rem;
        line-height: 0.44rem;
        font-style: normal;
        position: relative;
        margin-right: 0.1rem;
        font-size: 0.2rem;
        &::before {
          content: "*";
          position: absolute;
          width: 0.1rem;
          height: 0.1rem;
          left: -0.13rem;
          top: 0;
          color: red;
        }
      }
      input {
        width: 3.7rem;
        height: 0.44rem;
        line-height: 0.44rem;
        border-radius: 0.08rem;
        border: solid 0.01rem #bfbfbf;
        float: right;
        font-size: 0.24rem;
        text-indent: 0.2rem;
      }
      ::-webkit-input-placeholder {
        color: #a6a6a6;
        font-size: 0.18rem;
      }
      &:nth-of-type(2) {
        input {
          width: 2.49rem;
        }
        span {
          float: right;
          width: 1.11rem;
          height: 0.44rem;
          border: 0.01rem solid #898989;
          margin-left: 0.1rem;
          border-radius: 0.08rem;
          line-height: 0.44rem;
          text-align: center;
          letter-spacing: 0.02rem;
          user-select: none;
          background: aqua;
        }
      }
    }
    .password_strong {
      display: block;
      height: 0.3rem;
      overflow: hidden;
      width: 2rem;
      display: flex;
      border-radius: 0.08rem;
      margin-left: 2.3rem;
      margin-bottom: 0.28rem;
      li {
        width: 0.66rem;
        height: 0.3rem;
        text-align: center;
        color: #fff;
        font-size: 0.18rem;
        line-height: 0.3rem;
        &:nth-of-type(1) {
          background-image: linear-gradient(
            0deg,
            #f67f41 0%,
            #eb5709 40%,
            #ec732a 50%,
            #eca567 68%,
            #fab48f 100%
          );
        }
        &:nth-of-type(2) {
          background-image: linear-gradient(
            0deg,
            #f9cc51 0%,
            #edad00 40%,
            #f3b91e 50%,
            #fccf54 68%,
            #fbe096 100%
          );
        }
        &:nth-of-type(3) {
          background-image: linear-gradient(
            0deg,
            #c5ea3c 0%,
            #a8d825 40%,
            #b0de30 50%,
            #bee842 68%,
            #d0ee8f 100%
          );
        }
      }
    }
    .agree_info {
      width: 4rem;
      margin-left: 2rem;
      input {
        width: 0.2rem;
        height: 0.2rem;
        border: 0.01rem solid #898989;
      }
      span {
        font-size: 0.18rem;
        a {
          font-style: normal;
          color: #4b97d7;
        }
      }
    }
    .sub {
      transform: translateX(62%);
      width: 3.7rem;
      height: 0.44rem;
      text-align: center;
      line-height: 0.44rem;
      color: #fff;
      font-size: 0.18rem;
      background-color: #6ab1ef;
      margin-top: 0.2rem;
      border-radius: 0.08rem;
      cursor: pointer;
    }
  }
}
</style>