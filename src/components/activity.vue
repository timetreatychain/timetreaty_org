<template>
    <div class="activity">
    	<div class="localtion">{{$t("activity.locatio[0]")}}：{{$t("activity.locatio[1]")}} > <span class="color">{{$t("activity.locatio[2]")}}</span></div>
    	<div class="countdown" v-if="countDown">
    		<div class="time">
    			<div class="text">{{$t("activity.daojishi")}}</div>
    			<div class="daynum">{{days}}</div>
    			<div class="daytxt">{{$t("activity.day")}}</div>
    			<div class="daynum">{{hours}}</div>
    			<div class="daytxt">{{$t("activity.hour")}}</div>
    			<div class="daynum">{{minutes}}</div>
    			<div class="daytxt">{{$t("activity.fen")}}</div>
    			<div class="daynum">{{seconds}}</div>
    			<div class="daytxt">{{$t("activity.miao")}}</div>
    		</div>
    		<div class="price">
    			{{$t("activity.price")}}：<span>{{price}}</span>
    		</div>
    		<div class="inp">
    			<input v-model="num" type="text" :placeholder="$t('activity.shurutoken')" id="inps" v-on:input="token()"/>
    			<div class="btn" @click="send()">{{$t("activity.queding")}}</div>
    		</div>
    	</div>
    	<div class="start" v-if="Start">
    		<div class="title">{{$t("activity.kaishouz")}}</div>
    		<div class="price">
    			{{$t("activity.price2")}}：{{startData.price}}
    			<span class="marg" @click="address">{{$t("activity.gerendizhi")}}</span>
    		</div>
    		<!--<div class="state">{{$t("activity.state")}}</div>-->
    		<div class="code">
    			<div class="cont">
    				<div class="site">BTC</div>
    				<div class="image"><img :src="startData.btcqrcode"/></div>
    				<div class="border"><u>{{startData.btcaddress}}</u></div>
    				<div class="copy" v-clipboard:copy="startData.btcaddress" v-clipboard:success="copybtc">{{$t("activity.copy")}}</div>
    				<div class="border">1 BTC = 455178 BIDT</div>
					
    			</div>
    			<div class="cont">
    				<div class="site">ETH</div>
    				<div class="image"><img :src="startData.ethqrcode"/></div>
    				<div class="border"><u>{{startData.ethaddress}}</u></div>
    				<div class="copy" v-clipboard:copy="startData.ethaddress" v-clipboard:success="copyeth">{{$t("activity.copy")}}</div>
    				<div class="border">1 ETH = 28847 BIDT</div>
					
    			</div>
    		</div>
    		<div class="code code1">
    			<div class="cont">
    				<div class="site">HT</div>
    				<div class="image"><img :src="startData.htqrcode"/></div>
    				<div class="border"><u>{{startData.htaddress}}</u></div>
    				<div class="copy" v-clipboard:copy="startData.htaddress" v-clipboard:success="copyht">{{$t("activity.copy")}}</div>
    				<div class="border">1 HT = 234 BIDT</div>
    			</div>
    			<div class="cont conts">
    				<div class="site">OKEX</div>
    				<div class="image">
						<img src="../assets/add_tp.png" v-if="upimg_src===''"/>
						<img :src="upimg_src" v-if="upimg_src!=''"/>
						<label for="up_img">
							<div class="position_bg">点击可上传图片</div>
						</label>
    				</div>
    				<input type="file" accept="image/*" id="up_img" @change="up_image(this)"/>
    				<div class="border"><u>ttc@timetreaty.com</u></div>
    				<div class="copy" v-clipboard:copy="okex" v-clipboard:success="copyokex">{{$t("activity.copy")}}</div>
    				<div class="border">1 OKEX = 228 BIDT</div>
    			</div>
    		</div>
    	</div>
    	<div class="over" v-if="Over">
    		<div class="title">{{txt}}</div>
    		<div class="image">{{txt}}</div>
    	</div>
		<div class="activity_content">
			<div class="title">{{$t("activity.title")}}</div>
			<div class="p">{{$t("activity.t1")}}</div>
			<div class="txt">
				{{$t("activity.t11")}}<br />
				{{$t("activity.t12")}}<br />
				{{$t("activity.t13")}}
				<div style="color:red;font-size:0.18rem;word-break: initial;">{{$t("activity.t14")}}</div>
				<div style="color:red;font-size:0.18rem;word-break: initial;">{{$t("activity.t15")}}</div>
				<div style="color:red;font-size:0.18rem;word-break: initial;">{{$t("activity.t16")}}</div>
				<div style="color:red;font-size:0.18rem;word-break: initial;">{{$t("activity.t17")}}</div>
			</div>
			<div class="p">{{$t("activity.t2")}}</div>
			<div class="txt">
				{{$t("activity.t21")}}<br />
				{{$t("activity.t22")}}<br />
				{{$t("activity.t23")}}
			</div>
			<div class="p">{{$t("activity.t3")}}</div>
			<div class="txt">
				{{$t("activity.t31")}}<br />
				{{$t("activity.t32")}}<br />
				{{$t("activity.t33")}}
			</div>
		</div>
		<div class="boxpopup" v-if="popup">
			<div class="popup">
				<div class="poptitle">{{$t("activity.popupbitian")}}</div>
				<div class="name">
					<div class="text">BIDT</div>
					<div class="right">
						<input type="text" class="inp" id="bidt" :placeholder="$t('activity.bidt')"/>
					</div>
				</div>
				<div class="name">
					<div class="text">BTC</div>
					<div class="right">
						<input type="text" class="inp" id="btc" :placeholder="$t('activity.btc')"/>
					</div>
				</div>
				<div class="name">
					<div class="text">ETH</div>
					<div class="right">
						<input type="text" class="inp" id="eth" :placeholder="$t('activity.eth')"/>
					</div>
				</div>
				<div class="name">
					<div class="text">HT</div>
					<div class="right">
						<input type="text" class="inp" id="ht" :placeholder="$t('activity.ht')"/>
					</div>
				</div>
				<div class="popup_btn">
					<el-button :plain="true" class="popup_cancel" @click="popcancel()">{{$t("activity.cancel")}}</el-button>
					<el-button :plain="true" class="popup_submit" @click="popsubmit()">{{$t("activity.submi")}}</el-button>
				</div>
			</div>
		</div>
		<div class="popup_img" v-if="popimage">
			<div class="popimg_main">
				<!--<img src="../assets/details.png"/>-->
				<img :src="img_src"/>
				<div class="popbtn">
					<div class="popcancel" @click="cancel_image">取消</div>
					<div class="popsend" @click="send_image">提交</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
        data(){
        	return{
        		days:'00',
        		hours:'00',
        		minutes:'00',
        		seconds:'00',
        		countDown:false,
        		Start:false,
        		Over:false,
        		time:'1526638740000',
        		txt:'',
        		status:'',
        		num:'',
        		settime:'',
        		popup:false,
        		startData:'',
        		price:'**',
        		img_src:'',
        		img_name:'',
        		okex:'ttc@timetreaty.com',
        		popimage:false,
        		upimg_src:''
        	}
        },
        created(){
        	this.GetterTime()
        },
        methods:{
        	up_image(ev){
				let vm=this;
			  	var file = $('#up_img')[0].files[0];
			  	let name = file.name;
			  	if(name!=undefined){
			  		var size = (file.size / 1024).toFixed(2);
				  	if (size <= 3072) {
				    	var reader = new FileReader();
					    reader.readAsDataURL(file); //调用自带方法进行转换
						reader.onload = function(e) {
							vm.img_src=this.result;
							vm.img_name = name;
							vm.popimage=true;
				    	};
				  	} else {
				    	mui.toast("请选择小于3M的图片");
				    	return;
				  	}
			  	}
			},
			cancel_image(){
				$('#up_img')[0].value='';
				let vm=this;
				vm.img_src='';
				vm.popimage=false;
			},
			send_image(){
				let vm=this;
				if(vm.img_src!=''){
					$.ajax({
						type:"post",
						url:contextPath+"/api/googleauthenticator/saveOkexPic",
						async:true,
						dataType:'json',
						data:{
							languageType:localStorage.language,
        					token:localStorage.token,
        					picUrl:vm.img_src
						},
						success(res){
							if(res.state.code==='20000'){
								vm.popimage=false;
								mui.alert('上传成功');
								vm.img_src='';
								vm.upimg_src=res.data;
								$('#up_img')[0].value='';
							}
						}
					});
				}
			},
        	send(){
        		let vm=this;
        		if($('#inps').val()===''){
        			mui.alert(vm.$t("activity.muialert1"))
        		}else if(this.status.status==='0'&&$('#inps').val()!=''){
        			this.countDown=true;
        			mui.alert(vm.$t("activity.muialert2"))
        		}else if(this.status.status==='1'){
        			$.ajax({
        				type:"post",
        				url:contextPath+"/api/offering/validationCode",
        				async:true,
        				dataType:'json',
        				data:{
        					languageType:localStorage.language,
        					token:localStorage.token,
        					code:vm.num
        				},
        				success(res){
        					if(res.data.type==='0'){
        						vm.countDown=true;
			   					vm.Start=false;
			   					vm.Over=false;
			   					vm.popup=true;
        					}else if(res.data.type===null){
        						vm.startData=res.data;
        						vm.countDown=false;
			   					vm.Start=true;
			   					vm.Over=false;
        					}
	        					
        				}
        			});
        		}
        	},
        	GetRTime(){
        		let vm=this;
			    var NowTime = new Date();
			    var t =this.time - NowTime.getTime();
			    var d,t,h,m,s
			    d = Math.floor(t/86400000)
	        	t -= d * 86400000;
	        	h = Math.floor(t/3600000)
	        	t -= h * 3600000;
	        	m = Math.floor(t/60000)
	        	t -= m * 60000;
	        	s = Math.floor(t/1000)
			    d <10 ? d = '0' +d :d =d;
			    h <10 ? h = '0' +h :h =h;
			    m <10 ? m = '0' +m :m =m;
			    s <10 ? s = '0' +s :s =s;
				this.days=d;
				this.hours=h;
				this.minutes=m;
				this.seconds=s;
				if(d==='00'&&h==='00'&&m==='00'&&s==='00'){
					this.days="00";
					this.hours="00";
					this.minutes="00";
					this.seconds="00";
					clearTimeout(this.settime)
					$.ajax({
						type:'post',
						url:contextPath+'/api/offering/updateOffering',
						dataType:'json',
						data:{
							languageType:localStorage.language,
							id:vm.status.id
						},
						success(res){
							console.log(res)
							vm.status.status=res.data;
							vm.countDown=true;
		   					vm.Start=false;
		   					vm.Over=false;
						}
					})
				}
		   },
		   GetterTime(){
		   	let vm=this;
		   		$.ajax({
		   			type:"post",
		   			url:contextPath+"/api/offering/getOffering",
		   			async:true,
		   			dataType:'json',
		   			data:{
		   				languageType:localStorage.language,
		   			},
		   			success(res){
		   				if(res.data.status==='3'){
		   					vm.countDown=false;
		   					vm.Start=false;
		   					vm.Over=true;
		   					vm.txt=vm.$t("activity.jieshu");
		   					vm.status=res.data;
		   					vm.price=res.data.pice;
		   				}else if(res.data.status==='0'){
		   					vm.countDown=true;
		   					vm.Start=false;
		   					vm.Over=false;
		   					vm.price=res.data.pice;
		   					if(res.data.startTime>new Date().getTime()){
		   						vm.time=res.data.startTime;
		   						vm.price=res.data.pice;
		   						vm.settime=setInterval(vm.GetRTime,0);
		   					}
		   					vm.status=res.data;
		   				}else if(res.data.status==='1'){
		   					vm.countDown=true;
		   					vm.Start=false;
		   					vm.Over=false;
		   					vm.status=res.data;
		   					vm.price=res.data.pice;
		   					vm.time=1532174400000;
		   					vm.settime=setInterval(vm.GetRTime,0);
		   				}else if(res.data.status==='2'){
		   					vm.countDown=false;
		   					vm.Start=false;
		   					vm.Over=true;
		   					vm.txt=vm.$t("activity.maiwan");
		   					vm.status=res.data;
		   					vm.price=res.data.pice;
		   				}
		   				
		   			}
		   		});
		   },
		   token(){
		   	this.num = this.num.replace(/[^\d^a-zA-Z]/g,"");
		   },
		   popsubmit(){
				let vm=this;
				if($('#bidt').val()!=''){
					$.ajax({
						type:"post",
						url:contextPath+"/api/offering/updateAddress",
						async:true,
						dataType:'json',
						data:{
							languageType: localStorage.language,
							token:localStorage.token,
							BIDT:$('#bidt').val(),
							BTC:$('#btc').val(),
							ETH:$('#eth').val(),
							HT:$('#ht').val(),
						},
						success(res){
							if(res.state.msg==='success'){
								vm.popup=false;
								vm.$message({
						          message:vm.$t("activity.muialert3"),
						          type: 'success'
						        });
							}
						}
					});
				}else{
					mui.alert(vm.$t("activity.muialert4"))
				}
					
				
			},
			popcancel(){
				this.popup=false;
			},
			copybtc(){
				let vm=this;
				mui.toast(vm.$t("activity.muialert5"))
			},
			copyeth(){
				let vm=this;
				mui.toast(vm.$t("activity.muialert5"))
			},
			copyht(){
				let vm=this;
				mui.toast(vm.$t("activity.muialert5"))
			},
			copyokex(){
				let vm=this;
				mui.toast(vm.$t("activity.muialert5"))
			},
			address(){
				this.popup=true;
				$.ajax({
					type:"post",
					url:contextPath+"/api/offering/getAddress",
					async:true,
					dataType:'json',
					data:{
						languageType: localStorage.language,
						token:localStorage.token,
					},
					success(res){
						console.log(res)
						if(res.data.bidtaddress!=null||res.data.bidtaddress!=''){
							$('#bidt').val(res.data.bidtaddress)
						}
						if(res.data.btcaddress!=null||res.data.btcaddress!=''){
							$('#btc').val(res.data.btcaddress)
						}
						if(res.data.ethaddress!=null||res.data.ethaddress!=''){
							$('#eth').val(res.data.ethaddress)
						}
						if(res.data.htaddress!=null||res.data.htaddress!=''){
							$('#ht').val(res.data.htaddress)
						}
					}
				});
			}
        }
    }
