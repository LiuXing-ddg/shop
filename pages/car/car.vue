<template>
	<view class="car">
		
		<view class="denglu" v-show="!islogin">
			<image src="../../static/img/emptyCart.jpg" mode=""></image>
			<view class="wenzi">
				空空如也
				<text @click="tologin">去登陆</text>
			</view>
		</view>
		
		
		<view class="content" v-if="cartlist&&islogin">
			<view class="cart_item" v-for="(item,index) of cartlist" :key="index">
				<view class="goodsbox">
					<image :src="`http://cjxx.zhjfd.com/upload/`+item.imagesPath" mode=""></image>
					<view>
						<view class="xuanzhong xz iconfont" :class="item.flag?'icon-xuanzhong1':'icon-xuanzhong'" @click="selected(item)"/>
					</view>
				</view>
				<view class="desc">
					<text class="super"></text>
					<text class="title">{{item.productName}}</text>
					<text class="attr">{{item.remark}}</text>
					<text class="price">¥{{item.agentPrice |money}}</text>
					<view class="num">
						<text class="add" @click="reduce(item)">-</text>
						<input type="text" class="value" :value="item.shopCarNum"/>
						<text class="jian" @click="add(item)">+</text>
					</view>
				</view>
				<uni-icons type="close" @click="del(item)"></uni-icons>
			<view class="tabbar">
				<view class="quanxuan">
					<view >
						<text class="quanxuananniu iconfont" :class="allchecked?'icon-xuanzhong1':'icon-xuanzhong'" @click="selectedall()"></text>全选
					</view>
				</view>
				<view class="je"><text>￥{{totalPrice | money}}</text></view>
				<button @tap="create">去结算</button>
			</view>
			</view>

		</view>
		<view class="kong" v-else v-show="islogin">购物车是空</view>
	</view>
</template>

