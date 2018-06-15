<template>
	<div class="root">
		<div class="wrapper">
			<text class="btn" @click="home">Home</text>
			<text class="btn" @click="web">Web</text>
			<text class="btn" @click="picker">Picker</text>
			<text class="btn" @click="refresh">Refresh</text>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			home() {
				this.$router.push('/home')
			},
			web() {
				this.$router.push('/web')
			},
			picker() {
				this.$router.push('/picker')
			},
			refresh() {
				this.$router.push('/refresh')
			}
		}
	}
</script>

<style scoped>
	.root {
		height: 150px;
		border-width: 2px;
		border-style: solid;
		border-color: #FF0000;
	}
	.wrapper {
		flex-direction: row;
	}
	.btn {
		font-size: 40px;
		border-width: 2px;
		border-style: solid;
		border-color: #008000;
		text-align: center;
		width: 187.5px;
		line-height: 150px;
	}
</style>