<template>
	<view class="index">
		<view class="top" :style="{'display':(flag===true? 'block':'none')}">
		  <view class="iconfont icon-tubiao-"  size="50" @click="top"></view>
		</view>
		<view class="header" :class="isactive?'op':''">
			<view class="logo"></view>
			<view class="searchView">
				<icon type="search" size="18"></icon>
				<text>搜索商品</text>
			</view>
			<view class="gz">关注</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000">
						<swiper-item v-for="item in banner">
							<view class="swiper-item uni-bg-red"><image :src="`http://cjxx.zhjfd.com/upload/`+item.logo" mode=""></image></view>
						</swiper-item>
						
					</swiper>
				</view>
			</view>
		</view>
		<view class="list">
			<text>官方严选</text>
			<text>正品保障</text>
			<text>售后无忧</text>
			<text>7天无理由退换</text>
		</view>
		<view class="icon">
			<view class="one">
				
					<view v-for="item in icon">
						<navigator open-type="navigate" url="../goodslist/goodslist">
							<img :src="`http://cjxx.zhjfd.com/upload/`+item.logo">
							<text>{{item.name}}</text>
						</navigator>
					</view>
			</view>
			
		</view>

		<view class="imgbox">
			<img src="http://cjxx.zhjfd.com/upload/fileupload/shopImage/20200616/15922781396291073171867(520x280).jpg">
		</view>
		<view class="daohang">
			<image src="../../static/img/qg.png"></image>
			<countdown-timer ref="countdown" :time="time" @finish="onFinish">
				<template v-slot="{day, hour, minute, second, remain, time}">
					<!-- 自定义样式 -->
					<view class="case">
						<view class="custom">
							<view>{{fillWithZero(hour + (day * 24), 2)}}</view>
							<view>:</view>
							<view>{{fillWithZero(minute, 2)}}</view>
							<view>:</view>
							<view>{{fillWithZero(second, 2)}}</view>
						</view>
					</view>
				</template>
			</countdown-timer>
			<text>></text>
		</view>
		<view class="newgoods">
			<view class="top">
				<image src="../../static/img/h1.png">
					<view class="txt">新品推荐</view>
					<text>更多 ></text>
			</view>
			<view class="content">
				<block v-for="item in list" :key="item.id">
					<goodbox :item="item"></goodbox>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import instance from "../../api/index.js"
	export default {
		data() {
			return {
				time: new Date('2020/04/24 01:00:00').getTime() - new Date('2020/04/24 00:20:00').getTime(),
				flag:false,
				isactive:false,
				banner:[],
				icon:[],
				list:''
			}
		},
		onLoad(){
			 instance({
					url:"/api/product/homeRecCategoryList",
					data:{
						'menuType':'hotSales'
					},
					method:'POST',
					header:{
					   'content-type':'application/json',
					}
					
			 }).then(res=>{
				 console.log(res)
				 this.list=res.data.data[1].data
				 
				 this.icon.push(res.data.data[0],res.data.data[5],res.data.data[8],res.data.data[10],res.data.data[11],res.data.data[12],res.data.data[13],res.data.data[14],res.data.data[15],res.data.data[16])
				 this.banner.push(res.data.data[2],res.data.data[3],res.data.data[9])
			 })
		},
		methods: {
			top() { //回到顶部
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 300//动画时间
					});
				},
				onPageScroll(e){ //根据距离顶部距离是否显示回到顶部按钮
					if(e.scrollTop>200){ //当距离大于600时显示回到顶部按钮
						this.flag=true
						this.isactive=true
					}else{ //当距离小于600时隐藏回到顶部按钮
						this.flag=false
												this.isactive=false
					}
				},
			onFinish() {
				uni.showToast({
					icon: 'none',
					title: '倒计时结束'
				})
			},
			fillWithZero(num, n) {
				var len = num.toString().length;
				while (len < n) {
					num = "0" + num;
					len++;
				}
				return num;
			}
		}
	}
</script>

<style lang="scss">
	.op{
		background: white !important;
	}
	.index{
		position: relative;
	}
	.swiper-item{
		width: 100%;
		height: 100%;
		image{
		width: 100%;
		height: 100%;
		}
	}
	.top {
			position: relative;
			display: none; /* 先将元素隐藏 */
		}
	 
		.icon-tubiao-{
			position: fixed;
			right: 10px;
			z-index: 999;
			top: 70%;
			height: 50px;
			line-height: 50px;
			font-size: 44px;
			color: blue;
}
	.searchView {
		background-color: rgba(231, 231, 231, 0.7);
		width: 75%;
		height: 60rpx;
		border-radius: 30rpx;
		font-size: 12px;
		color: gray;
	}
	uni-navigator {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
	}
	.searchView icon {
		margin-left: 10px;
		line-height: 60rpx;
	}

	.header {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 40px;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999;
	}

	.logo {
		height: 32px;
		width: 32px;
		margin-right: 5px;
		background: url(../../static/img/logo.png) no-repeat 50%;
		background-size: 32px 32px;
	}

	.gz {
		margin-left: 5px;
		font-size: 16px;
	}

	.swiper {
		background: red;
		height: 202px;
	}

	.list {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #F5F5F5;
		padding: 10px 5px;
	}

	.list text {
		font-size: 12px;
		font-weight: bold;
	}

	.icon {
		background: white;
	}

	.icon .one {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		    padding: 0 11px;
		    padding-top: 15px;
	}

	.icon .one view {
		display: flex;
		width: 20%;
		flex-direction: column;
		align-items: center;
		padding-bottom: 15px;
	}

	.icon .one view text {
		margin: 0;
		font-size: 12px;
	}

	.icon .one view img {
		width: 44px;
		height: 44px;
		margin: 3px 5px;
	}

	.icon .two {
		display: flex;
		width: 100%;
		align-items: center;
	}

	.icon .two view {
		display: flex;
		width: 25%;
		flex-direction: column;
		align-items: center;
	}

	.icon .two view text {
		margin: 0;
		font-size: 12px;
	}

	.icon .two view img {
		width: 44px;
		height: 44px;
		margin: 3px 5px;
	}

	.imgbox {
		margin-top: 10px;
		width: 100%;
	}

	.imgbox img {
		width: 100%;
	}

	.container {
		padding: 20upx;
	}

	.case {
		display: flex;
		margin: 20upx;
	}

	.case>.title {
		margin-right: 10upx;
	}

	.custom {
		display: flex;
	}

	.custom :nth-child(odd) {
		background-color: red;
		padding: 2upx 4upx;
		color: white;
		border-radius: 5upx;
		text-align: center;
	}

	.custom :nth-child(even) {
		padding: 0 5upx;
	}

	.reset-btn {
		margin: 20upx 10upx;
		padding: 20upx;
		text-align: center;
		background-color: red;
		border-radius: 10upx;
		color: white;
	}

	.daohang {
		height: 70px;
		display: flex;
		background: white;
		margin: 5px 0;
		justify-content: space-around;
		align-items: center;
	}

	.daohang image {
		width: 150px;
		height: 30px;
	}

	.newgoods .top {
		width: 100%;
		display: flex;
		height: 42px;
		padding: 3px 10px 4px;
		background: #fff;
		justify-content: space-around;
		align-items: center;
	}

	.newgoods .top image {
		width: 24px;
		height: 24px;

		margin-right: 8px;
	}

	.newgoods .top .txt {
		width: 70%;
	}

	.newgoods .top text {
		margin-right: 10px;
		font-size: 16px;
	}

	.newgoods {
		background: white;
	}

	.newgoods .content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 10px;
		background: #fff;
	}
</style>
