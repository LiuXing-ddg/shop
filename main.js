import Vue from 'vue'
import App from './App'
import validate from './components/util/ys-validate.js'
import store from "store/index.js"
Vue.config.productionTip = false
Vue.prototype.$validate = validate
App.mpType = 'app'
Vue.filter("timeStamp",(value)=>{
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
})
Vue.filter("money",(value)=>{
	var sum=parseFloat(value/100)
	return sum
})
Vue.filter("yunfei",(value)=>{
	const statusEnum = {
		"0": "免运费"
	}
	return statusEnum[value];
})

Vue.filter("state",(value)=>{
	const statusEnum = {
		"complete": "已完成 ",
		"refund": "退款/退货处理中",
		"adminCancel": "交易取消",
		"memberCancel":"交易取消",
		"nopay":"待支付",
		"pay":"待发货"
	}
	return statusEnum[value];
})
const app = new Vue({
	...App,
	store
})
app.$mount()
