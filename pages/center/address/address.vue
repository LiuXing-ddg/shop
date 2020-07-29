<template>
	<view class="content">
		<view class="list" v-for="item in list" @click="choose(item)">
			<view class="wrapper">
				<view class="user">
					<text class="name">{{item.linkman}}</text>
					<text class="tel">{{item.mobileNo}}</text>
				</view>
				<view class="address"><text class="dz">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</text></view>
			</view>
			<view class="btn">
				<view class="ck">
					<view class="iconfont icon-xuanzhong"></view>
					<text class="mr">默认地址</text>
				</view>
				<view class="button">
					<button class="one">编辑</button>
					<button class="two">删除</button>
				</view>
			</view>
		</view>
	
		<button class="add" @click="add">新增地址</button>
	
	</view>
</template>

<script>
	import instance from "../../../api/index.js"
	import { mapMutations,mapState } from 'vuex'
	export default{
		data(){
			return{
				token:'',
				list:''
			}
		},
		onLoad() {
			this.token = uni.getStorageSync('token');
			instance({
				url:'/api/address/getMemberAddress',
				data:{
					token:this.token
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				this.list=res.data.data
			})
		},
		methods:{
			...mapMutations(['UPDATE']),
			choose(item){
				console.log(item)
				this.UPDATE(item)
				window.history.back();
				
			},
			add(){
				uni.navigateTo({
					url:"add/add"
				})
			}
		},
		computed:{
			...mapState(["addressinfo","addressNo"])
		}
	}
</script>

<style lang="scss">
.content {
	position: relative;
	background: #f8f8f8;
	padding: 0 10px;
	.list {
		display: flex;

		flex-direction: column;

		align-items: flex-start;
		padding: 5px 15px;
		background: #fff;
		position: relative;
		margin-top: 10px;
		width: 100%;
		border-radius: 5px;
		box-sizing: border-box;
		.wrapper {
			display: flex;

			flex-direction: column;

			flex: 1;
			padding: 10px 0;
			.user {
				font-size: 14px;
				color: #909399;
				padding: 5px 0;
				.name {
					margin-right: 15px;
					font-size: 14px;
					color: #909399;
				}
				.tel {
					font-size: 14px;
					color: #909399;
				}
			}
			.address {
				display: flex;

				align-items: center;
				.dz {
					font-size: 15px;
					color: #303133;
				}
			}
		}
		.btn {
			display: flex;
			border-top: 0.5px solid #f1f1f1;

			justify-content: space-between;

			align-items: center;
			width: 100%;
			font-size: 14px;
			color: #909399;
			padding: 10px 0;
			.ck {
				display: flex;

				align-items: center;
				.iconfont {
					font-size: 20px;
					line-height: 1;
					padding: 2px;
					color: #c0c4cc;
					background: #fff;
					border-radius: 50px;
				}
				.mr {
					font-size: 14px;
					color: #909399;
				}
			}
			.button {
				display: flex;
				align-items: center;
				.one {
					background: #fff;
					margin-left: 10px;
					font-size: 14px;
					height: 30px;
					width: 70px;
					color: #909399;
					border-radius: 15px;
					line-height: 30px;
					border: 0.5px solid #909399;
				}
				.two {
					background: #fff;
					margin-left: 10px;
					font-size: 14px;
					height: 30px;
					width: 70px;
					color: #fa436a;
					border: 0.5px solid #fa436a;
					border-radius: 15px;
					line-height: 30px;
				}
			}
		}
	}
}
.add{
	position: fixed;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    z-index: 95;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    -webkit-box-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	    height: 45px;
	    font-size: 16px;
	    color: #fff;
	    border-radius: 0;
	    background-color: #fa436a;
	    box-shadow: 1px 2px 5px rgba(219,63,96,.4);
}
</style>
