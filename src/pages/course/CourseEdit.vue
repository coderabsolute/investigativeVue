<template>
  <form>
    <div class="columns">
      <div class="column is-8">
        <page-title :title="pageTitle"/>
      </div>

      <div class="column has-text-right">
        <button-save :is-loading="isLoading" @click.native="onUpdate"></button-save>
        <button-cancel @click.native="pushToList"></button-cancel>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <input-text v-model="courseName" :initialValue="courseName" title="Course Name" placeholder="The name of a course"> </input-text>
      </div>
    </div>
     
  </form>
</template>

<script>
import ApiHelper from '@/Api/ApiHelper'

export default {
  name: 'CourseEdit',

  data () {
    return {
      isLoading: false,
      courseId: null,
      pageTitle: null,
      courseName: null
    }
  },

  created () {
    this.isLoading = true
    this.courseId = this.$route.params.id
    this.pageTitle = this.$route.meta.pageTitle

    const url = 'courses/' + this.courseId
    ApiHelper.get(url)
      .then(response => {
        this.courseName = response.data.results.courseName
        this.isLoading = false
      })
      .catch()
  },

  methods: {
    onUpdate: function () {
      if (this.courseName === null || this.courseName === '') {
        this.notifyOnValidation('Name cannot be empty.')
        return
      }

      this.isLoading = true

      const json = { courseName: this.courseName }
      const url = 'courses/' + this.courseId

      ApiHelper.put(url, json)
      .then(response => {
        if (response.status === 200) {
          // this.notifyOnUpdate()
          this.pushToList()
        }
      })
      .catch(error => {
        this.isLoading = false

        if (error.response.status === 400) {
          const message = error.response.data.errors.join('')

          this.notifyOnValidation(message)
        }
      })
    },

    pushToList: function () {
      this.$router.push({ name: 'courseList' })
    }
  }
}
</script>
