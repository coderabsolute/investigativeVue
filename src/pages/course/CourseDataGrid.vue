<template>
  <table class="table is-bordered">
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Course Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows">
        <td style="width:10%">
          <button-edit @click.native="onEditRow(row.courseId)"></button-edit>
          <button-delete @click.native="onDelete(row.courseId)"></button-delete>
        </td>
        <th style="width:3%">{{index + 1}})</th>
        <td style="width:85%">{{row.courseName}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ApiHelper from '@/Api/ApiHelper'

export default {
  name: 'CourseDataGrid',
  props: ['rows'],

  methods: {
    onEditRow: function (id) {
      this.$router.push({ path: '/courseEdit/' + id })
    },

    onDelete: function (id) {
      if (window.confirm('Are you sure you want to delete?')) {
        const url = 'courses/' + id

        ApiHelper.delete(url)
        .then(response => {
          // this.notifyOnDelete()

          this.$emit('input', Date())
        })
        .catch(error => {
          if (error.response.status === 400) {
            const errorMessage = error.response.data.errors.join('')

            this.notifyOnError(errorMessage)
          }
        })
      }
    }
  }
}
</script>
