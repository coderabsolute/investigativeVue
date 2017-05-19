<template>
  <div>
    <div class="columns">
      <div class="column is-8">
        <page-title :title="pageTitle"/>
      </div>

      <div class="column has-text-right">
        <button-add @click.native="pushToNew()" title="Add New Course"></button-add>
      </div>
    </div>

    <course-data-grid 
      v-model="refreshChanges"
      :rows="rows"
    ></course-data-grid>
  </div>
</template>

<script>
import ApiHelper from '@/Api/ApiHelper'
import CourseDataGrid from './CourseDataGrid'

export default {
  name: 'CourseList',
  components: {
    'course-data-grid': CourseDataGrid
  },

  data () {
    return {
      pageTitle: null,
      rows: null,
      refreshChanges: null
    }
  },

  watch: {
    refreshChanges: function () {
      this.fetchData()
    }
  },

  created () {
    this.pageTitle = this.$route.meta.pageTitle

    this.fetchData()
  },

  methods: {
    pushToNew: function () {
      this.$router.push({ name: 'courseAdd' })
    },

    fetchData: function () {
      ApiHelper.get('courses')
      .then(response => {
        this.rows = response.data.results
      })
      .catch(error => {
        console.error(error.response)
      })
    }
  }
}
</script>
