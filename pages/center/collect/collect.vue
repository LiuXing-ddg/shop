<template>
	<view class="collect">
		
		<view class="content">
			<goodboxwidth></goodboxwidth>
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
	padding-top: 5px;
	
}
</style>
