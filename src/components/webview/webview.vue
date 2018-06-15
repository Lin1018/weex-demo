<template>
	<div class="wrapper">
		<div class="group">
			<input type="url" class="input" v-model="value" ref="input">
		</div>
		<div class="group">
			<text class="button" @click="loadUrl">LoadUrl</text>
			<text class="button" @click="reload">Reload</text>
		</div>
		<web ref="webview" :src="url" class="webview" @pagestart="start" @pagefinish="finish" @error="error"></web>
	</div>
</template>

<script>
	const webview = weex.requireModule('webview')
	const modal = weex.requireModule("modal")
	export default {
		data() {
			return {
				url: 'https://m.alibaba.com',
				value: 'https://www.baidu.com/'
			}
		},
		methods: {
			loadUrl(event) {
				this.url = this.value
				modal.toast({
					message: 'load url:' + this.url
				})
				setTimeout(() => {
					modal.toast({
						message: 'will go back'
					})
					webview.goBack(this.$refs.webview)
				}, 2000)
			},
			reload(event) {
				modal.toast({
					message: 'reload'
				})
				webview.reload(this.$refs.webview)
			},
			start(event) {
				modal.toast({
					message: 'pagesstart'
				})
			},
			finish(event) {
				modal.toast({
					message: 'pagesfinish'
				})
			},
			error(event) {
				modal.toast({
					message: 'error'
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 1250px;
		justify-content: center;
	}
	.input {
		width: 750px;
		font-size: 60px;
		border-width: 2px;
		border-style: solid;
		text-indent: 20px;
	}
	.button {
		text-align: center;
		margin-left: 275px;
		font-size: 40px;
		line-height: 100px;
		width: 200px;
		height: 100px;
		border-width: 2px;
		border-style: solid;
	}
	.webview {
		border-width: 2px;
		border-style: solid;
		border-color: red;
		margin-top: 100px;
		height: 700px;
	}
</style>