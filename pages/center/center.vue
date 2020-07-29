<template>
	<view>
		<view class="title">
			<view class="none"></view>
			<view class="bt"><text>我的</text></view>
			<view class="tb">
				<view class="one"><uni-icons type="email" class="f"></uni-icons></view>
				<view class="two"><uni-icons type="help" class="k"></uni-icons></view>
			</view>
		</view>
		<!-- 二部分 -->
		<view class="header">
			<view class="header_c">
				<view class="imgbox"><image :src="info.headPath"></image></view>
				<view class="info_box">
					<text class="name">{{info.nickname}}</text>
					<view class="dl"><text class="dl2">代理</text></view>
				</view>
				<view class="right">
					<button type="default" @tap="out">退出登录</button>
				</view>
			</view>
		</view>
		<!-- 三部分 -->
		<view class="content">
			<!-- 1 -->
			<view class="tel">
				<view class="telbox"><text>{{info.mobileNo}}</text></view>
			</view>
			<!-- 2 -->
			<view class="zc">
				<view class="zc_title" @click="tomymoney">
					<text class="one">我的资产</text>
					<text class="two">更多</text>
					<text class="there">></text>
				</view>
				<view class="zc_content">
					<view>
						<text class="num">{{data.balance|money}}</text>
						<text>余额</text>
					</view>
					<view>
						<text class="num">{{data.baodanbi|money}}</text>
						<text>收益</text>
					</view>
					<view>
						<text class="num">{{data.cycleLoginTimes|money}}</text>
						<text>优惠券</text>
					</view>
					<view>
						<text class="num">{{data.score |money}}</text>
						<text>积分</text>
					</view>
				</view>
			</view>
			<!-- 3 -->
			<view class="dd">
				<view class="zc_title" @click="tomyorder(0)">
					<text class="one">我的订单</text>
					<text class="two">全部订单</text>
					<text class="there">></text>
				</view>
				<view class="zc_content">
					<view>
						<text class="iconfont icon-daifukuan num"></text>
						<text @click="tomyorder(1)">待付款</text>
					</view>
					<view>
						<text class="iconfont icon-daishouhuo num"></text>
						<text @click="tomyorder(3)">待收货</text>
					</view>
					<view>
						<text class="iconfont icon-daipingjia num"></text>
						<text @click="tomyorder(4)">待评价</text>
					</view>
					<view>
						<text class="iconfont icon-tuikuanxinxiweihu num"></text>
						<text @click="tomyorder(5)">退款/售后</text>
					</view>
				</view>
			</view>
			<!-- 4 -->
			<view class="fw">
				<view class="zc_title">
					<text class="one">我的服务</text>
					<text class="two"></text>
					<text class="there"></text>
				</view>
				<view class="zc_content">
					<view>
						<text class="iconfont icon-tuite num"></text>
						<text @click="toextend">我要推广</text>
					</view>
					<view>
						<text class="iconfont icon-huabanfuben num"></text>
						<text @click="tomyteam">我的团队</text>
					</view>
					<view>
						<text class="iconfont icon-xingxing num"></text>
						<text @click="tosc">我的收藏</text>
					</view>
					<view>
						<text class="iconfont icon-shijian num"></text>
						<text @click="tofooter">我的足迹</text>
					</view>
					<view>
						<text class="iconfont icon-yiyuandiaopai num"></text>
						<text @click="tomypt">我的拼团</text>
					</view>
					<view>
						<text class="iconfont icon-yly_jifenshangcheng num"></text>
						<text @click="tomall">积分商城</text>
					</view>
					<view>
						<text class="iconfont icon-qiandao num"></text>
						<text @click="tosignin">签到中心</text>
					</view>
					<view>
						<text class="iconfont icon-dizhi num"></text>
						<text @click="toaddress">地址管理</text>
					</view>
					<view>
						<text class="iconfont icon-kefu num"></text>
						<text>客服中心</text>
					</view>
					<view>
						<text class="iconfont icon-yijianfankui num"></text>
						<text @click="tosugg">意见反馈</text>
					</view>
					<view>
						<text class="iconfont icon-tuikuanxinxiweihu num"></text>
						<text>我的发布</text>
					</view>
					<view>
						<text class="iconfont icon-set-s num"></text>
						<text @click="toset">设置中心</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import instance from"../../api/index.js"
	export default{
		data(){
			return{
				token:'',
				info:'',
				data:''
			}
		},
		onShow() {
			let token = wx.getStorageSync("token")
			this.token=token
			    if (token) {
			     
			    } else {
			      wx.navigateTo({
			        url:"../login/login",
			      })
			    }
		},
		onLoad() {
			this.token = uni.getStorageSync('token');
				instance({
					url:'/api/memberInfo/getMemberInfo',
					data:{
						token:this.token,
					},
					method:'POST',
						header:{
						   'content-type':'application/json',
						}
				}).then(res=>{
					console.log(res)
					this.info=res.data.data
				})
				instance({
					url:'/api/member/memberStatistics',
					data:{
						token:this.token,
					},
					method:'POST',
						header:{
						   'content-type':'application/json',
					}
				}).then(res=>{
					this.data=res.data.data
				})
			},
		methods:{
			out(){
				uni.clearStorageSync("token")
				uni.switchTab({
					url:"../index/index"
				})
			},
			tomymoney(){
				uni.navigateTo({
					url:"./mymoney/mymoney"
				})
			},
			tomyorder(num){
				uni.navigateTo({
					url:"./myorder/myorder?index="+num
				})
			},
			toextend(){
				uni.navigateTo({
					url:"extend/extend"
				})
			},
			tomyteam(){
				uni.navigateTo({
					url:"myteam/myteam"
				})
			},
			tosc(){
				uni.navigateTo({
					url:"collect/collect"
				})
			},
			tofooter(){
				uni.navigateTo({
					url:"footmark/footmark"
				})
			},
			tomypt(){
				uni.navigateTo({
					url:"mypt/mypt"
				})
			},
			tomall(){
				uni.navigateTo({
					url:"mall/mall"
				})
			},
			tosignin(){
				uni.navigateTo({
					url:"signin/signin"
				})
			},
			toaddress(){
				uni.navigateTo({
					url:"address/address"
				})
			},
			tosugg(){
				uni.navigateTo({
					url:"suggestion/suggestion"
				})
			},
			toset(){
				uni.navigateTo({
					url:"set/set"
				})
			}
		}
	}
