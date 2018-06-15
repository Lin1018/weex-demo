<template>
	<div class="wrapper">
		<text class="btn" @click="jump">Jump</text>
		<text class="btn" @click="pop">Pop</text>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	const navigator = weex.requireModule('navigator')

	export default {
		methods: {
			jump(event) {
				navigator.push({
					url: 'https://www.baidu.com',
					animated: "true"
				}, event => {
					modal.toast({
						message:'callback:' + event,
						duration: 1
					})
				})
			},
			pop(e) {
				navigator.pop({
					animated: "true"
				}, event => {
					modal.toast({
						message: 'callback: ' + event
					})
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		width: 750px;
		height: 1250px;
		flex-direction: column;
		justify-content: center;
	}
	.btn {
	  font-size: 60px;
	  width: 450px;
	  text-align: center;
	  margin-top: 30px;
	  margin-left: 150px;
	  padding-top: 20px;
	  padding-bottom: 20px;
	  border-width: 2px;
	  border-style: solid;
	  color: #666666;
	  border-color: #DDDDDD;
	  background-color: #F5F5F5
	}
</style>