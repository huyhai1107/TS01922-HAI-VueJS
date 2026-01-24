import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import ProfileView from '../views/ProfileView.vue';
// 1. Thêm import này (đảm bảo bạn đã tạo file CreatePostView.vue)
import CreatePostView from '../views/CreatePostView.vue'; 

const routes = [
  { path: '/', component: HomeView },
  { path: '/login', component: LoginView },
  { 
    path: '/profile', 
    component: ProfileView,
    meta: { requiresAuth: true }
  },
  // 2. Thêm đường dẫn cho trang đăng bài ở đây
  { 
    path: '/create', 
    component: CreatePostView,
    meta: { requiresAuth: true } // Chỉ cho phép đăng bài khi đã đăng nhập [cite: 48]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Chuyển đoạn router.beforeEach lên trên "export default router" 
// hoặc giữ nguyên nhưng phải đảm bảo logic bảo vệ route hoạt động
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isLoggedIn'); // Lưu ý: Dùng đúng key 'isLoggedIn' bạn đã đặt ở trang Login
  
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login');
    } else {
      next();
    }
});

export default router;