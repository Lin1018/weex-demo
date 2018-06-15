<template>
  <div class="wrapper">
  	<scroller class="scroller" @loadmore="loadmore">
  		<div class="item" v-for="(item, index) in rows" :ref="'item'+index">
  			<text class="text" :ref="'text'+index">{{item}}</text>
  		</div>
  	</scroller>

  	<div class="group">
  		<text class="group-text" @click="goto10">goto 10</text>
  		<text class="group-text" @click="goto20">goto 20</text>
  	</div>
  </div>
</template>

<script>
  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')

  export default {
    data () {
      return {
        rows: []
      }
    },
    created () {
    	for (var i=0; i<30; i++) {
    		this.rows.push(i)
    	}
    },
    methods: {
    	loadmore() {
    		modal.toast({
    			message: 'end',
    			duration: 1
    		})
    	},
    	goto10() {
    		var el = this.$refs.item10[0]
    		dom.scrollToElement(el)
    	},
    	goto20() {
    		var el = this.$refs.text20[0]
    		dom.scrollToElement(el)
    	}
    }
  }
</script>

<style scoped>
	.wrapper {
		width: 750px;
		height: 1250px;
		border-width: 2px;
		border-style: solid;
		border-color: red;
	}
	.scroller {
		margin-left: 25px;
		width: 700px;
		height: 1000px;
		border-width: 2px;
		border-style: solid;
		border-color: green;
	}
	.item {
		justify-content: center;
		align-items: center;
		height: 100px;
		border-bottom-width: 2px;
		border-bottom-style: solid;
		border-bottom-color: #DDDDDD;
	}
	.text {
		font-size: 50px;
	}
	.group {
		margin-top: 20px;
		flex-direction: row;
		justify-content: center;
	}
	.group-text {
		font-size: 50px;
		margin-left: 50px;
		line-height: 100px;
		text-align: center;
		width: 250px;
		height: 120px;
		border-width: 2px;
		border-style: solid;
		border-color: green;
	}
</style>