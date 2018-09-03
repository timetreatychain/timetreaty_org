<template>
	<div class="details">
		<div class="localtion">{{$t("details.locatio[0]")}}：{{$t("details.locatio[1]")}} > {{$t("details.locatio[2]")}} > <span class="color">{{$t("details.locatio[3]")}}</span></div>
		<div class="title">{{info.notice.noticetitle}}</div>
		<div class="time">{{$t("details.time")}}：{{info.notice.createtime}}</div>
		<div class="xml" v-html="info.notice.noticeinfo"></div>
		<div class="page">
			<div class="txt" v-if="info.before!=null">{{$t("details.prev")}}：<span @click="prev(info.beforeid)">{{info.before}}</span></div>
			<div class="txt" v-else>{{$t("details.prev")}}：<span @click="prev(info.beforeid)">{{$t("details.meishang")}}</span></div>
			<div class="txt" v-if="info.after!=null">{{$t("details.next")}}：<span @click="next(info.afterid)">{{info.after}}</span></div>
			<div class="txt" v-else>{{$t("details.next")}}：<span @click="next(info.afterid)">{{$t("details.meixia")}}</span></div>
		</div>
	</div>
</template>
<script>
	import Bus from '../common/js/bus.js'
	export default{
		data(){
			return{
				id:'',
				info:{
					notice:{}
				}
			}
		},
		created(){
			localStorage.active=location.href.slice(location.href.lastIndexOf('/'),location.href.length)
//			this.id=this.$route.query.id;
			this.getData(this.$route.query.id)
		},
		methods:{
			getData(id){
				let vm=this;
				$.ajax({
					type:"post",
					url:contextPath+"/api/notice/findnoticeinfobyid",
					async:true,
					dataType:"json",
					data:{
						languageType:localStorage.language,
						nId:id
					},
					success(res){
						console.log(res)
						vm.info=res.data
					}
				});
			},
			prev(id){
				let vm=this;
				this.$route.query.id=id;
				if(this.info.before===null){
					mui.alert(vm.$t("details.meishang"))
				}else{
					this.getData(id)
				}
			},
			next(id){
				let vm=this;
				this.$route.query.id=id;
				if(this.info.after===null){
					mui.alert(vm.$t("details.meixia"))
				}else{
					this.getData(id)
				}
			}
		},
		updated(){
			Bus.$emit('active',true)
		},
		destroyed(){
			Bus.$emit('active',false)
		}
	}
</script>
<style lang="scss">
	.details{
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
			text-align: center;
			font-size: 0.24rem;
		}
		.time{
			width: 100%;
			text-align: center;
			font-size: 0.14rem;
			color: #666666;
			margin:0.1rem 0 0.2rem 0;
		}
		.xml{
			width: 100%;
			p{
				font-size: 0.14rem;
			}
			img{
				width: 12rem;
				height: 5rem;
			}
		}
		.page{
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin-bottom: 0.7rem;
			margin-top: 0.3rem;
			.txt{
				font-size: 0.14rem;
				span:hover{
					cursor: pointer;
					color: #6ab1ef;
				}
			}
				
		}
	}
</style>