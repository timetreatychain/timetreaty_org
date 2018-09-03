<template>
	<div class="value">
		<div class="localtion">{{$t("value.locatio[0]")}}：{{$t("value.locatio[1]")}} > <span class="color">{{$t("value.locatio[2]")}}</span></div>
		<div class="image"><img src="../assets/valuebanner.png" /></div>
		<div class="main">
			<div class="main_title">{{$t("value.main_title")}}</div>
			<div class="down" v-if="types==='zh'">
				<a href="http://www.timetreaty.org/download/Time Treaty Chain_9.0CN.pdf" target="_blank">
					<img src="../assets/valueZhzh.png" target="_blank"/>
				</a>
				<a href="http://www.timetreaty.org/download/Time Treaty Chain_9.0EN.pdf"  target="_blank">
					<img src="../assets/valueEnzh.png"/>
				</a>
			</div>
			<div class="down" v-else>
				<a href="http://www.timetreaty.org/download/Time Treaty Chain_9.0CN.pdf"  target="_blank">
					<img src="../assets/valueZhen.png"/>
				</a>
				<a href="http://www.timetreaty.org/download/Time Treaty Chain_9.0EN.pdf"  target="_blank">
					<img src="../assets/valueEnen.png"/>
				</a>
			</div>
			<div class="ecology">
				<div class="ecology_title">{{$t("value.ecology_title")}}</div>
				<div class="blankbox" v-if="types==='zh'">
					<div class="blank1">
						<a href="http://www.coinsay.org" target="_blank">
							<img src="../assets/valueBZD.png"/>
						</a>
						<a href="http://www.timetreaty.org" target="_blank">
							<img src="../assets/valueTime.png"/>
						</a>
						<a href="http://m.liyugame.com" target="_blank">
							<img src="../assets/valueYX.png"/>
						</a>
					</div>
					<div class="blank2">
						<a href="http://block.timetreaty.org" target="_blank">
							<img src="../assets/valueBlock.png"/>
						</a>
						<a>
							<img src="../assets/valueBz.png"/>
						</a>
						<a>
							<img src="../assets/valueXx.png"/>
						</a>
						<a href="http://egg.liyugame.com" target="_blank">
							<img src="../assets/valueDd.png"/>
						</a>
					</div>
				</div>
				<div class="blankbox" v-else>
					<div class="blank1">
						<a href="http://www.coinsay.org" target="_blank">
							<img src="../assets/valueBZDen.png"/>
						</a>
						<a href="http://www.timetreaty.org" target="_blank">
							<img src="../assets/valueTimeen.png"/>
						</a>
						<a href="http://m.liyugame.com" target="_blank">
							<img src="../assets/valueYXen.png"/>
						</a>
					</div>
					<div class="blank2">
						<a href="http://block.timetreaty.org" target="_blank">
							<img src="../assets/valueBlocken.png"/>
						</a>
						<a>
							<img src="../assets/valueBzen.png"/>
						</a>
						<a>
							<img src="../assets/valueXxen.png"/>
						</a>
						<a href="http://egg.liyugame.com" target="_blank">
							<img src="../assets/valueDden.png"/>
						</a>
					</div>
				</div>
			</div>
			<div class="dapp">
				<div class="dapp_title">{{$t("value.dapp_title")}}</div>
				<div class="dapp_content">
					<div class="left" :class="types==='zh'?'leftbackzh':'leftbacken'">
						<div class="leftbox">
							<img class="imge" src="../assets/valueXS1.png"/>
							<div class="left_content">
								<div class="title">区块链参与项目获得本次悬赏</div>
								<div class="text">区块链技术被认为是继蒸汽机、电力、互联网之后，下一代颠覆性的核心技术。如果说蒸汽机释放了人们的生产力，电力解决了人们基本的生活需求</div>
								<div class="time">发布于2018-06-06 19:43:55</div>
							</div>
						</div>
						<div class="leftbox">
							<img class="imge" src="../assets/valueXS2.png"/>
							<div class="left_content">
								<div class="title">区块链参与项目获得本次悬赏</div>
								<div class="text">区块链技术被认为是继蒸汽机、电力、互联网之后，下一代颠覆性的核心技术。如果说蒸汽机释放了人们的生产力，电力解决了人们基本的生活需求</div>
								<div class="time">发布于2018-06-06 19:43:55</div>
							</div>
						</div>
						<div class="leftbox">
							<img class="imge" src="../assets/valueXS3.png"/>
							<div class="left_content">
								<div class="title">区块链参与项目获得本次悬赏</div>
								<div class="text">区块链技术被认为是继蒸汽机、电力、互联网之后，下一代颠覆性的核心技术。如果说蒸汽机释放了人们的生产力，电力解决了人们基本的生活需求</div>
								<div class="time">发布于2018-06-06 19:43:55</div>
							</div>
						</div>
						<div class="leftbox">
							<img class="imge" src="../assets/valueXS4.png"/>
							<div class="left_content">
								<div class="title">区块链参与项目获得本次悬赏</div>
								<div class="text">区块链技术被认为是继蒸汽机、电力、互联网之后，下一代颠覆性的核心技术。如果说蒸汽机释放了人们的生产力，电力解决了人们基本的生活需求</div>
								<div class="time">发布于2018-06-06 19:43:55</div>
							</div>
						</div>
						<div class="leftbox">
							<img class="imge" src="../assets/valueXS5.png"/>
							<div class="left_content">
								<div class="title">区块链参与项目获得本次悬赏</div>
								<div class="text">区块链技术被认为是继蒸汽机、电力、互联网之后，下一代颠覆性的核心技术。如果说蒸汽机释放了人们的生产力，电力解决了人们基本的生活需求</div>
								<div class="time">发布于2018-06-06 19:43:55</div>
							</div>
						</div>
					</div>
					<div class="right" :class="types==='zh'?'rightbackzh':'rightbacken'">
						<li v-for="item in notice" @click="into(item.id)"><div><span>·</span>{{item.noticetitle}}</div><span class="sp1">{{item.createtime}}</span></li>
					</div>
				</div>
			</div>
			<div class="suggest">
				<img src="../assets/valuesuggestzh.png" v-if="types==='zh'"/>
				<img src="../assets/valuesuggesten.png" v-else/>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				types:localStorage.language,
				notice:[
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'},
					{'noticetitle':'广州解除（寒冷）Ⅲ级预警 气温回升','createtime':'2018-06-07'}
				]
			}
		},
		created(){
			this.getnotice(1,12);
		},
		methods:{
			getnotice(page,row){
				let vm=this;
				$.ajax({
					type:"post",
					url: contextPath+"/api/notice/findnoticeinfo",
					async:true,
					dataType:'json',
					data:{
						languageType:localStorage.language,
						page,
						row
					},
					success(res){
						vm.notice=res.data.noticeInfos;
					}
				});
			},
			into(id){
				this.$router.push({
					path:'/details',
					query:{id:id}
				})
			}
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
		.image{
			width: 100%;
			margin-bottom: 0.4rem;
			img{
				width: 100%;
				height: 4rem;
			}
		}
		.main{
			width: 100%;
			.main_title{
				font-size: 0.26rem;
				text-align: center;
				margin-bottom: 0.4rem;
			}
			.down{
				width: 8.2rem;
				height: 1.5rem;
				margin: 0 auto;
				display: flex;
				justify-content: space-between;
				img{
					width: 3.7rem;
					height: 1.5rem;
					border-radius: 0.06rem;
					cursor: pointer;
				}
			}
			.ecology{
				width: 100%;
				margin-top: 0.4rem;
				.ecology_title{
					width: 100%;
					text-align: center;
					font-size: 0.26rem;
					margin-bottom: 0.4rem;
				}
				.blankbox{
					width: 100%;
					.blank1{
						width: 8.2rem;
						margin: 0 auto;
						display: flex;
						justify-content: space-between;
						align-items: center;
						img{
							height: 1rem;
						}
					}
					.blank2{
						width: 9rem;
						margin: 0 auto;
						display: flex;
						justify-content: space-between;
						margin-top: 0.4rem;
						align-items: center;
						img{
							height: 1rem;
						}
					}
				}
			}
			.dapp{
				width: 100%;
				margin-top: 0.4rem;
				.dapp_title{
					width: 100%;
					text-align: center;
					font-size: 0.26rem;
					margin-bottom: 0.4rem;
				}
				.dapp_content{
					width: 100%;
					display: flex;
					justify-content: space-between;
					.leftbackzh{
						background: url(../assets/valuexs.png)no-repeat;
					}
					.leftbacken{
						background: url(../assets/valueXsen.png)no-repeat;
					}
					.left{
						width: 7rem;
						height: 6.6rem;
						box-sizing: border-box;
						padding: 0.4rem 0.3rem 0.3rem 0.3rem;
						background-size: 100%;
						.leftbox{
							height: 1.1rem;
							width: 100%;
							display: flex;
							align-items: center;
							margin-bottom: 0.1rem;
							cursor: pointer;
							.imge{
								margin-right: 0.2rem;
								width: 2rem;
								height: 1.1rem;
							}
							.left_content{
								flex: 1;
								.title{
									font-size: 0.2rem;
								}
								.text{
									width: 100%;
								    display: -webkit-box;
								    -webkit-box-orient: vertical;
								    -webkit-line-clamp: 2;
								    overflow: hidden;
								    font-size: 0.16rem;
									color: #666666;
									margin: 0.05rem 0;
								}
								.time{
									font-size: 0.16rem;
									color: #999999;
								}
							}
						}						
					}
					.rightbackzh{
						background: url(../assets/valuegg.png)no-repeat;
					}
					.rightbacken{
						background: url(../assets/valueGgen.png)no-repeat;
					}
					.right{
						width: 4.8rem;
						height: 6.6rem;
						box-sizing: border-box;
						padding: 0.4rem 0.3rem 0.3rem 0.15rem;
						background-size: 100%;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						li{
							width: 100%;
							display: flex;
							justify-content: space-between;
							align-items: center;
							list-style-type: circle;
							cursor: pointer;
							text-align: left;
							div{
								display: flex;
								align-items: center;
								font-size: 0.18rem;
								width: 2.8rem;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap !important;
								display: block;
								span{
									font-size: 0.3rem;
									color: #BFBFBF;
									margin-right: 0.05rem;
									position: relative;
									top: 0.05rem;
								}
							}
							.sp1{
								width: 1rem;
								text-align: right;
								font-size: 0.12rem;
								color: #666666;
								position: relative;
								top: 0.05rem;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap !important;
							}
						}
					}
				}
			}
			.suggest{
				margin-top: 0.4rem;
				width: 100%;
				height: 1.05rem;
				cursor: pointer;
				img{
					width: 100%;
					height: 100%;
					border-radius: 0.06rem;
				}
			}
		}
	}
</style>