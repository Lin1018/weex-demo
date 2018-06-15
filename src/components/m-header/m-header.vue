<template>
	<div class="root">
		<div class="header">
			<text class="text">header</text>
		</div>
		<div>
			<input class="input" type="text" placeholder="输入文字" autofocus/>
		</div>
	</div>
</template>

<script>
	export default {}
</script>

<style scoped>
	.header {
		background-color: #FF0000;
		height: 70px;
		line-height: 70px;
	}
	.text {
		color: #ffffff;
		font-size: 46px;
		text-align: center;
		lines: 1;
		text-decoration: underline;
		font-style: italic;
		font-weight: bold;
	}
	.input {
		width: 750px;
		height: 80px;
		font-size: 32px;
		border-bottom-width: 1px;
	}
</style>