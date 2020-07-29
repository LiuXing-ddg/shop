<template>
	<view>
		<view class="goodlist">
			<view class="item">
				<image src="../../static/img/yj.jpg" mode=""></image>
				<view class="right">
					<text>鸿福满园--养怡之福 永年康乐</text>
					<text class="ts"></text>
					<view class="price-box">
						<view class="price"><text>￥198.00</text></view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.goodlist {
		display: flex;
		flex-direction: column;
		padding: 0;
		background: #fff;
		.item {
			display: flex;
			margin: 0 15px;
			border-top: 0.5px solid #f1f1f1;
			padding: 10px 0;
			image {
				flex-shrink: 0;
				display: block;
				width: 80px;
				height: 80px;
				border-radius: 2px;
			}
			.right {
				flex: 1;
				padding-left: 12px;
				overflow: hidden;
				text {
					font-size: 15px;
					color: #303133;
				}
				.ts {
				}
				.price-box {
					display: flex;
					justify-content: space-between;
					padding-top: 10px;
					.price {
						display: flex;
						flex-direction: column;
						font-size: 16px;
						color: #303133;
						padding-top: 5px;
						margin-bottom: 2px;
					}
				}
			}
		}
	}
</style>
