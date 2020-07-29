<template>
	<view class="my-order">
		<view class="tabbar">
			<view class="end-title">
				<view @tap="change(0)" :class="{ btna: btnnum == 0 }">全部</view>
				<view @tap="change(1)" :class="{ btna: btnnum == 1 }">待付款</view>
				<view @tap="change(2)" :class="{ btna: btnnum == 2 }">待发货</view>
				<view @tap="change(3)" :class="{ btna: btnnum == 3 }">待收货</view>
				<view @tap="change(4)" :class="{ btna: btnnum == 4 }">待评价</view>
				<view @tap="change(5)" :class="{ btna: btnnum == 5 }">售后</view>
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 0 }">
				<view class="order-item" v-for="(item, index) in info" :key="item.id" @click="todetail(item.orderNo)">
					<view class="header">
						<text class="time">{{ item.createTime | timeStamp }}</text>
						<text class="state" :class="item.orderStatus == 'adminCancel' ? '' : 'red'">{{ item.orderStatus | state }}</text>
					</view>
					<view class="box">
						<view class="one">
							<view class="nima" v-for="item in item.orderProductsList">
								<image :src="`http://cjxx.zhjfd.com/upload/` + item.productImg"></image>
							</view>
						</view>
						<view class="detail" v-if="!item.orderProductsList[1]">
							<text class="title">{{ item.orderName }}</text>
							<view class="" v-for="item in item.orderProductsList">
								<text class="desc">{{ item.productColorSize }}</text>
							</view>
							
							<text class="price">￥{{ item.dueAmt | money }}</text>
						</view>
					</view>
					<view class="num">
						共
						<text class="sl">{{item.orderProductsList.length}}</text>
						件商品 实付款
						<text class="all">￥{{ (item.dueAmt - item.couponAmt) | money }}</text>
					</view>
					<view class="action_box" v-if="item.orderStatus == 'pay'"><button @click.stop="tk(item.orderNo)">申请退款</button></view>
					<view class="action_box" v-if="item.orderStatus == 'nopay'">
						<button @click.stop="qx(item.orderNo)" class="qx">取消订单</button>
						<button @click.stop="payno">立即支付</button>
					</view>
					<e-modal :visible.sync="visible" @cancel="handleCancel">
						<view class="modal-container">
							<view class="pay">
								<view class="paybox">
									<view class="pay-item">
										<text class="iconfont icon-weixinzhifu"></text>
										<view class="con">
											<text class="title">微信支付</text>
											<text>推荐使用微信支付</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '1'" @click="changewx('1')" color="red" />
									</view>
									<view class="pay-item bb">
										<text class="iconfont icon-zhifu"></text>
										<view class="con">
											<text class="title">预存款支付</text>
											<text>可用余额 ￥0.00</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '2'" @click="changewx('2')" color="red" />
									</view>
								</view>
							</view>
							<view class="sure">
								<button class="cancel" @tap="cancel">取消支付</button>
								<button class="submit" @tap="submit">确认支付</button>
							</view>
						</view>
					</e-modal>
					
					<e-modal :visible.sync="mm" @cancel="handleCancel">
						<view class="modal-container">
							
							<view class="modal-container_title red">
								请输入密码
							</view>
							<input type="password" v-model="password" class="mm"/>
							<button type="primary" size="mini" @tap="paymoney(item.orderNo)" class="jz">确定</button>
						</view>
					</e-modal>
					
				</view>
				
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 1 }">
				<view class="order-item" v-for="(item, index) in nopay" :key="item.id" @click="todetail(item.orderNo)">
					<view class="header">
						<text class="time">{{ item.createTime | timeStamp }}</text>
						<text class="state" :class="item.orderStatus == 'adminCancel' ? '' : 'red'">{{ item.orderStatus | state }}</text>
					</view>
					<view class="box">
						<view class="one">
							<view class="nima" v-for="item in item.orderProductsList">
								<image :src="`http://cjxx.zhjfd.com/upload/` + item.productImg"></image>
							</view>
						</view>
						<view class="detail" v-if="!item.orderProductsList[1]">
							<text class="title">{{ item.orderName }}</text>
							<view class="" v-for="item in item.orderProductsList">
								<text class="desc">{{ item.productColorSize }}</text>
							</view>
							
							<text class="price">￥{{ item.dueAmt | money }}</text>
						</view>
					</view>
					<view class="num">
						共
						<view class="" v-for="item in item.orderProductsList">
							
						<text class="sl">{{ item.productNum }}</text>
						</view>
						件商品 实付款
						<text class="all">￥{{ (item.dueAmt - item.couponAmt) | money }}</text>
					</view>
					<view class="action_box" v-if="item.orderStatus == 'pay'"><button @click.stop="tk(item.orderNo)">申请退款</button></view>
					<view class="action_box" v-if="item.orderStatus == 'nopay'">
						<button @click.stop="qx(item.orderNo)" class="qx">取消订单</button>
						<button @click.stop="payno">立即支付</button>
					</view>
					<e-modal :visible.sync="visible" @cancel="handleCancel">
						<view class="modal-container">
							<view class="pay">
								<view class="paybox">
									<view class="pay-item">
										<text class="iconfont icon-weixinzhifu"></text>
										<view class="con">
											<text class="title">微信支付</text>
											<text>推荐使用微信支付</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '1'" @click="changewx('1')" color="red" />
									</view>
									<view class="pay-item bb">
										<text class="iconfont icon-zhifu"></text>
										<view class="con">
											<text class="title">预存款支付</text>
											<text>可用余额 ￥0.00</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '2'" @click="changewx('2')" color="red" />
									</view>
								</view>
							</view>
							<view class="sure">
								<button class="cancel" @tap="cancel">取消支付</button>
								<button class="submit" @tap="submit">确认支付</button>
							</view>
						</view>
					</e-modal>
					
					<e-modal :visible.sync="mm" @cancel="handleCancel">
						<view class="modal-container">
							
							<view class="modal-container_title red">
								请输入密码
							</view>
							<input type="password" v-model="password" class="mm"/>
							<button type="primary" size="mini" @tap="paymoney(item.orderNo)" class="jz">确定</button>
						</view>
					</e-modal>
					
				</view>
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 2 }">
				<view class="order-item" v-for="(item, index) in pay" :key="item.id" @click="todetail(item.orderNo)">
					<view class="header">
						<text class="time">{{ item.createTime | timeStamp }}</text>
						<text class="state" :class="item.orderStatus == 'adminCancel' ? '' : 'red'">{{ item.orderStatus | state }}</text>
					</view>
					<view class="box">
						<view class="one">
							<view class="">
								<block v-for="item in item.orderProductsList">
								<image :src="`http://cjxx.zhjfd.com/upload/` + item.productImg"></image>
								</block>
							</view>
						</view>
						<view class="detail">
							<text class="title">{{ item.orderName }}</text>
							<view class="" v-for="item in item.orderProductsList">
								<text class="desc">{{ item.productColorSize }}</text>
							</view>
							
							<text class="price">￥{{ item.dueAmt | money }}</text>
						</view>
					</view>
					<view class="num">
						共
						<view class="" v-for="item in item.orderProductsList">
							
						<text class="sl">{{ item.productNum }}</text>
						</view>
						件商品 实付款
						<text class="all">￥{{ (item.dueAmt - item.couponAmt) | money }}</text>
					</view>
					<view class="action_box" v-if="item.orderStatus == 'pay'"><button @click.stop="tk(item.orderNo)">申请退款</button></view>
					<view class="action_box" v-if="item.orderStatus == 'nopay'">
						<button @click.stop="qx(item.orderNo)" class="qx">取消订单</button>
						<button @click.stop="payno">立即支付</button>
					</view>
					<e-modal :visible.sync="visible" @cancel="handleCancel">
						<view class="modal-container">
							<view class="pay">
								<view class="paybox">
									<view class="pay-item">
										<text class="iconfont icon-weixinzhifu"></text>
										<view class="con">
											<text class="title">微信支付</text>
											<text>推荐使用微信支付</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '1'" @click="changewx('1')" color="red" />
									</view>
									<view class="pay-item bb">
										<text class="iconfont icon-zhifu"></text>
										<view class="con">
											<text class="title">预存款支付</text>
											<text>可用余额 ￥0.00</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '2'" @click="changewx('2')" color="red" />
									</view>
								</view>
							</view>
							<view class="sure">
								<button class="cancel" @tap="cancel">取消支付</button>
								<button class="submit" @tap="submit">确认支付</button>
							</view>
						</view>
					</e-modal>
					
					<e-modal :visible.sync="mm" @cancel="handleCancel">
						<view class="modal-container">
							
							<view class="modal-container_title red">
								请输入密码
							</view>
							<input type="password" v-model="password" class="mm"/>
							<button type="primary" size="mini" @tap="paymoney(item.orderNo)" class="jz">确定</button>
						</view>
					</e-modal>
					
				</view>
			
			</view>
			<view class="end-cont" :class="{ dis: btnnum == 3 }">待收货</view>
			<view class="end-cont" :class="{ dis: btnnum == 4 }">待评价</view>
			<view class="end-cont" :class="{ dis: btnnum == 5 }">
				<view class="order-item" v-for="(item, index) in shouhou" :key="item.id" @click="todetail(item.orderNo)">
					<view class="header">
						<text class="time">{{ item.createTime | timeStamp }}</text>
						<text class="state" :class="item.orderStatus == 'adminCancel' ? '' : 'red'">{{ item.orderStatus | state }}</text>
					</view>
					<view class="box">
						<view class="one">
							<view class="nima" v-for="item in item.orderProductsList">
								<image :src="`http://cjxx.zhjfd.com/upload/` + item.productImg"></image>
							</view>
						</view>
						<view class="detail" v-if="!item.orderProductsList[1]">
							<text class="title">{{ item.orderName }}</text>
							<view class="" v-for="item in item.orderProductsList">
								<text class="desc">{{ item.productColorSize }}</text>
							</view>
							
							<text class="price">￥{{ item.dueAmt | money }}</text>
						</view>
					</view>
					<view class="num">
						共
						<view class="" v-for="item in item.orderProductsList">
							
						<text class="sl">{{ item.productNum }}</text>
						</view>
						件商品 实付款
						<text class="all">￥{{ (item.dueAmt - item.couponAmt) | money }}</text>
					</view>
					<view class="action_box" v-if="item.orderStatus == 'pay'"><button @click.stop="tk(item.orderNo)">申请退款</button></view>
					<view class="action_box" v-if="item.orderStatus == 'nopay'">
						<button @click.stop="qx(item.orderNo)" class="qx">取消订单</button>
						<button @click.stop="payno">立即支付</button>
					</view>
					<e-modal :visible.sync="visible" @cancel="handleCancel">
						<view class="modal-container">
							<view class="pay">
								<view class="paybox">
									<view class="pay-item">
										<text class="iconfont icon-weixinzhifu"></text>
										<view class="con">
											<text class="title">微信支付</text>
											<text>推荐使用微信支付</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '1'" @click="changewx('1')" color="red" />
									</view>
									<view class="pay-item bb">
										<text class="iconfont icon-zhifu"></text>
										<view class="con">
											<text class="title">预存款支付</text>
											<text>可用余额 ￥0.00</text>
										</view>
										<radio class="rdio" :checked="biaoqian === '2'" @click="changewx('2')" color="red" />
									</view>
								</view>
							</view>
							<view class="sure">
								<button class="cancel" @tap="cancel">取消支付</button>
								<button class="submit" @tap="submit">确认支付</button>
							</view>
						</view>
					</e-modal>
					
					<e-modal :visible.sync="mm" @cancel="handleCancel">
						<view class="modal-container">
							
							<view class="modal-container_title red">
								请输入密码
							</view>
							<input type="password" v-model="password" class="mm"/>
							<button type="primary" size="mini" @tap="paymoney(item.orderNo)" class="jz">确定</button>
						</view>
					</e-modal>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import instance from '../../../api/index.js';
