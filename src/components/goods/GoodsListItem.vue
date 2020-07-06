<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
      <p>{{goodsItem.title}}</p>
      <span class="price">价格：{{goodsItem.price}}</span>
      <span class="collect">
        <a id="icon-star"><span class="mui-icon mui-icon-star"></span></a>
        {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>


<script>
export default{
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.goodsItem{
  position: relative;
  padding-bottom: 3.3rem;
  width: 48%;
  margin-top: .5rem;
  img{
    width: 100%;
    border-radius: 5%;
  }
}
.goodsInfo{
  font-size: 1rem;
  text-align: center;
  position: absolute;
  bottom: 0.3rem;
  left: 0;
  right: 0;
  overflow: hidden;
  p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1rem;
  }
  .price{
    color: #FF8E97;
    margin-right: 1rem;
  }
  .collect{
    .mui-icon.mui-icon-star{
      font-size: 1.2rem;
    }
  }
}
</style>