<template>
	<view class="qw">
		<sharebox></sharebox>
		<view class="commentinfo">
			<view class="name">
				评论
			</view>
			<view class="commentinfo">
				<block v-for="item in 1" :key="item.id">
				<commentinfo></commentinfo>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.qw{
		.commentinfo{
			.name{
				font-size: 16px;
				padding: 5px 15px;
			}
		}
	}
</style>
