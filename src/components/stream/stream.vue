<template>
	<div class="stream">
		<list>
			<refresh class="refresh" @pullingdown="onpullingdown" :display="showRefresh">
				<text class="text">Refresh...</text>
			</refresh>

			<cell v-for="item in lists">
				<div class="panel">
					<text class="text">{{item.newsTitle}}</text>
					<text class="content">{{item.newsContent}}</text>
				</div>
			</cell>

			<loading class="loading" @loading="onloading" :display="showLoading">
				<text class="text">Loading...</text>
			</loading>
		</list>
	</div>
</template>

<script>
	const modal = weex.requireModule('modal')
	const stream = weex.requireModule('stream')

	export default {
		data() {
			return {
				lists: [],
				showLoading: 'hide',
				showRefresh: 'hide'
			}
		},
		created() {
			var url = 'http://www.jspang.com/DemoApi/newsApi.php'
			this.getNews(url, res => {
				modal.toast({
					message: '数据请求成功',
					duration: 1
				})
				var length = this.lists.length
				for (var i=length; i<length + 2; i++) {
					this.lists.push(res.data[i])
				}
			})
		},
		methods: {
			getNews(url, callback) {
				return stream.fetch({
					method: 'GET',
					type: 'json',
					url: url
				}, callback)
			},
			onloading() {
				var url = 'http://www.jspang.com/DemoApi/newsApi.php'
				this.getNews(url, res => {
					modal.toast({
						message: '下拉请求数据1',
						duration: 1
					})
					this.showLoading = 'show'
					setTimeout(() => {
						this.showLoading = 'hide'
						var length = this.lists.length
						for(var i=length; i<length + 2; i++) {
							if (i < res.data.length) {
								this.lists.push(res.data[i])
							}
						}
					}, 2000)
				})
			},
			onpullingdown() {
				var url = 'http://www.jspang.com/DemoApi/newsApi.php'
				this.getNews(url, res => {
					modal.toast({
						message: '上拉刷新',
						duration: 1
					})
					this.showRefresh = 'show'
					setTimeout(() => {
						this.lists = []
						for(var i=0; i<2; i++) {
							this.lists.push(res.data[i])
						}
						this.showRefresh = 'hide'
					}, 2000)
				})
			}
		}
	}
</script>

<style scoped>
	.panel {
		width: 600px;
		height: 250px;
		background-color: #ccc;
		margin-left: 75px;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.text {
		text-align: center;
		font-size: 36px;
	}
	.content {
		lines: 3;
		font-size: 28px;
		color: #fff;		
	}
	.loading .text, .refresh .text {
		color: red;
	}
</style>