<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <ValueForm/>-->
<!--    <RevenueRecord/>-->
    <ProductView/>
    <ProductForm/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ValueForm from "./components/record/ValueForm";
// import RevenueRecord from "./components/record/RevenueRecord";

import ProductView from "./components/product/ProductView";
import ProductForm from "./components/product/ProductForm";
export default {
  name: 'App',
  components: {
    ProductView,
    // RevenueRecord,
    // ValueForm,
    ProductForm
    // HelloWorld
  }
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
</style>
