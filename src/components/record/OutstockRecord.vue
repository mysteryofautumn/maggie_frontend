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
        prop="time"
        label="Time"
        width="180">
    </el-table-column>
    <el-table-column
        prop="cost"
        label="Cost">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "OutstockRecord"
}
</script>

<style scoped>

</style>