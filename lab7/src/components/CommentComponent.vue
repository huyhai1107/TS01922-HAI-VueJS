<template>
  <div class="p-3 border mt-3">
    <h3>Bình luận (User: {{ username }})</h3>
    <textarea v-model="commentText" class="form-control" placeholder="Nhập bình luận"></textarea>
    <button @click="sendComment" class="btn btn-primary mt-2">Gửi</button>

    <ul class="mt-3">
      <li v-for="(com, index) in comments" :key="index">
        <b>{{ com.name }}:</b> {{ com.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(['username']);
const commentText = ref('');
const comments = ref([]);

function sendComment() {
  if (commentText.value) {
    comments.value.push({
      name: props.username,
      text: commentText.value
    });
    commentText.value = '';
  }
}
</script>