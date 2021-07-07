<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="no"
        label="Record No."
        width="180">
    </el-table-column>
    <el-table-column
        prop="expected"
        label="Expected revenue"
        width="180">
    </el-table-column>
    <el-table-column
        prop="received"
        label="Received revenue"
        width="180">
    </el-table-column>
    <el-table-column
        prop="cost"
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
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [{
        no:'1',
        cost: '￥10',
        time: '6/10',
      }]
    }
  }
}
</script>

<style scoped>

</style>