<template>
	<view class="kindslist">
		<view class="header">
			<view class="end-title">
				　　<view @tap="change(0)" :class="{btna:btnnum == 0}">综合排序</view>
				　 <view @tap="change(1)" :class="{btna:btnnum == 1}">销量优先</view>
				　　<view @tap="change(2)" :class="{btna:btnnum == 2}">价格排序</view>
			</view>
			<view class="ct">
				<uni-icons type="home" @click="showDrawer('showRight')"></uni-icons>
				<uni-drawer ref="showRight" mode="right" :mask-click="false" @change="change($event,'showRight')" maskClick="true">
						<view class="scroll-view">
							<scroll-view class="scroll-view-box" scroll-y="true">
								<view class="">
									一级标题
								</view>
								<view class="info-content" v-for="item in 10" :key="item">
									
									<text @click="closeDrawer('showRight')">内容 {{item}}</text>
								</view>
							</scroll-view>
						</view>
					</uni-drawer>
			</view>
			<view class="end-cont" :class="{dis:btnnum == 0}">
				<view class="wao">
					<block v-for="item in list" :key="item.id">
						<goodbox :item="item"></goodbox>
					
					</block>
				</view>
			</view>
			
			<view class="end-cont" :class="{dis:btnnum == 1}">
				　　<view class="wao">
					<block>
						
					</block>
				</view>
			</view>
			<view class="end-cont" :class="{dis:btnnum == 2}">
				　<view class="wao">
					<block>
						
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import instance from "../../api/index.js"
	export default {
		data() {
			return {
				btnnum: 0,
				showRight: false,
				showLeft: false,
				token:"",
				menuNo:'',
				list:[]
			};
		},
		onLoad(options) {
			console.log(options)
			this.token=uni.getStorageSync("token");
			this.menuNo=options.menuNo
			instance({
				url:"/api/product/queryProductByMenuNo",
				data:{
					token:this.token,
					menuNo:this.menuNo,
					start:0,
					limit:10
				},
				method:'POST',
				header:{
				   'content-type':'application/json',
				}
			}).then(res=>{
				console.log(res)
				this.list=res.data.data
			})
		},
		methods: {
			change(e) {
				this.btnnum = e
			},
			showDrawer(e) {
				this.$refs[e].open()
			},
			// 关闭窗口
			closeDrawer(e) {
				this.$refs[e].close()
			}
			
		}
	}
</script>
<style lang="scss">
	.wao {
		display: flex;
		flex-wrap: wrap;
	}
.ct{
	position: absolute;
	top: 5px;
	right: 10px;
	
	z-index: 888;
	
}
.uni-drawer__content{
	width: 300px;
}
.uni-scroll-view-content{
	
	view{
		display: -webkit-box;
		    display: -webkit-flex;
		    display: flex;
		    -webkit-box-align: center;
		    -webkit-align-items: center;
		    align-items: center;
		    height: 45px;
		    padding-left: 15px;
		    font-size: 14px;
		    color: #555;
		    position: relative;
	}
}
	.end-title {
		left: 0;
		display: flex;
		width: 100%;
		height: 40px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		z-index: 10;
		position:relative;
		
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
		// flex-grow: 1;
		text-align: center;
		// flex: 1;
		width: 30%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 15px;
		position: relative;
	}
	.end-cont {
		display: none;
		padding: 0 15px;

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
uni-scroll-view {
    display: block;
    width: 100%;
    margin-top: 44px;
}
	.dis {
		display: block;
	}
</style>
