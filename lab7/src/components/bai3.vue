<template>
  <div class="container mt-5">
    <h2 class="text-center">Bài 3: Truyền dữ liệu giữa các Component</h2>
    <hr />
    <LoginComponent v-if="!isLoggedIn" @LoggedIn="handleLogin" />

    <CommentComponent v-else :username="loggedInUser" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

const isLoggedIn = ref(false);
const loggedInUser = ref('');

function handleLogin(user) {
  loggedInUser.value = user;
  isLoggedIn.value = true;
}
</script>