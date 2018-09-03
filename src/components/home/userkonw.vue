<template>
	<div class="footerbox">
		<div class="text">
			<div class="title">{{$t("userkonws.title")}}</div>
			<div class="contxt">
				{{$t("userkonws.t1")}}<br />
				{{$t("userkonws.t2")}}<br />
				{{$t("userkonws.t3")}}<br />
				{{$t("userkonws.t4")}}<br />
				{{$t("userkonws.t5")}}<br />
				{{$t("userkonws.t6")}}<br />
				{{$t("userkonws.t7")}}
				<span class="click">{{$t("userkonws.click")}}</span>
			</div>
			<div class="imga">
				<a href="http://www.timetreaty.org/download/BIDT%20Legal%20Opinion.pdf" target="_blank">
					<img src="../../assets/userkown.png" v-if="types==='zh'"/>
					<img src="../../assets/userkown1.png" v-else/>
				</a>
			</div>
		</div>
		<div class="main">
			<a  target="_blank" href="https://t.me/TimeTreatyChain" >
				<img src="../../assets/telegraph.png"/>
			</a>
			<a  target="_blank" href="https://www.facebook.com/Time-Treaty-Coin-137811593467221/" >
				<img src="../../assets/facebook.png" />
			</a>
			<!--<a  target="_blank" href="https://t.me/TimeTreatyChain" >-->
				<img src="../../assets/email.png"/>
			<!--</a>-->
			<a  target="_blank" href="https://twitter.com/TimeTreaty" >
				<img src="../../assets/tuite.png"/>
			</a>
		</div>
		<div class="foot">Copyright  2018 Time Treaty Blockchain Foundation</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				types:localStorage.language		
			}
		}
	}
</script>
<style lang="scss" scoped>
	.footerbox{
		margin-top: 1rem;
		width: 100%;
		height: 2.12rem;
		background: #FFFFFF;
		.text{
			width: 12rem;
			margin: 0 auto;
			.title{
				font-size: 0.3rem;
				color: #333333;
				font-weight: 700;
				margin-bottom: 0.2rem;
			}
			.contxt{
				font-size: 0.14rem;
				color: #333333;
				line-height: 0.23rem;
				.click{
					color: #6ab1ef;
				}
			}
			.imga{
				text-align: center;
				margin-top: 0.2rem;
				img{
					width: 3.84rem;
					height: 0.54rem;
					cursor: pointer;
					border-radius: 0.06rem;
				}
			}
		}
		.main{
			width: 5.4rem;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			margin-top: 0.5rem;
			img{
				width: 0.7rem;
				height: 0.7rem;
				cursor: pointer;
			}
		}
		.foot{
			font-size: 0.14rem;
			color: #666666;
			text-align: center;
			margin-top: 0.3rem;
		}		
	}
</style>
