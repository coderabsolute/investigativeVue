<template>
  <div>
    <form>
      <div class="columns">
        <div class="column is-8">
          <page-title :title="pageTitle"/>
        </div>

        <div class="column has-text-right">
          <button-save :is-loading="isLoading" @click.native="onSave(false)"></button-save>
          <button-cancel @click.native="pushToList"></button-cancel>
        </div>
      </div>

      <div class="columns">
        <div class="column is-6">
          <input-text autofocus v-model="courseName" :initialValue="courseName" title="Course Name" placeholder="The name of a course"> </input-text>
        </div>
      </div>

    </form>
  </div>
</template>

<script>
import ApiHelper from '@/Api/ApiHelper'

export default {
  name: 'CourseAdd',

  data () {
    return {
      isLoading: false,
      pageTitle: null,
      courseName: null
    }
  },

  created () {
    this.pageTitle = this.$route.meta.pageTitle
  },

  methods: {
    onReset: function () {
      this.isLoading = false
      this.courseName = null
    },

    pushToList: function () {
      this.$router.push({ name: 'courseList' })
      console.log('sdfdsfdsafadsasd')
    },

    onSave: function (saveAndNext) {
      if (this.courseName === null || this.courseName === '') {
        this.notifyOnValidation('Name cannot be empty.')
        return
      }

      this.isLoading = true

      const json = {
        courseName: this.courseName
      }

      ApiHelper.post('courses', json)
      .then(response => {
        if (response.status === 200) {
          // this.notifyOnAdd()

          if (!saveAndNext) {
            this.pushToList()
          } else {
            this.onReset()
          }
        }
      })
      .catch(error => {
        this.isLoading = false

        if (error.response.status === 400) {
          const message = error.response.data.errors.join('')

          this.notifyOnValidation(message)
        }
      })
    }
  }
}
</script>
