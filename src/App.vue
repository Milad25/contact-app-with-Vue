<template>
  <div id="app">
    <h1 id="appTitle">Contact App</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  background-color: #f6f6f6;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

input, button {
  outline: 0;
  border: 0;
}

#appTitle {
  border-bottom: 1px solid #ccc;
  padding: 1rem;
}
</style>
