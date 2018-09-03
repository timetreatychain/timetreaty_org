<template>
  <div class="real_name">
    <div class="header_title">
     {{$t("nametoken.p0")}}
    </div>
    <div class="real_con">
      <div class="realname_from">
        <div class="bd">
          <i>{{$t("bd.name")}}：</i>
          <input type="text" v-model="username">
        </div>
        <div class="bd">
          <i>{{$t("bd.nation")}}：</i>
          <el-select v-model="value1" :placeholder='$t("person_info.qxz")'>
            <el-option v-for="item in options1" :key="item.value1" :label="item.labe1l" :value="item.value1">
            </el-option>
          </el-select>
        </div>
        <div class="bd">
          <i>{{$t("bd.zjlx")}}：</i>
          <el-select v-model="value" :placeholder='$t("bd.qxz")'>
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="bd">
          <i>{{$t("bd.zjhm")}}：</i>
          <input type="text" v-model="idcard">
        </div>
        <div class="bd">
          <i>{{$t("bd.zjbf")}}：</i>
          <el-date-picker v-model="value5" type="date" :placeholder='$t("bd.xzry")'>
          </el-date-picker>
        </div>
        <div class="bd">
          <i>{{$t("bd.zjdq")}}：</i>
          <el-date-picker v-model="value6" type="date" :placeholder='$t("bd.xzry")'>
          </el-date-picker>
        </div>
        <div class="bd">
          <i>{{$t("bd.tkenjz")}}：</i>
          <input type="text" v-model="hb">
          <span class="dw">ETH</span>
        </div>
        <div class="bd">
          <i>{{$t("bd.smjy")}}：</i>
          <div class="bd_r_q">
            <el-radio v-model="radio" label="1">{{$t("bd.yes")}}</el-radio>
            <el-radio v-model="radio" label="0">{{$t("bd.no")}}</el-radio>
          </div>
        </div>
        <div class="bd">
          <i>{{$t("bd.gmjy")}}：</i>
          <div class="bd_r_q">
            <el-radio v-model="radio1" label="1">{{$t("bd.yes")}}</el-radio>
            <el-radio v-model="radio1" label="0">{{$t("bd.no")}}</el-radio>
          </div>
        </div>
        <div class="bd">
          <i>{{$t("bd.tkjy")}}：</i>
          <div class="bd_r_q">
            <el-radio v-model="radio2" label="1">{{$t("bd.yes")}} </el-radio>
            <el-radio v-model="radio2" label="0">{{$t("bd.no")}}</el-radio>
          </div>
        </div>

        <div class="bd1">
          <i>{{$t("bd.zjzmz")}}：</i>
          <div class="sfz_pto">
            <img class="img2" src="../../common/img/usercenter/zmtb.png" alt="">
            <div class="sfz_pto_r">
              <img class="img3" src="../../common/img/usercenter/sfz_zm.png" alt="">
              <span>{{$t("bd.zjqxz")}}</span>
            </div>
            <div class="pto_info">
              <p>{{$t("bd.zzjinfo")}}
              </p>
            </div>
            <upload1 :imgid="0" @pto="tjpto"></upload1>
          </div>

        </div>
        <!-- <div class="bd1">
          <i>证件背面照：</i>
          <div class="sfz_pto">
            <img class="img2" src="../../common/img/usercenter/bg_sfz.png" alt="">
            <div class="sfz_pto_r">
              <img class="img3" src="../../common/img/usercenter/sfz_bg2.png" alt="">
              <span>证件照上面文字清晰可识别：</span>
            </div>
            <div class="pto_info">
              <p>证件上的所有信息要清晰可见，不允许任何地方修改或遮挡，必须能看清楚证件号和姓名。 支持JPG/JPEG。
              </p>

            </div>
            <upload2 :imgid="1" @pto="tjpto"></upload2>
          </div>
        </div> -->
        <div class="bd1">
          <i>{{$t("bd.sczjz")}}：</i>
          <div class="sfz_pto">
            <img class="img2" src="../../common/img/usercenter/scsfz.png" alt="">
            <div class="sfz_pto_r">
              <img class="img3" src="../../common/img/usercenter/sfzmz.png" alt="">
              <span>{{$t("bd.sczjzinfo")}}
              </span>
            </div>
            <div class="pto_info">
              <p> 1.{{$t("bd.p1")}}</p>
              <p>2.{{$t("bd.p2")}}</p>
              <p>3.{{$t("bd.p3")}}</p>
              <p>4.{{$t("bd.p4")}}</p>
            </div>
            <upload3 :imgid="1" @pto="tjpto"></upload3>
          </div>

        </div>
      </div>
      <!-- <div class="scsh" @click="scsh">
        上传审核
      </div> -->
      <div class="xyb" @click="xyb">
        {{$t("bd.xyb")}}
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import "../../common/js/upload.js";
import upload1 from "../../views/usercenter/upload";
import upload2 from "../../views/usercenter/upload";
import upload3 from "../../views/usercenter/upload";
export default {
  data() {
    return {
      radio: "",
      radio1: "",
      radio2: "",
      hb: "",
      options1: [
        {
          value1: this.$t("bd.zgdl1"),
          label1: this.$t("bd.zgdl1"),
        },
        {
          value1: this.$t("bd.zgdl2"),
          label1: this.$t("bd.zgdl2"),
        },
        {
          value1: this.$t("bd.zgdl3"),
          label1: this.$t("bd.zgdl3"),
        },
        {
          value1: this.$t("bd.zgdl4"),
          label1: this.$t("bd.zgdl4"),
        }
      ],
      username: "",
      idcard: "",
      value1: "",
      value2: "",
      pto1: "",
      // pto2: "",
      pto3: "",
      showbtn: true,
      options: [
        {
          value: this.$t("bd.hz"),
          label: this.$t("bd.hz")
        }
      ],
      value: "",
      value5: "",
      value6: "",
      gonext: true
    };
  },
  methods: {
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
    xyb() {
      let vm = this;
      if (!document.querySelector("#img0")) {
        mui.alert(this.$t("bd.qtxwz"));
        return false;
      }
      this.pto1 = document.querySelector("#img0").src;
      this.pto3 = document.querySelector("#img1").src;
      if (this.username == "") {
        mui.alert(this.$t("bd.name"));
        return false;
      }
      
      if (this.value1 == "") {
        mui.alert(this.$t("bd.nation"));
        return false;
      }
      if (this.hb == "") {
        mui.alert(this.$t("bd.tkenjz"));
        return false;
      }
      if (this.radio == "") {
        mui.alert(this.$t("bd.smjy"));
        return false;
      }
      if (this.radio1 == "") {
        mui.alert(this.$t("bd.gmjy"));
        return false;
      }
      if (this.radio2 == "") {
        mui.alert(this.$t("bd.tkjy"));
        return false;
      }
      if (this.value == "") {
        mui.alert(this.$t("bd.zjlx"));
        return false;
      }
      if (this.idcard == "") {
        mui.alert(this.$t("bd.zjhm"));
        return false;
      }
      let reg = "/^[a-zA-Z0-9]{5,17}$/";
      let val4 = this.idcard;
      if (!/^[a-zA-Z0-9]{5,17}$/.test(val4)) {
        mui.alert(this.$t("bd.zjbzq"));
        return false;
      }
      if (this.value5 == "") {
        mui.alert(this.$t("bd.zjbf"));
        return false;
      }
      if (this.value6 == "") {
        mui.alert(this.$t("bd.zjdq"));
        return false;
      }
      if (this.pto1 == "" && this.pto3 == "") {
        mui.alert(this.$t("bd.lzzp"));
        return false;
      }
      if (this.value1 == this.$t("zgdl1")) {
        this.value1 = 0;
      } else if (this.value1 == this.$t("zgdl2")) {
        this.value1 = 1;
      } else if (this.value1 == this.$t("zgdl3")) {
        this.value1 = 2;
      } else if (this.value1 == this.$t("zgdl4")) {
        this.value1 = 3;
      }

      if (this.gonext) {
         if (this.value1 == this.$t("bd.zgdl1")) {
        this.value1 = 0;
      } else if (this.value1 == this.$t("bd.zgdl2")) {
        this.value1 = 1;
      } else if (this.value1 == this.$t("bd.zgdl3")) {
        this.value1 = 2;
      } else if (this.value1 == this.$t("bd.zgd4")) {
        this.value1 = 3;
      }
        let userinfo1 = {
          userName: vm.username,
          nationality: vm.value1,
          certificateType: vm.value,
          identityCard: vm.idcard,
          certificateCreateTime: vm.value5,
          certificateEndTime: vm.value6,
          frontUrl: vm.pto1,
          handUrl: vm.pto3,
          ETHNum: vm.hb,
          privateEXP: vm.radio,
          publicExp: vm.radio1,
          TokenExp: vm.radio2,
          token: localStorage.token,
          languageType: localStorage.language
        };
        sessionStorage.setItem("userinfo", JSON.stringify(userinfo1));
        this.$router.push("/time_item");
      } else {
        mui.alert("请先填好此表信息");
        return false;
      }
    },
    tjpto(val) {
      console.log(val);
    },
    filechange() {
      var img = event.target.files[0];
      //选择的文件
      var reader = new FileReader();
      var rs = reader.readAsDataURL(img);
      reader.onload = function(e) {
        var dataBase64 = e.target.result;
        //result是你读取到的文件内容，此属性读取完成才能使用
        console.log(dataBase64);
        //dataBase64即为图片转码后的base64数据
      };
    },
    scsh() {
      this.pto1 = document.querySelector("#img0").src;
      // this.pto2 = document.querySelector("#img1").src;
      this.pto3 = document.querySelector("#img2").src;
      if (this.username == "") {
        mui.alert("姓名不能为空");
        return false;
      }
      if (this.value1 == "") {
        mui.alert("请选择国家");
        return false;
      }
      if (this.hb == "") {
        mui.alert("请输入token价值");
        return false;
      }
      if (this.radio == "") {
        mui.alert("请选择是否有过私募经验");
        return false;
      }
      if (this.radio1 == "") {
        mui.alert("请选择是否有过公募经验");
        return false;
      }
      if (this.radio2 == "") {
        mui.alert("请选择是否有过Token交易经验");
        return false;
      }
      if (this.value == "") {
        mui.alert("请选择证件类型");
        return false;
      }
      if (this.idcard == "") {
        mui.alert("请输入证件号码");
        return false;
      }
      let reg = "/^[a-zA-Z0-9]{5,17}$/";
      let val4 = this.idcard;
      if (!/^[a-zA-Z0-9]{5,17}$/.test(val4)) {
        mui.alert("证件号码不正确");
        return false;
      }
      if (this.value5 == "") {
        mui.alert("请输入证件颁发日期");
        return false;
      }
      if (this.value6 == "") {
        mui.alert("证件到期日期");
        return false;
      }
      if (this.pto1 == "" && this.pto3 == "") {
        mui.alert("请输入两张证件照图片");
        return false;
      }
      let vm = this;
      if (this.value1 == this.$t("bd.zgdl1")) {
        this.value1 = 0;
      } else if (this.value1 == this.$t("bd.zgdl2")) {
        this.value1 = 1;
      } else if (this.value1 == this.$t("bd.zgdl3")) {
        this.value1 = 2;
      } else if (this.value1 == this.$t("bd.zgd4")) {
        this.value1 = 3;
      }
      this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/uploadAntiAddiction",
        data: qs.stringify({
          userName: vm.username,
          nationality: vm.value1,
          certificateType: vm.value,
          identityCard: vm.idcard,
          certificateCreateTime: vm.value5,
          certificateEndTime: vm.value6,
          frontUrl: vm.pto1,
          // backUrl: vm.pto2,
          handUrl: vm.pto3,
          ETHNum: vm.hb,
          privateEXP: vm.radio,
          publicExp: vm.radio1,
          TokenExp: vm.radio2,
          token: localStorage.token,
          languageType: localStorage.language
        })
      })
        .then(res => {
          console.log(res.data);
          if (res.data.state.code == 20000) {
            mui.alert(res.data.state.msg);
            vm.gonext = true;
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
    }
  },
  components: {
    upload1,
    upload3,
    upload2
  },
  mounted() {
    // this.checklb();
  }
};
</script>


<style lang="scss">
.real_name {
  .bd {
    .el-input__inner {
      height: 0.6rem;
      // width: 2.48rem;
      width: 4rem;
    }
  }
  
}
.el-date-table th {
    font-size: 0.18rem;
  }
  .el-date-table span {
    font-size: 0.18rem;
  }
</style>
<style scoped lang="scss">
.real_name {
  overflow: hidden;
  background-color: #eeeeee;
  width: 9.3rem;
  box-sizing: border-box;
  padding: 0.4rem;
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
  .scsh {
    width: 1.26rem;
    height: 0.4rem;
    background-color: #6ab1ef;
    border-radius: 0.04rem;
    margin-top: 0.5rem;
    cursor: pointer;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.2rem;
    color: #fff;
    margin-left: 1.7rem;
  }
  .xyb {
    float: left;
    width: 2rem;
    height: 0.6rem;
    background-color: #6ab1ef;
    border-radius: 0.04rem;
    margin-top: 0.5rem;
    cursor: pointer;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.2rem;
    color: #fff;
    margin-left: 3.5rem;
  }
  .realname_from {
    margin-top: 0.3rem;
    .bd {
      position: relative;
      .bd_r_q {
        width: 4rem;
        display: inline-block;
      }
      span.dw {
        position: absolute;
        width: 0.4rem;
        height: 0.11rem;
        color: #488abb;
        font-size: 0.14rem;
        right: 0.6rem;
        top: 36%;
      }
      width: 8rem;
      margin: 0 auto 0.2rem;
      i {
        display: inline-block;
        width: 3.4rem;
        height: 0.6rem;
        font-size: 0.18rem;
        line-height: 0.6rem;
        text-align: right;
        color: #666;
        font-style: normal;
      }
      input {
        // width: 2.48rem;
        width: 4rem;
        height: 0.6rem;
        border: none;
        border-radius: 0.08rem;
        outline: none;
      }
    }
    .bd1 {
      overflow: hidden;
      margin-bottom: 0.2rem;
      i {
        float: left;
        font-style: normal;
        display: inline-block;
        width: 1.4rem;
        height: 0.9rem;
        font-size: 0.18rem;
        line-height: 0.9rem;
        text-align: right;
        color: #666;
        margin-right: 0.07rem;
        margin-left: 0.2rem;
      }
      .sfz_pto {
        float: left;
        // width: 6rem;
        // height: 2.07rem;
        overflow: hidden;
        .img2 {
          float: left;
          width: 1.34rem;
          height: 0.9rem;
          margin-right: 0.5rem;
        }
        .sfz_pto_r {
          background: #fff;
          float: left;
          width: 4.1rem;
          .img3 {
            float: left;
            width: 1.34rem;
            height: 0.9rem;
            margin-right: 0.1rem;
          }
          span {
            float: left;
    width: 2rem;
    height: 0.37rem;
    font-family: MicrosoftYaHei;
    font-size: 0.18rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.3rem;
    letter-spacing: 0;
    color: #666666;
          }
        }
        .pto_info {
          clear: both;
          //   width: 5.52rem;
          font-family: MicrosoftYaHei;
          font-size: 0.18rem;
          font-weight: normal;
          font-stretch: normal;
          //   line-height: 0.37rem;
          letter-spacing: 0rem;
          color: #666666;
          padding-top: 0.2rem;
          p {
            width: 5.52rem;
            line-height: 0.25rem;
            //   height: 0.37rem;
            font-size: 0.18rem;
          }
        }
        .sc {
          width: 3.26rem;
          //   height: 0.4rem;
          background-color: #ffffff;
          border-radius: 0.04rem;
          //   border: solid 0.01rem #bababa;
          //   text-align: center;
          line-height: 0.4rem;
          color: #7c7c7c;
          margin-top: 0.2rem;
          cursor: pointer;
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>