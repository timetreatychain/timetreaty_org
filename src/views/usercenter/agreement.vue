<template>
	<div class="agreement">
		<div class="title">{{$t("nametoken.p0")}}</div>
		<div class="main">
			<div class="qr">{{$t("nametoken.xieyi")}}</div>
			<!-- <textarea readonly>{{$t("nametoken.en")}}
			</textarea> -->

			<div class="text1">
				<div class="inner">{{$t("nametoken.en")}}
					<div class="info">
					<p><i>{{$t("Info_authentication.p6")}} : </i><em>{{$t("Info_authentication.p5")}}</em></p>
					<p><i>{{$t("Info_authentication.p7")}} : </i><em>{{username}}</em></p>
					<p><i>{{$t("Info_authentication.p8")}} : </i><em>{{timer1}}</em></p>
				</div>
				</div>
			</div>
			<!-- <div class="info">
					<p><i>{{$t("Info_authentication.p6")}}</i></p>
					<p><i>{{$t("Info_authentication.p7")}}</i></p>
					<p><i>{{$t("Info_authentication.p8")}}</i></p>
				</div> -->
			<div class="check">
				<input type="checkbox" id="checkbox" checked/>
				<span>{{$t("nametoken.ty")}}</span>
			</div>
			<span v-if="show1 == 1" class="send"> {{seconde}}  {{$t("findpasssword.m")}}</span>
			<span v-if="show1 == 2" class="send"  @click="sub">{{$t("Info_authentication.qrdz")}}</span>
		</div>
	</div>
</template>
<script>
import qs from 'qs';
	export default{
		data(){
			return{
				username: JSON.parse(sessionStorage.getItem('userinfo')).userName,
				timer1 : new Date().getFullYear() +"-"+ (new Date().getMonth() + 1) +"-"+ (new Date().getDate()),
				seconde:5,
				timer:"",
				show1: 1,   
			}
		},
		mounted() {
			this.daoshu()
		},
		destroyed() {
			this.timer1 = null;
		},
		methods:{
			daoshu() {
				this.timer = setInterval(() => {
					//clearInterval(this.timer);
					if(this.seconde == 1){
						this.show1 = 2;
						clearInterval(this.timer);
					}
					this.seconde--;
				},1000)
			},
			sub() {
				let vm = this;
				let data2  = JSON.parse(sessionStorage.getItem('userinfo'));
				this.$axios({
        method: "post",
        url: contextPath + "/api/googleauthenticator/uploadAntiAddiction",
        data: qs.stringify({
          userName: data2.userName,
          nationality: data2.nationality,
          certificateType: data2.certificateType,
          identityCard: data2.identityCard,
          certificateCreateTime: data2.certificateCreateTime,
          certificateEndTime: data2.certificateEndTime,
          frontUrl: data2.frontUrl,
          // backUrl: vm.pto2,
          handUrl: data2.handUrl,
          ETHNum: data2.ETHNum,
          privateEXP: data2.privateEXP,
          publicExp: data2.publicExp,
          TokenExp: data2.TokenExp,
          token: data2.token,
          languageType: data2.languageType
        })
      })
        .then(res => {
          console.log(res.data);
          if (res.data.state.code == 20000) {
            // mui.alert(res.data.state.msg);
			vm.gonext = true;
			vm.$router.push('/namecheck');
            // localStorage.clear();
            // this.$router.push({
            //   path: "/personal_info",
            // });
          } else if (res.data.state.code == 20002) {
			mui.alert(res.data.state.msg);
			// this.$router.push('/namecheck');
            return false;
          }else if(res.data.state.code == 20001){
			  mui.alert(res.data.state.msg);
		  }
        })
        .catch(err => {
          console.log(err);
        });
			}
		}
	}
</script>
<style lang="scss">
	.agreement{
		position: relative;
		width: 9.3rem;
		height: 9.3rem;
		background-color: rgb(238, 238, 238);
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.title{
			width: 8.53rem;
  			height: 0.31rem;
  			line-height: 0.31rem;
			border:1px solid rgb(106, 177, 239);
  			background-color: rgb(189, 222, 251);
  			font-size: 0.16rem;
  			color: #3288d4;
  			margin-top: 0.3rem;
  			box-sizing: border-box;
  			padding-left: 0.2rem;
		}
		.main{
			width: 7.52rem;
			.qr{
				font-size: 0.16rem;
				color: #666666;
				margin-bottom: 0.2rem;
			}
			.text1{
				width: 100%;
				height: 5.37rem;
				box-sizing: border-box;
				padding: 0.15rem;
				font-size: 0.16rem;
				color: #666666;
				background: #fff;
				border-radius: 0.06rem;
				// line-height: 0.3rem;
				overflow-y:scroll;
				margin-bottom: 0.3rem;
				.inner{
					font-size: 0.16rem;
				color: #666666;
				line-height: 0.3rem;
				.info{
					margin-top: 0.5rem;
					i{
						font-style: normal;
						font-size: 0.2rem;
						margin-right: 0.1rem;
						width: 1.5rem;
						display: inline-block;
					}
					em{
						display: inline-block;
						font-style: normal;
						font-size: 0.2rem;
						height: 0.25rem;
						line-height: 0.2rem;
						border-bottom: 0.01rem solid #000;
						width: 4rem;
    					text-align: center;
					}
				}
				}
			}
			.check{
				font-size: 0.14rem;
				color: #666666;
				#checkbox{
					height: 0.2rem;
				}
				// .info{
				// 	margin-top: 0.1rem;
				// 	i{
				// 		font-style: normal;

				// 	}
				// }
			}
			.send{
				// width: 2.6rem;
				position: absolute;
				left: 50%;
				bottom: 0.2rem;
				padding: 0.01rem 0.15rem;
				// display: inline-block;
				transform: translateX(-50%);
				height: 0.4rem;
				border-radius: 0.06rem;
				background-color: rgb(106, 177, 239);
				color: white;
				text-align: center;
				line-height: 0.4rem;
				font-size: 0.18rem;
				// margin: 0 auto;
				margin-top: 0.4rem;
				cursor: pointer;
			}
		}
	}
</style>