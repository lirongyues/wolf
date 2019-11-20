<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>首页</span>
        <i slot="icon" class="iconfont icon-shouyeshouye"></i>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>视频</span>
        <i slot="icon" class="iconfont icon-shipin"></i>
      </van-tabbar-item>
      <van-tabbar-item >
        <span>社区</span>
        <i slot="icon" class="iconfont icon-shequ-active"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default{
    watch:{
      'active':function(val){
        this.$emit("onChange",val)
      }
    },
    data(){
      return{
        active: 0
      }
    }
  }
</script>
<style scoped>

</style>
