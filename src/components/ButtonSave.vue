<template>
  <button class="button is-primary" type="submit" :class="{ 'is-loading': isLoading }">
    <span class="icon is-small">
      <i class="fa fa-floppy-o"></i>
    </span>
    <span>Ok</span>
  </button>
</template>

<script>
export default {
  name: 'ButtonSave',
  props: ['isLoading']
}
</script>
