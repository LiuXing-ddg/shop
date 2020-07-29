<template>
	<view>
		<view class="address_section">
			<view class="address_content">
				<text class="iconfont icon-dizhi"></text>
				<view class="cen" @click="choose">
					<view class="top">
						<text class="name">{{addressinfo.linkman}}</text>
						<text class="tel">{{addressinfo.mobileNo}}</text>
					</view>
					<view class="wu" v-show="dizhi">请选择地址</view>
					<text class="dz">{{addressinfo.province}}{{addressinfo.city}}{{addressinfo.area}}{{addressinfo.address}}</text>
				</view>
				<text class="jr">></text>
			</view>
			<image src="../../../../static/img/dd.png" mode=""></image>
		</view>

		<view class="goods_section">
			<view class="g_item" v-for="(item,index) in carlist" :key="index">
				<image :src="`http://cjxx.zhjfd.com/upload/`+item.imagesPath" mode=""></image>
				<view class="right">
					<text class="title">{{item.productName}}</text>
					<text class="desc">{{item.remark}}</text>
					<view class="price_box">
						<text class="price">￥{{item.agentPrice |money}}</text>
						<text class="num">x {{item.shopCarNum}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="youhui">
			<view class="b-b">
				<view class="quan">券</view>
				<text class="cell-tit">本单可使用优惠券抵扣 ￥{{yhmoney |money}}</text>
				<radio :checked="checked" @click="radioChange" color="red" />
			</view>
		</view>

		<view class="youhui2">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商品金额</text>
				<text class="cell-tip">￥{{totalPrice | money}}</text>
			</view>
			<view class="yt-list-cell b-b" v-if="checked">
				<text class="cell-tit clamp">优惠抵扣金额</text>
				<text class="cell-tip red">￥{{yhmoney |money}}</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运费</text>
				<text class="cell-tip">￥{{yf | yunfei}}</text>
			</view>
			<view class="yt-list-cell desc-cell">
				<text class="cell-tit clamp">备注</text>
				<input type="text" placeholder="请填写备注信息" class="desc" v-model="bz"/>
			</view>
		</view>
		
		<view class="pay">
			<view class="pay-item">
				<text class="iconfont icon-weixinzhifu"></text>
				<view class="con">
					<text class="title">微信支付</text>
					<text>推荐使用微信支付</text>
				</view>
				<radio class="rdio" :checked="biaoqian==='1'" @click="changewx('1')" color="red" />
			</view>
			<view class="bb">
				<text class="iconfont icon-zhifu"></text>
					<view class="con">
						<text class="title">预存款支付</text>
						<text>可用余额 ￥{{data.balance|money}}</text>
					</view>
					<radio class="rdio" :checked="biaoqian==='2'" @click="changewx('2')" color="red" />
				</view>
			</view>
			
			<view class="footer">
				<view class="price-content">
					<text>实付款</text>
					<text class="price-tip">￥</text>
					<text class="price">{{real | money}}</text>
				</view>
				<text class="sumb" @tap="tijiao">提交订单</text>
			</view>
			
			<e-modal :visible.sync="visible" @cancel="handleCancel">
				<view class="modal-container">
					<view class="modal-container_title">
						请输入密码
					</view>
					<input type="password" v-model="password" class="mm"/>
					<button type="primary" size="mini" @tap="pay">确定</button>
				</view>
			</e-modal>
			
		</view>
	</view>
</template>
<script>
import instance from "../../../../api/index.js"
import { mapActions,mapState } from 'vuex'
export default {
	data() {
		return {
			checked: true,
			biaoqian:'1',
			bz:'',
			token:'',
			carlist:'',//数据
			dizhi:'',
			yhmoney:'',//优惠金额
			yf:'',//运费
			count:'',
			visible: false,
			password:"",
			// addressNo:'',//订单编号
			list:"",//所有选中编号
			shopNo:"",
			shopCarNos:'',//传的参数数组
			// addressinfo:'',//地址信息
			score:'',//积分数
			orderNo:"",//订单编号
			xuanzhong:'',
			data:''
		};
	},
	onLoad(options) {
		let list=uni.getStorageSync("list")
		let xuanzhong=[]
		list.map(item=>{
			if(item.isselecked==true){
				xuanzhong.push(item.shopCarNo)
			}
		})
		let bb=xuanzhong.join(",")
		
		this.xuanzhong=xuanzhong
		this.token=uni.getStorageSync("token");
		if(this.xuanzhong.length>1){
			instance({
				url:'/api/shopCar/shopCarSettle',
				data:{
					token:this.token,
					shopCarNos:bb
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				this.carlist=res.data.data[0].productList//商品信息
				this.shopNo=res.data.data[0].shopNo
				this.count=res.data.data[0].productList.length//所有商品数量
				this.yf=res.data.data[0].logisticsFee/100//运费
				let yharr=this.carlist.map(item=>item.useCoupon);
				let yhmoney=yharr.reduce(function(prev,cur){
						return prev + cur
				})
				this.yhmoney=yhmoney//优惠金额
				this.shopCarNos=[{shopNo:this.shopNo,leaveMsg:'',shopCarNos:this.list}]
			})
		}else{
			instance({
				url:'/api/shopCar/shopCarSettle',
				data:{
					token:this.token,
					shopCarNos:this.xuanzhong[0]
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				console.log(res)
				this.carlist=res.data.data[0].productList//商品信息
				this.shopNo=res.data.data[0].shopNo
				this.count=res.data.data[0].productList.length//所有商品数量
				this.yf=res.data.data[0].logisticsFee/100//运费
				let yharr=this.carlist[0].useCoupon
				let yhmoney=yharr
				this.yhmoney=yhmoney//优惠金额
				this.shopCarNos=[{shopNo:this.shopNo,leaveMsg:'',shopCarNos:this.xuanzhong[0]}]
				
			})
		}
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
			this.score=res.data.data.score
		})
		
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
			this.data=res.data.data
		})
	},
	created(){
		this.getaddress(this.token)
	},
	methods: {
		...mapActions(['getaddress']),
		radioChange() {
			this.checked = !this.checked;
		},
		changewx(e){
			this.biaoqian=e
		},
		handleCancel() {
			console.log('modal关闭')
		},
		tijiao(){
			if(this.biaoqian==='1'){
				alert("用余额支付")
			}else{
				instance({
					url:'/api/order/shopCarToPay',
					data:{
						addressNo:this.addressNo,
						couponNo:'1',
						isDelivery: 0,
						deliveryAddr:'',
						token:this.token,
						shopCarNos:JSON.stringify(this.shopCarNos)
					},
					method:'POST',
						header:{
						   'content-type':'application/json',
					}
				}).then(res=>{
					console.log(res)
					if(res.data.status===1){
						this.visible=!this.visible
						this.orderNo=res.data.data
					}else{
						uni.showToast({
							icon:'none',
							title:"支付失败"
						})
					}
				})
				
			}
			
		},
		pay(){
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
				console.log(res)
				if(res.data.status==0){
					uni.showToast({
						icon: 'none',
						title: "密码错误"
					})
				}else{
					instance({
						url:'/api/order/yuePay',
						data:{
							token:this.token,
							orderNo:this.orderNo,
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
							uni.navigateTo({
								url:"../myorder?index="+'0'
							})
						}
					})
				}
			})
			this.visible=false
		},
		choose(){
			uni.navigateTo({
				url:"../../address/address"
			})
		}
	},
	computed:{
		...mapState(["addressinfo","addressNo"]),
		totalPrice() {
			let totalPrice = 0;
			this.carlist.map(item => {
				totalPrice += item.shopCarNum * item.agentPrice
			})
			return totalPrice
		},
		real(){
			let realmoney=0;
			if(this.checked==true){
				 realmoney=this.totalPrice-this.yhmoney
			}
			if(this.checked==false){
				 realmoney=this.totalPrice
			}
			return realmoney
		}
			
	}
	
};
</script>

