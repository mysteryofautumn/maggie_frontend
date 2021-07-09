<template>
  <el-form ref="form" :model="form" :rules='rules' label-width="150px">
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
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import api from '../../api'

export default {
  data() {
    return {
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
          {pattern:/^([0-9]|[1-4][0-9]|50)$/, message: "invalid input: out of range, should be between 0 and 50", trigger: 'blur'},
        ],
        selling_price: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {pattern:/^([0-9]|[1-4][0-9]|50)$/, message: "invalid input: out of range, should be between 0 and 50", trigger: 'blur'},
        ],
        stock_amount: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {pattern:/^([0-9]|[1-4][0-9]|50)$/, message: "invalid input: out of range, should be between 0 and 50", trigger: 'blur'},
        ],
        shelf_amount: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {pattern:/^([0-9]|[1-4][0-9]|50)$/, message: "invalid input: out of range, should be between 0 and 50", trigger: 'blur'},
        ],
        restock: [
          {required: true, message: 'invalid input: please input a number', trigger: 'blur'},
          {pattern:/^([0-9]|[1-4][0-9]|50)$/, message: "invalid input: out of range, should be between 0 and 50", trigger: 'blur'},
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      api.addItem({
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
    }
  }
}
</script>


<style scoped>

</style>