<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banners" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" style="height: 100%; width: 100%">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default{
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 手动切换之后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    }
  },
  props:{
    banners: Array
  }
}
</script>

<style lang="scss" scoped>

</style>