export default {
	data() {
		return {
			btnnum: 0,
			biaoqian: '1',
			token: '',
			info: [],
			infoarr: [],
			visible: false,
			mm:false,
			password:'',
			score:''
		};
	},
	methods: {
		show(){
			instance({
				url: '/api/order/queryOrderList',
				data: {
					token:this.token,
					orderStatus: '',
					limit: '10',
					start: '0',
					pType:''
				},
				method: 'POST',
				header: {
					'content-type': 'application/json'
				}
			}).then(res => {
				console.log(res)
				this.info=res.data.data.rows
				
				
			
			});
		},
		handleCancel() {
			// console.log('modal关闭');
		},
		clickLeft() {
			uni.navigateBack(1);
		},
		changewx(e){
			this.biaoqian=e
		},
		change(e) {
			this.btnnum = e;
			console.log(this.btnnum);
		},
		todetail(orderNo) {
			uni.navigateTo({
				url: 'oderdetail/orderdetail?orderNo=' + orderNo
			});
		},
		tk(orderNo){
			console.log(orderNo)
			uni.navigateTo({
				url:"../refund/refund?orderNo="+orderNo
			})
		},
		submit(){
			this.visible = !this.visible;
			this.mm=!this.mm
		},
		paymoney(orderNo){
			if(this.biaoqian==='1'){
				alert("请在微信登录")
			}else{
				instance({
					url:'/api/member/checkPayCode',
					data:{
						token:this.token,
						payCode:this.password
					},
					method:"POST",
					header:{
						'content-type':'application/json'
					}
				}).then(res=>{
					// console.log(res)
					if(res.data.status==0){
						uni.showToast({
							icon: 'none',
							title: "密码错误"
						})
					}else{
						instance({
							url:'/api/order/yuePay',
							data:{
								orderNo:orderNo,
								token:this.token,
								score:this.score 
							},
							method:'POST',
								header:{
								   'content-type':'application/json',
							}
						}).then(res=>{
							if(res.data.status==1){
								uni.showToast({
									icon: 'none',
									title: "支付成功"
								})
							}
						})
						this.mm=!this.mm
					}
				})
				this.password=""
				this.mm=false
			}
			this.mm=!this.mm
		},
		payno() {
			this.visible = !this.visible;
		},
		cancel(){
			this.visible = !this.visible;
		},
		qx(orderNo){
			instance({
				url:'/api/order/cancelMallOrder',
				data:{
					token:this.token,
					orderNo:orderNo
				},
				method:"POST",
				header:{
					'content-type':'application/json'
				}
			}).then(res=>{
				if(res.data.status==1){
					uni.showToast({
						title:"取消订单成功"
					})
					this.show()
				}
			})
		}
	},
	computed: {
		shouhou() {
			return this.info.filter(item => item.orderStatus == 'refund');
		},
		nopay() {
			return this.info.filter(item => item.orderStatus == 'nopay');
		},
		pay() {
			return this.info.filter(item => item.orderStatus == 'pay');
		}
	},
	onLoad(options) {
		this.btnnum = options.index;
		this.token = uni.getStorageSync('token');
		this.show()
		instance({
			url:'/api/member/memberStatistics',
			data:{
				token:this.token,
			},
			method:'POST',
				header:{
				   'content-type':'application/json',
				}
		}).then(res=>{
			console.log(res)
			this.score=res.data.data.score
		})
	}
};
</script>

