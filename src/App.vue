<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="link">
      <router-link to="/main" class="mainPage">首页</router-link>
      <router-link to="/person" class="personCenter">个人中心</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active {
  background: #11388d9d;
}
</style>
