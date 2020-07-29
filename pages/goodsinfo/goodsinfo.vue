<template>
	<view class="goodsinfo">
		<!-- <view class="title">
			<view class="example-body">
				<uni-nav-bar left-icon="arrowleft" title="详情展示" @clickLeft="back" />
			</view>
		</view> -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="2000">
						<swiper-item v-for="item in path">
							<view class="swiper-item uni-bg-red">
								<image :src="`http://cjxx.zhjfd.com/upload/`+item" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="introduce">
			<text class="title">{{list.productName}}</text>
			<view class="desc">
				<text v-show="list.memberGrade"></text>
			</view>
			<view class="price-box">
				<text>¥{{list.vipPrice |money}}</text>
				<del>¥{{list.price | money}}</del>
			</view>
			<view class="num">
				<text class="xl">销量: {{list.hasSaled}}</text>
			</view>
		</view>
		<view class="fx">
			<view class="img">
				<image src="../../static/img/fenxiang-icon.png" mode=""></image>
			</view>
			<text>{{list.tag}}</text>
			<view class="mm">
				立即分享
				<uni-icons type="home"></uni-icons>
			</view>
		</view>
		<view class="c_list">
			<view class="one">
				<text class="size">款式规格</text>
				<view class="sizeson">
					<text>{{info}}</text>
				</view>
				<text class="right" @click="selectSku">></text>
			</view>
			<echone-sku :show="popupShow" :theme-color="themeColor" :combinations="combinations" :specifications="specifications"
			 :default-select-index="selectedIndex" :combinations-props="combinationsProps" :specifications-props="specificationsProps"
			 @close="handleClose" @confirm="handleConfirm"></echone-sku>
			<view class="two">
				<text class="yhq">优惠券</text>
				<text class="yy">本产品可优惠抵扣￥ {{list.useCoupon |money}}元</text>
			</view>
		</view>
		<view class="car">
			<view class="end-title">
				　　<view @tap="change(0)" :class="{btna:btnnum == 0}">详情</view>
				　<view @tap="change(1)" :class="{btna:btnnum == 1}">参数</view>
				　　<view @tap="change(2)" :class="{btna:btnnum == 2}">评价</view>
			</view>
			<view class="end-cont" :class="{dis:btnnum == 0}">
				　　详情信息
			</view>
			<view class="end-cont" :class="{dis:btnnum == 1}">
				　　参数信息
			</view>
			<view class="end-cont" :class="{dis:btnnum == 2}">
				　评价信息信息
			</view>
		</view>
		<!-- 加入购物车 -->
		<view class="page_bottom">
			<view class="left">
				<view class="sy" @click="toindex">
					<image src="../../static/img/sy.png" mode=""></image>
					<text>首页</text>
				</view>
				<view class="gwc" @click="tocar">
					<image src="../../static/img/gwc.png" mode=""></image>
					<text>购物车</text>
					<text class="num">{{carlength}}</text>
				</view>
				<view class="sc">
					<image src="../../static/img/sc.png" mode=""></image>
					<text>收藏</text>
				</view>
			</view>
			<view class="right">
				<button class="lj">立即购买</button>
				<button class="jr" @tap="joincar">加入购物车</button>
			</view>
		</view>
	</view>
</template>confirm

