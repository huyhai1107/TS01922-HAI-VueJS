<template>
  <div id="app" class="container mt-4">
    <h2 class="text-center mb-4 text-danger">FPT POLYTECHNIC - LAB 6</h2>
    
    <div class="d-flex justify-content-center gap-2 mb-5">
      <button class="btn btn-outline-primary" @click="currentTab = 'bai1'">Bài 1</button>
      <button class="btn btn-outline-primary" @click="currentTab = 'bai2'">Bài 2</button>
      <button class="btn btn-outline-primary" @click="currentTab = 'bai3'">Bài 3</button>
      <button class="btn btn-outline-primary" @click="currentTab = 'bai4'">Bài 4</button>
    </div>

    <div class="border p-4 rounded bg-light shadow-sm">
      <component :is="tabs[currentTab]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import các file bài tập bạn đã tạo
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import Bai4 from './components/bai4.vue';

// Quản lý việc chuyển đổi bài tập
const currentTab = ref('bai1');

// Khai báo danh sách các component
const tabs = {
  bai1: Bai1,
  bai2: Bai2,
  bai3: Bai3,
  bai4: Bai4
};
</script>

<style>
/* Bạn có thể thêm font chữ hoặc nền chung ở đây */
body {
  background-color: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
#app {
  max-width: 1000px;
  margin: auto;
}
</style>