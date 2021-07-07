<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="Product Name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Purchasing Price">
      <el-input v-model="form.purchasing_price"></el-input>
    </el-form-item>
    <el-form-item label="Selling Price">
      <el-input v-model="form.selling_price"></el-input>
    </el-form-item>
    <el-form-item label="Stock amount">
      <el-input v-model="form.stock_amount"></el-input>
    </el-form-item>
    <el-form-item label="Shelf amount">
      <el-input v-model="form.shelf_amount"></el-input>
    </el-form-item>
    <el-form-item label="Restock Level">
      <el-input v-model="form.restock"></el-input>
    </el-form-item>
    <el-form-item label="Additional Comment">
      <el-input type="textarea" v-model="form.comment"></el-input>
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
        shelf_amount:'',
        restock: '',
        comment: '',
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
          console.log('success')
          this.$message.success('action complete')
        }
      }).catch(error => {
        this.$message.error('action failed:' + error )
      })
    }
  }
}
</script>


<style scoped>

</style>