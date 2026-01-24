<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-4">
      <div class="card shadow-sm">
        <div class="card-body">
          <h3 class="card-title text-center mb-4">Đăng nhập</h3>
          
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="email" type="email" class="form-control" placeholder="admin@gmail.com" required>
            </div>
            
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input v-model="password" type="password" class="form-control" placeholder="123456" required>
            </div>
            
            <button type="submit" class="btn btn-dark w-100">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Reactivity: Quản lý trạng thái dữ liệu [cite: 37]
const email = ref('');
const password = ref('');
const router = useRouter();

// Khai báo emit để báo cho App.vue thay đổi trạng thái Navbar (Conditional rendering) [cite: 38, 47]
const emit = defineEmits(['login-success']); 

const handleLogin = () => {
  // Authentication cơ bản theo yêu cầu đề bài [cite: 48]
  if (email.value === 'admin@gmail.com' && password.value === '123456') {
    localStorage.setItem('isLoggedIn', 'true');
    
    // Gửi sự kiện lên component cha (App.vue)
    emit('login-success'); 
    
    alert('Đăng nhập thành công!');
    router.push('/'); // Điều hướng về trang chủ [cite: 47]
  } else {
    alert('Sai tài khoản hoặc mật khẩu');
  }
};
</script>