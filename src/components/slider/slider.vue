<template>
	<div class="wrapper">
		<slider class="slider" interval="2000" auto-play="true">
			<div class="frame" v-for="img in imageList">
				<image class="img" resize="cover" :src="img.src"></image>
			</div>
			<indicator class="indicator"></indicator>
		</slider>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	const stream = weex.requireModule('stream')

	export default {
		data() {
			return {
        imageList: [
          { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
          { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
        ]
			}
		}
	}
</script>

<style scopded>
	.wrapper {
		height: 950px;
		border-style:solid;
		border-width: 2px;
	}
	.img {
		width: 700px;
		height: 500px;
	}
	.slider {
		margin-top: 25px;
		margin-left: 25px;
		width: 700px;
		height: 500px;
		border-width: 2px;
		border-style: solid;
		border-color: #418883;
	}
	.frame {
		width: 700px;
		height: 500px;
		position: relative;
	}
	.indicator {
		position: absolute;
		width: 700px;
		height: 500px;
		item-color: #fff;
		item-selected-color: red;
		item-size: 25px;
		top: 200px;
		left: 0px;
	}
</style>