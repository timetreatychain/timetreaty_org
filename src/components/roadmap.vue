<template>
	<div class="">
		<div class="content">
			<div class="localtion">{{$t("roadmap.locatio[0]")}} > {{$t("roadmap.locatio[1]")}} > <span class="color">{{$t("roadmap.locatio[2]")}}</span></div>
			<div class="bannerimg" v-if="rank===undefined||rank==='0'||rank==='1'||rank==='2'||rank==='3'">
				<img src="../assets/roadmapbanner.png" class="banner" v-if="types==='zh'"/>
				<img src="../assets/roadmapbanner1.jpg" class="banner" v-else/>
			</div>
			<div class="preface" v-if="rank==='2'||rank==='3'">
				<div class="title">{{$t("roadmap.qianyan")}}</div>
				<div class="text">
					{{$t("roadmap.title")}}
				</div>
			</div>
			<div class="security" v-if="rank==='3'">
				<div class="title" @click="security=!security">
					<div class="left">{{$t("roadmap.anquan")}}</div>
					<div class="right">
						<img src="../assets/roadclose.png" v-show="security"/>
						<img src="../assets/roadmapopen.png" v-show="!security"/>
					</div>
				</div>
				<div class="text" v-show="security">
					{{$t("roadmap.atxt")}}
				</div>
				<div class="image" v-show="security">
					<img src="../assets/security.png"/>
				</div>
				<div class="author" v-show="security">
					<div class="author_text">
						{{$t('roadmap.man')}}：Tom
					</div>
					<span class="stand">|</span>
					<div class="author_email">{{$t('roadmap.email')}}：Tom@timetreaty.com</div>
				</div>
			</div>
			<div class="security" v-if="rank==='3'">
				<div class="title" @click="applications=!applications">
					<div class="left">{{$t("roadmap.yingyong")}}</div>
					<div class="right">
						<img src="../assets/roadclose.png" v-show="applications"/>
						<img src="../assets/roadmapopen.png" v-show="!applications"/>
					</div>
				</div>
				<div class="text" v-show="applications">
					{{$t("roadmap.ytxt")}}
				</div>
				<div class="image" v-show="applications">
					<img src="../assets/application.png" class="application"/>
				</div>
				<div class="author" v-show="applications">
					<div class="author_text">
						{{$t('roadmap.man')}}：Tom
					</div>
					<span class="stand">|</span>
					<div class="author_email">{{$t('roadmap.email')}}：Tom@timetreaty.com</div>
				</div>
			</div>
			<div class="security" v-if="rank==='3'">
				<div class="title" @click="data=!data">
					<div class="left">{{$t("roadmap.data")}}</div>
					<div class="right">
						<img src="../assets/roadclose.png" v-show="data"/>
						<img src="../assets/roadmapopen.png" v-show="!data"/>
					</div>
				</div>
				<div class="text" v-show="data">
					{{$t("roadmap.datatxt")}}
				</div>
				<div class="image" v-show="data">
					<img src="../assets/data.png" class="data"/>
				</div>
				<div class="author" v-show="data">
					<div class="author_text">
						{{$t('roadmap.man')}}：Tom
					</div>
					<span class="stand">|</span>
					<div class="author_email">{{$t('roadmap.email')}}：Tom@timetreaty.com</div>
				</div>
			</div>
			<div class="security" v-if="rank==='3'">
				<div class="title" @click="circulation=!circulation">
					<div class="left">{{$t("roadmap.zhixing")}}</div>
					<div class="right">
						<img src="../assets/roadclose.png" v-show="circulation"/>
						<img src="../assets/roadmapopen.png" v-show="!circulation"/>
					</div>
				</div>
				<div class="text" v-show="circulation">
					{{$t("roadmap.ztxt")}}
				</div>
				<div class="image" v-show="circulation">
					<img src="../assets/circulation.png" class="circulation"/>
				</div>
				<div class="author" v-show="circulation">
					<div class="author_text">
						{{$t('roadmap.man')}}：Kevin
					</div>
					<span class="stand">|</span>
					<div class="author_email">{{$t('roadmap.email')}}：Kevin@timetreaty.com</div>
				</div>
			</div>
			<div class="security" v-if="rank==='3'">
				<div class="title" @click="strategic=!strategic">
					<div class="left strategic">{{$t("roadmap.hexin")}}</div>
					<div class="right">
						<img src="../assets/roadclose.png" v-show="strategic"/>
						<img src="../assets/roadmapopen.png" v-show="!strategic"/>
					</div>
				</div>
				<div class="text" v-show="strategic">
					{{$t("roadmap.htxt")}}
				</div>
				<div class="image" v-show="strategic">
					<img src="../assets/strategic.png" class="strategic"/>
				</div>
				<div class="author" v-show="strategic">
					<div class="author_text">
						{{$t('roadmap.man')}}：Kevin
					</div>
					<span class="stand">|</span>
					<div class="author_email">{{$t('roadmap.email')}}：Kevin@timetreaty.com</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				security:false,
				applications:false,
				data:false,
				circulation:false,
				strategic:false,
				types:localStorage.language,
				rank:localStorage.rank
			}
		},
		created(){
		}
	}