</script>

<style lang="scss" scoped>
	.activity{
		width: 100%;
		.localtion{
			width: 100%;
			text-align: right;
			margin-top: 0.3rem;
			margin-bottom: 0.9rem;
			font-size: 0.14rem;
			color: #666666;
			.color{
				color: #6ab1ef;
			}
		}
		.popup_img{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(0,0,0,0.4);
			.popimg_main{
				background: white;
				width: 8.8rem;
				img{
					width: 100%;
					height: 5.5rem;
					display: block;
				}
				.popbtn{
					display: flex;
					justify-content: center;
					margin: 0.3rem 0;
					.popcancel{
					  	border-radius: 0.04rem;
					  	background-color: rgb(213, 213, 213);
					  	width: 2.58rem;
					  	height: 0.72rem;
					  	text-align: center;
					  	line-height: 0.72rem;
					  	color: white;
					  	cursor: pointer;
					  	margin: 0 0.25rem;
					}
					.popsend{
						border-radius: 0.04rem;
					  	background-color: rgb(106, 177, 239);
					  	width: 2.58rem;
					  	height: 0.72rem;
					  	text-align: center;
					  	line-height: 0.72rem;
					  	color: white;
					  	cursor: pointer;
					  	margin: 0 0.25rem;
					}
				}
			}
		}
		.countdown{
			width: 100%;
			margin-bottom: 1rem;
			.time{
				width: 6.04rem;
				height: 0.88rem;
				display: flex;
				margin: 0 auto;
				border-radius: 0.13rem;
				padding-top: 0.13rem;
				background: url(../assets/time.png)no-repeat;
				background-size: 100%;
				.text{
					width: 1.53rem;
					height: 0.56rem;
					text-align: center;
					font-size: 0.3rem;
					color: #ffff0e;
					line-height: 0.56rem;
				}
				.daynum{
					width: 0.85rem;
					height: 0.56rem;
					box-sizing: border-box;
					padding-left: 0.08rem;
					font-size: 0.5rem;
					line-height: 0.56rem;
					color: #333333;
					letter-spacing:0.107rem;
				}
				.daytxt{
					width: 0.27rem;
					height: 0.56rem;
					font-size: 0.16rem;
					color: #ffff0e;
					line-height: 0.86rem;
				}
			}
			.price{
				text-align: center;
				margin: 0.2rem 0 0.4rem 0;
				font-size: 0.2rem;
				color: #282a41;
				span{
					font-size: 0.2rem;
					color: #6ab1ef;
				}
			}
			.inp{
				display: flex;
				justify-content: center;
				align-items: center;
				#inps{
					width: 4.46rem;
					height: 0.54rem;
					box-sizing: border-box;
					border: 1px solid rgb(226, 226, 226);
					border-radius: 4px;
					font-size: 0.18rem;
					color: rgb(153,153,153);
					padding-left: 0.2rem;
				}
				.btn{
					width: 1.35rem;
					height: 0.56rem;
					background-color: rgb(106, 177, 239);
					border-radius: 4px;
					font-size: 0.22rem;
					color: rgb(255, 255, 255);
					text-align: center;
					line-height: 0.56rem;
					margin-left: 0.2rem;
					cursor: pointer;
				}
			}
		}
		.start{
			width: 100%;
			margin-bottom: 1rem;
			.title{
				width: 6.04rem;
				height: 0.88rem;
				margin: 0 auto;
				background-color: rgb(40, 42, 65);
				border-radius: 0.13rem;
				font-size: 0.4rem;
				text-align: center;
				line-height: 0.88rem;
				color: #ffff0e;
			}
			.price{
				width: 100%;
				text-align: center;
				font-size: 0.2rem;
				color: #282a41;
				margin: 0.2rem 0 0.2rem 0;
				.marg{
					margin-left: 1rem;
					color: cornflowerblue;
					border-bottom: 1px solid cornflowerblue;
					cursor: pointer;
				}
			}
			.state{
				font-size: 0.15rem;
				color: red;
				text-align: center;
				margin-bottom: 0.25rem;
			}
			.code{
				width: 100%;
				display: flex;
				justify-content: center;
				margin-bottom: 0.2rem;
				.cont{
					margin: 0 0.5rem;
					text-align: center;
					#up_img{
						display: none;
					}
					label{
						cursor: pointer;
					}
					.site{
						font-size: 0.2rem;
						color: #666666;
						margin-bottom: 0.1rem;
					}
					.image{
						width: 1.78rem;
						height: 1.78rem;
						margin: 0 auto;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.border{
						font-size: 0.17rem;
						color: #666666;
						margin: 0.3rem 0 0.2rem 0;
					}
					.copy{
						width: 0.96rem;
						height: 0.4rem;
						line-height: 0.4rem;
						margin: 0 auto;
						border-radius: 0.04rem;
						background-color: rgb(106, 177, 239);
						font-size: 0.2rem;
						color: #ffffff;
						cursor: pointer;
					}
				}
				.conts{
					width: 4rem;
					margin-right: 1.05rem;
					.image{
						position: relative;
						cursor: pointer;
					}
					.image:hover{
						.position_bg{
							display: block;
						}
					}
					.position_bg{
						display: none;
						position: absolute;
						top: 0;
						width: 1.78rem;
						height: 1.78rem;
						background-color: rgb(106, 177, 239);
						opacity: 0.89;
						font-size: 0.18rem;
						text-align: center;
						line-height: 1.78rem;
						color: white;
					}
				}
			}
				
		}
		.over{
			width: 100%;
			margin-bottom: 1rem;
			.title{
				width: 6.04rem;
				height: 0.88rem;
				text-align: center;
				line-height: 0.88rem;
				margin: 0 auto;
				font-size: 0.4rem;
				color: #ffff0e;
				background-color: rgb(40, 42, 65);
				border-radius: 0.13rem;
			}
			.image{
				text-align: center;
				font-size: 0.6rem;
				color: #ffffff;
				line-height: 6.6rem;
				background: url(../assets/over.png)no-repeat;
				width: 2.79rem;
				height: 4.72rem;
				margin: 0 auto;
				background-size: 100%;
				margin-top: -1.025rem;
			}
		}
		.activity_content{
			margin-bottom: 0.7rem;
			.title{
				font-size: 0.24rem;
				color: #171717;
				margin-bottom: 0.2rem;
			}
			.p{
				font-size: 0.18rem;
				color: #6ab1ef;
				line-height: 0.3rem;
			}
			.txt{
				font-size: 0.18rem;
				color: #666666;
				line-height: 0.3rem;
				word-break: initial;
			}
		}
		.boxpopup{
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background: rgba(0,0,0,0.5);
			z-index:1000;
			.popup{
				width: 7.28rem;
				height: 6rem;
				background-color: rgb(255, 255, 255);
				border-radius: 6px;
				.poptitle{
					box-sizing: border-box;
					padding-left: 1.7rem;
					font-size: 0.2rem;
					color: red;
					margin-top: 0.2rem;
					margin-bottom: -0.3rem;
				}
				.name{
					width: 5.75rem;
					height: 0.48rem;
					margin: 0 auto;
					margin-bottom: 0.3rem;
					margin-top: 0.5rem;
					display: flex;
					align-items: center;
					.text{
						width: 0.7rem;
						text-align: left;
						font-size: 0.24rem;
						color: rgb(106, 177, 239);
						margin-right: 0.2rem;
					}
					.right{
						.inp{
							width: 4.56rem;
							height: 0.48rem;
							box-sizing: border-box;
							border: 1px solid rgb(219,219,219);
							border-radius: 6px;
							margin-bottom: 0.1rem;
							padding: 0 0.2rem;
							font-size: 0.18rem;
							color: rgb(102,102,102);
						}
					}
				}
				.popup_btn{
					width: 100%;
					display: flex;
					box-sizing: border-box;
					padding-left: 1.85rem;
					.popup_cancel{
						width: 1.88rem;
						height: 0.54rem;
						border: none;
						border-radius: 6px;
						padding: 0;
						font-size: 0.26rem;
						color: rgb(255, 255, 255);
						background-color: rgb(202, 202, 202);
						margin-right: 0.2rem;
						margin-top: 0.2rem;
						cursor: pointer;
					}
					.popup_submit{
						width: 1.88rem;
						height: 0.54rem;
						border: none;
						border-radius: 6px;
						padding: 0;
						font-size: 0.26rem;
						color: rgb(255, 255, 255);
						background-color: rgb(63, 204, 186);
						margin-top: 0.2rem;
						cursor: pointer;
					}
				}
			}
		}
			
	}
</style>