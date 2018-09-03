<template>
	<div class="value">
		<div class="localtion">{{$t("enter.locatio[0]")}}：{{$t("enter.locatio[1]")}} > <span class="color">{{$t("enter.locatio[2]")}}</span></div>
		<div class="image1"><img src="../assets/value.png" /></div>
		<div class="content">
			<div class="title">{{$t("enter.title")}}</div>
			<div class="img">
				<img src="../assets/valuecode.png"/>
			</div>
			<div class="txt">
				{{$t("enter.txt1")}}<br />
				{{$t("enter.txt2")}}
			</div>
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		created(){
			localStorage.active=location.href.slice(location.href.lastIndexOf('/'),location.href.length)
		}
	}
</script>
<style lang="scss" scoped>
	.value{
		width: 12rem;
		margin: 0 auto;
		.localtion{
			width: 100%;
			text-align: right;
			margin: 0.3rem 0 ;
			font-size: 0.14rem;
			color: #666666;
			.color{
				color: #6ab1ef;
			}
		}
		.image1{
			width: 100%;
			margin-bottom: 0.3rem;
			img{
				width: 100%;
			}
		}
		.content{
			width: 100%;
			.title{
				width: 100%;
				text-align: left;
				font-size: 0.18rem;
				color: #333333;
				margin-bottom: 0.2rem;
				font-weight: 700;
			}
			.txt{
				font-size: 0.18rem;
				line-height: 0.4rem;
			}
			.img{
				width: 100%;
				text-align: center;
				margin: 0.4rem 0;
				img{
					width: 3rem;
					height: 3rem;
				}
			}
		}
			
	}
</style>