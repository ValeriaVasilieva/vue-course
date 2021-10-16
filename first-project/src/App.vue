<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Calculator />
    <TestComponent message="куку" />
  </div>
</template>

<script>
import Calculator from "./components/Calculator.vue";
import TestComponent from "./components/TestComponent.vue";

export default {
  name: "App",
  components: {
    Calculator,
    TestComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
