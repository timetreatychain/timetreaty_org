<template>
    <div class="web_mail">
    	<div class="chat" v-if="chats">
    		<div class="chat_title1" v-if="show">发私信给系统管理员</div>
    		<div class="chat_title2" v-if="!show">
    			<div class="left">&lt;</div>
    			<div class="right">发消息给用户</div>
    		</div>
    		<div class="chat_content">
    			<div v-for="item in contxt">{{item.name}}:{{item.txt}}</div>
    		</div>
    		<div class="chat_textarea">
    			<textarea id="textarea"></textarea>
    		</div>
    		<div class="chat_send">
    			<button class="send" @click="send()">发送</button>
    		</div>
    	</div>
        <div class="message" v-if="messages">
        	<div class="message_title">
        		<div class="left">私信</div>
        		<div class="right">
        			<input type="text" placeholder="查找私信记录..." class="inp"/>
        			<img src="../../assets/search.png" class="search" @click="search()"/>
        		</div>
        	</div>
        	<div class="message_content" v-for="item in system.list" @click="wbskt(system.who,item.sessioninfo.id)">
        		<img :src="item.heardpicpath" class="head"/>
        		<div class="text">
        			<div class="txt">
        				<div class="name">
        					{{item.username}}
        					<span class="level" v-if="item.usertype==='1'">（普通用户）</span>
        					<span class="level" v-if="item.usertype==='2'">（普通会员）</span>
        					<span class="level" v-if="item.usertype==='3'">（高级会员）</span>
        				</div>
	        			<div class="time">
		        			{{item.sessioninfo.createtime}}
		        		</div>
	        		</div>
	        		<div class="contxt">{{item.chatinfo}}</div>	
        		</div>
        	</div>
        	<el-pagination background layout="prev, pager, next" :page-size=5 :total="count" @current-change="pageCallback">
			</el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
        	return{
        		show:true,
        		chats:false,
        		messages:true,
        		count:0,
        		ws:'',
        		suer:'',
        		system:'',
        		contxt:[],
        		sid:''
        	}
        },
        created(){
        	this.getData(1,5)
	        	
        },
        methods:{
        	pageCallback(arg){
				this.getData(arg,5)
			},
			getData(page,row){
				let vm=this;
				$.ajax({
					url: contextPath+"/api/chat/finderoomlist",
					type: "post",
					async: true,
					dataType: "json",
					data:{
						languageType:localStorage.language,
						page,
						row,
						token:localStorage.token
//						token:"eyJhbGciOiJIUzI1NiIsImtpZCI6InBjIn0.eyJpc3MiOiJMaVl1SmlhWnUiLCJhdWQiOiJOb3RSZWFsbHlJbXBvcnRhbnQiLCJpYXQiOjE1MjYzODQyMDksImV4cCI6MTUyNzU5MzgwOSwiaW5mbyI6eyJ1c2VySWQiOjF9fQ.T0iYUL3Q-AAkwDyTtIM9WNSmBctRtTN5CR5jZpEb1ZI"
					},
					success(res){
						console.log(res)
						vm.sid=res.data.sid;
						if(res.data.who===0){
							vm.chats=false;
							vm.messages=true;
							vm.system=res.data;
							vm.count=res.data.count;
						}else if(res.data.who===1){
							vm.messages=false;
							vm.chats=true;
							vm.user=res.data;
							console.log(res.data.sid)
							vm.wbskt(res.data.who,res.data.sid);
							$.ajax({
				        		type:"post",
				        		url:contextPath+"/api/chat/findchathistory",
				        		async:true,
				        		dataType:'json',
				        		data:{
				        			languageType:localStorage.language,
				        			sId:vm.sid,
				        			token:localStorage.token
				        		},
				        		success(res){
				        			console.log(res)
				        			vm.contxt=res.data;
				        		}
				        	});
						}
					}
				});
			},
        	send(){
        		this.wsopen()
        	},
        	search(){
        		mui.alert("搜索")
        	},
        	wbskt(who,id){
        		let vm=this;
        		if(who===0){
        			this.show=false;
	        		this.chats=true;
	        		this.messages=false;
	        		$.ajax({
		        		type:"post",
		        		url:contextPath+"/api/chat/findchathistory",
		        		async:true,
		        		dataType:'json',
		        		data:{
		        			languageType:localStorage.language,
		        			sId:id,
		        			token:localStorage.token
		        		},
		        		success(res){
		        			console.log(res)
		        			vm.contxt=res.data;
		        		}
				    });
        		}else if(who===1){
        			this.show=true;
	        		this.chats=true;
	        		this.messages=false;
        		}
        		let url="ws:"+contextPath.replace('http://','//')+"/websocket/"+id+"/"+localStorage.token+"";
        		this.ws=new WebSocket(url);
//      		this.ws.onopen=this.wsopen();
        		this.ws.onmessage=function(data){
        			let res=JSON.parse(data.data)
        			vm.contxt.unshift({'name':res.name,'txt':res.txt})
        		}
        	},
        	wsopen(){
        		this.ws.send(JSON.stringify({'name':localStorage.username,'txt':$('#textarea').val()}))
        		$('#textarea').val('')
        	}
       },
       updated(){
			
       }
    }
