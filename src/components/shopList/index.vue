<template>
  <div>
    <van-search
      v-model="keyContent"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
      @cancel="onCancel">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <my-card></my-card>
  </div>
</template>
<script>
  import  card from '../CardBox/card';
  export  default {
    components:{
      'my-card':card
    },
    data(){
      return{
        keyContent: null,
      }
    },
    methods:{
      onSearch(){},
      onCancel(){
        this.keyContent = null;

      }
    }
  }
</script>
<style scoped>
</style>
