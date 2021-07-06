<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="Amount Received">
        <el-input v-model="form.received"></el-input>
      </el-form-item>

      <table border="1">
        <tr>
          <th>Item No.</th>
          <th>Amount left</th>
          <th><el-button circle>+</el-button></th>
        </tr>
        <tr>
          <td>
            <el-input v-model="form.no"></el-input>
          </td>
          <td>
            <el-input v-model="form.amount"></el-input>
          </td>
          <td>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </td>
        </tr>
      </table>
      <el-form-item><el-button type="success" round>Submit</el-button> </el-form-item>
    </el-form>


  </div>
</template>

<script>
export default {
  name: "ValueRecord",
  data() {
    return {
      form: {
        received: '',
        no: '',
        amount:''
      }
    }
  }
}
</script>

<style scoped>

</style>