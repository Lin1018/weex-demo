<template>
	<div class="wrapper">
		<web @pagestart="start" @pagefinish="finish" class="web" src="https://m.alibaba.com"></web>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	
	export default {
		methods: {
			start() {
				modal.toast({
					message: 'pagestart'
				})
			},
			finish() {
				modal.toast({
					message: 'pagefinish'
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 950px;
		justify-content: center;
	}
	.web {
		margin-left: 75px;
		width: 600px;
		height: 750px;
		border-width: 2px;
		border-style: solid;
		border-color: #41B883;
	}
</style>