<template>
	<div id="header">
		<div class="box">
			<router-link to="/nav"><div class="img"><img src="../assets/logo.png"/></div></router-link> 
			<nav class="nav">
		  		<router-link to='introduce'>{{$t("headerbox.nav[0]")}}</router-link>
		  		<router-link to='enter'>{{$t("headerbox.nav[1]")}}</router-link>
		  		<router-link to='affiche' :class="act===true?'acti':''">{{$t("headerbox.nav[2]")}}</router-link>
		  		<router-link to='value'>{{$t("headerbox.nav[3]")}}</router-link>
		  		<router-link to='roadmap'>{{$t("headerbox.nav[4]")}}</router-link>
		  		<a href="http://block.timetreaty.org" target="_blank">{{$t("headerbox.nav[6]")}}</a>
		  		<router-link to='concat'>{{$t("headerbox.nav[5]")}}</router-link>
			</nav>
			<div class="head">
				<div class="name" v-if="isLogin==='1'" @click="name()">{{$t("headerbox.geren")}}</div>
				<div class="regist" v-if="isLogin!='1'" @click="regist()">{{$t("headerbox.zc")}}</div>
				<span>|</span>
				<div class="close" v-if="isLogin==='1'" @click="close()">{{$t("headerbox.tc")}}</div>
				<div class="close" v-if="isLogin!='1'" @click="login()">{{$t("headerbox.dl")}}</div>
				<select @change="china()" id="select" v-model="sele">
					<option>简体中文</option>
					<option>English</option>
				</select>
			</div>
		</div>
		<router-view class="view"></router-view>
		<footer-box></footer-box>
	</div>
</template>
<script>
	import Bus from '../common/js/bus.js'
	import FooterBox from './home/userkonw'
	export default{
		data(){
			return{
				isLogin:localStorage.isLogin||"",
				sele:localStorage.language==='zh'?'简体中文':'English',
				act:false
			}
		},
		components:{
			FooterBox
		},
		methods:{
			name(){
				this.$router.push({
					path:'/personal_info'
				})
			},
			regist(){
				this.$router.push({
					path:'/regist'
				})
			},
			login(){
				this.$router.push({
					path:'/login'
				})
			},
			close(){
				localStorage.clear();
				this.$router.push({
					path:'/login'
				})
			},
			china(){
				console.log($('#select').val())
				if($('#select').val()==='简体中文'){
					location.reload()
					localStorage.language='zh';
				}else{
					location.reload()
					localStorage.language='en'
				}
				
			}
		},
		mounted(){
			let vm=this;
			Bus.$on('active',(e)=>{
				vm.act=e
			})
		}
	}
</script>
<style lang="scss" scoped>
	#header{
		width: 100%;
		.box{
			width: 100%;
			height: 0.7rem;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-around;
			border-bottom: 1px solid rgb(204, 204, 204);
			.img{
				height: 0.45rem;
				img{
					height: 0.45rem;
				}
			}
			.nav{
				width: 12rem;
				height: 0.7rem;
				display: flex;
				justify-content: space-around;
				align-items: center;
				a{
					height: 0.7rem;
					line-height: 0.7rem;
					font-size: 0.18rem;
					color: #666666;
					box-sizing: border-box;
					border-bottom: 1px solid transparent;
				}
				.router-link-active{
					color: rgb(106, 177, 239);
					border-bottom: 2px solid rgb(106, 177, 239);
				}
				.acti{
					color: rgb(106, 177, 239);
					border-bottom: 2px solid rgb(106, 177, 239);
				}
			}
			.head{
				height: 0.7rem;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				.name{
					font-size: 0.14rem;
					color: #2594f4;
					cursor: pointer;
				}
				.regist{
					font-size: 0.14rem;
				}
				.regist:hover{
					color: #2594f4;
					cursor: pointer;
				}
				span{
					font-size: 0.14rem;
					margin: 0 0.15rem;
				}
				.close{
					font-size: 0.14rem;
					color: #333333;
					margin-right: 0.1rem;
				}
				.close:hover{
					color: #2594f4;
					cursor: pointer;
				}
				select{
					height: 0.21rem;
					font-size: 0.14rem;
					border: none;
					background: none;
					cursor: pointer;
				}
			}
		}
		.view{
			width: 12rem;
			margin: 0 auto;
		}
	}
</style>
