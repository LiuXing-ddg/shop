<template>
	<view class="collect">
		<view class="content">
			<view class="banner">
				<view class="qd">
					签到
				</view>
				<view class="sign">
					<text class="one">今日签到可领取10积分</text>
					<text class="two">积分自动到账，可兑换积分商城礼品</text>
				</view>
			</view>
			<view class="rule">
				<view class="title">
					———— 签到规则 ————
				</view>
				<view class="list">
					<text class="yi">1. 每天签到即可获得10积分（可用于积分商城礼品兑换）</text>
					<text class="er">2. 积分将直接发放到账户，到账后立即生效</text>
				</view>
				<view class="zh">
					本活动最终解释权归本店所有，如有疑义，请联系微店客服。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		clickLeft() {
			uni.navigateBack(1);
		}
	}
};
</script>

<style lang="scss">
.content {
	height: 100%;
	    background: #f8f6fc;
		.banner{
			width: 100%;
			    overflow: hidden;
			    height: 210px;
			    display: -webkit-box;
			    display: -webkit-flex;
			    display: flex;
			    -webkit-box-orient: vertical;
			    -webkit-box-direction: normal;
			    -webkit-flex-direction: column;
			    flex-direction: column;
			    -webkit-box-pack: center;
			    -webkit-justify-content: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    align-items: center;
			    background: #fa436a;
			    font-weight: 600;
			    color: #303133;
				.qd{
					height: 80px;
					    line-height: 80px;
					    text-align: center;
					    width: 80px;
					    display: block;
					    background: #fff;
					    font-size: 16px;
					    border-radius: 50%;
					    box-shadow: 0 0 5px #ccc;
				}
				.sign{
					font-size: 14px;
					    display: -webkit-box;
					    display: -webkit-flex;
					    display: flex;
					    -webkit-box-align: center;
					    -webkit-align-items: center;
					    align-items: center;
					    -webkit-box-orient: vertical;
					    -webkit-box-direction: normal;
					    -webkit-flex-direction: column;
					    flex-direction: column;
					    padding: 15px 0;
				}
				
		}
		.rule{
			display: flex;
			    -webkit-box-orient: vertical;
			    -webkit-box-direction: normal;
			    -webkit-flex-direction: column;
			    flex-direction: column;
			    -webkit-box-pack: center;
			    -webkit-justify-content: center;
			    justify-content: center;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    align-items: center;
			    padding: 20px;
			    font-size: 14px;
			    color: #909399;
			    padding: 10px 20px;
				.title{
					font-size: 16px;
				}
				.list{
					display: flex;
					    -webkit-box-orient: vertical;
					    -webkit-box-direction: normal;
					    -webkit-flex-direction: column;
					    flex-direction: column;
					    -webkit-box-pack: start;
					    -webkit-justify-content: flex-start;
					    justify-content: flex-start;
					    -webkit-box-align: start;
					    -webkit-align-items: flex-start;
					    align-items: flex-start;
					    padding: 5px 0;
						text{
							padding: 5px 0;
						}
				}
				.zh{
					font-size: 14px;
					    color: #909399;
				}
		}
}
</style>
