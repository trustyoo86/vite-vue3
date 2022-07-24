<template>
  <table>
    <tr>
      <th v-for="(head, head_index) in header" :key="'head-' + head_index">{{head}}</th>
    </tr>
    <tr v-for="(row, row_index) in rows" :key="'row-' + row_index">
      <td v-for="(data, data_index) in row" :key="'data-' + data_index" :colspan="data.colspan || 1">{{data.data}}</td>
    </tr>
  </table>
</template>

<script lang="ts">
  // export default {
  //   setup() {
  //     return {
  //       table: {
  //         header: ['1번 제목', '2번 제목'],
  //         rows: [[{ data: '1번 내용'}, { data: '2번 내용' }], [{ data: '1번 내용2', colspan: 2 }]]
  //       }
  //     };
  //   }
  // };
  export default {
    props: ['header', 'rows']
  }
</script>

<style scoped>
  table,
  th,
  td {
    border: 1px solid #bdbdbd;
    border-collapse: collapse;
    padding: 5px;
  }
</style>
