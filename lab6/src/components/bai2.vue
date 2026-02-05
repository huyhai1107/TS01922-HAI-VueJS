<template>
  <div class="container mt-5 col-sm-6">
  <h1 class="bg-warning">COMPONENT BÀI 2 ĐÃ CHẠY</h1>
    <h3 class="text-success">Nhập tháng của bạn:</h3> <div class="mb-3">
      <input 
        type="number" 
        v-model.number="month" 
        class="form-control" 
        placeholder="Nhập tháng (1-12)"
      />
    </div>

    <p v-if="month < 1 || month > 12" class="text-danger fw-bold">
      Vui lòng nhập tháng từ 1 đến 12!
    </p>

    <div v-else class="alert alert-success">
      Kết quả: 
      <strong v-if="month >= 1 && month <= 3">Mùa Xuân</strong> <strong v-else-if="month <= 6">Mùa Hè</strong> <strong v-else-if="month <= 9">Mùa Thu</strong> <strong v-else>Mùa Đông</strong> </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; 

// Khởi tạo biến month với giá trị mặc định là 1 
const month = ref(1);
</script>

<style scoped>
.container {
  border: 2px solid #28a745;
  padding: 25px;
  border-radius: 10px;
  background-color: #f0fff4;
}
</style>