</script>

<style scoped lang="scss">
.web_mail{
    width: 7.22rem;
    height: 8.01rem;
    background-color: #eeeeee;
    .chat{
    	width: 100%;
    	.chat_title1{
    		width: 6.78rem;
    		margin: 0 auto;
    		text-align: center;
    		line-height: 0.6rem;
    		font-size: 0.16rem;
    		color: #666666;
    		border-bottom: 1px solid rgb(186, 186, 186);
    	}
    	.chat_title2{
    		width: 6.78rem;
    		margin: 0 auto;
    		line-height: 0.6rem;
    		border-bottom: 1px solid rgb(186, 186, 186);
    		display: flex;
    		.left{
    			cursor: pointer;
    		}
    		.right{
    			font-size: 0.16rem;
    			color: #666666;
    			flex: 1;
    			text-align: center;
    		}
    	}
		.chat_content{
			width: 6.78rem;
			height: 5.6rem;
			margin: 0 auto;
			overflow-y: scroll;
			box-sizing: border-box;
			padding: 0.2rem 0;
			border-bottom: 1px solid rgb(186, 186, 186);
			div{
				font-size: 0.2rem;
				line-height: 0.4rem;
			}
		}
    	.chat_textarea{
    		width: 6.78rem;
    		height: 0.92rem;
    		box-sizing: border-box;
    		margin: 0 auto;
    		margin-top: 0.2rem;
			textarea{
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				padding: 0.1rem;
				font-size: 0.14rem;
				resize: none;
			}
    		
    	}
    	.chat_send{
    		width: 6.78rem;
    		margin: 0 auto;
    		text-align: right;
    		margin-top: 0.2rem;
    		.send{
    			width: 0.78rem;
    			height: 0.3rem;
    			border: none;
    			font-size: 0.16rem;
    			color: rgb(255, 255, 255);
    			background-color: rgb(106, 177, 239);
    			border-radius: 4px;
    			cursor: pointer;
    		}
    	}
    }
    .message{
    	width: 6.78rem;
    	margin: 0 auto;
    	.message_title{
    		width: 100%;
    		height: 0.6rem;
    		box-sizing: border-box;
    		display: flex;
    		justify-content: space-between;
    		align-items: center;
    		margin-bottom: 0.1rem;
    		border-bottom: 1px solid rgb(186, 186, 186);
    		.left{
    			font-size: 0.16rem;
    			color: #666666;
    		}
    		.right{
    			width: 2.66rem;
    			height: 0.25rem;
    			background: white;
    			border-radius: 6px;
    			border: 1px solid rgb(186, 186, 186);
				display: flex;
				align-items: center;
				.inp{
					width: 2.3rem;
					height: 0.2rem;
					font-size: 0.14rem;
					border: none;
					box-sizing: border-box;
					padding-left: 0.1rem;
				}
				.search{
					width: 0.2rem;
					height: 0.2rem;
					cursor: pointer;
				}
    		}
    	}
    	.message_content{
    		width: 100%;
    		display: flex;
    		flex-wrap: wrap;
    		padding: 0.2rem 0;
    		border-bottom: 1px solid rgb(186, 186, 186);
    		cursor: pointer;
    		.head{
    			width: 0.74rem;
    			height: 0.74rem;
    			border-radius: 50%;
    			margin: 0 0.2rem 0 0.1rem;
    		}
    		.text{
    			width: 5.74rem;
    			.txt{
    				display: flex;
    				justify-content: space-between;
    				.name{
    					color: #666666;
    					font-size: 0.16rem;
    					.level{
    						font-size: 0.16rem;
    						color: #6ab1ef;
    						margin-left: 0.15rem;
    					}
    				}
    				.time{
    					font-size: 0.16rem;
    					color: #6ab1ef;
    				}
    			}
    			.contxt{
    				font-size: 0.14rem;
    				color: #999999;
    				margin-top: 0.1rem;
    			}
    		}
    	}
    	.el-pagination{
			text-align: center;
			margin: 0.6rem 0 0.7rem 0;
		}
    }
}
</style>