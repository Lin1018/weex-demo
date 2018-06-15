<template>
  <div class="wrapper">
    <div class="group">
      <text>Time: {{value}}</text>
    </div>
    <div class="group">
      <text class="btn" @click="pickTime">Pick time</text>
    </div>
  </div>
</template>

<script>
  const picker = weex.requireModule('picker')

  export default {
    data () {
      return {
        value: ''
      }
    },
    methods: {
      pickTime() {
        picker.pickTime({
          value: this.value
        }, (e) => {
          if (e.result == 'success') {
            this.value = e.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 950px;
    align-items: center;
  }
  .group {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .btn {
    color: #FF0000;
    text-align: center;
    line-height: 100px;
    border-width: 1px;
    border-style: solid;
    border-color: #ff6600;
    border-radius: 15px;
    width: 170px;
    height:100px;
  }
</style>