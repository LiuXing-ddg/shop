<template>
	<view class="myteam">
		<view class="content">
			<view class="navbar">
				<view class="my"><text>我 的粉丝团 ( 19 )</text></view>
			</view>
			<view class="team_list" v-for="item in 4">
				<view class="team_item">
					<view class="team_item_c">
						<image src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3984473917,238095211&fm=26&gp=0.jpg" mode=""></image>
						<view class="zj">
							<text>A0聂枫-电商新零售app开发七天上线(18813936420)</text>
							<text class="grade">普通会员</text>
						</view>
						<text class="more">></text>
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
.content {
	background: #f8f8f8;
	.navbar {
		.my {
			padding: 10px;
			font-size: 16px;
			font-weight: 600;
		}
	}
	.team_list {
		display: flex;

		flex-direction: column;
		padding: 0;
		background: #fff;

		.team_item {
			border-top: solid 0.5px #f1f1f1;
			.team_item_c {
				display: flex;

				align-items: center;
				margin: 0 5px;
				padding: 10px 0;
				image {
					flex-shrink: 0;
					display: block;
					width: 50px;
					height: 50px;
					border-radius: 25px;
					margin-left: 5px;
				}
				.zj {
					flex: 1;
					padding-left: 12px;
					overflow: hidden;
					text {
						font-size: 15px;
						color: #303133;
					}
					.grade {
						color: #fa436a;
						font-size: 10px;
					}
				}
				.more {
					font-size: 16px;
				}
			}
		}
	}
}
</style>
