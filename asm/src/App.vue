<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/"></router-link>
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Trang chủ</router-link>
        
        <router-link v-if="!isLoggedIn" class="nav-link" to="/login">Đăng nhập</router-link>
        
        <template v-else>
          <router-link class="nav-link" to="/create">Đăng bài mới</router-link> 
          <router-link class="nav-link" to="/profile">Trang cá nhân</router-link>
          <a class="nav-link" href="#" @click.prevent="handleLogout">Đăng xuất</a>
        </template>
      </div>
    </div>
  </nav>

  <div class="container">
    <router-view @login-success="checkLoginStatus"></router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const router = useRouter();

// Hàm kiểm tra trạng thái từ localStorage
const checkLoginStatus = () => {
  isLoggedIn.value = !!localStorage.getItem('isLoggedIn');
};

onMounted(() => {
  checkLoginStatus(); // Chạy khi load lại trang (F5)
});

const handleLogout = () => {
  localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập
  checkLoginStatus(); // Cập nhật lại biến ref để ẩn/hiện menu
  alert('Đã đăng xuất!');
  router.push('/login');
};
</script>