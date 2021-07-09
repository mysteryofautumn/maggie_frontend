<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="id"
        label="Order Id"
        width="180">
    </el-table-column>
<!--    <el-table-column-->
<!--        prop="time"-->
<!--        label="Time"-->
<!--        width="180">-->
<!--    </el-table-column>-->
    <el-table-column
        prop="cost"
        label="Cost">
    </el-table-column>
  </el-table>
</template>

<script>
import api from '../../api'
export default {
  name: "InstockView",
  data() {
    return {
      tableData:[]
    }
  },
  mounted() {
    this.getInorders()
  },
  methods:{
    getInorders() {
      api.getInstock().then(response=>{
        if (response.status === 200) {
          this.tableData = response.data.orders
        }
      })

    }

  }
}
</script>

<style scoped>

</style>