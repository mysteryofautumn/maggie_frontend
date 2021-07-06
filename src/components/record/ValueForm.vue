<template>
  <div style="margin:0 auto;text-align:center">
    <el-table :data="tableData" border  width="100%">
      <el-table-column label="Item No." width="400">
        <template slot-scope="scope">
          <el-input v-model="scope.row.no"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="Amount left" width="400">
        <template slot-scope="scope">
          <el-input v-model="scope.row.amount" type="number"></el-input>
        </template>
      </el-table-column>
      <el-table-column label=""  :render-header="renderHeader">
        <template slot-scope="scope">
          <el-button type="danger" @click="handleDelete(scope.$index)" icon="el-icon-delete"
                     circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="success" round>Submit</el-button>
  </div>
</template>

<script>
export default {
  name: "ValueRecord",
  data() {
    return {
      tableData: [{}]
    }
  },
  methods: {
    AddListRow() {
      this.tableData.push({
        amount: '',
        no: ''
      });
    },
    renderHeader() {
      return (
          <el-button icon="el-icon-plus"
                     onClick={() => this.AddListRow()}
                     circle></el-button>
      )
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },


  }
}
</script>

<style scoped>

</style>