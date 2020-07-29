<template>
	<view class="friends">
		<view class="">
			<block v-for="item in 3" :key="item.id">
				<sharebox></sharebox>
			</block>
		</view>
		<view class="take">
			<view class="takebox">
				<image src="../../static/img/camera.png" mode=""></image>
				<text @click="toupload">分享心得</text>
			</view>
		</view>
	</view>
		
		
	
</template>

<script>
	export default{
		methods:{
			toupload(){
				uni.navigateTo({
					url:"../upload/upload"
				})
			}
		}
	}
</script>

<style lang="scss">
	.take {
		position: fixed;
		width: 100%;
		height: 45px;
		min-height: 45px;
		left: 0px;
		bottom: 0px;
		overflow: hidden;
		bottom: 50px;

		.takebox {
			height: 40px;
			width: 110px;

			display: flex;

			justify-content: center;

			align-items: center;
			background: #fa436a;
			color: #fff;
			font-size: 14px;
			border-radius: 40px;
			margin: 0 auto;
			opacity: .9;
			image{
				height: 20px;
				    width: 20px;
				    margin-right: 5px;
					display: inline-block;
					    overflow: hidden;
					    position: relative;
			}
		}
	}
</style>
