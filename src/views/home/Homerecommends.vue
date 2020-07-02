<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-item" >
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    recommends: Array
  }
}
</script>

<style lang="scss" scoped>
.recommend{
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  border-bottom: 0.2rem solid rgba($color: 	#FF00FF, $alpha: .1);
  
}
.recommend-item{
  text-align: center;
  padding-bottom: 1rem;

}
.recommend-item a{
  color: gray;
  font-size: 0.9rem;
}
.recommend-item img{
  width: 80%;
  height: 80%;
}
</style>