<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="margin:10px 10px 10px 10px;font-size:large" router>
    <el-submenu index="1" width="200px">
      <template slot="title">Items</template>
      <el-menu-item index="/productView">Main sheet</el-menu-item>
      <el-menu-item index="/productForm">Add product</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">Make orders</template>
      <el-menu-item index="/instockOrder">Make instock order</el-menu-item>
      <el-menu-item index="/outstockOrder">Make outstock order</el-menu-item>
      <el-menu-item index="/valueForm">Update Revenue status</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">Check record</template>
      <el-menu-item index="/revenueRecord">Revenue Record</el-menu-item>
      <el-menu-item index="/instockView">Instock Record</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">user status</template>
      <el-menu-item @click="logout">logout</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import Cookies from 'js-cookie'
import router from '../router'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      Cookies.set('login', 'false')
      router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>