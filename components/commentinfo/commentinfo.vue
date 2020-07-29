<template>
	<view class="pl">
		<view class="gb">
			<image src="../../static/img/wd.png" mode=""></image>
		</view>
		<view class="coinfo">
			<text class="cname">刘国强</text>
			<text class="txt">买过一个，没用几次，每次用木铲.瓷脱了很多。质量不是很好。</text>
			<view class="time">
				<text>2019-12-18 20:22:37</text>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.pl{
		display: flex;
		padding: 10px 0;
		image{
			width: 40px;
			height: 40px;
			border-radius: 100px;
		}
		.gb{
			padding-left: 15px;
		}
		.coinfo{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: 14px;
			color: #606266;
			padding-left: 13px;
			.txt{
				font-size: 14px;
				color: #303133;
				padding: 10px 10px;
			}
			.time{
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				color: #909399;
				text{
					font-size: 12px;
					color: #909399;
				}
			}
		}
	}
</style>
