<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="item.index" 
    class="tabcontrol-item" 
    :class="{active:index === currentIndex}"
    @click="itemClick(index)" >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    titles: Array
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
    }
  },
}
</script>


<style lang="scss" scoped>
.tabcontrol{
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
  background-color: white;

}
.tabcontrol-item{
  flex-direction: row;

  height: 2rem;
  line-height: 2rem;
}
.tabcontrol-item span{
  padding: 0.2rem;

}
.active{
  color: #FF8E97;
  border-bottom: 0.2rem solid #FF8E97;
}
</style>