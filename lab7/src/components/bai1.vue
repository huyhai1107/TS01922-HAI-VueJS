<template>
  <div class="col-sm-4 p-5">
    <h3 class="text-center">Quản lý công việc</h3>
    <form @submit.prevent="addList">
      <div class="mb-3">
        <label class="form-label">Tên công việc:</label>
        <div class="d-flex">
          <input v-model="newTask" type="text" class="form-control" placeholder="Nhập tên công việc" />
          <button class="btn btn-primary ms-2">Thêm</button>
        </div>
      </div>
    </form>

    <ul class="list-group">
      <li v-for="(task, index) in tasks" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
        {{ task }}
        <button @click="removeTask(index)" class="btn btn-danger btn-sm">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref(['Ăn sáng', 'Đi học', 'Chơi bóng rổ']);

function addList() {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value);
    newTask.value = ''; // Xóa nội dung input sau khi thêm
  }
}

function removeTask(index) {
  tasks.value.splice(index, 1);
}
</script>