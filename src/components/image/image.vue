<template>
	<div class="image">
	  <image class="img" src="http://7xjyw1.com1.z0.glb.clouddn.com/20170412101827.png"></image>
	  <video class="video" :src="video" controls autoplay @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
	  <text>state:{{state}}</text>
	</div>
</template>

<script>
	export default {
		data() {
			return {
	      video: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4',
	      state: ''
			}
		},
		methods: {
	    onstart(event) {
	      console.log(event)
	      this.state = 'onstart'
	    },
	    onpause(event) {
	      console.log(event)
	      this.state = 'onpause'
	    },
	    onfinish(event) {
	      console.log(event)
	      this.state = 'onfinish'
	    },
	    onfail(event) {
	      console.log(event)
	      this.state = 'onfail'
	    }
		}
	}
</script>

<style scoped>
  .img {
    width: 750px;
    height: 300px;
  }
  .video {
    width: 630px;
    height: 300px;
  }	
</style>