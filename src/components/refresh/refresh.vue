<template>
	<div class="refresh">
    <list>
      <refresh @refresh="onrefresh" @pullingdown="onpullingdown" class="refresh" :display="showRefresh">
        <text class="refresh-text">Refresh...</text>
      </refresh>

      <cell class="list" v-for="item in lists">
        <text class="text">{{item}}</text>
      </cell>

      <loading class="loading" :display="showLoading" @loading="onloading">
        <text class="loading-text">Loading...</text>
      </loading>
    </list>
	</div>
</template>

<script>
	var modal = weex.requireModule('modal')
	
	export default {
	  data () {
	    return {
	      lists: [1, 2, 3, 4, 5],
	      showLoading: 'hide',
	      showRefresh: 'hide'
	    } 
	  },
	  methods: {
	    onloading(e) {
	      modal.toast({
	        message: 'refresh',
	        duration: 1
	      })

	      this.showLoading = 'show'
	      setTimeout(() => {
	        var length = this.lists.length
	        for (var i=length; i<length + 5; i++) {
	          this.lists.push(i+1)
	        }
	        this.showLoading = 'hide'
	      }, 1500)
	    }, 
	    onrefresh(e) {
	      modal.toast({
	        message: 'refresh',
	        duration: 1
	      })
	      this.showRefresh = 'show'
	      setTimeout(() => {
	        this.lists = [1, 2, 3, 4, 5]
	        this.showRefresh = 'hide'
	      }, 2000)
	    },
	    onpullingdown(e) {
	      modal.toast({
	        message: 'pullingdown',
	        duration: 1
	      })
	      this.showRefresh = 'show'
	      setTimeout(() => {
	        this.lists = [1, 2, 3, 4, 5]
	        this.showRefresh = 'hide'
	      }, 2000)
	    }
	  }
	}
</script>

<style scoped>
	.refresh {
		height: 950px;
		overflow: hidden;
	}
  .loading-text, .refresh-text {
    font-size: 42px;
    color: #FF0000;
  }
  .loading, .refresh {
    text-align: center;
  }
  .text {
    width: 600px;
    height: 250px;
    border-width: 2px;
    border-style: solid;
    text-align: center;
    line-height: 250px;
    margin-left: 75px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>
