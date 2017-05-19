<template>
  <nav class="nav has-shadow">
    <div class="nav-left">
      <div class="nav-item">
        <h2 class="title is-3">{{tenantName}}</h2>
      </div>
    </div>

    <div class="nav-right">
      <div class="nav-item">
        <h4 class="subtitle is-5">{{fullName}}</h4>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopPanel',

  data () {
    return {
      tenantName: null,
      fullName: null
    }
  },

  created () {
    const fullName = localStorage.getItem('fullName')
    const userTypeName = localStorage.getItem('userTypeName')
    const tenantName = localStorage.getItem('tenantName')

    const displayName = 'Welcome, ' + fullName + '[' + userTypeName + ']'

    this.tenantName = tenantName
    this.fullName = displayName
  }
}
</script>
