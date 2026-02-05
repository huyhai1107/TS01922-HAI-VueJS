<template>
  <div>
    <h2>Danh sách Blog</h2>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        <router-link :to="{ name: 'BlogPost', params: { id: blog.id }}">
          {{ blog.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        { id: 1, title: 'Vue Router Cơ Bản' },
        { id: 2, title: 'Route Động Trong Vue' },
        { id: 3, title: 'Route Guard Là Gì?' }
      ]
    }
  }
}
</script>
