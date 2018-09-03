<template>
	<div class="name_token">
		<div class="title">
			{{$t("nametoken.p0")}}
		</div>
		<div class="token">
			<div class="txt">{{$t("nametoken.title")}}</div>
			<div class="inps">
				<div class="one">
					<div class="tokentxt">{{tokentxt}}</div>
					<div class="btncopy" v-clipboard:copy="tokentxt" v-clipboard:success="btncopy">{{$t("nametoken.p3")}}</div>
				</div>
				<div class="number">
					<span>{{$t("nametoken.tip")}}：</span>
					{{$t("nametoken.p1")}}
					<span>{{count}}个ETH</span>
					{{$t("nametoken.p2")}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
	  tokentxt: "",
	  count:""
    };
  },
  mounted(){
	  this.linpai()
  } ,
  methods: {
    btncopy() {
      mui.toast("已复制到剪切板！");
    },
    // 令牌
    linpai() {
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
            vm.tokentxt = res.data.data.token;
            vm.count = res.data.data.pice;
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
<style lang="scss" scoped>
.name_token {
  width: 9.3rem;
  height: 3.85rem;
  background-color: rgb(238, 238, 238);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .title {
    width: 8.53rem;
    height: 0.31rem;
    line-height: 0.31rem;
    border: 1px solid rgb(106, 177, 239);
    background-color: rgb(189, 222, 251);
    font-size: 0.16rem;
    color: #3288d4;
    margin-top: 0.3rem;
    box-sizing: border-box;
    padding-left: 0.2rem;
  }
  .token {
    width: 8.53rem;
    display: flex;
    justify-content: center;
    .txt {
      font-size: 0.18rem;
      color: #494949;
      margin-right: 0.2rem;
      line-height: 0.38rem;
    }
    .inps {
      .one {
        display: flex;
        .tokentxt {
          width: 3.95rem;
          height: 0.38rem;
          line-height: 0.38rem;
          border: 1px solid rgb(186, 186, 186);
          background-color: rgb(255, 255, 255);
          border-radius: 0.06rem;
          box-sizing: border-box;
          padding-left: 0.15rem;
          font-size: 0.18rem;
          color: #666666;
          margin-right: 0.15rem;
        }
        .btncopy {
          width: 0.69rem;
          height: 0.38rem;
          line-height: 0.38rem;
          background-color: rgb(106, 177, 239);
          border-radius: 0.06rem;
          font-size: 0.16rem;
          color: #ffffff;
          text-align: center;
          box-sizing: border-box;
          cursor: pointer;
        }
      }
      .number {
        margin-top: 0.1rem;
        font-size: 0.14rem;
        color: #666666;
        span {
          color: #ff6464;
        }
      }
    }
  }
}
</style>