<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-8">
      <div class="card shadow">
        <div class="card-header bg-dark text-white">
          <h4 class="mb-0">Đăng bài viết mới</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="handleCreatePost">
            <div class="mb-3">
              <label class="form-label font-weight-bold">Tiêu đề bài viết</label>
              <input v-model="post.title" type="text" class="form-control" placeholder="Nhập tiêu đề..." required>
            </div>
            
            <div class="mb-3">
              <label class="form-label font-weight-bold">Nội dung bài viết</label>
              <textarea v-model="post.content" class="form-control" rows="6" placeholder="Viết nội dung tại đây..." required></textarea>
            </div>

            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-secondary me-2" @click="$router.push('/')">Hủy</button>
              <button type="submit" class="btn btn-primary">Đăng bài ngay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Dữ liệu bài viết sử dụng Reactivity
const post = ref({
  title: '',
  content: ''
});

const handleCreatePost = () => {
  // Trong Assignment, bạn chỉ cần xử lý giả lập (lưu vào console hoặc alert)
  console.log('Dữ liệu bài mới:', post.value);
  
  alert('Đăng bài viết thành công!');
  
  // Sau khi đăng thành công, quay về trang chủ
  router.push('/');
};
</script>