<template>
    <div class="container mt-5">
      <div class="row">
        <form @submit.prevent="submitForm" class="col-sm-4 border p-4 rounded shadow-sm">
          <h3 class="text-center">{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h3>
          
          <div class="mb-3 mt-3">
            <label for="name">Họ tên:</label>
            <input type="text" class="form-control" v-model="student.name" id="name" required />
          </div>
          
          <div class="mb-3">
            <label for="score">Điểm:</label>
            <input type="number" max="10" min="0" step="0.1" class="form-control" v-model.number="student.score" id="score" required />
          </div>
          
          <div class="mb-3">
            <label for="dob">Ngày sinh:</label>
            <input type="date" class="form-control" v-model="student.dob" id="dob" required />
          </div>
          
          <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
        </form>
  
        <div class="col-sm-8 px-5">
          <h3 class="text-center">Danh sách học sinh</h3>
          <table class="table table-hover mt-3">
            <thead>
              <tr>
                <th>Họ và tên</th>
                <th>Điểm</th>
                <th>Ngày sinh</th>
                <th colspan="2" class="text-center">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(stu, index) in students" :key="index">
                <td>{{ stu.name }}</td>
                <td>{{ stu.score }}</td>
                <td>{{ stu.dob }}</td>
                <td>
                  <button class="btn btn-warning btn-sm" @click="editStudent(index)">Sửa</button>
                </td>
                <td>
                  <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Khởi tạo danh sách học sinh ban đầu
  const students = ref([
    { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
    { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
  ]);
  
  // Biến quản lý dữ liệu nhập trên form
  const student = ref({
    name: '',
    score: null,
    dob: ''
  });
  
  // Các biến trạng thái để nhận biết đang thêm hay sửa
  const isEditing = ref(false);
  const editingIndex = ref(null);
  
  // Xử lý khi nhấn nút Lưu (Thêm mới hoặc Cập nhật)
  function submitForm() {
    if (isEditing.value) {
      // Lưu thông tin đã sửa vào vị trí cũ trong mảng
      students.value[editingIndex.value] = { ...student.value };
      isEditing.value = false;
      editingIndex.value = null;
    } else {
      // Thêm một học sinh mới vào cuối danh sách
      students.value.push({ ...student.value });
    }
    resetForm();
  }
  
  // Chuyển dữ liệu từ bảng lên form để sửa
  function editStudent(index) {
    student.value = { ...students.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
  }
  
  // Xóa học sinh dựa trên chỉ mục index
  function deleteStudent(index) {
    if (confirm('Bạn có chắc chắn muốn xóa học sinh này?')) {
      students.value.splice(index, 1);
    }
  }
  
  // Xóa sạch dữ liệu trên form
  function resetForm() {
    student.value = {
      name: '',
      score: null,
      dob: ''
    };
  }
  </script>