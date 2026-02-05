<template>
<div id="app" class="container mt-5">
    <div class="card mb-4 p-3 shadow-sm">
      <h1 class="text-primary">Bài 1: Thay đổi thông điệp</h1>
      <bai1 />
    </div>

    <div class="card mb-4 p-3 shadow-sm">
      <h1 class="text-primary">Bài 2: Nhập dữ liệu (v-model)</h1>
      <bai2 />
    </div>

    <div class="card mb-4 p-3 shadow-sm">
      <h1 class="text-primary">Bài 3: Hiển thị thông tin cá nhân</h1>
      <bai3 />
    </div>

    <div class="card mb-4 p-3 shadow-sm">
      <h1 class="text-success text-center">Ứng dụng Blog nhỏ với Vue.js</h1> 
      <CreatePost @add-post="addPost" /> 
      <PostList :posts="posts" /> 
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'; 
import CreatePost from './components/CreatePost.vue'; 
import PostList from './components/PostList.vue'; 
import bai1 from './components/bai1.vue'
import bai2 from './components/bai2.vue'
import bai3 from './components/bai3.vue'

const posts = ref([]); 

function addPost(post) {
  posts.value.push(post); 
}
</script>

<style>
#app {
  max-width: 800px; 
  margin: 0 auto;
  padding: 20px; 
}
</style>