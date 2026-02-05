<template>
  <div>
    <h2>Đăng nhập</h2>
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      localStorage.setItem('auth', 'true')
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>
