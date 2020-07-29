<template>
	<view class="">
		<view class="end-title">
		　　<view @tap="change(0)" :class="{btna:btnnum == 0}">基本信息</view>
		  　<view @tap="change(1)" :class="{btna:btnnum == 1}">公告信息</view>
		　　<view @tap="change(2)" :class="{btna:btnnum == 2}">换区信息</view>
		</view>
		<view class="end-cont" :class="{dis:btnnum == 0}">
		 　　0信息
		</view>
		<view class="end-cont" :class="{dis:btnnum == 1}">
		 　　1信息
		</view>
		<view class="end-cont" :class="{dis:btnnum == 2}">
		  　2信息
		</view>
	</view>
	
</template>

<script>
	export default{
		data() {
		   return {
		      btnnum: 0,
		   };
		},
		methods:{
		   change(e) {
		      this.btnnum = e
		      console.log(this.btnnum)
		  }
		}
	}
</script>

<style>
	 .end-title{
	        display: flex;
	    }
	    .end-title view{
	        flex-grow: 1;
	        text-align: center;
	    }
	    .end-cont{
	        display: none;
	        background: #C8C7CC;
	    }
	    .btna{
	        color: #FFFFFF;
	        background: #00A0FF;
	    }
	    .dis{
	        display: block;
	    }    
</style>
