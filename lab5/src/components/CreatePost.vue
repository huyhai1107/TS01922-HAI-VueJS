<template>
  <div class="p-3 border rounded mb-4">
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" class="form-control mb-2" placeholder="Tiêu đề bài viết" />
    <input v-model="author" class="form-control mb-2" placeholder="Tên tác giả" />
    <textarea v-model="content" class="form-control mb-2" placeholder="Nội dung bài viết"></textarea>
    <button @click="submitPost" class="btn btn-primary">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['add-post'])

const title = ref('')
const content = ref('')
const author = ref('')

function submitPost() {
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value,
      backgroundColor: '#f9f9f9',
      textColor: '#333'
    }
    
    emit('add-post', newPost)

    // Xóa trắng form sau khi nhập
    title.value = ''
    content.value = ''
    author.value = ''
  }
}
</script>