<template>
  <div>
    <h2>Chi tiết Blog</h2>
    <p>ID bài viết: {{ id }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>
