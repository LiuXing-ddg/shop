<template>
	<view>
		<view class="content">
			<text class="title">您有什么问题或建议想对我们说?</text>

			<view class="dada">
				<view class="son"><input maxlength="140" step="" autocomplete="off" type="" class="input" placeholder="您有什么想要对我们说的" /></view>
			</view>
			<view class="textbox"><textarea maxlength="140" placeholder="您的宝贵意见就是我们进步的源泉" class="text"></textarea></view>
			<text class="tx">( *^_^* )详细描述您遇到的问题,有助于我们快速定位并解决问题；或留下您宝贵的建议或意见，我们会认真评估改进!</text>
			<view class="qd"><button>提交</button></view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
.content {
	width: 100%;
	background: #f8f8f8;
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	padding: 10px 15px;
	font-size: 16px;
	.title {
		color: #fa436a;
		font-size: 16px;
	}
	.dada {
		height: 35px;
		background: #fff;
		margin-top: 10px;
		padding: 5px;
		width: 100%;
		box-sizing: border-box;
		.son {
			display: block;
			position: relative;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			.input {
				display: block;
				height: 100%;
				background: none;
				opacity: 1;
			}
		}
	}
	.textbox {
		width: 100%;
		height: 150px;
		background: #fff;
		margin-top: 10px;
		padding: 5px;
		font-size: 16px;
		box-sizing: border-box;
	}
	.tx {
		color: #909399;
		font-size: 14px;
		padding: 5px 0;
	}
	.qd {
		width: 100%;
		text-align: center;
		margin-top: 30px;
		button {
			height: 45px;
			width: 90%;
			background: #fa436a;
			color: #fff;
			line-height: 45px;
			font-size: 14px;
			font-weight: 400;
		}
	}
}
</style>
