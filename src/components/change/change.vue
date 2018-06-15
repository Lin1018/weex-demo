<template>
	<div class="wrapper">
		<div class="change" @click="onclick" @longpress="onlongpress"></div>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	export default {
		methods: {
			onclick() {
				modal.toast({
					message: 'onclick',
					duration: 1
				})
			},
			onlongpress() {
				modal.toast({
					message: 'onlongpress'
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height:1250px;
		flex-direction: column;
		justify-content: center;
	}
	.change {
		margin-left: 275px;
		border-width: 2px;
		border-style: solid;
		border-color: red;
		background-color: #ccc;
		width: 200px;
		height: 200px;
	}
</style>