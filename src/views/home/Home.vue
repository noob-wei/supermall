<template>
  <div class="home">
    <mt-header fixed title="购物街"></mt-header>
    <homeswiper :banners='banners'></homeswiper>
    <homerecommends :recommends='recommends'></homerecommends>
  </div>
</template>

<script>
import homeswiper from './Homeswiper'
import homerecommends from './Homerecommends'

export default {
  components:{
    homeswiper,
    homerecommends
  },
  data() {
    return {
      banners: [],
      recommends: [],
      
    };
  },
  created() {
    this.getHomeMultidata();
  },

  methods: {
    getHomeMultidata() {
      this.$http.get("http://123.207.32.32:8000/home/multidata").then(res => {
        this.banners = res.data.data.banner.list;
        // console.log(res)
        this.recommends = res.data.data.recommend.list;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  background-color: white;
}
</style>