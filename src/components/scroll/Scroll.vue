<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      scroll: null
    }
  },
  props:{
    probeType:{
      type: Number,
      default(){
        return 0
      }
    }
  },
  methods:{
    },
  mounted() {
    // probe  侦测
    // 0、1都是不侦测实时的位置
    // 2：在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
    // 3：只要是滚动，都侦测
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: true, //上拉加载功能
      click: true
    })
    this.scroll.on('scroll', (position) => {
      this.$emit('position',position)
    })

    this.scroll.on('pullingUp', () => {
      // console.log('下拉加载更多')
    })
  },
}
</script>

<style lang="scss" scoped>
.wrapper{
  
  height: 300px;
  
}
</style>