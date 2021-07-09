<template>
  <div>
    <img alt="Snack logo" height="40%" src="../../assets/logo.png" width="100%" >
    <el-form ref="form" :model="form" label-width="250px" style="margin: 40px 40px 40px 40px;width: 800px" :rules='rules'>
    <el-form-item label="Please input the code:" prop="code" style="margin-left: 300px">
      <el-input v-model="form.code" style="width:100%" show-password></el-input>
    </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSubmit">Submit</el-button>
  </div>
</template>

<script>
import api from '../../api'
import Cookies from 'js-cookie'
import router from '../../router'

export default {

  data() {
    return {
      form: {
        code: '',
      },
      rules:{
        code:[
          {required:true, message:"required input", trigger:'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      api.authentication({
        code: this.form.code
      }).then(response => {
        if (response.status === 200) {
          if (response.data.code === 1) {
            this.$message.success('action complete')
            Cookies.set('login','true')
            router.push({path:'productView'})
          } else {
            this.$message.error('invalid password. Please try again')
          }
        }
      }).catch(error => {
        this.$message.error(error)
      })


    }
  }
}
</script>