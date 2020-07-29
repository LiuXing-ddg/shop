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
				<input type="text" v-model="form.tel"  placeholder="请输入手机号码" />
			</view>
			<view class="pass">
				<uni-icons type="locked"></uni-icons>
				<text>短信验证码</text>
				<input type="text" v-model="form.code" placeholder="请输入验证码" />
				<text class="likebo">获取验证码</text>
			</view>
			<view class="pass">
				<uni-icons type="locked"></uni-icons>
				<text>邀请码</text>
				<input type="text" v-model="form.yqm" />
			</view>
			<view class="tj">
				<button type="primary" class="sure" @click="submit">登录</button>
			</view>
		</view>
		
		<view class="toreginst">
			已有账号
			<text @click="tologin">去登录</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
					form:{
						tel: '',
						code:'',
						yzm:''
					}
			}
		},
		methods:{
			toindex(){
				uni.switchTab({
					url:"../index/index"
				})
			},
			tologin(){
				uni.navigateTo({
					url:"../login/login"
				})
			},
			submit(){
					// 表单校验
					let loginRules = [
						{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
						{name: 'code', type: 'required', errmsg: '请输入验证码'},
						{name: 'code', type: 'lengthRange', min: 4, max: 4, errmsg: '请正确输入4位验证码'},
						{name: 'yqm', type: 'required', errmsg: '请输入邀请码'}
						// {name: 'password', type: 'pwd', errmsg: '密码须是6～16位字符'}
						// {name: 'pwd2', type: 'eq', eqName: 'pwd', required: true, errmsg: '两次输入密码不一致'},
						// {name: 'code', type: 'lengthRange', min: 4, max: 4, errmsg: '请正确输入4位验证码'},
						// {name: 'mail', type: 'regex', regex: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, errmsg: '请正确输入邮箱'}
					]
					let valLoginRes = this.$validate.validate(this.form, loginRules)
					
					if (!valLoginRes.isOk) {
						uni.showToast({
							icon: 'none',
							title: valLoginRes.errmsg
						})
						return false
					}else{
						//注册逻辑
						console.log(111)
					}
					uni.showToast({
						icon: 'none',
						title: '验证通过提交登陆'
					})
					
			
			}
		},
		
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
			.likebo{
				position: absolute;
				    right: 0;
				    bottom: 8px;
				    height: 30px;
				    line-height: 30px;
				    text-align: center;
				    border-radius: 15px;
				    margin: 0;
				    padding: 0;
				    padding-left: 0;
				    color: #fa436a;
				    border: 0.5px solid #fa436a;
					
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
