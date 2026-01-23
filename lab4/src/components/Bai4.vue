<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-sm-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh" style="height: 180px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ item.title }}</h5>
            <p class="card-text text-secondary" style="font-size: 0.9rem;">
              {{ item.content }}
            </p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/images/avatar.png';
import img2 from '../assets/images/banner2.jpg';
import img3 from '../assets/images/banner3.jpg';

const items = [
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất...', 
    image: img1 
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị khác. Với một lượng nhỏ các món ăn đã thêm hương thơm...', 
    image: img2 
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu...', 
    image: img3 
  }
];
</script>