<template>
  <div class="goods">
    <goodslistitem v-for="item in goods" :key="item.index" :goodsItem="item"></goodslistitem>
  </div>
</template>


<script>
import goodslistitem from '../../components/goods/GoodsListItem'

export default {
  props: {
    goods:{
      type: Array,
      default(){
        return []
      }
    }    
  },
  components:{
    goodslistitem
  }
}
</script>


<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>