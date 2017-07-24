<template>
  <div id="app">
    <m-header></m-header>
    <tab-menu></tab-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from '@/pages/m-header/m-header'
  import tabMenu from '@/pages/tab-menu/tab-menu'
  
  export default {
    name: 'app',
    components: {
      MHeader,
      tabMenu
    }
  }
</script>

<style src="./assets/scss/base.scss" lang="scss"></style>
