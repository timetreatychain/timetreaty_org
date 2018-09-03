<template>
	<div class="affiche">
		<div class="localtion">{{$t("affiche.locatio[0]")}}：{{$t("affiche.locatio[1]")}} > <span class="color">{{$t("affiche.locatio[2]")}}</span></div>
		<div class="title">{{$t("affiche.title")}}</div>
		<div class="search">
			<input id="search_inp" type="text" :placeholder="$t('affiche.hoder')"/>
			<div class="search_send" @click="search_send()">{{$t("affiche.search")}}</div>
		</div>
		<div class="main">
			<div class="content" v-for="(item,index) in content" @click="into(item.id)">
				<div class="text">{{item.noticetitle}}</div>
				<div class="time">{{item.createtime}}</div>
			</div>
		</div>
		<el-pagination background layout="prev, pager, next" :total="count" :page-size=10 @current-change="pageCallback">
		</el-pagination>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				count:0,
				content:[]
			}
		},
		created(){
			this.getpage(1,10)
		},
		methods:{
			pageCallback(arg){
				this.getpage(arg,10)
			},
			getpage(page,row){
				let vm=this;
				$.ajax({
					url: contextPath+"/api/notice/findnoticeinfo",
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
						vm.content=data.data.noticeInfos;
					}
				});
			},
			search_send(){
				let vm=this;
				if($('#search_inp').val().length<=0){
					mui.alert(vm.$t('affiche.hoder'))
				}else{
					$.ajax({
						type:"post",
						url: contextPath+"/api/notice/findnoticeinfobymohu",
						async:true,
						dataType:"json",
						data:{
							languageType:localStorage.language,
							page:1,
							row:10,
							keyword:$('#search_inp').val()
						},
						success(res){
							console.log(res.data.noticeInfos)
							vm.content=res.data.noticeInfos;
							$('#search_inp').val('')
							if(res.data.noticeInfos.length===0){
								mui.alert(vm.$t('affiche.nul'))
							}
						}
					});
				}
			},
			into(id){
				this.$router.push({
					path:'/details',
					query:{id:id}
				})
			}
		},
		updated(){
			console.log(this.count)
		}
	}
</script>
<style lang="scss" scoped>
	.affiche{
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
		.title{
			width: 100%;
			text-align: left;
			font-size: 0.24rem;
			color: rgb(106, 177, 239);
			margin-bottom: 0.25rem;
		}
		.search{
			width: 9.3rem;
			height: 0.5rem;
			box-sizing: border-box;
			display: flex;
			margin: 0 auto;
			margin-bottom: 0.4rem;
			#search_inp{
				width: 8.16rem;
				height: 0.5rem;
				border: 2px solid rgb(106, 177, 239);
				box-sizing: border-box;
				border-bottom-left-radius: 6px;
				border-top-left-radius: 6px;
				padding-left: 0.2rem;
				font-size: 0.16rem;
			}
			.search_send{
				width: 1.14rem;
				height: 0.5rem;
				text-align: center;
				line-height: 0.5rem;
				background-color: rgb(106, 177, 239);
				color: rgb(255, 255, 255);
				border-bottom-right-radius: 6px;
				border-top-right-radius: 6px;
				cursor: pointer;
			}
		}
		.main{
			width: 100%;
			.content{
				width: 100%;
				height: 0.5rem;
				border-bottom: 1px solid rgb(204, 204, 204);
				display: flex;
				align-items: center;
				justify-content: space-between;
				.text{
					font-size: 0.18rem;
				}
				.time{
					font-size: 0.12rem;
					color: #666666;
				}
			}
			.content:hover{
				color: #6ab1ef;
				cursor: pointer;
			}
		}
		.el-pagination{
			text-align: center;
			margin: 0.6rem 0 0.7rem 0;
		}
	}
</style>