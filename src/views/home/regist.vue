<template>
  <div class="regist">
    <heador></heador>
    <div class="reist_con">
      <div class="form">
        <h3>{{$t("regist.title")}}</h3>
        <p>
          <input type="text" placeholder="例如：example@npacn.com" v-model="username">
          <i>{{$t("regist.zhm")}} ：</i>
        </p>
        <em v-if="zh1" v-html="zh"></em>
        <p>
          <input type="password" :placeholder="$t('login.plhd')" @keyup="psdstrong" v-model.trim="psd">
          <i>{{$t("login.dlmm")}} ：</i>
        </p>
        <em v-if="mm1" v-html="mm"></em>
        <ul v-if="grade !=0" class="password_strong">
          <li v-if="grade >=1">低</li>
          <li v-if="grade >=2">中</li>
          <li v-if="grade >=3">强</li>
        </ul>
        <p>
          <input type="password" v-model.trim="psd1">
          <i>{{$t("findpasssword.cxsrmm")}} ：</i>
        </p>
        <em v-if="rm1" v-html="rm"></em>
        <p>
          <span v-if="timer == 'yw'" @click="createCode1">{{$t("findpasssword.djhq")}}</span>
          <span v-if="timer != 'yw'">{{code1}} {{$t("findpasssword.m")}}</span>
          <input type="text" class="yzm" v-model.trim="yzm1">
          <i>{{$t("findpasssword.yxtyzm")}} ：</i>
        </p>
        <em v-if="checkyzm1" v-html="checkyzm"></em>
        <p>
          <span @click="createCode" v-html="code"></span>
          <input type="text" class="yzm" v-model.trim="yzm">
          <i>{{$t("login.yzm")}} ：</i>
        </p>
        <em v-if="checkyzm1" v-html="checkyzm"></em>
        <div @click="zc" class="sub">
          {{$t("regist.ljzc")}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heador from "../../components/home/header";
import qs from 'qs';
export default {
  data() {
    return {
      code1: 60,
      code: "",
      yzm: "",
      yzm1:"",
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
      timer: "yw"
    };
  },
  mounted() {
    this.createCode();
  },
  methods: {
    createCode1() {
      console.log(11111)
      if(this.username == "") {
        mui.alert(this.$t("login.yywk"));
        return false;
      }
      if (this.timer == "yw") {
        this.code1 = 60;
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          if (this.code1 == 1) {
            clearInterval(this.timer);
            this.timer = "yw";
          }
          this.code1--;
        }, 1000);
        this.getphoneyz();
      }
    },
    getphoneyz() {
      let vm = this;
      if(this.username != ""){
      this.$axios({
        method: "post",
        url: contextPath + "/api/reg/code",
        data: qs.stringify({
          account: vm.username,
          languageType: "zh"
        })
      }).then((res) => {
       if(res.data.state.code == 20002){
          mui.alert(res.data.state.msg);
          return false;
        }
      }).catch((err) => {
        console.log(err)
      })
      }else{
        mui.alert(this.$t("login.yywk"))
        return;
      }
    },
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
    validate() {
      var yzm = this.yzm.toUpperCase();
      var code3 = this.code.toUpperCase();
      if (this.yzm.trim().length == 0) {
        this.checkyzm = this.$t("login.yzmwk");
        this.checkyzm1 = true;
        return false;
      } else if (yzm != code3) {
        this.checkyzm =  this.$t("login.yzmnr");
        this.checkyzm1 = true;
        this.yzm = "";
        yzm = "";
        code3 = "";
        this.createCode();
        return false;
      } else {
        this.checkyzm1 = false;
        return true;
      }
    },
    checkusername() {
      let useinfo = this.username;
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); 
      if (useinfo === "") {
        this.zh = this.$t("login.yywk");
        this.zh1 = true;
        return false;
      } else if (!reg.test(useinfo)) {
        this.zh = this.$t("login.yxyzbtg");
        this.zh1 = true;
        return false;
      } else {
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
    zc() {
      let vm = this;
      let ty = document.querySelector(".ty");
      let v1 = this.checkusername();
      let v2 = this.checkpassword();
      let v3 = this.checkpassword1();
      let v4 = this.validate();
      if (v1 && v2 && v3 && v4) {
        this.$axios({
        method: "post",
        url: contextPath + "/api/reg/userReg",
        data: qs.stringify({
          account: vm.username,
          code: vm.yzm1,
          pwd: vm.psd,
          languageType: "zh"
        })
      }).then((res) => {
        console.log(res.data);
        if(res.data.state.code == 20000){
           vm.$router.push({
          path: "/Success",
          query: {
            title: this.$t("regist.zccg"),
            to:"/login"
          }
        });
        }else if(res.data.state.code == 20002){
          mui.alert(res.data.state.msg);
          return false;
        }
      }).catch((err) => {
        console.log(err)
      })
      }
    }
  },
  components: {
    heador
  }
};
</script>

<style scoped lang="scss">
.regist {
  width: 19.2rem;
  .reist_con {
    width: 12rem;
    margin: 0 auto;
    .form {
      width: 6rem;
      margin-top: 0.88rem;
      margin: 0.88rem auto 0;
      em {
        display: block;
        height: 0.5rem;
        color: red;
        width: 3.7rem;
        font-style: normal;
        margin-left: 2.3rem;
        font-size: 0.2rem;
        // margin-bottom: 0.1rem;
        // margin-left: 0.2rem;
      }
      h3 {
        font-size: 0.24rem;
        font-weight: 400;
        text-indent: 1rem;
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
        &:nth-of-type(4) {
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
            //background: aqua;
          }
        }
        &:nth-of-type(5) {
          input {
            width: 2.49rem;
          }
          span {
            float: right;
            width: 1.11rem;
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
        width: 3.6rem;
        margin-left: 2.1rem;
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
        transform: translateX(55%);
        width: 3.7rem;
        height: 0.44rem;
        text-align: center;
        line-height: 0.44rem;
        color: #fff;
        font-size: 0.18rem;
        background-color: #6ab1ef;
        margin-top: 0.2rem;
        border-radius: 0.08rem;
      }
    }
  }
}
</style>