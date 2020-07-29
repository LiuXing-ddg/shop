<template>
	<view>
		<view class="content">
			<view class="reason">
				<text>退款/退货</text>
				<view class="text">
					<textarea class="wenzi" value="" placeholder="填写退款/退货原因,限150字" maxlength="150" v-model="remark"/>
				</view>
			</view>
			<view class="footer">
				<button @tap="tijiao">提交申请</button>
			</view>
		</view>
	</view>
</template>

<script>
	import instance from "../../../api/index.js"
	export default{
		data(){
			return{
				token:'',
				tel:'',
				username:'',
				remark:'',
				orderNo:''
			}
		},
		onLoad(options) {
			// console.log(options.orderNo)
			this.orderNo=options.orderNo
			this.token = uni.getStorageSync('token');
			instance({
				url:'/api/memberInfo/getMemberInfo',
				data:{
					token:this.token,
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
					}
			}).then(res=>{
				this.tel=res.data.data.mobileNo
				this.username=res.data.memberName
			})
		},
		methods:{
			tijiao(){
				if(this.remark==''){
					uni.showToast({
						icon:'none',
						title:"请输入退款原/货原因"
					})
				}else{
					instance({
						url:'/api/refund/appOrderRefundMoney',
						data:{
							token:this.token,
							orderNo:this.orderNo,
							remark:this.remark,
							username:this.username,
							mobileNo:this.tel
						},
						method:'POST',
							header:{
							   'content-type':'application/json',
							}
					}).then(res=>{
						if(res.data.status==1){
							uni.showToast({
								icon:'none',
								title:res.data.msg
							})
							uni.navigateTo({
								url:"../myorder/myorder?index="+'0'
							})
						}
					})
				}
				
			}
		}
	}
</script>

<style lang="scss">
	.reason{
		font-size: 14px;
		    color: #303133;
		    padding: 10px 20px;
			text{
				font-size: 16px;
			}
			.text{
				.wenzi{
					margin-top: 10px;
					    font-size: 14px;
					    border: solid 0.5px #f0f0f0;
					    width: 100%;
					    padding: 5px;
						
						    display: block;
						    position: relative;
						   
						    line-height: normal;
				}
			}
	}
	.footer{
		width: 100%;
		    text-align: center;
		    margin-top: 30px;
			button{
				height: 45px;
				    width: 60%;
				    background: #fa436a;
				    color: #fff;
				    line-height: 45px;
				    font-size: 14px;
					position: relative;
					    display: block;
					    margin-left: auto;
					    margin-right: auto;
					    padding-left: 14px;
					    padding-right: 14px;
						text-align: center;
						    text-decoration: none;
							border-radius: 5px;
			}
	}
</style>
