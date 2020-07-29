import Vue from 'vue'
import Vuex from 'vuex'
import instance from "../api/index.js"
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		addressinfo:'',
		addressNo:''
	},
    mutations: {
		GETONE(state,data){
			state.addressinfo=data[0]
			state.addressNo=data[0].addressNo
		},
		UPDATE(state,data){
			console.log(data,111)
			state.addressinfo=data
			state.addressNo=data.addressNo
		}
	},
    actions: {
		getaddress(store,token){
			instance({
				url:'/api/address/getMemberAddress',
				data:{
					token:token,
				},
				method:'POST',
					header:{
					   'content-type':'application/json',
				}
			}).then(res=>{
				store.commit("GETONE",res.data.data)
			})
		},
		// updataaddress(store,item){
		// 	store.commit("UPDATE",item)
		// }
	}
})
export default store