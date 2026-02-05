<template>
  <div class="p-5">
    <h3>Form Đăng ký</h3>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label>Họ tên:</label>
        <input v-model="formData.fullName" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Email:</label>
        <input v-model="formData.email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Mật khẩu:</label>
        <input v-model="formData.password" type="password" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Ngày sinh:</label>
        <input v-model="formData.dob" type="date" class="form-control" />
      </div>
      <button class="btn btn-primary">Đăng ký</button>
    </form>

    <div class="mt-4 p-3 border">
      <h4>Thông tin đã nhập:</h4>
      <p>Họ tên: {{ formData.fullName }}</p>
      <p>Email: {{ formData.email }}</p>
      <p>Ngày sinh: {{ formData.dob }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const formData = ref({
  fullName: '',
  email: '',
  password: '',
  dob: ''
});

function submitForm() {
  alert('Đăng ký thành công cho: ' + formData.value.fullName);
}
</script>