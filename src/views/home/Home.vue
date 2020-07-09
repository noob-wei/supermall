<template>
  <div id="home" class="wrapper">
    <mt-header fixed title="购物街"></mt-header>
    <scroll class="content" ref="scroll" @position = "position1">
      <homeswiper :banners="banners"></homeswiper>
      <homerecommends :recommends="recommends"></homerecommends>
      <tabcontrol class="tabcontrol" :titles="['流行','新款','精选']" @tabClick="tabclick"></tabcontrol>

      <goodslist :goods="goods[currentType].list"></goodslist>
      <goodslistitem></goodslistitem>
    </scroll>
    
    <backtop @click.native="backclick" :probe-type="3" v-show="isshowbacktop"></backtop>
  </div>
</template>

// <div th:text=“”>

// </div>


<script>
// 轮播图
import homeswiper from "./Homeswiper";
import homerecommends from "./Homerecommends";

// 类型选择栏
import tabcontrol from "../../components/tabControl/TabControl";

// 数据
import goodslist from "../../components/goods/GoodsList";
import goodslistitem from "../../components/goods/GoodsListItem";

// scroll滚动
import scroll from "../../components/scroll/Scroll";

// 回到顶部
import backtop from '../../components/backTop/BackTop'

export default {
  components: {
    homeswiper,
    homerecommends,
    tabcontrol,
    goodslist,
    goodslistitem,
    scroll,
    backtop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isshowbacktop:false
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  methods: {
    // 事件监听方法
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 请求轮播图数据
    // 网络请求方法
    getHomeMultidata() {
      this.$http.get("http://123.207.32.32:8000/home/multidata").then(res => {
        this.banners = res.data.data.banner.list;
        // console.log(res)
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      this.$http({
        method: "get",
        url: "http://152.136.185.210:8000/api/n3/home/data",
        params: {
          type,
          page
        }
      })
        .then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
        })
        .catch(() => {});
    },

    // 回到顶部点击
    backclick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    // 获取实时滚动位置
    position1(position){
      console.log(position)
      this.isshowbacktop = (-position.y > 1000)
    }
  }
};
</script>

<style lang="scss" scoped>
#home {
  height: 100%;
  background-color: white;
}
.tabcontrol {
  position: sticky;
  top: 2.5rem;
}
.mint-header.is-fixed {
  z-index: 100000;
}
.content {
  height: calc(100vh - 5.5rem);
  overflow: hidden;
  
}
</style>