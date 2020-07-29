<template>
	<view>
		<view class="content">
			
			<view class="item">
				<view class="list">
					<text class="one">修改密码</text>
					<text class="two">></text>
				</view>
			</view>
			
			<view class="item">
				<view class="list">
					<text class="one">修改密码</text>
					<text class="two">></text>
				</view>
			</view>
			
			<view class="item">
				<view class="list">
					<text class="one">修改密码</text>
					<text class="two">></text>
				</view>
			</view>
				
			<view class="btn">
				<button @click="out">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			out(){
				uni.clearStorageSync("welcome")
				uni.switchTab({
					url:"../center"
				})
			}
		}
	}
</script>
<style lang="scss">
	.content{
		padding: 0 10px;
		    background: #fff;
			.item{
				border-bottom: 0.5px solid #f3f3f3;
				box-sizing: border-box;
				.list{
					display: flex;
					    -webkit-box-align: center;
					    -webkit-align-items: center;
					    align-items: center;
					    padding: 10px 15px;
					    line-height: 30px;
					    position: relative;
					    background: #fff;
						.one{
							flex: 1;
							    font-size: 14px;
							    color: #303133;
							    margin-right: 5px;
						}
						.two{
							align-self: center;
							    font-size: 15px;
							    color: #606266;
							    margin-left: 10px;
						}
				}
			}
			.btn{
				width: 100%;
				    display: -webkit-box;
				    display: -webkit-flex;
				    display: flex;
				    -webkit-box-pack: center;
				    -webkit-justify-content: center;
				    justify-content: center;
					button{
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
</style>
