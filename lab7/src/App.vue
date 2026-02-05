<template>
  <div id="app" class="container mt-4">
    <h2 class="text-center mb-4 text-primary">FPT POLYTECHNIC - LAB 7</h2>
    
    <div class="d-flex justify-content-center gap-3 mb-5">
      <button 
        class="btn" 
        :class="currentTab === 'Bai1' ? 'btn-primary' : 'btn-outline-primary'"
        @click="currentTab = 'Bai1'"
      >
        Bài 1: Quản lý công việc
      </button>
      <button 
        class="btn" 
        :class="currentTab === 'Bai2' ? 'btn-primary' : 'btn-outline-primary'"
        @click="currentTab = 'Bai2'"
      >
        Bài 2: Form Đăng ký
      </button>
      <button 
        class="btn" 
        :class="currentTab === 'Bai3' ? 'btn-primary' : 'btn-outline-primary'"
        @click="currentTab = 'Bai3'"
      >
        Bài 3: Truyền dữ liệu Component
      </button>
    </div>

    <div class="card shadow-sm">
      <div class="card-body">
        <component :is="tabs[currentTab]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import các component bài tập
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';

// Biến lưu trạng thái bài đang chọn (mặc định là Bài 1)
const currentTab = ref('bai1');

// Danh sách các component tương ứng với tên tab
const tabs = {
  bai1,
  bai2,
  bai3
};
</script>

<style>
/* CSS chung cho toàn bộ bài Lab */
body {
  background-color: #f4f7f6;
  font-family: 'Arial', sans-serif;
}
.card {
  min-height: 400px;
}
</style>