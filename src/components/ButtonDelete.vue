<template>
  <button class="button is-danger is-outlined" :class="{ 'is-loading': isLoading }">
    <span class="icon is-small">
      <i class="fa fa-trash"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ButtonDelete',
  props: ['isLoading']
}
</script>
