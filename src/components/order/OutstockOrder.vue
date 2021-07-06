<template>
  <div>
    <el-button round>+ add another row</el-button>
    <el-table
        :data="tableData"
        border
        show-summary
        style="width: 100%">
      <el-table-column
          label="Item No."
          prop="no"
          width="180">
      </el-table-column>
      <el-table-column
          label="Amount"
          prop="amount"
          width="180">
      </el-table-column>
    </el-table>
    <el-button round type="success">submit</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        no: '1',
        amount: '5',
      }]

    }
  },
  methods: {
    getSummaries(param) {
      const {columns, data} = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += ' 元';
        } else {
          sums[index] = ' 个';
        }
      });

      return sums;
    }
  }

}
</script>
<style scoped>

</style>