<template>
  <div class="home">
    <mt-header fixed title="购物街"></mt-header>
    <homeswiper :banners='banners'></homeswiper>
    <homerecommends :recommends='recommends'></homerecommends>
    <tabcontrol class="tabcontrol" :titles="['流行','新款','精选']"></tabcontrol>

    <goodslist :goods="goods['pop'].list"></goodslist>
    <goodslistitem></goodslistitem>

    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表150</li>
      <li>列表250</li>
      <li>列表350</li>
      <li>列表450</li>
      <li>列表550</li>
      <li>列表650</li>
      <li>列表750</li>
      <li>列表850</li>
      <li>列表950</li>
      <li>列表1050</li>
      <li>列表1150</li>
      <li>列表1250</li>
      <li>列表1350</li>
      <li>列表1450</li>
      <li>列表1550</li>
      <li>列表1650</li>
      <li>列表1750</li>
      <li>列表1850</li>
      <li>列表1950</li>
      <li>列表2050</li>
      <li>列表2150</li>
      <li>列表2250</li>
      <li>列表2350</li>
      <li>列表2450</li>
      <li>列表2550</li>
      <li>列表2650</li>
      <li>列表2750</li>
      <li>列表2850</li>
      <li>列表2950</li>
      <li>列表3050</li>
      <li>列表3150</li>
      <li>列表3250</li>
      <li>列表3350</li>
      <li>列表3450</li>
      <li>列表3550</li>
      <li>列表3650</li>
      <li>列表3750</li>
      <li>列表3850</li>
      <li>列表3950</li>
      <li>列表4050</li>
      <li>列表4150</li>
      <li>列表4250</li>
      <li>列表4350</li>
      <li>列表4450</li>
      <li>列表4550</li>
      <li>列表4650</li>
      <li>列表4750</li>
      <li>列表4850</li>
      <li>列表4950</li>
      <li>列表5050</li>
    </ul>
  </div>
</template>

// <div th:text=“”>

// </div>


<script>
import homeswiper from './Homeswiper'
import homerecommends from './Homerecommends'

import tabcontrol from '../../components/tabControl/TabControl'

import goodslist from '../../components/goods/GoodsList'
import goodslistitem from '../../components/goods/GoodsListItem'

export default {
  components:{
    homeswiper,
    homerecommends,
    tabcontrol,
    goodslist,
    goodslistitem
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},

      }
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },

  methods: {
    // 请求轮播图数据
    getHomeMultidata() {
      this.$http.get("http://123.207.32.32:8000/home/multidata").then(res => {
        this.banners = res.data.data.banner.list;
        // console.log(res)
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      this.$http({
        method:'get',
        url:'http://152.136.185.210:8000/api/n3/home/data',
        params:{
          type,
          page
      }
      }).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page +=1
      }).catch(() => {})
    }
  }
};
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  background-color: white;
}
.tabcontrol{
  position: sticky;
  top: 2.5rem;
}
.mint-header.is-fixed{
  z-index: 100000;
}
</style>