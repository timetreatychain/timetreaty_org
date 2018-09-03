<template>
  <div class="login">
    <heador></heador>
    <div class="reist_con">
      <div class="form">
        <h3>{{$t("login.title")}}</h3>
        <p>
          <a href="javascript:void(0);" @click="selecthy(3)" :class="{'cur' : hy == 3}">{{$t("login.vip[2]")}}</a>
          <a href="javascript:void(0);" @click="selecthy(2)" :class="{'cur' : hy == 2}">{{$t("login.vip[1]")}}</a>
          <a href="javascript:void(0);" @click="selecthy(1)" :class="{'cur' : hy == 1}">{{$t("login.vip[0]")}}</a>
          <!-- <input type="text" v-model.trim="psd1"> -->
          <i>{{$t("login.djyz")}} ：</i>
        </p>
        <p>
          <input type="text" placeholder="例如：example@npacn.com" v-model="username">
          <i>{{$t("login.account")}} ：</i>
        </p>
        <em v-if="zh1" v-html="zh"></em>
        <p>
          <input type="password" :placeholder="$t('login.plhd')" @keyup="psdstrong" v-model.trim="psd">
          <i>{{$t("login.dlmm")}} ：</i>
        </p>
        <em v-if="mm1" v-html="mm"></em>
        <ul v-if="grade !=0" class="password_strong">
          <li v-if="grade >=1">{{$t("login.dd")}}</li>
          <li v-if="grade >=2">{{$t("login.zz")}}</li>
          <li v-if="grade >=3">{{$t("login.strong")}}</li>
        </ul>
        <p>
          <span @click="createCode" v-html="code"></span>
          <input type="text" class="yzm" v-model.trim="yzm">
          <i>{{$t("login.yzm")}} ：</i>
        </p>
        <em v-if="checkyzm1" v-html="checkyzm"></em>
        <p v-if="hy == 2">
          <input type="text" :placeholder="$t('login.yzggyzm')" @keyup="psdstrong" v-model.trim="ggyzm">
          <i>{{$t("login.ggyzm")}}  ：</i>
        </p>
        <p v-if="hy == 3">
          <input type="text" :placeholder="$t('login.yzggyzm')" @keyup="psdstrong" v-model.trim="ggyzm">
          <i>{{$t("login.ggyzm")}} ：</i>
        </p>
        <!-- <p v-if="hy == 3" class="sxt">
          <input type="text" placeholder="请输入六位数的验证码" @keyup="psdstrong" v-model.trim="ggyzm">
          <span>（您的电脑必须安装有摄像头）</span>
          <a href="javascript:vivo(0);"></a>
          <i>身 份 认 证 ：</i>
        </p> -->
        <!-- <div class="agree_info">
          <input type="checkbox" name="Car" checked class="ty">
          <span>{{$t("login.xy")}}
            <a href="">{{$t("login.yd")}}</a>
          </span>
        </div> -->
        <div v-if="hy == 1" @click="zc(1)" class="sub">
         {{$t("login.ljdl")}}
        </div>
        <div v-if="hy == 2" @click="zc(2)" class="sub">
          {{$t("login.ljdl")}}
        </div>
        <div v-if="hy == 3" @click="zc(3)" class="sub">
          {{$t("login.ljdl")}}
        </div>
        <div class="login_bottom">
          <router-link to="/findpassword">{{$t("login.zhmm")}}</router-link>
          <router-link to="/regist">{{$t("login.ljzc")}}</router-link>
        </div>
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
      code: "",
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
      hy: 1,
      ggyzm: ""
    };
  },
  components: {
    heador,
    userkonw
  },
  methods: {
    createCode() {
      let codeLength = 4;
      let code1 = "";
      let random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (var i = 0; i < codeLength; i++) {
        let index = Math.floor(Math.random() * 36);
        code1 += random[index];
      }
      this.code = code1;
    },
    // 验证码验证
    validate() {
      var yzm = this.yzm.toUpperCase();
      var code3 = this.code.toUpperCase();
      if (this.yzm.trim().length == 0) {
        // alert("验证码不能为空");
        this.checkyzm = this.$t("login.yzmwk");
        this.checkyzm1 = true;
        this.createCode();
        return false;
      } else if (yzm != code3) {
        // mui.alert("验证码不正确，请重新输入");
        this.checkyzm =  this.$t("login.yzmnr");
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
    // 账户名验证
    checkusername() {
      let useinfo = this.username;
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); //正则表达式 //var obj = document.getElementById("mazey"); //要验证的对象
      if (useinfo === "") {
        //输入不能为空
        //alert("邮箱输入不能为空!");
        this.zh = this.$t("login.yywk");
        this.zh1 = true;
        return false;
      } else if (!reg.test(useinfo)) {
        //正则验证不通过，格式不对
        // alert("邮箱验证不通过!");
        this.zh = this.$t("login.yxyzbtg");
        this.zh1 = true;
        return false;
      } else {
        //alert("通过！");
        this.zh1 = false;
        return true;
      }
    },
    checkpassword() {
      var reg = /[A-Za-z]/;
      var reg1 = /[0-9]/;
      if (this.psd.length < 6) {
        this.mm = this.$t("login.mmsy");
        this.mm1 = true;
        this.psd = "";
        return false;
      }
      if (!reg.test(this.psd)) {
        this.mm = this.$t("login.mmmyzm");
        this.mm1 = true;
        return false;
      }
      if (!reg1.test(this.psd)) {
        this.mm = this.$t("login.mmmysz");
        this.mm1 = true;
        return false;
      }
      this.mm1 = false;
      return true;
    },
    checkpassword1() {
      let psd1 = this.psd;
      let psd2 = this.psd1;
      if (psd2 == "") {
        this.rm = this.$t("login.zcmmwk");
        this.rm1 = true;
        return false;
      }
      if (psd1 != psd2) {
        this.rm = this.$t("login.mmbyz");
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
    // 注册
    zc(val) {
      let vm = this;
      let ty = document.querySelector(".ty");
      let v1 = this.checkusername();
      let v2 = this.checkpassword();
      let v4 = this.validate();
      if (v1 && v2 && v4) {
        if (val == 1) {
          this.$axios({
            method: "post",
            url: contextPath + "/api/reg/login",
            data: qs.stringify({
              username: vm.username,
              pwd: vm.psd,
              type: '1',
              languageType: "zh"
            })
          })
            .then(res => {
              console.log(res.data);
              if (res.data.state.code == 20000) {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("isLogin", 1);
                localStorage.setItem("username", res.data.data.username);
                localStorage.setItem("rank", val);
                vm.$router.push("/nav");
                location.reload();
              } else if (res.data.state.code == 20002) {
                mui.alert(res.data.state.msg);
                return false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else if (val == 2) {
          this.$axios({
            method: "post",
            url: contextPath + "/api/reg/login",
            data: qs.stringify({
              username: vm.username,
              pwd: vm.psd,
              type: '2',
              code: vm.ggyzm,
              languageType: "zh"
            })
          })
            .then(res => {
              console.log(res.data);
              if (res.data.state.code == 20000) {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("isLogin", 1);
                localStorage.setItem("username", res.data.data.username);
                localStorage.setItem("rank", val);
                vm.$router.push("/nav");
                location.reload();
              } else if (res.data.state.code == 20002) {
                mui.alert(res.data.state.msg);
                return false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else if (val == 3) {
          this.$axios({
            method: "post",
            url: contextPath + "/api/reg/login",
            data: qs.stringify({
              username: vm.username,
              pwd: vm.psd,
              type: '3',
              code: vm.ggyzm,
              languageType: "zh"
            })
          })
            .then(res => {
              console.log(res.data);
              if (res.data.state.code == 20000) {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("isLogin", 1);
                localStorage.setItem("username", res.data.data.username);
                localStorage.setItem("rank", val);
                vm.$router.push("/nav");
                location.reload();
              } else if (res.data.state.code == 20002) {
                mui.alert(res.data.state.msg);
                return false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        }else{
          this.$axios({
            method: "post",
            url: contextPath + "/api/reg/login",
            data: qs.stringify({
              username: vm.username,
              pwd: vm.psd,
              type: '1',
              languageType: "zh"
            })
          })
            .then(res => {
              console.log(res.data);
              if (res.data.state.code == 20000) {
                localStorage.setItem("token", res.data.data.token);
                localStorage.setItem("isLogin", 1);
                localStorage.setItem("username", res.data.data.username);
                localStorage.setItem("rank", val);
                vm.$router.push("/nav");
                location.reload();
              } else if (res.data.state.code == 20002) {
                mui.alert(res.data.state.msg);
                return false;
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      } else {
      	
      }
    },
    selecthy(val) {
      this.hy = val;
    }
  },
  mounted() {
    this.createCode();
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 19.2rem;
  .reist_con {
    width: 12rem;
    margin: 0 auto;
    .form {
      // width: 5.8rem;
      width: 7rem;
      margin-top: 0.88rem;
      margin: 0.88rem auto 0;
      em {
        display: block;
        height: 0.5rem;
        color: red;
        width: 5rem;
        font-style: normal;
        margin-left: 2.3rem;
        font-size: 0.2rem;
      }
      h3 {
        font-size: 0.24rem;
        font-weight: 400;
        text-indent: 0.42rem;
        margin-bottom: 0.2rem;
       	text-indent: 3.77em;
      }
      p {
        font-size: 0.2rem;
        overflow: hidden;
        margin-bottom: 0.2rem;
        // padding: 0 0.1rem;
        i {
          width: 2.1rem;
          float: left;
          height: 0.44rem;
          line-height: 0.44rem;
          font-style: normal;
          position: relative;
          margin-right: 0.1rem;
          font-size: 0.18rem;
          text-align: right;
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
        &:nth-of-type(1) {
          a {
            float: right;
            // float: left;
            font-size: 0.18rem;
            line-height: 0.44rem;
            text-align: center;
            // width: 1.1rem;
            width: 20.5%;
            // padding: 0.05rem 0.1rem;
            border: 0.01rem solid #898989;
            border-radius: 0.08rem;
            margin-left: 0.16rem;
            white-space:nowrap;
            &:nth-of-type(3) {
              margin-left: 0.04rem;
            }
            &.cur {
              background-color: #6ab1ef;
              color: #fff;
            }
          }
        }
        input {
          width: 4.7rem;
          // width: 5.8rem;
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
        &:nth-of-type(4) {
          input {
            // width: 2.49rem;
            width: 43%;
          }
          span {
            float: right;
            width: 22%;
            // width: 1.11rem;
            height: 0.44rem;
            margin-left: 0.1rem;
            border-radius: 0.08rem;
            line-height: 0.44rem;
            text-align: center;
            letter-spacing: 0.02rem;
            user-select: none;
            background: #8ad4ff94;
          }
        }
        &.sxt {
          a {
            float: right;
            width: 0.46rem;
            height: 0.38rem;
            background: darkcyan;
          }
          span {
            float: right;
            line-height: 0.38rem;
            width: 3.3rem;
          }
        }
      }
      .password_strong {
        display: block;
        height: 0.3rem;
        overflow: hidden;
        width: 3rem;
        display: flex;
        border-radius: 0.08rem;
        margin-left: 2.3rem;
        margin-bottom: 0.28rem;
        li {
          width: 0.9rem;
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
        width: 4.5rem;
        margin-left: 2.3rem;
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
        transform: translateX(61%);
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
      .login_bottom {
        transform: translateX(61%);
        width: 3.7rem;
        height: 0.5rem;
        line-height: 0.5rem;
        a {
          &:nth-of-type(1) {
            float: left;
            font-size: 0.18rem;
            color: #333333;
          }
          &:nth-of-type(2) {
            float: right;
            font-size: 0.18rem;
            color: #6ab1ef;
          }
        }
      }
    }
  }
}
</style>