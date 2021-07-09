<template>
  <el-table
      :data="tableData"
      style="width: 100%" empty-text="no data">
    <el-table-column
        prop="id"
        label="Record ID."
        width="180">
    </el-table-column>
    <el-table-column
        prop="expected_revenue"
        label="Expected revenue"
        width="180">
    </el-table-column>
    <el-table-column
        prop="actual_revenue"
        label="Actual revenue"
        width="180">
    </el-table-column>
    <el-table-column
        prop="remained_value"
        label="Value of the product left"
        width="200">
    </el-table-column>
    <el-table-column
        prop="difference"
        label="Difference"
        width="180">
    </el-table-column>
  </el-table>
</template>

<script>
import api from "../../api"
export default {
  data(){
    return{
      tableData:[],
      form:{
        id:'',
        expected_revenue:'',
        actual_revenue:'',
        remained_value:'',
        difference:''

      }

      }
  },
  mounted() {
    this.getRevenue()
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    getRevenue(){
      api.getRevenue().then(response => {
        if (response.status === 200) {
          console.log(response.data)
          this.tableData = response.data.records
        }
      }).catch(error => {
        console.log('action failed:' + error)
      })
    },
    }
  }
</script>

<style scoped>

</style>