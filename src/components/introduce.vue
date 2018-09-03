<template>
	<div class="introduce">
		<div class="localtion">{{$t("introduction.locatio[0]")}}：{{$t("introduction.locatio[1]")}} > <span class="color">{{$t("introduction.locatio[2]")}}</span></div>
		<div class="main">
			<div class="video">
				<img src="../assets/roadmapbanner.png" v-if="types==='zh'"/>
				<img src="../assets/roadmapbanner1.jpg" v-else/>
			</div>
			<div class="text">
				{{$t("introduction.txt1")}}<br />
				<div>{{$t("introduction.txt2")}}</div>
				<div>{{$t("introduction.txt3")}}</div>
				{{$t("introduction.txt4")}}<br />
				<div>{{$t("introduction.txt5")}}</div>
				{{$t("introduction.txt6")}}<br />
				{{$t("introduction.txt7")}}<br />
				{{$t("introduction.txt8")}}<br />
				{{$t("introduction.txt9")}}<br />
				{{$t("introduction.txt10")}}
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				types:localStorage.language
			}
		},
		created(){
			
		}
	}
</script>
<style lang="scss" scoped>
	.introduce{
		width: 12rem;
		margin: 0 auto;
		margin-bottom: 0.7rem;
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
		.main{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 0.7rem;
			.video{
				width: 7.12rem;
				height: 4.86rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				flex: 1;
				box-sizing: border-box;
				padding-left: 0.2rem;
				font-size: 0.14rem;
				text-indent: 2em;
				line-height: 0.2rem;
				div{
					font-size: 0.14rem;
					text-indent: 2em;
				}
			}
		}
	}
</style>