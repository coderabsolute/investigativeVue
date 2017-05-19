<template>
  <p class="control">
    <label>{{title}}</label>
    <input v-model="mutedValue" class="input" type="text" :placeholder="placeholder" />
  </p>
</template>

<script>
export default {
  name: 'InputText',
  props: ['title', 'placeholder', 'initialValue'],

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
