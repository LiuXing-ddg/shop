<template>
	<navigator open-type="navigate" :url="'../../pages/friendsinfo/friendsinfo?id=1'">
	<view class="comment">
		<view class="left">
			<view class="headbox">
				<image src="../../static/img/wd2.png" mode=""></image>
			</view>
		</view>
		<view class="right">
			<text class="uname">大兵</text>
			<view class="talk">
				<text>新年新气象，旧锅换新颜！翰乐公司以旧换新活动火爆进行中，只要你家有不用的坏锅都可以拿到翰乐公司换新锅，邮费报销，你还等待什么呢！趁着过年前赶紧换个高颜值，高品质的厨具吧！</text>
			</view>
			<view class="sharbox">
				<view v-for="item in 6">
					<image src="../../static/img/pyq2.png" mode=""></image>
				</view>
			</view>
			<view class="toolbar">
				<view class="time">
					<text>11:02:56:00</text>
				</view>
				<view class="icon">
					<view class="one">
						<icon type="search" size="18"></icon>
					</view>
					<view class="two">
						<icon type="search" size="18"></icon>
						<text>2</text>
					</view>
					<view class="there">
						<icon type="search" size="18"></icon>
						<text>8</text>
					</view>
				</view>
			</view>
		</view>
	</view>
	</navigator>
</template>

<script>
</script>

<style lang="scss">
	.comment{
		background: #fff;
		border-bottom: 1px solid #f2eeee;
		padding: 15px 10px;
		position: relative;
		display: flex;
		.left{
			.headbox{
				width: 45px!important;
				height: 45px!important;
				border-radius: 5px;
				margin-top: 4px;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.right{
			font-size: 16px;
			display: table-cell;
			padding-left: 10px;
			width: 100%;
			.uname{
				font-size: 16px;
				font-weight: 600;
				color: #36648b;
			}
			.talk{
				font-size: 14px;
				line-height: 1.8;
			}
			.sharbox{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				view{
					width: 30%;
					height: 90px;
					margin: 2px;
					background: #757575;
					overflow: hidden;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.toolbar{
				padding: 7px 0;
				position: relative;
				top: 5px;
				display: flex;
				align-items: center;
				.time{
					text{
						color: #757575;
						font-size: 11px;
					}
				}
				.icon{
					position: absolute;
					right: 0;
					display: flex;
					justify-content: space-around;
					align-items: center;
					view{
						display: flex;
						align-items: center;
					}
					.two{
						margin-left: 10px;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>