<style lang="scss">
	.modal-container {
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #FEF;
	}
	.mm{
		border: 1px solid black;
		text-align: center;
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
page {
	background: #f8f8f8;
}
.address_section {
	padding: 15px 0;
	background: #fff;
	position: relative;
	box-sizing: border-box;
	image {
		position: absolute;
		left: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 2px;
	}
	.address_content {
		display: flex;

		align-items: center;
		.iconfont {
			display: flex;

			align-items: center;

			justify-content: center;
			width: 45px;
			color: #888;
			font-size: 22px;
		}
		.cen {
			display: flex;

			flex-direction: column;

			flex: 1;
			font-size: 14px;
			color: #303133;
			.top {
				font-size: 14px;
				color: #303133;
				.name {
					font-size: 17px;
					margin-right: 12px;
					color: #303133;
				}
				.tel {
					font-size: 14px;
					color: #303133;
				}
			}
			.dz {
				margin-top: 8px;
				margin-right: 10px;
				color: #909399;
			}
		}

		.jr {
			font-size: 16px;
			color: #909399;
			margin-right: 15px;
		}
	}
}
.goods_section {
	margin-top: 8px;
	background: #fff;
	padding-bottom: 1px;
	.g_item {
		display: flex;
		padding: 10px 15px;
		image {
			display: block;
			width: 70px;
			height: 70px;
			border-radius: 2px;
		}
		.right {
			flex: 1;
			padding-left: 12px;
			overflow: hidden;
			.title {
				font-size: 15px;
				color: #303133;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				display: block;
			}
			.desc {
				font-size: 13px;
				color: #909399;
				box-sizing: border-box;
			}
			.price_box {
				display: flex;

				align-items: center;
				font-size: 16px;
				color: #303133;
				padding-top: 5px;
				.price {
					margin-bottom: 2px;
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
.youhui {
	margin-top: 8px;
	background: #fff;
	.b-b {
		display: flex;

		align-items: center;
		padding: 5px 15px 5px 20px;
		line-height: 35px;
		position: relative;
		.quan {
			height: 16px;
			width: 16px;
			font-size: 11px;
			color: #fff;
			text-align: center;
			line-height: 16px;
			background: #f85e52;
			border-radius: 2px;
			margin-right: 6px;
		}
		.cell-tit {
			flex: 1;
			font-size: 13px;
			color: #909399;
			margin-right: 5px;
		}
	}
}
.youhui2 {
	margin-top: 8px;
	background: #fff;
	.yt-list-cell {
		display: flex;

		align-items: center;
		padding: 5px 15px 5px 20px;
		line-height: 35px;
		position: relative;
		.cell-tit {
			flex: 1;
			font-size: 13px;
			color: #909399;
			margin-right: 5px;
		}
		.clamp {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			display: block;
		}
		.cell-tip {
			font-size: 13px;
			color: #303133;
		}
		.red {
			color: #fa436a;
		}
	}
	.desc-cell {
		display: flex;
		align-items: center;
		padding: 5px 15px 5px 20px;
		line-height: 35px;
		position: relative;
		.clamp {
			width: 20%;
			flex: 0.15;
		}
		.desc {
			flex: 1;
			width: 100%;
			font-size: 14px;
		}
	}
}
.pay{
	margin: 8px 0;
	    background-color: #fff;
	    padding-left: 30px;
		margin-bottom: 50px;
		.pay-item{
			height: 55px;
			padding: 10px 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 15px;
			font-size: 15px;
			position: relative;
				.iconfont{
					color: #36cb59;
					width: 50px;
					font-size: 26px;
				}
				.con{
					flex: 1;
					display: flex;
					flex-direction: column;
					font-size: 12px;
					color: #909399;
					.title{
						font-size: 14px;
						color: #303133;
						margin-bottom: 2px;
					}
				}
		}
		.bb{
			height: 55px;
			padding: 10px 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 15px;
			font-size: 15px;
			position: relative;
			.iconfont{
				color: #fe8e2e;
				width: 50px;
					font-size: 26px;
			}
			.con{
				flex: 1;
				display: flex;
				flex-direction: column;
				font-size: 12px;
				color: #909399;
				.title{
					font-size: 14px;
					color: #303133;
					margin-bottom: 2px;
				}
			}
	}
}
.footer{
	position: fixed;
	    left: 0;
	    bottom: 0;
	    z-index: 995;
	   
	    display: flex;
	    
	    align-items: center;
	    width: 100%;
	    height: 45px;
	   
	    justify-content: space-between;
	    font-size: 15px;
	    background-color: #fff;
	    z-index: 998;
	    color: #606266;
	    box-shadow: 0 -1px 5px rgba(0,0,0,.1);
		.price-content{
			padding-left: 15px;
			.price-tip{
				color: #fa436a;
				    margin-left: 4px;
			}
			.price{
				font-size: 18px;
				    color: #fa436a;
			}
		}
		.sumb{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 140px;
			height: 100%;
			color: #fff;
			font-size: 16px;
			background-color: #fa436a;
		}
}
</style>
