<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1> 
      <div class="row">
        <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index"> 
          <div class="card h-100">
            <img :src="item.image" class="card-img-top" alt="Hình ảnh bài viết" /> 
              <div class="card-body">
                <h3 class="card-title text-success">{{ item.title }}</h3> 
                 <p class="card-text">{{ item.content }}</p> 
              <button class="btn btn-info text-white">Xem chi tiết</button> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Khởi tạo mảng chứa dữ liệu các bài viết
const items = ref([
  { 
    title: '8 loại rau củ quả giàu canxi', 
    content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi...', 
    image: '/img/anh1.jpg' 
  },
  { 
    title: 'Các loại gia vị tốt cho sức khỏe', 
    content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác...', 
    image: '/img/anh2.jpg'
  },
  { 
    title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
    content: 'Đậu làng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất...', 
    image: '/img/anh3.jpg'
  }
]);
</script>

<style scoped>
.card {
  transition: transform 0.3s;
  cursor: pointer;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>