</script>
<style lang="scss">
	.right{
		margin-left: 30px;
	}
.title {
	position: fixed;
	left: 0;
	width: 100%;
	height: 44px;
	padding: 7px 3px;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	overflow: hidden;
	display: none;
	justify-content: space-between;
	box-sizing: border-box;
	z-index: 998;
	color: #000;
	background-color: white;

	transition-property: all;
	.none {
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		font-size: 16px;
	}
	.bt {
		position: absolute;
		left: 70px;
		right: 70px;
		min-width: 0;
		text-align: center;
		user-select: auto;
		text {
			font-weight: 700;
			font-size: 16px;
			line-height: 30px;
			text-align: center;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	.tb {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		font-size: 13px;
		.one {
			display: flex;
			width: 46px;
			align-items: center;
			justify-content: center;
			height: 32px;
			border-radius: 50%;
			position: relative;
			margin: 0 2px;
			word-break: keep-all;
			white-space: pre;
			.f {
				font-size: 24px !important;
			}
		}
		.two {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 32px;
			height: 32px;
			border-radius: 50%;
			position: relative;
			margin: 0 2px;
			word-break: keep-all;
			white-space: pre;
			.k {
				font-size: 24px !important;
			}
		}
	}
}
.header {
	height: 175px;
	padding: 50px 15px 0;
	position: relative;
	background: #fa436a;
	box-sizing: border-box;
	.header_c {
		height: 90px;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		.imgbox {
			image {
				width: 65px;
				height: 65px;
				border: 2px solid #fff;
				border-radius: 50%;
			}
		}
		.info_box {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			margin-left: 10px;
			color: #fff;
			font-size: 19px;
			.name {
				color: #fff;
				font-size: 19px;
			}
			.dl {
				display: block;
				background: #fff;
				color: #fa436a;
				font-size: 14px;
				padding: 4px 8px;
				border-radius: 30px;
				margin-top: 5px;
				.dl2 {
					color: #fa436a;
					font-size: 14px;
				}
			}
		}
	}
}
.content {
	padding: 10px;
	position: relative;
	background: #f5f5f5;
	padding-bottom: 10px;
	.tel {
		display: flex;
		align-items: center;
		padding: 10px 15px;
		line-height: 30px;
		position: relative;
		background: #fff;
		text {
			flex: 1;
			font-size: 14px;
			color: #303133;
			margin-right: 5px;
		}
	}
	.zc,.dd,.fw {
		margin-top: 8px;
		background: #fff;
		border-radius: 5px;
		.zc_title {
			display: flex;
			align-items: center;
			padding: 10px 15px;
			line-height: 30px;
			position: relative;
			background: #fff;
			.one {
				flex: 1;
				font-size: 14px;
				color: #303133;
				margin-right: 5px;
			}
			.two {
				font-size: 13px;
				color: #909399;
			}
			.there {
				align-self: center;
				font-size: 15px;
				color: #606266;
				margin-left: 10px;
			}
		}
		.zc_content {
			display: flex;
			justify-content: space-around;
			align-content: center;
			flex-wrap: wrap;
			border-top: 0.5px solid #f3f3f3;
			view {
				flex-direction: column;
				justify-content: center;
				height: 70px;
				width: 25%;
				font-size: 12px;
				color: #75787d;
				display: flex;
				align-items: center;
				text {
					font-size: 12px;
					color: #75787d;
				}
				.num {
					font-size:24px;
					color: #FA436A;
					margin-bottom: 4px;
				}
			}
		}
	}
}
.content .zc .zc_content view .num{
	color: #000;
}
</style>
