<template>
  <div style="margin:0 auto;text-align:center">
    <el-form ref="form" :model="form" :rules='rules' label-width="150px">
      <el-form-item label="Actual Revenue" prop="actual_revenue">
        <el-input v-model="form.actual_revenue" type="number"></el-input>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border width="100%">
      <el-table-column label="Item No." width="400">
        <template slot-scope="scope">
          <el-input v-model="scope.row.id"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="Amount left" width="400">
        <template slot-scope="scope">
          <el-input v-model="scope.row.amount" type="number"></el-input>
        </template>
      </el-table-column>
      <el-table-column :render-header="renderHeader" label="">
        <template slot-scope="scope">
          <el-button circle icon="el-icon-delete" type="danger"
                     @click="handleDelete(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button round type="success" @click="onSubmit">Submit</el-button>
  </div>
</template>

<script>
import api from '../../api'

export default {
  name: "ValueRecord",
  data() {
    return {
      tableData: [{}],
      record_id: '',
      form: {
        actual_revenue: ''
      },
      rules: {
        actual_revenue: [
          {required: true, message: 'required input', trigger: 'blur'}
        ]
      }


    }
  },
  methods: {
    addListRow() {
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
    onSubmit() {
      api.getNewestRevenueId().then(response => {
        if (response.status === 200) {
          this.record_id = response.data.record_id
          console.log('record id' + this.record_id)
        }
        api.addRevenue({
          actual_revenue: this.form.actual_revenue,
          items: this.tableData,
          record_id: this.record_id
        }).then(response => {
          if (response.status === 200) {
            this.$message.success('action completed')

          }
        }).catch(error => {
          this.$message.error(error)
        })
      }).catch(error => {
        console.log(error)
      })

    }
  }
}
</script>

<style scoped>

</style>