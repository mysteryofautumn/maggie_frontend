<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png" width="100%" height="40%">-->
    <router-view></router-view>
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <ValueForm/>-->
<!--&lt;!&ndash;    <RevenueRecord/>&ndash;&gt;-->
<!--    <Login/>-->
<!--    <ProductForm/>-->
<!--    <ProductView/>-->
<!--    <InstockOrder/>-->
<!--    <InstockView/>-->
<!--    <OutstockOrder/>-->
<!--    <RevenueRecord/>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ValueForm from "./components/record/ValueForm";
// import ProductForm from './components/product/ProductForm'
// import ProductView from './components/product/ProductView'
// import Login from "./components/login/Login";
// import OutstockOrder from "./components/order/OutstockOrder"
// import InstockOrder from "./components/order/InstockOrder";
// import InstockView from "./components/record/InstockView";
// import RevenueRecord from "./components/record/RevenueRecord";
// import Navigator from "./views/Navigator";

export default {
  name: 'App',
  components: {
    // Navigator,
    // InstockView,
    // Login,
    // ValueForm,
    // // HelloWorld
    // ProductView,
    // ProductForm,
    // OutstockOrder,
    // InstockOrder,
    // RevenueRecord
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