<script>

	import echoneSku from '@/components/echone-sku/echone-sku'
	import instance from "../../api/index.js"
	export default {
		data() {
			return {
				themeColor: '#1ac792',
				popupShow: false,
				path:'',
				info:'',
				list:[],
				shopNo:"",
				carinfo:'',
				btnnum:0,
				carlength:'0',
				combinationsProps: {
					id: 'productNo',
					value: 'skuValue',
					image: 'skuImage',
					price: 'skuPrice'
				},
				specificationsProps: {
					id: 'id',
					list: 'skuList',
					name: 'skuName'
				},
				combinations: [
					
				],
				specifications: [
					
				],
				selectedIndex: 0,
			}
		},
		onLoad(options) {
			this.token=uni.getStorageSync("token");
			this.productNo=options.productNo
			instance({
				url:"/api/product/queryProductDetail",
				data:{
					productNo:this.productNo
					},
					method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				console.log(res)
				this.shopNo=res.data.data.shopNo
				this.list=res.data.data
				let path=this.list.productBanner.split(",")
				this.path=path
			})
			instance({
				url:"/api/product/queryProductSetByProductNo",
				data:{
					token:this.token,
					productNo:this.productNo
					},
					method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				// console.log(res)
				let info1={"skuName":'款式',id:123}
				let info2={"skuName":'规格',id:456}
				
				let colorarr=[]
				let name=[]
				name.push(res.data.data[0].color)
				let all=[]
				res.data.data[0].sizeList.forEach(item=>{
					colorarr.push(item.size)
					let info={"skuValue":name+","+ item.size,"skuImage":"http://cjxx.zhjfd.com/upload"+item.imgPath,"skuPrice":item.agentPrice,"productSetNo":item.productSetNo,"productNo":item.productNo,"shopNo":this.shopNo}
					all.push(info)
				})
				info1.skuList=name
				info2.skuList=colorarr
				// console.log(info2)
				this.specifications.push(info1,info2)
				this.combinations=all
			})
			instance({
				url:"/api/shopCar/queryMyShopCarNum",
				data:{
					token:this.token
				},
				method:"POST",
				header:{
					'content-type':'application/json',
				}
			}).then(res=>{
			this.carlength=res.data.data
			})
		},
		methods: {
			change(e) {
				this.btnnum = e
				console.log(this.btnnum)
			},
			getcarlength(){
				instance({
					url:"/api/shopCar/queryMyShopCarNum",
					data:{
						token:this.token
					},
					method:"POST",
					header:{
						'content-type':'application/json',
					}
				}).then(res=>{
				this.carlength=res.data.data
				})
			},
			getcarlist(){
				instance({
					url:"/api/shopCar/queryMyShopCarInfo",
					data:{
						token:this.token
						},
						method:'POST',
						header:{
						   'content-type':'application/json',
					}
				}).then(res=>{
					// console.log(res)
					this.cartlist=res.data.data[0].productList
					this.cartlist.forEach(item=>{
						item.flag=true
					})
					uni.setStorageSync("cartlist",res.data.data[0].productList)
				})
			},
			joincar(){
				if(this.info==''){
					uni.showToast({
						icon:'none',
						title:"请选择商品规格"
					})
				}else{
					instance({
						url:"/api/shopCar/addShopCar",
						data:{
							token:this.token,
							productNo:this.carinfo.productNo,
							num:this.carinfo.num,
							shopNo:this.carinfo.shopNo,
							productSetNo:this.carinfo.productSetNo
							},
							method:'POST',
							header:{
							   'content-type':'application/json',
						}
					}).then(res=>{
						uni.showToast({
							icon: 'none',
							title: '加入购物车成功'
						})
						this.getcarlength()
						console.log(res)
					})
				}
			},
			selectSku() {
				this.popupShow = true
			},
			//异步请求示例
			initData() {
			
			},
			handleClose() {
				this.popupShow = false
			},
			handleConfirm(obj) {
				console.log(obj)
				this.carinfo=obj
				this.info = obj.skuValue
				this.popupShow = false
			},
			toindex(){
				uni.switchTab({
					url:"../index/index"
				})
			},
			tocar(){
				uni.switchTab({
					url:"../car/car"
				})
			}
		}
	}
</script>

