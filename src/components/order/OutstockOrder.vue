<template>
  <div>
    <el-table :data="tableData" border  width="100%" empty-text="no data">
      <el-table-column label="Item Id." width="400">
        <template slot-scope="scope">
          <el-input v-model="scope.row.id"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="Amount" width="400">
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
    <el-button type="success" @click="onSubmit" round>Submit</el-button>

  </div>
</template>

<script>
import api from "../../api";

export default {
  data() {
    return {
      tableData: []

    }
  },
  methods: {
    addListRow() {
      this.tableData.push({
        amount: '',
        id: ''
      });
    },
    renderHeader() {
      return (
          <el-button icon="el-icon-plus"
                     onClick={() => this.addListRow()}
                     circle></el-button>
      )
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    onSubmit() {
      api.getNewestOutorderId().then(response => {
        if (response.status === 200) {
          this.order_id = response.data.order_id
          console.log('order id' + this.order_id)
        }
        api.addOutstock({
          items:this.tableData,
          order_id: this.order_id
        }).then(response => {
          if (response.status === 200) {
            this.$message.success('action completed')

          }
        }).catch(error => {
          this.$message.error(error)
        })
      }).catch(error=>{
        console.log(error)
      })


    }
  }

}
</script>
<style scoped>

</style>