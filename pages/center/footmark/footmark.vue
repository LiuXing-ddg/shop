<template>
	<view class="footer">
		<view class="goodlist">
			<view class="gooditem">
				<text class="time">2020-07-15 17:24:23</text>
				<goodboxwidth></goodboxwidth>
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
.goodlist {
	display: flex;
	flex-direction: column;
	padding: 0;
	background: #fff;
	margin-top: 5px;
	.gooditem {
		.time {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 40px;
			padding-top: 5px;
			font-size: 13px;
			color: #7d7d7d;
			background: #f1f1f1;
		}
	}
}
</style>