<style lang="scss">
	.nima{
		display: inline-block !important; 
	}
	page {
		background: #f8f8f8;
	}
	.my-order{
		background: #f8f8f8;
	}
.modal-container {
		box-sizing: border-box;
		flex-direction: column;
		align-items: center;
	}
	.mm{
		border: 1px solid black;
		width: 80%;
		text-align: center;
		margin-left: 25px !important;
	}
	.jz{
		
		width: 30% !important;
		margin-left: 95px !important;
	}
	.modal-container_title {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 45rpx;
	}
	
	.modal-container_content {
		text-indent: 2em;
	}
	
	.modal-container>* {
		margin: 20rpx 0;
	}
.red {
	color: rgb(250, 67, 106) !important;
}
.end-title {
	display: flex;
	height: 40px;
	padding: 0 5px;
	background: #fff;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
	position: relative;
	z-index: 10;
}
.end-title view {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 15px;
	color: #303133;
	position: relative;
}
.end-cont {
	display: none;

}
.btna {
	color: #fa436a !important;
	&::after {
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
		width: 44px;
		height: 0;
		border-bottom: 2px solid #fa436a;
	}
}
.dis {
	display: block;
	.order-item {
		display: flex;

		flex-direction: column;
		padding-left: 15px;
		background: #fff;
		margin-top: 8px;
		.action_box {
			display: flex;
			-webkit-box-pack: end;
			-webkit-justify-content: flex-end;
			justify-content: flex-end;
			-webkit-box-align: center;
			-webkit-align-items: center;
			align-items: center;
			height: 50px;
			position: relative;
			padding-right: 15px;
			.qx {
				color: black;
			}
			button {
				width: 80px;
				height: 30px;
				margin: 0;
				margin-left: 12px;
				padding: 0;
				text-align: center;
				line-height: 30px;
				font-size: 13px;
				color: #303133;
				background: #fff;
				border-radius: 100px;
				background: #fff9f9;
				color: #fa436a;
			}
		}
		.header {
			display: flex;

			align-items: center;
			height: 40px;
			padding-right: 15px;
			font-size: 14px;
			color: #303133;
			position: relative;
			.time {
				flex: 1;
			}
			.state {
				color: #fa436a !important;
			}
		}
		.box {
			display: flex;
			padding: 10px 0;
			image {
				display: block;
				width: 60px;
				height: 60px;
			}
			.detail {
				flex: 1;

				display: flex;

				flex-direction: column;
				padding: 0 15px 0 12px;
				overflow: hidden;
				.title {
					font-size: 15px;
					color: #303133;
					line-height: 1;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					display: block;
				}
				.desc {
					font-size: 13px;
					color: #909399;
					padding: 5px 6px;
				}
				.price {
					font-size: 15px;
					color: #303133;
				}
			}
		}
	}
}
.num {
	display: flex;

	justify-content: flex-end;

	align-items: baseline;
	padding: 10px 15px;
	font-size: 13px;
	color: #909399;
	.sl {
		margin: 0 4px;
		color: #303133;
	}
	.all {
		font-size: 16px;
		color: #303133;
	}
}
.pay {
	position: relative;
	z-index: 2;
	background: #fff;

	border-radius: 5px;
	.paybox {
		margin: 8px 0;
		background-color: #fff;
		padding-left: 20px;
		.pay-item {
			height: 55px;
			padding: 10px 0;

			display: flex;

			justify-content: space-between;

			align-items: center;
			padding-right: 20px;
			font-size: 15px;
			position: relative;
			.iconfont {
				color: #36cb59;
				width: 40px;
				font-size: 26px;
			}
			.con {
				flex: 1;

				display: flex;

				flex-direction: column;
				font-size: 12px;
				color: #909399;
				.title {
					font-size: 14px;
					color: #303133;
					margin-bottom: 2px;
				}
			}
		}
		.bb {
			.iconfont {
				color: #fe8e2e;
				width: 50px;
				font-size: 26px;
			}
		}
	}
}
.sure {
	display: flex;
	justify-content: space-between;
	padding: 5px 20px;
	.cancel {
		position: relative;
		display: block;
		margin-right: auto;
		padding-left: 14px;
		padding-right: 14px;
		text-align: center;
		text-decoration: none;
		border-radius: 5px;
		overflow: hidden;
		color: #000;
		background-color: #f8f8f8;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
	}
	.submit {
		background: #fa436a;
		color: #fff;
		margin-left: 40px;
		height: 40px;
		line-height: 40px;
		font-size: 14px;
		position: relative;
		display: block;

		margin-right: auto;
		padding-left: 14px;
		padding-right: 14px;

		text-align: center;
		text-decoration: none;

		border-radius: 5px;

		overflow: hidden;
	}
}
</style>
