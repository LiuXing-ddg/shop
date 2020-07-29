<template>
	<view class="add">
		<view class="content">
			<view class="row">
				<text>联系人</text>
				<input class="input" placeholder="收货人姓名" v-model="form.name" />
			</view>
			<view class="row">
				<text>手机号</text>
				<input class="input" placeholder="收货人手机号码" v-model.trim="form.tel" />
			</view>
			<view class="row">
				<text>地区</text>
				<view @click="addressShow = true" class="qing">
					<text class="xz">{{ address == '' ? '请选择收货地址' : '' }}</text>
					<view class="content_list_content">
						{{address}}
						<pickerAddress v-model="addressShow" @confirm="addresspick" />
					</view>
					<text class="right">></text>
				</view>
			</view>
			<view class="row">
				<text>详细地址</text>
				<input class="input" placeholder="详细地址" v-model="form.addressdetail" />
			</view>
			<view class="row default-row">
				<text>设为默认</text>
				<switch @change="" />
			</view>
			<button class="sumbi" @click="tijiao">提交</button>
		</view>
	</view>
</template>

<script>
import pickerAddress from '@/components/liudx-pickerAddress/index.vue';
import instance from "../../../../api/index.js"
export default {
	data() {
		return {
			addressShow: false,
			form: {
				province: '',
				city: '',
				area: '',
				name:'',
				tel:'',
				addressdetail:''
			},
			address: '',
			sheng:'',
			shi:'',
			qu:'',
			num:[],
			token:''
		}
	},
	methods: {
			addresspick(obj) {
				console.log(obj)
				this.sheng=obj.province.AreaName
				this.shi=obj.city.AreaName
				this.qu=obj.area.AreaName
				this.num.push(obj.area.AreaId,obj.city.AreaId,obj.province.AreaId)
				let arr = [ 'province', 'city', 'area'];
				let place = '';
				arr.forEach(key => {
					this.form[key] = obj[key].AreaName
					place += obj[key].AreaName
				})
				this.address = place
			},
			tijiao(){
				if(this.address==""){
					uni.showToast({
						
					})
				}
				let loginRules = [
					{name: 'name', type: 'required', errmsg: '请输入收货人姓名'},
					{name: 'tel', required: true, type: 'phone', errmsg: '请输入正确的手机号'},
					
					{name: 'addressdetail', type: 'required', errmsg: '请输入详细地址'}
				]
				let valLoginRes = this.$validate.validate(this.form, loginRules)
				if (!valLoginRes.isOk) {
					uni.showToast({
						icon: 'none',
						title: valLoginRes.errmsg
					})
					return false
				}else{
					if(this.address=""){
						uni.showToast({
							icon:'none',
							title:"请选择地区"
						})
					}else{
						instance({
								url:"/api/address/addMemberAddress",
								data:{
									area:this.qu,
									linkman: this.form.name,
									mobileNo: this.form.tel,
									province: this.sheng,
									city: this.shi,
									remark: JSON.stringify(this.num),
									address: this.address,
									token: this.token,
									isdefault: 0,
								},
								method:'POST',
								header:{
								   'content-type':'application/json',
								}
						}).then(res=>{
								if(res.data.status==1){
									uni.navigateTo({
										url:"../address"
									})
								}else{
									uni.showToast({
										icon:'none',
										title:"添加失败"
									})
								}
						})
					}
				}
			}
		},
		components: {
			pickerAddress
		},
		onLoad(){
			this.token = uni.getStorageSync('token');
		}
	}
</script>

<style lang="scss">
.content_list_content {
	font-size: 16px;
}
.content {
	.row {
		display: flex;

		align-items: center;
		position: relative;
		padding: 0 15px;
		height: 55px;
		background: #fff;
		text {
			width: 70px;
			font-size: 15px;
			color: #303133;
		}
		input {
		}

		.right {
			text-align: center;
		}
		.qing {
			display: flex;
			justify-content: center;
			align-items: center;
			.xz {
				flex: 1;
			}
		}
	}
	.default-row {
		text {
			flex: 1;
		}
	}
	.sumbi {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 90%;
		height: 45px;
		margin: 30px auto;
		font-size: 16px;
		color: #fff;
		background-color: #fa436a;
		border-radius: 0;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
}
</style>
