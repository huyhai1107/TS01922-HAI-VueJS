<template>
  <div>
    <h2>User Profile</h2>
    <nav>
      <router-link to="/profile/info">Info</router-link> |
      <router-link to="/profile/settings">Settings</router-link>
    </nav>
    <router-view />
  </div>
</template>
