<template>
  <div id="app">
    <Header></Header>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <Sidebar></Sidebar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './css/app.scss'

export default {
  name: 'App',
  components:{
    Header,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>


</style>
