<template>
    <div class="time_item">
        <div class="time_item_inner">
            <div class="header_title">
                {{$t("nametoken.p0")}}
            </div>
            <div class="time_item_c">
                <p class="title">{{$t("sjty.title")}}</p>
                <p>{{$t("sjty.p1")}}</p>
                <p>{{$t("sjty.p2")}}</p>
                <p>{{$t("sjty.p3")}}</p>
                <p>{{$t("sjty.p4")}}</p>
                <div class="time_item_c_inner">
                    <p>
                        <i>• {{$t("sjty.p5")}} ：</i>
                        <span>{{this.data1.userName}}</span>
                    </p>
                    <p>
                        <i>• {{$t("sjty.p6")}}：</i>
                        <span>{{this.data1.nationality}}</span>
                    </p>
                    <p>
                        <i>• {{$t("sjty.p7")}}：</i>
                        <span>{{this.data1.certificateType}}</span>
                    </p>
                    <p>
                        <i>• {{$t("sjty.p14")}}：</i>
                        <span>{{this.data1.identityCard}}</span>
                    </p>
                    <p>
                        <i>• {{$t("sjty.p8")}}：</i>
                        <span>{{this.data1.certificateCreateTime}}</span>
                    </p>
                    <p>
                        <i>• {{$t("sjty.p9")}}：</i>
                        <span>{{this.data1.certificateEndTime}}</span>
                    </p>
                    <p>
                        <i>• {{$t("sjty.p10")}}：</i>
                        <span>{{this.data1.ETHNum}}ETH</span>
                    </p>
                    <p v-if="this.data1.privateEXP == 1">• {{$t("sjty.p11")}}</p>
                    <p v-if="this.data1.privateEXP == 0">• {{$t("sjty.p15")}}</p>
                    <p v-if="this.data1.publicExp == 1">• {{$t("sjty.p12")}}</p>
                    <p v-if="this.data1.publicExp == 0">• {{$t("sjty.p16")}}</p>
                    <p v-if="this.data1.TokenExp == 1">• {{$t("sjty.p13")}}</p>
                    <p v-if="this.data1.TokenExp == 0">• {{$t("sjty.p17")}}</p>
                    <ul>
                        <li><img :src="this.data1.frontUrl" alt="">
                            <p>{{$t("sjty.p18")}}</p>
                        </li>
                        <li><img :src="this.data1.handUrl" alt="">
                            <p>{{$t("sjty.p19")}}</p>
                        </li>
                    </ul>
                </div>
                <div class="xyb" @click="gonext">
                   {{$t("bd.xyb")}}
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {}
      // data:  JSON.parse(sessionStorage.getItem("userinfo"))
      //      userName: vm.username,
      //   nationality: vm.value1,
      //   certificateType: vm.value,
      //   identityCard: vm.idcard,
      //   certificateCreateTime: vm.value5,
      //   certificateEndTime: vm.value6,
      //   frontUrl: vm.pto1,
      //   handUrl: vm.pto3,
      //   ETHNum: vm.hb,
      //   privateEXP: vm.radio,
      //   publicExp: vm.radio1,
      //   TokenExp: vm.radio2,
      //   token: localStorage.token,
      //   languageType: "zh"
    };
  },
  mounted() {
    this.cldata();
  },
  methods: {
    gonext() {
        this.$router.push('/Info_authentication')
    },
    cldata() {
      this.data1 = JSON.parse(sessionStorage.getItem("userinfo"));
      for (const key in this.data1) {
        if (key == "nationality") {
          if (this.data1[key] == 0) {
            this.data1[key] = "中国大陆";
          } else if (this.data1[key] == 1) {
            this.data1[key] = "中国港澳台";
          } else if (this.data1[key] == 2) {
            this.data1[key] = "美国";
          } else if (this.data1[key] == 3) {
            this.data1[key] = "其他国家";
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
.time_item {
  box-sizing: border-box;
  padding: 0.2rem 0.4rem;
  width: 9.3rem;
  height: 12.5rem;
  background: #eee;
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
  .time_item_c {
    width: 7.5rem;
    margin: 0.3rem auto;
    p {
      width: 7.21rem;
      //   height: 0.37rem;
      font-family: MicrosoftYaHei;
      font-size: 0.16rem;
      font-weight: normal;
      font-stretch: normal;
      line-height: 0.37rem;
      color: #666666;
      &.title {
        text-align: center;
      }
    }

    .time_item_c_inner {
      margin-top: 0.3rem;
      p {
        width: 7.21rem;
        //   height: 0.37rem;
        font-family: MicrosoftYaHei;
        font-size: 0.16rem;
        font-weight: normal;
        font-stretch: normal;
        line-height: 0.37rem;
        color: #666666;
        &.title {
          text-align: center;
        }
        i {
          display: inline-block;
          //   width: 2.1rem;
          font-style: normal;
          //   text-align: right;
          margin-right: 0.05rem;
        }
      }
      ul {
        margin-top: 0.5rem;
        height: 3rem;
        li {
          width: 2.5rem;
          position: relative;
          height: 3rem;
          float: left;
          margin-right: 0.8rem;
          img {
            width: 100%;
          }
          p {
            position: absolute;
            width: 100%;
            text-align: center;
            bottom: 0rem;
          }
        }
      }
    }
    .xyb {
      width: 2.6rem;
      height: 0.4rem;
      background-color: #6ab1ef;
      border-radius: 0.06rem;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.18rem;
      color: #fff;
      transform: translateX(100%);
      margin-top: 0.5rem;
      cursor: pointer;
    }
  }
}
</style>