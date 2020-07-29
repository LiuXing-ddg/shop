<template>
	<view class="mall">
		
		<view class="content">
			<view class="goodlist">
				<view class="item">
					<view class="imgbox">
						<image src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg" mode=""></image>
					</view>
					<text class="title">小苏打薰衣草香洗衣液2kg</text>
					<view class="goodsale">
						<text class="dh">兑换积分 299</text>
						<del class="del">￥28.00</del>
					</view>
					<view class="goodbuy">
						<text class="dh_yj">已兑换11件</text>
						<button>立即兑换</button>
					</view>
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
	.content{
		padding-top: 5px;
		.goodlist{
			display: flex;
			    -webkit-flex-wrap: wrap;
			    flex-wrap: wrap;
			    padding: 0 15px;
			    background: #fff;
				.item{
					display: flex;
					    -webkit-box-orient: vertical;
					    -webkit-box-direction: normal;
					    -webkit-flex-direction: column;
					    flex-direction: column;
					    width: 48%;
					    padding-bottom: 20px;
						margin-right: 4%;
						.imgbox{
							width: 100%;
							    height: 165px;
							    border-radius: 3px;
							    overflow: hidden;
								image{
									width: 100%;
									    height: 100%;
									    opacity: 1;
								}
						}
						.title{
							font-size: 14px;
							    color: #303133;
							    line-height: 30px;
						}
						.goodsale{
							position: relative;
							    font-size: 16px;
								.dh{
									font-size: 14px;
									    color: #fa436a;
									    line-height: 1;
								}
								.del{
									position: absolute;
									    bottom: 0;
									    right: 0;
									    color: #909399;
									    font-size: 12px;
								}
						}
						.goodbuy{
							display: flex;
							    -webkit-box-pack: justify;
							    -webkit-justify-content: space-between;
							    justify-content: space-between;
							    -webkit-box-align: center;
							    -webkit-align-items: center;
							    align-items: center;
							    padding-top: 5px;
								.dh_yj{
									font-size: 12px;
									    color: #909399;
									    text-align: center;
								}
								button{
									background: #fa436a;
									    color: #fff;
									    height: 30px;
									    line-height: 30px;
									    width: 80px;
									    margin-left: 0;
									    margin-right: 0;
									    padding-left: 10px;
									    padding-right: 10px;
									    font-size: 14px;
								}
						}
				}
		}
	}
</style>
