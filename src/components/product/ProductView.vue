<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        prop="no"
        label="Item No."
        width="180">
    </el-table-column>
    <el-table-column
        prop="name"
        label="Name"
        width="180">
    </el-table-column>
    <el-table-column
        prop="inprice"
        label="Purchasing Price">
    </el-table-column>
    <el-table-column
        prop="outprice"
        label="Selling Price">
    </el-table-column>
    <el-table-column
        prop="amount"
        label="Amount">
    </el-table-column>
    <el-table-column
        prop="comment"
        label="Additional Comment">
    </el-table-column>
    <el-table-column
        fixed="right"
        label=" "
        width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">Remove</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </template>
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
          name: '薯片',
          inprice: '￥10',
          outprice: '上海',
          amount: '普陀区',
          comment: '上海市普陀区金沙江路 1518 弄',
        }]
      }
    }
}
</script>

<style scoped>

</style>