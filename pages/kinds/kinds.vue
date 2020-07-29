<template>
	<view class="list_box">
		<!-- 菜单左边 -->
		<view class="left">
			<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
				<view class="item" v-for="(item,index) in leftArray" :key="index" :class="{ 'active':index==leftIndex }"
				 :data-index="index" @tap="leftTap">{{item.name}}</view>
			</scroll-view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" @scroll="mainScroll" :scroll-into-view="scrollInto"
			 scroll-with-animation="true" @touchstart="mainTouch" id="scroll-el">
				<block v-for="(item,index) in leftArray" :key="index">
					<view class="item" :id="'item-'+index">
						<view class="title">
							<view>{{item.name}}</view>
						</view>
						<view class="goods" >
							
							<view class="imgbox" v-for="(item2,index2) in item.secondMenus" :key="index2">
								<navigator open-type="navigate" :url="'../../pages/kindslist/kindslist?menuNo='+item2.menuNo">
									<image :src="`http://cjxx.zhjfd.com/upload/`+item2.logo" mode=""></image>
								</navigator>
								<text>{{item2.name}}</text>
							</view>
						</view>
					</view>
				</block>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	import instance from "../../api/index.js"
	export default {
		data() {
			return {
				scrollHeight: '500px',
				token:"",
				leftArray: [
				],
				// mainArray: [],
				topArr: [],
				leftIndex: 0,
				isMainScroll: false,
				scrollInto: '',
				tipsTop: '0px',
				left:[],
				main:[]
			}
		},
		onLoad() {
			this.token=uni.getStorageSync('token')
			instance({
				url:"/api/product/productCategories",
				data:{
					token:this.token
				},
				method:'POST',
				header:{
				   'content-type':'application/json',
				}
			}).then(res=>{
				console.log(res)
				this.leftArray=res.data.data
				res.data.data.forEach(item=>{
					this.left.push(item.name)
				})
			})
			uni.getSystemInfo({
				success: (res) => {
					/* 设置当前滚动容器的高，若非窗口的告诉，请自行修改 */
					this.scrollHeight = `${res.windowHeight}px`;
					console.log('gaodu', res.windowHeight)
				}
			});
		},
		computed: {

		},
		mounted() {
			// this.getListData();

		},
		methods: {
			
			//获取距离顶部的高度
			getScrollTop(selector) {
				return new Promise((resolve, reject) => {
					let query = uni.createSelectorQuery().in(this);
					query.select(selector + '').boundingClientRect(data => {
						resolve(data.top)
					}).exec();
				})
			},
			/* 获取元素顶部信息 */
			async getElementTop() {
				/* Promise 对象数组 */
				let p_arr = [];

				/* 遍历数据，创建相应的 Promise 数组数据 */
				for (let i = 0; i < this.mainArray.length; i++) {
					const resu = await this.getScrollTop(`#item-${i}`)
					p_arr.push(resu)
				}

				// console.log('p_arr', p_arr)

				/* 主区域滚动容器的顶部距离 */
				this.getScrollTop("#scroll-el").then((res) => {
					let top = res;
					// #ifdef H5
					top += 43; //因固定提示块的需求，H5的默认标题栏是44px
					// #endif
					/* 所有节点信息返回后调用该方法 */
					Promise.all(p_arr).then((data) => {
						console.log('滚动', data)
						this.tipsTop = `${data}px`;
						this.topArr = data;
					});
				})
			},

			/* 主区域滚动监听 */
			mainScroll(e) {
				if (!this.isMainScroll) {
					return;
				}
				let top = e.detail.scrollTop;
				let index = -1;

				if (top >= this.topArr[this.topArr.length - 1]) {
					index = this.topArr.length - 1;
				} else {
					index = this.topArr.findIndex((item, index) => {
						return this.topArr[index + 1] >= top;
					});
				}
				this.leftIndex = (index < 0 ? 0 : index);
			},
			/* 主区域触摸 */
			mainTouch() {
				this.isMainScroll = true;
			},
			/* 左侧导航点击 */
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.isMainScroll = false;
				this.leftIndex = Number(index);
				this.scrollInto = `item-${index}`;
			}
		}
	}
</script>

<style lang="scss">
	
	.imgbox{
		display: flex;
		flex-direction: column;
		text-align: center;
		padding-top: 6px;
		width: 33.33%;
		text{
			color: gray;
		}
	}
	.imgbox image{
		width: 70px;
		height: 70px;
	}
	.list_box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;
		font-size: 28rpx;
		.left {
			width: 200rpx;
			background-color: white;
			line-height: 50px;
			box-sizing: border-box;
			font-size: 14px;
			color:gray;
			text-align: center;
			.item {
				position: relative;
				&:not(:first-child) {
					margin-top: 1px;
					&::after {
						content: '';
						display: block;
						height: 0;
						border-top: #d6d6d6 solid 1px;
						width: 620upx;
						position: absolute;
						top: -1px;
						right: 0;
						transform: scaleY(0.5);
						/* 1px像素 */
					}
				}
				&.active,
				&:active {
					color: #FA6887;
					background-color: #F5F5F5;
					&::before{
						content: "";
						position: absolute;
						left: 0;
						top: 50%;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
						height: 18px;
						width: 4px;
						background-color: #fa436a;
						border-radius: 0 4px 4px 0;
						opacity: .8;
						
					}
				}
			}
		}

		.main {
			background-color: #fff;
			padding-left: 20rpx;
			width: 0;
			background: #F8F8F8;
			flex-grow: 1;
			box-sizing: border-box;

			.tips {
				line-height: 64rpx;
				font-size: 24rpx;
				font-weight: bold;
				color: #666;
				height: 64rpx;
				position: fixed;
				top: 44px;
				right: 0;
				width: 530rpx;
				z-index: 10;
				background-color: #fff;
				padding-left: 10rpx;
			}

			.title {
				line-height: 64rpx;
				position: relative;
				font-size: 24rpx;
				font-weight: bold;
				color: #666;
				height: 64rpx;
			}

			.item {
				margin-bottom: 20rpx;
				
			}

			.goods {
				display: flex;
				flex-direction: row;
				flex-wrap:wrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;
				margin-bottom: 10rpx;
				background: white;
				justify-content: left;
				&>image {
					width: 120rpx;
					height: 120rpx;
					margin-right: 16rpx;
				}

				.describe {
					font-size: 24rpx;
					color: #999;
				}

				.money {
					font-size: 24rpx;
					color: #efba21;
				}
			}
		}
	}
</style>

