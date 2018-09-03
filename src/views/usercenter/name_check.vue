<template>
	<div class="check">
		<div class="title">
			{{$t("nametoken.p0")}}
		</div>
		<div class="img">
			<img src="../../assets/namecheck.png"/>
			<div class="txt">{{$t("nametoken.sh")}}...</div>
		</div>
	</div>
</template>
<script>
	export default {
		mounted() {
			 this.sx();
		},
		methods: {
			sx(){
			//location.reload();
			}
		}
	}
</script>
<style lang="scss" scoped>
	.check{
		width: 9.3rem;
		height: 3.85rem;
		background-color: rgb(238, 238, 238);
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.title{
			width: 8.53rem;
  			height: 0.31rem;
  			line-height: 0.31rem;
			border:1px solid rgb(106, 177, 239);
  			background-color: rgb(189, 222, 251);
  			font-size: 0.16rem;
  			color: #3288d4;
  			margin-top: 0.3rem;
  			box-sizing: border-box;
  			padding-left: 0.2rem;
		}
		.img{
			width: 8.53rem;
			height: 1.45rem;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				width: 1.45rem;
				height: 1.45rem;
				margin-right: 0.3rem;
			}
			.txt{
				height: 1.45rem;
				box-sizing: border-box;
				padding-top: 1rem;
				font-size: 0.18rem;
				color: #333333;
			}
		}
	}
</style>