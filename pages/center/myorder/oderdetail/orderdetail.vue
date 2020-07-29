<template>
	<view v-show="list">
		<view class="state">
			<text>{{list.orderStatus | state}}</text>
		</view>
		<view class="adress_content">
			<view class="order_ad">
				<uni-icons class="icon" type="location-filled"></uni-icons>
				<view class="detail">
					<view class="top">
						<text class="name">{{list.receiver}}</text>
						<text class="tel">{{list.receiverMobile}}</text>
					</view>
					<text class="address">{{list.address}}</text>
				</view>
			</view>
		</view>

		<view class="goods">
			<view class="good_item" v-for="item in img">
				<image :src="`http://cjxx.zhjfd.com/upload/`+item.productImg"></image>
				<view class="right"> 
					<text class="title">{{list.orderName}}</text>
					<text class="des">{{item.productColorSize}}</text>
					<view class="price-box">
						<text class="price">￥{{list.dueAmt| money}}</text>
						<text class="num">×{{item.productNum}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="list">
			<view class="cell">
				<text class="clamp">商品金额</text>
				<text class="cell-tip">￥{{list.dueAmt| money}}</text>
			</view>
			<view class="cell">
				<text class="clamp">优惠金额</text>
				<text class="cell-tip">￥{{list.couponAmt | money}}</text>
			</view>
			<view class="cell">
				<text class="clamp">运费金额</text>
				<text class="cell-tip">￥{{list.logisticsFee | money}}</text>
			</view>
			<view class="cell order-total">
				<text class="clamp">订单总价</text>
				<text class="cell-tip">￥{{sum| money}}</text>
			</view>
			<view class="cell real">
				<text class="clamp">实付款</text>
				<text class="cell-tip red">￥{{(list.dueAmt-list.couponAmt) |money}}</text>
			</view>
		</view>
		
		<view class="order_info">
			<view  class="yt-list-cell b-b">
				<text class="cell-tit clamp">订单编号</text>
				<text class="cell-tip">{{list.orderNo}}</text>
			</view>
			<view  class="yt-list-cell b-b">
				<text class="cell-tit clamp">创建时间</text>
				<text class="cell-tip">{{list.createTime | timeStamp}}</text>
			</view>
			<view  class="yt-list-cell b-b" v-show="list.payTime">
				<text class="cell-tit clamp">付款时间</text>
				<text class="cell-tip">{{list.payTime |timeStamp}}</text>
			</view>
			<view  class="yt-list-cell b-b" v-show="list.payTypeStr">
				<text class="cell-tit clamp">付款方式</text>
				<text class="cell-tip">{{list.payTypeStr}}</text>
			</view>
			<view  class="yt-list-cell b-b" v-show="list.orderStatus=='complete'">
				<text class="cell-tit clamp">发货时间</text>
				<text class="cell-tip">{{list.deliveryTime |timeStamp}}</text>
			</view>
			<view  class="yt-list-cell b-b" v-show="list.logisticsName">
				<text class="cell-tit clamp">物流公司</text>
				<text class="cell-tip">{{list.logisticsName}}</text>
			</view>
			<view  class="yt-list-cell b-b" v-show="list.logisticsNo">
				<text class="cell-tit clamp">物流编号</text>
				<text class="cell-tip">{{list.logisticsNo}}</text>
			</view>
			<view  class="yt-list-cell b-b" v-show="list.orderStatus=='complete'">
				<text class="cell-tit clamp">成交时间</text>
				<text class="cell-tip">{{list.sendTime | timeStamp}}</text>
			</view>
		</view>
		
		<view class="tui" v-show="list.orderStatus=='refund'">
			<view class="top">
				<text>退款/退货原因</text>
			</view>
			<view class="reason">
				<text class="text"></text>
			</view>
		</view>
		
		<view class="footer" v-show="list.orderStatus=='complete'">
			<button class="btn">申请售后</button>
		</view>
		<view class="footer" v-show="list.orderStatus=='refund'">
			<button class="btn">查看进度</button>
		</view>
	</view>
</template>

<script>
import instance from "../../../../api/index.js"
	export default{
		data(){
			return{
				 token:"",
				 orderNo:"",
				 list:'',
				 sum:''
			}
		},
		methods:{
			
		},
		filters: {
					timeStamp: function(value) {
						var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
						var year = date.getFullYear();
						var month = ("0" + (date.getMonth() + 1)).slice(-2);
						var sdate = ("0" + date.getDate()).slice(-2);
						var hour = ("0" + date.getHours()).slice(-2);
						var minute = ("0" + date.getMinutes()).slice(-2);
						var second = ("0" + date.getSeconds()).slice(-2);
						// 拼接
						var result = year + "-" + month + "-" + sdate + " " + hour + ":" + minute + ":" + second;
						// 返回
						return result;
					},
					money:function(value){
						var sum=parseFloat(value/100)
						return sum.toFixed(2)
					},
					state:function(value){
						const statusEnum = {
							
								"complete": "交易完成 ",
								"refund": "退款中",
								"adminCancel": "交易取消",
								"memberCancel":"交易取消",
								"nopay":"待支付",
								"pay":"待发货"
							
						}
						return statusEnum[value];
					}
				},
		onLoad(options) {
			this.token=uni.getStorageSync("token");
			this.orderNo=options.orderNo
			instance({
				url:"/api/order/queryOrderList",
				data:{
					token:this.token,
					orderNo:this.orderNo,
					limit:1,
					start:0
				},
				method:'POST',
				header:{
				   'content-type':'application/json',
				}
			}).then(res=>{     
				console.log(res)
				this.list=res.data.data.rows[0]
				this.img=res.data.data.rows[0].orderProductsList
				let all=[]
				res.data.data.rows[0].orderProductsList.forEach(item=>{
					all.push(item.realAmt)
				})
				let sum=all.reduce((x,y)=>x+y)
				this.sum=sum
			})
		}
	}
</script>

<style lang="scss">
uni-page-body {
	background: #f8f8f8;
	padding-bottom: 50px;
}
.state {
	width: 100%;
	height: 90px;
	line-height: 90px;
	margin: 0;
	padding: 0;
	background: #fa436a;
	color: #fff;
	font-size: 18px;
	padding: 0 50px;
	text {
		line-height: 90px;
		font-size: 18px;
	}
}
.adress_content {
	padding: 15px 0;
	background: #fff;
	position: relative;
	.order_ad {
		display: flex;
		box-sizing: border-box;
		align-items: center;
		.icon {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 45px;
			color: #888 !important;
			font-size: 22px !important;
		}
		.detail {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 14px;
			color: #303133;
			.top {
				font-size: 14px;
				box-sizing: border-box;
				.name {
					font-size: 14px;
					margin-right: 12px;
					color: #303133;
				}
				.tel {
					font-size: 14px;
					color: #303133;
					box-sizing: border-box;
				}
			}
			.address {
				margin-top: 8px;
				margin-right: 10px;
				color: #909399;
			}
		}
	}
}
.goods {
	margin-top: 8px;
	background: #fff;
	padding-bottom: 1px;
	box-sizing: border-box;
	.good_item {
		display: flex;
		padding: 10px 15px;
		box-sizing: border-box;
		image {
			display: block;
			width: 70px;
			height: 70px;
			border-radius: 2px;
			overflow: hidden;
			position: relative;
		}
		.right {
			flex: 1;
			padding-left: 12px;
			overflow: hidden;
			box-sizing: border-box;
			.title {
				font-size: 15px;
				color: #303133;
			}
			.des {
				font-size: 13px;
				display: block;
				color: #909399;
			}
			.price-box {
				display: flex;
				align-items: center;
				font-size: 16px;
				color: #303133;
				padding-top: 5px;
				.price {
					margin-bottom: 2px;
					font-size: 16px;
					color: #303133;
				}
				.num {
					font-size: 13px;
					color: #606266;
					margin-left: 10px;
				}
			}
		}
	}
}
.list {
	background: #fff;
	padding: 5px 0;
	box-sizing: border-box;
	.cell {
		display: flex;
		align-items: center;
		padding: 0 20px;
		line-height: 25px;
		position: relative;
		box-sizing: border-box;
		.clamp {
			flex: 1;
			font-size: 13px;
			color: #909399;
			margin-right: 5px;
			line-height: 25px;
		}
		.cell-tip {
			font-size: 13px;
			color: #303133;
			box-sizing: border-box;
			line-height: 25px;
		}
		.red {
			font-size: 16px;
			color: #fa436a;
		}
	}
	.real {
		line-height: 30px;
		border-top: solid 0.5px #f8f8f8;
		.clamp {
			font-size: 16px;
			color: #303133;
		}
	}
	.order-total {
		display: flex;
		align-items: center;
		padding: 0 20px;
		line-height: 25px;
		position: relative;
		.clamp {
			font-size: 14px;
			color: #303133;
		}
		.cell-tip {
			font-size: 14px;
		}
	}
}
.order_info{
	background: #fff;
	    padding: 5px 0;
		margin-top: 8px;
		box-sizing: border-box;
		.yt-list-cell{
			display: flex;
			    align-items: center;
			    padding: 0 20px;
			    line-height: 25px;
			    position: relative;
				.clamp{
					flex: 1;
					    font-size: 13px;
					    color: #909399;
					    margin-right: 5px;
				}
				.cell-tip{
					font-size: 13px;
					    color: #303133;
						line-height: 25px;
				}
		}
}
.footer{
	position: fixed;
	    left: 0;
	    bottom: 0;
	    z-index: 9;
	   
	    display: flex;
	    
	    align-items: center;
	    width: 100%;
	    height: 45px;
	   
	    justify-content: flex-end;
	    font-size: 15px;
	    background-color: #fff;
	    color: #606266;
	    box-shadow: 0 -1px 5px rgba(0,0,0,.1);
		.btn{
			height: 35px;
			    line-height: 35px;
			    margin: 5px 0;
			    border: solid 0.5px #e4e7ed;
			    border-radius: 20px;
			    font-size: 14px;
			    background: #fff;
			    margin-right: 10px;
				position: relative;
				    display: block;
				    padding-left: 14px;
				    padding-right: 14px;
				    text-align: center;
				    text-decoration: none;
				    overflow: hidden;
				    color: #000;
		}
}
.tui{
	margin-top: 8px;
	background: #fff;
	    padding: 5px 0;
		.top{
			text{
				font-size: 12px;
				    color: #909399;
				    padding: 0 20px;
			}
		}
		.reason{
			display: flex;
			  
			    align-items: center;
			    padding: 0 20px;
			    line-height: 25px;
			    position: relative;
				.text{
					font-size: 13px;
					    color: #303133;
				}
		}
}
</style>
