<template>
	<view class="pt">
		<view class="tabbar">
			<view class="end-title">
				<view @tap="change(0)" :class="{ btna: btnnum == 0 }">全部</view>
				<view @tap="change(1)" :class="{ btna: btnnum == 1 }">待付款</view>
				<view @tap="change(2)" :class="{ btna: btnnum == 2 }">待发货</view>
				<view @tap="change(3)" :class="{ btna: btnnum == 3 }">待收货</view>
				<view @tap="change(4)" :class="{ btna: btnnum == 4 }">待评价</view>
				<view @tap="change(5)" :class="{ btna: btnnum == 5 }">售后</view>
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 0 }">
				<view class="order-item">
					<view class="header">
						<text class="time">2020-03-24 18:55:43</text>
						<text class="state">交易取消</text>
					</view>
					<view class="box">
						<image src="../../../static/img/emptyCart.jpg" mode=""></image>
						<view class="detail">
							<text class="title">15包婴儿洁肤湿纸巾小包随身装10抽/包</text>
							<text class="desc">款式：婴儿洁肤湿巾小包随身装；规格：10抽*15包 x 1</text>
							<text class="price">￥9.90</text>
						</view>
					</view>
					<view class="num">
						共
						<text class="sl">1</text>
						件商品 实付款
						<text class="all">￥100.2</text>
					</view>
				</view>
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 1 }">1信息</view>
			<view class="end-cont" :class="{ dis: btnnum == 2 }">2信息</view>
			<view class="end-cont" :class="{ dis: btnnum == 3 }">3信息</view>
			<view class="end-cont" :class="{ dis: btnnum == 4 }">4信息</view>
			<view class="end-cont" :class="{ dis: btnnum == 5 }">5信息</view>
		</view>
	</view>
</template>

<script>

export default {
	data() {
		return {
			btnnum: 0
		};
	},
	methods: {
		clickLeft() {
			uni.navigateBack(1);
		},
		change(e) {
			this.btnnum = e;
			console.log(this.btnnum);
		}
	}
};
</script>

<style lang="scss">
.end-title {
	display: flex;
	height: 40px;
	padding: 0 5px;
	background: #fff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
	position: relative;
	z-index: 10;
}
.end-title view {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 15px;
	color: #303133;
	position: relative;
}
.end-cont {
	display: none;
	background: #c8c7cc;
}
.btna {
	color: #fa436a !important;
	&::after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		width: 44px;
		height: 0;
		border-bottom: 2px solid #fa436a;
	}
}
.dis {
	display: block;
	.order-item {
		display: flex;

		flex-direction: column;
		padding-left: 15px;
		background: #fff;
		margin-top: 8px;
		.header {
			display: flex;

			align-items: center;
			height: 40px;
			padding-right: 15px;
			font-size: 14px;
			color: #303133;
			position: relative;
			.time {
				flex: 1;
			}
			.state {
				color: rgb(144, 147, 153);
			}
		}
		.box {
			display: flex;
			padding: 10px 0;
			image {
				display: block;
				width: 60px;
				height: 60px;
			}
			.detail {
				flex: 1;

				display: flex;

				flex-direction: column;
				padding: 0 15px 0 12px;
				overflow: hidden;
				.title {
					font-size: 15px;
					color: #303133;
					line-height: 1;
				}
				.desc {
					font-size: 13px;
					color: #909399;
					padding: 5px 6px;
				}
				.price {
					font-size: 15px;
					color: #303133;
				}
			}
		}
	}
}
.num {
	display: flex;

	justify-content: flex-end;

	align-items: baseline;
	padding: 10px 15px;
	font-size: 13px;
	color: #909399;
	.sl {
		margin: 0 4px;
		color: #303133;
	}
	.all {
		font-size: 16px;
		color: #303133;
	}
}
</style>
