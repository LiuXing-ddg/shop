<template>
	<view class="extend">
		
		<view class="content">
			<view class="list">
				<view class="item">
					<view class="title">
						<view class="ab iconfont" :class="this.bianhao==='1'?'icon-xuanzhong1':'icon-xuanzhong'" @click="radio('1')"></view>
						<image src="http://cjxx.zhjfd.com/upload/fileupload/shopImage/20191214/1576292243128597828342(750x1333).jpg" mode=""></image>
					</view>
					<text>我的推广海报</text>
				</view>
				
				<view class="item">
					<view class="title">
						<view class="ab iconfont" :class="this.bianhao==='2'?'icon-xuanzhong1':'icon-xuanzhong'" @click="radio('2')"></view>
						<image src="http://cjxx.zhjfd.com/upload/fileupload/shopImage/20191214/1576292243128597828342(750x1333).jpg" mode=""></image>
					</view>
					<text>我的推广海报</text>
				</view>
				
				<view class="item">
					<view class="title">
						<view class="ab iconfont" :class="this.bianhao==='3'?'icon-xuanzhong1':'icon-xuanzhong'" @click="radio('3')"></view>
						<image src="http://cjxx.zhjfd.com/upload/fileupload/shopImage/20191214/1576292243128597828342(750x1333).jpg" mode=""></image>
					</view>
					<text>我的推广海报</text>
				</view>
				
				<view class="item">
					<view class="title">
						<view class="ab iconfont" :class="this.bianhao==='4'?'icon-xuanzhong1':'icon-xuanzhong'" @click="radio('4')"></view>
						<image src="http://cjxx.zhjfd.com/upload/fileupload/shopImage/20191214/1576292243128597828342(750x1333).jpg" mode=""></image>
					</view>
					<text>我的推广海报</text>
				</view>
			</view>
			
			
		</view>
		<view class="bottom">
			<view class="copy">复制链接</view>
			<view class="share">立即分享</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return{
			bianhao:''
		}
	},
	methods: {
		clickLeft() {
			uni.navigateBack(1);
		},
		radio(e){
			console.log(e)
			this.bianhao=e
		}
	}
};
</script>

<style lang="scss">
	.icon-xuanzhong1{
		color: red !important;
	}
.content {
	box-sizing: border-box;
	.list {
		display: flex;
		    -webkit-flex-wrap: wrap;
		    flex-wrap: wrap;
		    padding: 0 15px;
		    background: #fff;
			box-sizing: border-box;
		.item {
			display: flex;
			    -webkit-box-orient: vertical;
			    -webkit-box-direction: normal;
			    -webkit-flex-direction: column;
				margin-right: 3%;
			    flex-direction: column;
			    width: 47%;
			    padding-bottom: 20px;
			box-sizing: border-box;
			.title {
				position: relative;
				width: 100%;
				height: 210px;
				border-radius: 3px;
				overflow: hidden;
				background: #f3f3f3;
				.ab {
					position: absolute;
					right: 4px;
					top: 4px;
					z-index: 8;
					font-size: 22px;
					line-height: 1;
					padding: 2px;
					color: #c0c4cc;
					background: #fff;
					border-radius: 50px;
				}
				image {
					width: 100%;
					height: 100%;
					opacity: 1;
				}
			}
			text {
				font-size: 16px;
				color: #303133;
				line-height: 40px;
				text-align: center;
			}
		}
	}
}
.bottom {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	background: #fff;
	font-size: 14px;
	z-index: 9;
	.copy {
		display: flex;
		flex: 1;
		color: #303133;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
	.share {
		display: flex;
		flex: 1;
		background: #fa436a;
		color: #fff;
		height: 100%;
		justify-content: center;
		align-items: center;
	}
}
</style>
