<template>
  <div>
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
    <el-dialog title = "edit" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="form" :rules='rules' label-width="150px">
        <el-form-item label="Product Id" prop="id">
          <el-input v-model="form.id" disabled></el-input>
        </el-form-item>
      <el-form-item label="Product Name" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Purchasing Price" prop="purchasing_price">
        <el-input v-model="form.purchasing_price" type="number"></el-input>
      </el-form-item>
      <el-form-item label="Selling Price" prop="selling_price">
        <el-input v-model="form.selling_price" type="number"></el-input>
      </el-form-item>
      <el-form-item label="Stock amount" prop = "stock_amount">
        <el-input v-model="form.stock_amount" type="number"></el-input>
      </el-form-item>
      <el-form-item label="Shelf amount" prop = "shelf_amount">
        <el-input v-model="form.shelf_amount" type="number"></el-input>
      </el-form-item>
      <el-form-item label="Restock Level" prop = "restock">
        <el-input v-model="form.restock" type="number"></el-input>
      </el-form-item>
      <el-form-item label="Additional Comment">
        <el-input v-model="form.comment" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogSubmit">Submit</el-button>
        <el-button @click = "dialogFormVisible = false" >Cancel</el-button>
      </el-form-item>
    </el-form>
    </el-dialog>
  </div>
</template>

<script>
import api from "../../api";

export default {
  name:'ProductView',
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        purchasing_price: '',
        selling_price: '',
        stock_amount: '',
        shelf_amount: '',
        restock: '',
        comment: '',
      },
      rules: {
        name: [
          {required: true, message: 'required input', trigger: 'blur'}
        ],
        purchasing_price: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {
            pattern: /^([0-9]|[1-4][0-9]|50)$/,
            message: "invalid input: out of range, should be between 0 and 50",
            trigger: 'blur'
          },
        ],
        selling_price: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {
            pattern: /^([0-9]|[1-4][0-9]|50)$/,
            message: "invalid input: out of range, should be between 0 and 50",
            trigger: 'blur'
          },
        ],
        stock_amount: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {
            pattern: /^([0-9]|[1-4][0-9]|50)$/,
            message: "invalid input: out of range, should be between 0 and 50",
            trigger: 'blur'
          },
        ],
        shelf_amount: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {
            pattern: /^([0-9]|[1-4][0-9]|50)$/,
            message: "invalid input: out of range, should be between 0 and 50",
            trigger: 'blur'
          },
        ],
        restock: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {
            pattern: /^([0-9]|[1-4][0-9]|50)$/,
            message: "invalid input: out of range, should be between 0 and 50",
            trigger: 'blur'
          }
        ]
      }
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
      this.getItems()
    },
    handleEdit(id) {
      console.log('edit!');
      this.form.id = id
      this.dialogFormVisible = true
      api.getItemById({
        item_id: id,
      }).then(response => {
        if (response.status === 200) {
          console.log('success')
          this.form.name = response.data.name
          this.form.purchasing_price = response.data.purchasing_price
          this.form.selling_price = response.data.selling_price
          this.form.stock_amount = response.data.stock_amount
          this.form.shelf_amount = response.data.shelf_amount
          this.form.comment = response.data.comment
          this.form.restock = response.data.restock
        }
      }).catch(error => {
        console.log(error)
      })


    },
    dialogSubmit() {
      api.editItem({
        item_id: this.form.id,
        name: this.form.name,
        purchasing_price: this.form.purchasing_price,
        selling_price: this.form.selling_price,
        stock_amount: this.form.stock_amount,
        shelf_amount: this.form.shelf_amount,
        restock: this.form.restock,
        comment: this.form.comment
      }).then(response => {
        if (response.status === 200) {
          if (response.data.code === 1) {
            console.log('success')
            this.$message.success('action complete')
          } else {
            this.$message.error('Invalid input. Input cannot be blank')
          }
        }
      }).catch(error => {
        this.$message.error('action failed:' + error)
      })
      this.dialogFormVisible = false
      this.getItems()
    }


  }

}
</script>

<style scoped>

</style>