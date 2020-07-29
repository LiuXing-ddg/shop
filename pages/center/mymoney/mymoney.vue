<template>
	<view class="my_money">
		
		<view class="content">
			<view class="content_s">
				<view class="content_c">
					<text class="one">余额</text>
					<text class="two">14.60</text>
					<text class="there">></text>
				</view>
			</view>
			<view class="content_s">
				<view class="content_c">
					<text class="one">收益</text>
					<text class="two">14.60</text>
					<text class="there">></text>
				</view>
			</view>
			<view class="content_s">
				<view class="content_c">
					<text class="one">优惠券</text>
					<text class="two">14.60</text>
					<text class="there">></text>
				</view>
			</view>
			<view class="content_s">
				<view class="content_c">
					<text class="one">积分</text>
					<text class="two">14.60</text>
					<text class="there">></text>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	
	export default {
		methods:{
			clickLeft(){
				uni.navigateBack(1)
			}
		},
	   
	}
</script>

<style lang="scss">
	.my_money{
		.content{
			padding: 0 10px;
			.content_s{
				border-bottom: 0.5px solid #f3f3f3;
				.content_c{
					display: flex;
					    align-items: center;
					    padding: 10px 15px;
					    line-height: 30px;
					    position: relative;
					    background: #fff;
						.one{
							    flex: 1;
							    font-size: 14px;
							    color: #303133;
							    margin-right: 5px;
						}
						.two{
							font-size: 13px;
							    color: #909399;
						}
						.there{
							align-self: center;
							    font-size: 15px;
							    color: #606266;
							    margin-left: 10px;
						}
				}
			}
		}
	}
</style>
