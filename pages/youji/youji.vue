<template>
	<view class="youji" >
		<view class="good_item" @click="toinfo">
			<image src="../../static/img/yj.jpg" mode=""></image>
			<view class="bottom">
				<text class="title">
					东北五常特色有机稻花香大米礼盒4kg
				</text>
				<view class="bottom-box">
					<view class="price">
						<text>￥118.00</text>
						<del>￥55.00</del>
					</view>
					<view class="bo">
						<button>立即抢购</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			toinfo(){
				uni.navigateTo({
					url:"../goodsinfo/goodsinfo"
				})
			}
		}
	}
</script>

<style lang="scss">
	.youji .good_item {
		display: flex;
		flex-direction: column;
		margin: 0 15px;
		border-top: solid 0.5px #f1f1f1;
		padding: 10px 0;

		image {
			flex-shrink: 0;
			display: block;
			width: 100%;
			height: 180px;
			border-radius: 2px;
			position: relative;
		}

		.bottom {
			flex: 1;
			overflow: hidden;

			.title {
				font-size: 15px;
				color: #303133;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block;
			}

			.bottom-box {
				display: flex;
				justify-content: space-between;

				.price {
					display: flex;
					font-size: 16px;
					color: #303133;
					padding-top: 5px;
					align-items: flex-end;

					text {
						margin-bottom: 2px;
					}

					del {
						font-size: 12px;
						color: #909399;
						text-decoration: line-through;
						margin-bottom: 2px;
						margin-left: 5px;
					}
				}

				.bo {
					display: flex;
					flex-direction: column;
					align-items: flex-end;

					button {
						height: 30px;
						line-height: 30px;
						font-size: 14px;
						background: #fa436a;
						color: #fff;
						width: 90px;
						margin-left: 0;
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
