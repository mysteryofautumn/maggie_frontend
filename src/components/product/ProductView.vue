<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column
        label="No."
        prop="number"
        width="180">
    </el-table-column>
    <el-table-column
        label="Item ID."
        prop="id"
        width="180">
    </el-table-column>
    <el-table-column
        label="Name"
        prop="name"
        width="180">
    </el-table-column>
    <el-table-column
        label="Purchasing Price"
        prop="purchasing_price">
    </el-table-column>
    <el-table-column
        label="Selling Price"
        prop="selling_price">
    </el-table-column>
    <el-table-column
        label="Stock Amount"
        prop="stock_amount">
    </el-table-column>
    <el-table-column
        label="Shelf Amount"
        prop="shelf_amount">
    </el-table-column>
    <el-table-column
        label="Additional Comment"
        prop="comment">
    </el-table-column>
    <el-table-column
        label="Restock Level"
        prop="restock">
    </el-table-column>
    <el-table-column
        fixed="right"
        label=" "
        width="100">
      <template slot-scope="scope">
        <el-button size="small" type="text" @click="handleDelete(scope.row['id'])">Remove</el-button>
        <el-button size="small" type="text" @click="handleEdit(scope.row['id'])">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import api from "../../api";

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    getItems() {
      api.getItems().then(response => {
        if (response.status === 200) {
          console.log(response.data)
          this.tableData = response.data.items
          let len = this.tableData.length
          for (let i = 0; i < len; i++) {
            this.tableData[i].number = i + 1
          }
        }
      }).catch(error => {
        console.log('action failed:' + error)
      })
    },
    handleDelete(id) {
      console.log('deleted!');
      api.deleteItem({
        item_id: id,
      }).then(response => {
        if (response.status === 200) {
          console.log('success')
          this.$message.success('action complete')
        }
      }).catch(error => {
        this.$message.error('action failed:' + error)
      })
    }
  }
}
</script>

<style scoped>

</style>