<style lang="scss">
	uni-swiper {
		display: block;
		height: 361px;
	}

	uni-view {
		width: 100%;
		height: 100%;
	}

	uni-image {
		width: 100%;
		height: 100%;
	}

	.end-title {
		left: 0;
		display: flex;
		width: 100%;
		height: 40px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		z-index: 10;
		position: relative;

		.uni-icons {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 40px;
			position: relative;
			font-size: 22px;
		}
	}

	.end-title view {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 15px;
		position: relative;
	}

	.end-cont {
		display: none;
		height: 200px;
	}

	.btna {
		color: #fa436a;

		&::after {
			content: "";
			position: absolute;
			left: 50%;
			bottom: 0;
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
			width: 60px;
			height: 0;
			border-bottom: 2px solid #fa436a;
		}
	}

	.dis {
		display: block;
	}

	.introduce {
		background: #fff;
		padding: 10px 15px;

		.title {
			font-size: 16px;
			color: #303133;
			height: 25px;
			line-height: 25px;
		}

		.desc {
			font-size: 14px;
			color: #909399;
		}

		.price-box {
			display: flex;
			box-sizing: border-box;
			align-items: baseline;
			height: 32px;
			padding: 5px 0;
			font-size: 13px;
			color: #fa436a;

			text {
				font-size: 17px;
			}

			del {
				margin: 0 6px;
				color: #909399;
			}
		}

		.num {
			margin: 0 6px;
			color: #909399;

			.xl {
				flex: 1;
				box-sizing: border-box;
				font-size: 12px;
				color: #909399;
			}
		}
	}

	.fx {
		display: flex;
		align-items: center;
		color: #606266;
		background: -webkit-linear-gradient(left, #fdf5f6, #fbebf6);
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 6px 15px;
		box-sizing: border-box;

		.img {
			display: flex;
			align-items: center;
			width: 24px;
			height: 17px;
			line-height: 1;
			border-radius: 2px;
			position: relative;
			overflow: hidden;
			font-size: 11px;
			color: #fa436a;
			box-sizing: border-box;

			image {
				height: 17px;
				width: 16px;
				display: inline-block;
				overflow: hidden;
				position: relative;
			}
		}

		text {
			font-size: 14px;
			margin-left: 5px;
			width: 180px;
			box-sizing: border-box;
		}

		.mm {
			-webkit-box-flex: 1;
			flex: 1;
			text-align: right;
			font-size: 12px;
			color: #fa436a;

			icon {
				font-family: cjicon !important;
				font-size: 16px;
				font-style: normal;
				-webkit-font-smoothing: antialiased;
			}
		}
	}

	.c_list {
		font-size: 13px;
		color: #606266;
		background: #fff;

		.one {
			display: flex;
			align-items: center;
			padding: 10px 15px;
			position: relative;

			.size {
				width: 70px;
				font-size: 13px;
				color: #606266;
			}

			.sizeson {
				color: #303133;
				width: 300px !important;

				text {
					margin-right: 5px;
					color: #303133;
					font-size: 13px;
				}
			}

			.right {
				font-size: 15px;
				color: #888;
				position: absolute;
				top: 8px;
				right: 20px;
				width: 68px;
				text-align: center;
			}
		}

		.two {
			display: -webkit-box;
			display: -webkit-flex;
			display: flex;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			padding: 10px 15px;
			position: relative;

			.yhq {
				width: 70px;
				font-size: 13px;
				color: #606266;
			}

			.yy {
				color: #fa436a;
				-webkit-box-flex: 1;
				flex: 1;
			}
		}
	}

	.page_bottom {
		position: fixed;
		left: 20px;
		bottom: 15px;
		z-index: 95;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 315px;
		height: 50px;
		background: hsla(0, 0%, 100%, .9);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, .5);
		border-radius: 8px;
		padding: 0 10px;

		.left {
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.sy {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				color: #606266;
				width: 48px;
				height: 40px;

				image {
					width: 20px;
					height: 24px;
				}
			}

			.gwc {
				display: flex;
				position: relative;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				color: #606266;
				width: 48px;
				height: 40px;

				image {
					width: 20px;
					height: 24px;
				}

				.num {
					position: absolute;
					right: 7px;
					top: -2px;
					display: block;
					height: 16px;
					width: 16px;
					line-height: 15px;
					text-align: center;
					background: #fa436a;
					color: #fff;
					border-radius: 100%;
				}
			}

			.sc {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 12px;
				color: #606266;
				width: 48px;
				height: 40px;

				image {
					width: 20px;
					height: 24px;
				}
			}
		}

		.right {
			display: flex;
			height: 38px;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 10px 20px -8px #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, .4);
			background: -webkit-linear-gradient(left, #ffac30, #fa436a, #f56c6c);
			background: linear-gradient(90deg, #ffac30, #fa436a, #f56c6c);
			margin-left: 10px;
			position: relative;

			.lj {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 90px;
				height: 100%;
				font-size: 14px;
				padding: 0;
				border-radius: 0;
				background: transparent;
				color: #fff;
			}

			.jr {
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 90px;
				height: 100%;
				font-size: 14px;
				padding: 0;
				border-radius: 0;
				background: transparent;
				color: #fff;
			}
		}
	}
</style>
