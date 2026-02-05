<template>
  <div>
    <h1>MyBlog</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/blogs">Blogs</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>
