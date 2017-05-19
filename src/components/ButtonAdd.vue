<template>
  <button class="button is-primary" :class="{ 'is-loading': isLoading }">
    <span class="icon is-small">
      <i class="fa fa-plus"></i>
    </span>
    <span>{{title}}</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonAdd',
  props: ['title', 'isLoading']
}
</script>
