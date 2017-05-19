<template>
  <div class="main">
    <div class="title">administration</div>

    <router-link :to="{ name: 'dashboard' }" class="item">
      <span class="icon"><i class="fa fa-home"></i></span><span class="name">Dashboard</span>
    </router-link>

    <router-link :to="{ name: 'courseList' }" class="item">
      <span class="icon"><i class="fa fa-th-list"></i></span><span class="name">Courses</span>
    </router-link>

    <router-link :to="{ name: 'login' }" class="item">
      <span class="icon"><i class="fa fa-sign-out"></i></span><span class="name">Logout</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidePanel'
}
</script>
