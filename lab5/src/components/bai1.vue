<template>
  <div class="p-7">
    <p>{{ message }}</p> 
    <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button> </div>
</template>

<script setup>
import { ref } from 'vue'; // Sử dụng ref để tạo reactivity 
const message = ref('Thông điệp'); // Khởi tạo biến message 
const updateMessage = () => {
  message.value = 'haha!'; // Cập nhật giá trị mới 
};
</script>