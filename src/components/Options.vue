<template>
  <p class="control">
    <label>{{title}}</label>
    <span class="select is-fullwidth">
      <select v-model="mutedValue">
        <option v-for="row in list" v-bind:value="row.key">
          {{ row.value }}
        </option>
      </select>
    </span>
  </p>
</template>

<script>
export default {
  name: 'Options',
  props: ['title', 'initialValue', 'list'],

  data () {
    return {
      mutedValue: null
    }
  },

  created () {
    this.mutedValue = this.initialValue
  },

  watch: {
    mutedValue: function () {
      this.$emit('input', this.mutedValue)
    },

    initialValue: function () {
      this.mutedValue = this.initialValue
    }
  }
}
</script>
