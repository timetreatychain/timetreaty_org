<template>
    <div class="Info_authentication">
        <div class="header_title">
            {{$t("Info_authentication.sm")}}
        </div>
        <div class="Info_authentication_c">
            <p class="title">{{$t("Info_authentication.title")}}</p>
            <p>{{$t("Info_authentication.p1")}}</p>
            <p>{{$t("Info_authentication.p2")}}</p>
            <p>{{$t("Info_authentication.p3")}}</p>
            <ul>
                <li>
                    <i>• {{$t("Info_authentication.pname")}}:</i>
                    <span>{{this.data1.userName}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.plity")}}:</i>
                    <span>{{this.data1.nationality}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.pzj")}}:</i>
                    <span>{{this.data1.certificateType}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.pzjhm")}}:</i>
                    <span>{{this.data1.identityCard}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.pzjbb")}}:</i>
                    <span>{{this.data1.certificateCreateTime}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.pzjdq")}}:</i>
                    <span>{{this.data1.certificateEndTime}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.psf")}}：</i>
                    <span v-if="this.data1.privateEXP == 1">{{$t("Info_authentication.ps")}}</span>
                    <span v-if="this.data1.privateEXP == 0">{{$t("Info_authentication.pf")}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.psfy")}}：</i>
                    <span v-if="this.data1.publicExp == 1">{{$t("Info_authentication.ps")}}</span>
                    <span v-if="this.data1.publicExp == 0">{{$t("Info_authentication.pf")}}</span>
                </li>
                <li>
                    <i>• {{$t("Info_authentication.psfyg")}}:</i>
                    <span v-if="this.data1.TokenExp == 1">{{$t("Info_authentication.ps")}}</span>
                    <span v-if="this.data1.TokenExp == 0">{{$t("Info_authentication.pf")}}</span>
                </li>
            </ul>
            <div class="agree_info">
          <input type="checkbox" name="Car" checked class="ty">
          <span>{{$t("login.xy")}}
          </span>
        </div>
        </div>
        <div class="xyb" @click="gonext">
                    {{$t("Info_authentication.qrdz")}}
                </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {}
    };
  },
  mounted() {
    this.cldata();
  },
  methods: {
    gonext() {
      let ty = document.querySelector('.ty');
      if (!ty.checked) {
          mui.alert(this.$t("login.tyxy"));
          return false;
        }
     this.$router.push("/agreement");
    },
    cldata() {
    	let vm=this;
      this.data1 = JSON.parse(sessionStorage.getItem("userinfo"));
      for (const key in this.data1) {
        if (key == "nationality") {
          if (this.data1[key] == 0) {
            this.data1[key] = vm.$t("Info_authentication.pdl");
          } else if (this.data1[key] == 1) {
            this.data1[key] = vm.$t("Info_authentication.pgat");
          } else if (this.data1[key] == 2) {
            this.data1[key] = vm.$t("Info_authentication.pmg");
          } else if (this.data1[key] == 3) {
            this.data1[key] = vm.$t("Info_authentication.pqt");
          }
        }
        if(key == 'certificateCreateTime') {
            this.data1[key] = new Date(this.data1[key]).toLocaleDateString()
        }
        if(key == 'certificateEndTime') {
            this.data1[key] = new Date(this.data1[key]).toLocaleDateString()
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.Info_authentication {
    position: relative;
  width: 9.3rem;
  height: 12rem;
  background: #eee;
  box-sizing: border-box;
  padding: 0.2rem 0.4rem;
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
  .Info_authentication_c {
    background: #fff;
    width: 8.51rem;
    height: 8.95rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
    padding: 0.2rem;
    p {
      width: 7.2rem;
      //   height: 2.08rem;
      font-family: MicrosoftYaHei;
      font-size: 0.2rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.37rem;
      letter-spacing: 0;
      color: #666666;
      &.title {
        text-align: center;
        font-size: 0.24rem;
        color: #333;
        margin-bottom: 0.2rem;
      }
    }
    ul {
        margin-top: 0.2rem;
      li {
        i {
          font-size: 0.2rem;
          font-style: normal;
          display: inline-block;
          color: #666666;
          margin-right: 0.1rem;
        }
        span {
            font-size: 0.2rem;
          display: inline-block;
          color: #666666;
          border-bottom: 0.01rem solid #000;
        }
      }
    }
    .agree_info {
        // width: 4.5rem;
        // margin-left: 2.3rem;
        margin-top: 1rem;
        transform: translateX(0);
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
    
  }
  .xyb {
      position: absolute;
      left: 50%;
      bottom: 0.8rem;
      // width: 2.6rem;
      padding: 0.05rem 0.1rem;
      height: 0.4rem;
      background-color: #6ab1ef;
      border-radius: 0.06rem;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.18rem;
      color: #fff;
      transform: translateX(-50%);
      margin-top: 0.5rem;
      cursor: pointer;
    //   margin-top: 1rem;
    }
}
</style>