<template>
  <div class="p-3 border">
    <h3>Form Đăng Nhập</h3>
    <input v-model="username" placeholder="Nhập tên" class="form-control mb-2" />
    <button @click="login" class="btn btn-success">Đăng nhập</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const username = ref('');
const emit = defineEmits(['LoggedIn']);

function login() {
  if (username.value) {
    emit('LoggedIn', username.value); // Phát sự kiện gửi tên user ra ngoài
  }
}
</script>