</script>

<style lang="scss" scoped>
	.content{
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
		.bannerimg{
			width: 100%;
			.banner{
				width: 100%;
				height: 6.83rem;
			}
		}
			
		.preface{
			width: 100%;
			.title{
				font-size: 0.24rem;
				color: rgb(50,136,212);
			}
			.text{
				text-indent: 2em;
				font-size: 0.24rem;
				color: rgb(32,32,32);
				line-height: 0.4rem;
				margin: 0.4rem 0 0.7rem 0;
			}
		}
		.security{
			width: 100%;
			padding-bottom: 0.2rem;
			margin-bottom: 0.3rem;
			border-bottom: 1px solid rgb(204,204,204);
			.title{
				width: 100%;
				height: 0.5rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background-color: rgb(230,230,230);
				cursor: pointer;
				.left{
					width: 6.5rem;
					text-align: right;
					font-size: 0.18rem;
					color: rgb(102,102,102);
				}
				.strategic{
					width: 6.6rem;
				}
				.right{
					margin-right: 0.2rem;
					cursor: pointer;
					img{
						width: 0.14rem;
  						height: 0.14rem;
					}
				}
			}
			.text{
				font-size: 0.24rem;
				color: rgb(32, 32, 32);
				text-indent: 2em;
				line-height: 0.4rem;
				margin-top: 0.3rem;
				margin-bottom: 0.35rem;
			}
			.image{
				width: 100%;
				text-align: center;
				img{
					width: 6.1rem;
					height: 4.79rem;
					margin: 1rem 0 0 0;
				}
				.application{
					width: 5.1rem;
					height: 5.2rem;
					margin: 0.4rem 0;
				}
				.data{
					width: 8.3rem;
					height: 5.1rem;
					margin: 0.4rem 0 0.5rem 0;
				}
				.circulation{
					width: 3.6rem;
					height: 5.7rem;
					margin: 0.1rem 0 0.15rem 0;
				}
				.strategic{
					width: 9.2rem;
					height: 4.3rem;
					margin: 1rem 0 0.6rem 0;
				}
			}
			.author{
				width: 100%;
				box-sizing: border-box;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.author_text{
					color: rgb(102, 102, 102);
					font-size: 0.18rem;
					box-sizing: border-box;
					margin-right: 0.2rem;
				}
				.stand{
					font-size: 0.18rem;
					color: darkgray;
					margin-right: 0.2rem;
				}
				.author_email{
					font-size: 0.18rem;
					color: rgb(102, 102, 102);
					/*color: rgb(253, 93, 30);*/
				}
			}
		}
	}
</style>