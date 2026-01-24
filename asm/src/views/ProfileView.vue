<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-6">
      <div class="card shadow">
        <div class="card-header bg-primary text-white text-center">
          <h4>Thông tin cá nhân</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="updateProfile">
            <div class="mb-3">
              <label class="form-label">Họ và tên</label>
              <input v-model="user.name" type="text" class="form-control" required>
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="user.email" type="email" class="form-control" required>
            </div>

            <div class="mb-3">
              <label class="form-label">Mật khẩu mới</label>
              <input v-model="user.password" type="password" class="form-control" placeholder="Để trống nếu không đổi">
            </div>

            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Cập nhật thông tin</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo Reactivity (Dữ liệu ban đầu)
const user = ref({
  name: 'Nguyễn Văn A',
  email: 'admin@gmail.com',
  password: ''
});

const updateProfile = () => {
  // Logic giả lập cập nhật
  console.log('Thông tin mới:', user.value);
  alert('Cập nhật thông tin thành công!');
};
</script>