<template>
  <div id="app">
    <load-core/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
  body{
    background-color: #F8F8F8!important;
  }
#app {
  font-family: hiragino sans gb, microsoft yahei, simsun;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
