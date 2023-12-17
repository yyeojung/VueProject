<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/about">About</router-link> | -->
    <router-link to="/databinding">data</router-link> |
    <router-link to="/dataHtml">dataHtml</router-link> |
    <router-link to="/DataBindingSample">DataBindingSample</router-link> |
    <router-link to="/DataSample02">DataSample02</router-link> |
    <router-link to="/dataAttribute">dataAttribute</router-link> |
    <router-link to="/Event">Event</router-link> |
    <router-link to="/Components">Components</router-link> |
    <router-link to="/Slot">Slot</router-link> |
    <router-link to="/Provide">Provide</router-link> |
    <router-link to="/Calculator">Calculator</router-link> |
    <router-link to="/Vuex">Vuex</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
