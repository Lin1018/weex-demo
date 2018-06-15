<template>
  <div class="wrapper">
    <m-header></m-header>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from './components/m-header/m-header.vue'
import MFooter from './components/m-footer/m-footer.vue'
import Webview from '@/components/webview/webview.vue'

export default {
  components: {
    MHeader,
    MFooter,
    Webview
  }
}
</script>

<style scoped>

</style>
