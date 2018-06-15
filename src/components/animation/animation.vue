<template>
	<div class="wrapper">
		<div ref="test" @click="move" class="box"></div>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	const animation = weex.requireModule('animation')
	export default {
		methods: {
			move() {
				var testEl = this.$refs.test
				console.log(testEl)
				animation.transition(testEl, {
					styles: {
						backgroundColor: 'red',
						transform: 'translate(250px, 100px)',
						// 移动中心点
						transformOrigin: 'center center'
					},
					duration: 800,
					timingFunction: 'ease',
					delay: 0
				}, () => {
					modal.toast({
						message: 'animation finished'
					})
				})
			}
		}
	}
</script>

<style scoped>
	.wrapper {
		height: 1250px;
		width: 750px;
		border-width: 2px;
		border-style: solid;
		border-color: red;
	}
	.box {
		width: 200px;
		height: 200px;
		background-color: #ddd;
	}
</style>