<template>
	<div id="concat">
		<div class="localtion">{{$t("concat.locatio[0]")}}：{{$t("concat.locatio[1]")}} > <span class="color">{{$t("concat.locatio[2]")}}</span></div>
		<div class="topcontact">
			<img src="../assets/contact.png" class="img1"/>
			<div class="title">{{$t("concat.title")}}</div>
			<div class="imgs">
				<a href="https://t.me/TimeTreatyChain" target="_blank">
					<img src="../assets/contactdb.png" class="right_margin"/>
				</a>
				<a href="https://www.facebook.com/Time-Treaty-Coin-137811593467221/" target="_blank">
					<img src="../assets/facebook@3x.png" class="right_margin"/>
				</a>
				<!--<a href="" target="_blank">-->
					<img src="../assets/contactemail.png" class="right_margin"/>
				<!--</a>-->
				<a href="https://twitter.com/TimeTreaty" target="_blank">
					<img src="../assets/tuite@3x.png"/>
				</a>
			</div>
		</div>
		<div class="main" v-for="item in content">
			<div class="content">
				<div class="messages">
					<img :src="item.heardimage" class="head"/>
					<div class="name">
						{{item.phonenum}}
						<div class="time">{{item.createtime}}</div>
					</div>
				</div>
				<div class="text">
					{{item.content}}
				</div>
			</div>
		</div>
		<el-pagination background layout="prev, pager, next" :total="count" :page-size=5 @current-change="pageCallback">
		</el-pagination>
		<div class="fill">
			<textarea class="textarea" :placeholder="$t('concat.hoder')" id="text"></textarea>
			<div class="foot">
				<div class="codes">
					{{$t("concat.yanzhengma")}}
					<input type="text" id="inpcode"/>
					<div class="code" id="code" @click="fillcode()">{{code}}</div>
				</div>
				<div class="send" @click="send()">{{$t("concat.send")}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				code:'',
				count:1,
				content:[]
			}
		},
		created(){
			this.getpage(1,5)
			this.createCode()
		},
		mounted(){
			
		},
		methods:{
			pageCallback(arg){
				this.getpage(arg,5)
			},
			getpage(page,row){
				let vm=this;
				$.ajax({
					url: contextPath+"/api/notice/findleaveinginfo",
					type: "post",
					async: true,
					dataType: "json",
					data:{
						languageType:localStorage.language,
						page,
						row
					},
					success(data){
						vm.count=data.data.count;
						vm.content=data.data.leavinginfo;
					}
				});
			},
			createCode(){
				this.code = "";
				var codeLength = 4;
				var checkCode = document.getElementById("code");
				var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','M','N','P','Q','R','S','T','U','V','W','X','Y');
				for(var i = 0; i < codeLength; i++) {
					var Index = Math.floor(Math.random() * 29);
					this.code += selectChar[Index];
				}
				if(checkCode) {
					$('#code').html(this.code);
				}
			},
			fillcode(){
				this.createCode()
			},
			send(){
				let vm=this;
				if(localStorage.isLogin!=1){
					mui.alert(vm.$t('concat.qinglogin'))
				}else if($('#inpcode').val().toUpperCase()!=this.code.toUpperCase()){
					mui.alert(vm.$t('concat.codecuowu'))
					$('#inpcode').val('')
					this.createCode()
				}else{
					$.ajax({
						type:"post",
						url:contextPath+"/api/notice/addleaveing",
						async:true,
						dataType:'json',
						data:{
							languageType:localStorage.language,
							token:localStorage.token,
							content:$('#text').val()
						},
						success(res){
							console.log(res)
							if(res.state.code==='20000'){
								mui.alert(vm.$t('concat.tijiaochengg'))
								$('#text').val('')
								$('#inpcode').val('')
								vm.createCode()
								vm.getpage(1,5)
							}
						}
					});
				}
			}
		},
		
	}
</script>
<style lang="scss" scoped>
	#concat{
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
		.topcontact{
			width: 100%;
			text-align: center;
			.img1{
				width: 1.71rem;
				height: 2.21rem;
			}
			.title{
				width: 100%;
				text-align: center;
				font-size: 0.24rem;
				font-family:MicrosoftYaHei-Bold;
				color::rgba(60,58,61,1);
				margin-bottom: 0.3rem;
				margin-top: 0.1rem;
			}
			.imgs{
				width: 100%;
				display: flex;
				justify-content: center;
				img{
					width: 0.78rem;
					height: 0.78rem;
				}
				.right_margin{
					margin-right: 0.7rem;
				}
			}
		}
		.main{
			width: 100%;
			.content{
				width: 100%;
				.messages{
					width: 100%;
					display: flex;
					align-items: center;
					margin-bottom: 0.2rem;
					.head{
						width: 0.6rem;
						height: 0.6rem;
						border-radius: 50%;
						margin-right: 0.2rem;
					}
					.name{
						font-size: 0.18rem;
						color: rgb(70, 124, 212);
						span{
							color: black;
						}					
						.time{
							margin-top: 0.1rem;
							font-size: 0.14rem;
							color: rgb(102, 102, 102);
						}
					}
				}
				.text{
					width: 100%;
					font-size: 0.14rem;
					color: rgb(102, 102, 102);
					padding-bottom: 0.3rem;
					margin-bottom: 0.3rem;
					border-bottom: 1px solid rgb(204, 204, 204);
				}
			}
		}
		.el-pagination{
			text-align: center;
			margin: 0.6rem 0 0.7rem 0;
		}
		#Areabox{
			width: 100%;
			height: 5.22rem;
			box-sizing: border-box;
			border: 1px solid rgb(204, 204, 204);
			margin-bottom: 0.2rem;
			.anchorBL{
				display: none !important;
			}
		}
		.fill{
			width: 100%;
			.textarea{
				width: 100%;
				height: 3rem;
				box-sizing: border-box;
				border: none;
				resize: none;
				border-radius: 6px;
				padding: 0.2rem;
  				background-color: rgb(229, 229, 229);
  				font-size: 0.18rem;
  				margin-bottom: 0.2rem;
			}
			.foot{
				width: 100%;
				height: 0.58rem;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				.codes{
					width: 3.86rem;
					height: 0.58rem;
					box-sizing: border-box;
					border-radius: 6px;
					display: flex;
					align-items: center;
					font-size: 0.18rem;
					padding-left: 0.2rem;
					background-color: rgb(229, 229, 229);
					input{
						background-color: rgb(245, 245, 245);
						width: 0.76rem;
  						height: 0.36rem;
  						box-sizing: border-box;
  						padding-left: 0.1rem;
  						border: none;
  						margin:0 0.2rem;
  						font-size: 0.18rem;
					}
					.code{
						width: 0.76rem;
						height: 0.36rem;
						font-size: 0.18rem;
						text-align: center;
						line-height: 0.36rem;
						background-color: rgb(245, 245, 245);
						cursor: pointer;
					}
				}
				.send{
					width: 3.86rem;
					height: 0.58rem;
					text-align: center;
					line-height: 0.58rem;
					border-radius: 6px;
					background-color: rgb(106, 177, 239);
					font-size: 0.18rem;
					color: rgb(255, 255, 255);
					cursor: pointer;
				}
			}
			.check{
				width: 100%;
				text-align: center;
				margin-top: 0.65rem;
				.route{
					font-size: 0.16rem;
					color: rgb(106, 177, 239);
					border-bottom: 1px solid rgb(106, 177, 239);
					cursor: pointer;
				}
			}
		}
	}
</style>