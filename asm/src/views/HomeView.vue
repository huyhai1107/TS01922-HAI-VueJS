<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Bài viết mới nhất</h2>
    
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-md-6 mb-4">
        <div class="card shadow-sm h-100">
          <img :src="post.image" class="card-img-top" alt="Thumbnail" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title text-primary">{{ post.title }}</h5>
            <p class="card-text text-muted small">Đăng bởi: Admin - 23/01/2026</p>
            <p class="card-text">{{ post.summary }}</p>
            
            <hr>

            <h6>Bình luận ({{ post.comments.length }})</h6>
            
            <ul class="list-group list-group-flush mb-3 overflow-auto" style="max-height: 150px;">
              <li v-for="(comment, index) in post.comments" :key="index" class="list-group-item px-0 border-0">
                <div class="bg-light p-2 rounded">
                  <small class="fw-bold d-block">{{ comment.user }}</small>
                  <span class="small">{{ comment.text }}</span>
                  <div class="text-muted" style="font-size: 0.7rem;">{{ comment.time }}</div>
                </div>
              </li>
            </ul>

            <form @submit.prevent="addComment(post.id)" class="mt-2">
              <div class="input-group input-group-sm">
                <input v-model="commentInputs[post.id]" type="text" class="form-control" placeholder="Viết bình luận...">
                <button type="submit" class="btn btn-primary">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Danh sách bài viết tích hợp luôn mảng bình luận bên trong
const posts = ref([
  { 
    id: 1, 
    title: 'Sức khỏe hằng ngày', 
    summary: 'tập thể dục tốt cho sức khỏe...', 
    image: '/images/theduc.jpg',
    comments: [
      { user: 'Nguyễn Văn Cường', text: 'Bài viết hay quá!', time: '23/01/2026, 08:30' }
    ]
  },
  { 
    id: 2, 
    title: 'Sách hay ở mọi nơi', 
    summary: 'Lợi ích của đọc sách', 
    image: '/images/sachhay.jpg',
    comments: [
      { user: 'Trần Văn Ân', text: 'Rất hữu ích, cảm ơn bạn.', time: '23/01/2026, 09:15' }
    ]
  }
]);

// Biến để quản lý nội dung nhập bình luận cho từng bài viết
const commentInputs = ref({});

const addComment = (postId) => {
  const text = commentInputs.value[postId];
  
  if (text && text.trim() !== '') {
    // Tìm đúng bài viết để thêm bình luận
    const post = posts.value.find(p => p.id === postId);
    if (post) {
      post.comments.push({
        user: 'Bạn',
        text: text,
        time: new Date().toLocaleString() // Lấy thời gian hiện tại đúng yêu cầu Y2.3
      });
    }
    // Xóa trống ô nhập sau khi gửi
    commentInputs.value[postId] = '';
  }
};
</script>