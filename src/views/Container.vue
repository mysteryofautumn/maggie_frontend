<template>
  <div>
    <img alt="Snack logo" src="../assets/logo.png" width="100%" height="40%">
    <Navigator/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from "./Navigator";
export default {
  name: "Container",
  components: {
    Navigator,
  }
}
</script>

<style scoped>

</style>