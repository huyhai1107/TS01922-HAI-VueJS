<template>
  <div class="container mt-5 col-sm-6">
    <h3 class="text-primary">Xếp loại học sinh</h3>
    <div class="mb-3">
      <label for="score" class="form-label">Nhập điểm trung bình (ĐTB):</label>
      <input 
        type="number" 
        id="score" 
        v-model.number="score" 
        class="form-control" 
        step="0.1" 
        min="0" 
        max="10" 
        placeholder="Nhập điểm từ 0 - 10"
      />
    </div>

    <div class="alert alert-info" v-if="score !== null">
      Kết quả: 
      <strong v-if="score < 5.0">Yếu</strong> 
      <strong v-else-if="score >= 5.0 && score < 6.5">Trung bình</strong> 
      <strong v-else-if="score >= 6.5 && score < 8.0">Khá</strong> 
      <strong v-else-if="score >= 8.0 && score < 9.0">Giỏi</strong> 
      <strong v-else-if="score >= 9.0 && score <= 10.0">Xuất sắc</strong> 
      <strong v-else style="color: red;">Điểm không hợp lệ!</strong>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo biến score để lưu trữ điểm nhập vào
const score = ref(null);
</script>

<style scoped>
/* Bạn có thể thêm CSS tùy chỉnh ở đây nếu cần */
.container {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>