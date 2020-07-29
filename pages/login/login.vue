<template>
	<view class="login">
		<view class="banner">
			<image src="../../static/img/banner2.png"></image>
			<view class="posi">
				<uni-icons type="home" @click="toindex"></uni-icons>
			</view>
		</view>
		<view class="form">
			<view class="tel">
				<uni-icons type="phone"></uni-icons>
				<text>手机号码</text>
				<input type="text" value="" placeholder="请输入手机号码" v-model.trim="form.tel"/>
			</view>
			<view class="pass">
				<uni-icons type="locked"></uni-icons>
				<text>密码</text>
				<input type="password" value="" placeholder="请输入密码" password v-model="form.password"/>
			</view>
			<view class="wj">
				<text>忘记密码</text>
			</view>
			
			<view class="tj">
				<button class="sure" @tap="submit">登录</button>
			</view>
		</view>
		<view class="fast">
			<text>————快速登录————</text>
			<uni-icons type="weixin"></uni-icons>
		</view>
		<view class="toreginst">
			还没有账号？
			<text @click="toreginst">马上注册</text>
		</view>
	</view>
</template>

<script>
	import instance from "../../api/index.js"
	export default{
		data(){
			return {
					form:{
						tel: '',
						password: '',
					}
			}
		},
		methods:{
			
			toindex(){
				uni.switchTab({
					url:"../index/index"
				})
			},
			toreginst(){
				uni.navigateTo({
					url:"../register/register"
				})
			},
			submit(){
					// 表单校验
					let loginRules = [
						{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
						{name: 'password', type: 'required', errmsg: '请输入密码'},
						{name: 'password', type: 'pwd', errmsg: '密码须是6～16位字符'}
					]
					let valLoginRes = this.$validate.validate(this.form, loginRules)
					
					if (!valLoginRes.isOk) {
						uni.showToast({
							icon: 'none',
							title: valLoginRes.errmsg
						})
						return false
					}else{
						instance({
								url:"/api/member/appLogin",
								data:{
									mobileNo:this.form.tel,
									password:this.form.password,
									bindNo:"17570710275"
								},
								method:'POST',
								header:{
								   'content-type':'application/json',
								}
						}).then(res=>{
							if(res.data.status=='1'){
								uni.showToast({
									icon: 'none',
									title: '登录成功'
								})
							uni.setStorageSync("token",res.data.data.token)
							console.log(res)
							uni.switchTab({
								url:"../index/index"
							})
							}else{
								uni.showToast({
									icon:'none',
									title:"账号或密码错误"
								})
							}
						})
					}
					
					
			
			}
		}
	}
</script>

<style lang="scss">
	.login .banner {
		position: relative;
		width: 100%;
		overflow: hidden;

		image {
			width: 100%;
			display: block;
		}

		.posi {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			right: 10px;
			top: 10px;
			height: 35px;
			width: 35px;
			border-radius: 50%;
			background: rgba(256, 200, 80, .5);
		}
	}

	.login .form {
		padding: 0 10px;

		.tel {
			position: relative;
			padding: 10px 0;
			font-size: 14px;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: solid 0.5px #ccc;
			width: 100%;

			.uni-icons {
				text-align: left;
				padding: 5px 0;
				padding-left: 8px;
				font-size: 22px;
				width: 30px;
			}

			text {
				width: 28%;
				text-align: left;
				padding: 5px 0;
				padding-left: 8px;
			}

			input {
				display: block;
				font-size: 16px;
				line-height: 1.4em;
				height: 1.4em;
				min-height: 1.4em;
				overflow: hidden;
			}
		}

		.pass {
			position: relative;
			padding: 10px 0;
			font-size: 14px;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-bottom: solid 0.5px #ccc;
			width: 100%;

			.uni-icons {
				text-align: left;
				padding: 5px 0;
				padding-left: 8px;
				font-size: 22px;
				width: 30px;
			}

			text {
				width: 28%;
				text-align: left;
				padding: 5px 0;
				padding-left: 8px;
			}

			input {
				display: block;
				font-size: 16px;
				line-height: 1.4em;
				height: 1.4em;
				min-height: 1.4em;
				overflow: hidden;
			}
		}

		.wj {
			font-size: 13px;
			text-align: right;
			padding: 7px 0;

			text {
				color: #4399fc;
				margin-left: 5px;
			}
		}

		.tj {
			width: 100%;
			display: flex;
			justify-content: center;

			button {
				margin-top: 30px;
				background: #fa436a;
				color: #fff;
				height: 45px;
				line-height: 45px;
				width: 90%;
				border-radius: 25px;
			}
		}

	}

	.login .fast {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 25px;

		text {
			font-size: 16px;
			font-weight: 600;
			color: #909399;
		}

		.uni-icons {
			font-size: 50px !important;
			color: #3ab54a !important;
			margin-top: 20px;
		}
	}

	.login .toreginst {
		position: relative;
		left: 0;
		top: 20px;
		width: 100%;
		font-size: 13px;
		color: #606266;
		text-align: center;
		text {
			color: #4399fc;
			margin-left: 5px;
		}
	}
</style>