<script>
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
import instance from "../../api/index.js"
var cartlist=JSON.parse(localStorage.getItem('cartlist') || '[]')
export default {
	data(){
		return {
			islogin: '',
			token:"",
			flag: true, // 用于判断用户购物车是否有商品，没有商品为true，有商品为false
			cartlist: [], // 购物车商品信息
			allchecked: true//默认全选为true，因为后台数据没有是否选中的信息
		}
	},
	computed:{
		totalNum(){
			let totalNum = 0;
			this.cartlist.map(item => {
				item.flag ? totalNum += item.num : totalNum += 0
			})
			return totalNum
		},
		//计算选中商品的总价
		totalPrice() {
			let totalPrice = 0;
			this.cartlist.map(item => {
				item.flag ? totalPrice += item.shopCarNum * item.agentPrice : totalPrice += 0
			})
			return totalPrice
		}
	},
	onLoad() {
		this.token=uni.getStorageSync("token");
		this.cartlist=uni.getStorageSync("cartlist");
		if (this.token == '') {
			this.islogin = false;
		} else {
			this.islogin = true;
		}
		this.getcarlist()
	},
	onShow() {
		this.getcarlist()
	},
	methods: {
		create(){
			let arr=[]
			this.cartlist.forEach(item=>{
				arr.push({shopCarNo:item.shopCarNo,isselecked:item.flag})
			})
			uni.setStorageSync("list",arr)
			// console.log(arr)
			uni.navigateTo({
				url:"../center/myorder/createorder/createorder"
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
		tologin() {
			uni.navigateTo({
				url: '../login/login'
			});
		},
		reduce(item){
			// console.log(item)
			let num = item.shopCarNum
			if (num > 1) {
				num -= 1
			} else {
				num = 1
				return
			}
			instance({
				url:"/api/shopCar/updateShopCarNum",
				data:{
					token:this.token,
					shopCarNo:item.shopCarNo,
					num:num
					},
					method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				// console.log(res)
				this.getcarlist()
			})
			
		},
		add(item) {
			let num = item.shopCarNum
			num += 1
			instance({
				url: '/api/shopCar/updateShopCarNum',
				data: {
					token:this.token,
					shopCarNo:item.shopCarNo,
					num:num
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res => {
				// console.log(res)
				this.getcarlist()
			})
			
		},
		del(item){
			instance({
				url: '/api/shopCar/deleteShopCar',
				data: {
					token:this.token,
					shopCarNo:item.shopCarNo
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				// console.log(res)
				this.getcarlist()
			})
		},
		selected(item) {
			// console.log(item)
			item.flag = !item.flag
			if (item.flag=="false") {
				this.allchecked = false
			} else {
				const test = this.cartlist.every(item => {
					return item.flag === true
				})
				if (test) {
					this.allchecked = true
				} else {
					this.allchecked = false
				}
			}
			
		},
		// 全选按钮
		selectedall() {
			this.allchecked = !this.allchecked
			if (this.allchecked) {
				this.cartlist.map(item => {
					item.flag = true
				})
			} else {
				this.cartlist.map(item => {
					item.flag = false
				})
			}
			
		}
		
	}
}
</script>

<style lang="scss">
	.icon-xuanzhong{
		color: #C0C4CC;
		font-size: 22px;
	}
	.icon-xuanzhong1{
		color: red !important;
		font-size: 22px;
	}
	.icon-xuanzhong1{
		color: red !important;
	}
.denglu {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	padding-bottom: 50px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: #fff;

	image {
		width: 120px;
		height: 80px;
		margin-bottom: 15px;
		display: inline-block;
		overflow: hidden;
		position: relative;
	}

	.wenzi {
		display: flex;
		font-size: 13px;
		color: #c0c4cc;

		text {
			color: #fa436a;
			margin-left: 8px;
		}
	}
}

.cart_item {
	display: flex;
	position: relative;
	padding: 15px 20px;
	background: #fff;
	.goodsbox {
		width: 115px;
		height: 115px;
		flex-shrink: 0;
		position: relative;
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;
		image {
			border-radius: 4px;
			width: 100%;
			height: 100%;
			transition: 0.6s;
			opacity: 1;
		}

		.xz {
			position: absolute;
			left: -8px;
			top: -8px;
			z-index: 8;
			font-size: 22px;
			line-height: 1;
			padding: 2px;
			color: #c0c4cc;
			background: #fff;
			border-radius: 50px;
			width: 16px;
			height: 16px;
		}
	}

	.desc {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		position: relative;
		padding-left: 15px;

		.super {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: block;
			font-size: 12px;
			color: #fa436a;
		}

		.title {
			font-size: 15px;
			color: #303133;
			height: 19px;
			line-height: 19px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: block;
		}

		.attr {
			font-size: 13px;
			color: #909399;
			height: 20px;
			line-height: 20px;
			overflow: hidden;
			-o-text-overflow: ellipsis;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: block;
		}

		.price {
			height: 25px;
			line-height: 25px;
			font-size: 15px;
			color: #303133;
		}

		.num {
			position: absolute;
			    left: 15px;
			    bottom: 0;
			    display: flex;
			    justify-content: flex-start;
			    align-items: center;
			    width: 115px;
			    height: 35px;
			    background: #f5f5f5;
				.add{
					margin: 0;
					    background-color: #f5f5f5;
					    width: 35px;
					    height: 100%;
					    line-height: 35px;
					    text-align: center;
					    position: relative;
						border-right: none;
						    border-top-left-radius: 3px;
						    border-bottom-left-radius: 3px;
				}
				.value{
					position: relative;
					    background-color: #f5f5f5;
					    width: 45px;
					    height: 25px;
					    text-align: center;
					    padding: 0;
					    font-size: 15px;
						display: block;
						    font-size: 16px;
						    line-height: 1.4em;
						   
						    min-height: 1.4em;
						    overflow: hidden;
				}
				.jian{
					border-left: none;
					    border-top-right-radius: 3px;
					    border-bottom-right-radius: 3px;
						margin: 0;
						    background-color: #f5f5f5;
						    width: 35px;
						    height: 100%;
						    line-height: 35px;
						    text-align: center;
						    position: relative;
				}
		}
	}

	.uni-icons {
		padding: 0;
		font-size: 24px;
		height: 25px;
		color: #909399;
	}
}
.tabbar {
	margin-bottom: 50px;
	position: fixed;
	left: 15px;
	bottom: 15px;
	z-index: 95;
	display: -webkit-box;
	display: -webkit-flex;
	display: flex;
	box-sizing: border-box;
	align-items: center;
	width: 345px;
	height: 50px;
	padding: 0 15px;
	background: hsla(0, 0%, 100%, 0.9);
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
	border-radius: 8px;
	checkbox {
		height: 26px;
		position: relative;
	}
	.je {
		flex: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		
		flex-direction: column;
		text-align: right;
		padding-right: 20px;
		text {
			font-size: 16px;
			color: #303133;
		}
	}
	button {
		padding: 0 19px;
		margin: 0;
		border-radius: 100px;
		height: 38px;
		line-height: 38px;
		font-size: 15px;
		background: #fa436a;
		box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72);
	}
}
</style>
