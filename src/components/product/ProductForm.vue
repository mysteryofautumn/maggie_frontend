<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="Product Name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Purchasing Price">
      <el-input v-model="form.inprice"></el-input>
    </el-form-item>
    <el-form-item label="Selling Price">
      <el-input v-model="form.outprice"></el-input>
    </el-form-item>
    <el-form-item label="Amount">
      <el-input v-model="form.amount"></el-input>
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
export default {
  data() {
    return {
      form: {
        name: '',
        inprice: '',
        outprice: '',
        amount: '',
        restock: '',
        comment: '',

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>


<style scoped>

</style>