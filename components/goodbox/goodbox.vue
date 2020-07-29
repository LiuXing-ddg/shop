<template>
	<view class="list2" @click="togoodsinfo(item.productNo)">
		<view class="imgbox">
			<image :src="`http://cjxx.zhjfd.com/upload/`+item.imagesPath">
		</view>
		<view class="txtbox">
			<text>{{item.productName}}</text>
		</view>
		<view class="desc">
			<text>{{item.tag}}</text>
		</view>
		<view class="num">
			<view class="left">
				<text>￥{{item.vipPrice |money}}</text><del>￥{{item.price |money}}</del>
			</view>
			<view class="right">
				已售{{item.hasSaled}}件
			</view>
		</view>
		<view class="bu">
			<text class="yh" v-show="item.useCoupon">优惠券 ￥{{item.useCoupon |money}}</text>
			<button>立即抢购</button>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object
			}
		},
	methods:{
		togoodsinfo(id){
			uni.navigateTo({
				url:"../../pages/goodsinfo/goodsinfo?productNo="+id
			})
		}
	}
	}
</script>

<style>
	.list2 {
		margin-right: 4%;
		display: flex;
		flex-direction: column;
		width: 46%;
		padding-bottom: 20px;
	}

	.list2 .imgbox {
		position: relative;
		width: 100%;
		height: 165px;
		border-radius: 3px;
		overflow: hidden;

	}

	.list2 .imgbox image {
		width: 100%;
		height: 100%;
		opacity: 1;
	}

	.list2 .txtbox {
		font-size: 14px;
		color: #303133;
		line-height: 30px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.list2 .txtbox text {
		font-size: 14px;
		color: #303133;
		line-height: 30px;
	}

	.list2 .desc {
		font-size: 14px;
		margin-bottom: 2px;
		width: 100%;
		position: relative;
	}

	.list2 .desc text {
		position: relative;
		display: inline-block;
		height: 20px;
		line-height: 20px;
		width: 80%;
		background: linear-gradient(90deg, #e3c38e, #faebd7);
		color: #3a343a;
		font-size: 14px;
		padding-left: 10px;
	}

	.list2 .desc text ::after {
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		right: -1px;
		border-width: 10px 10px 10px 0;
		border-style: solid;
		border-color: transparent #fff transparent transparent;
	}

	.list2 .num {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list2 .num .left text {
		font-size: 14px;
		color: #fa436a;
		line-height: 1;
	}

	.list2 .num .left del {
		color: gray;
		font-size: 10px;
	}

	.list2 .num .right {

		color: gray;
		position: absolute;
		bottom: 0;
		right: 0;
		color: #909399;
		font-size: 12px;
	}

	.list2 .bu {
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list2 .bu .yh {
		font-size: 12px;
    color: #909399;
    text-align: center;
	}

	.list2 .bu button {
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
</style>
