<template>
  <div class="all">
   <my-shopListIndex v-if="active == 0"></my-shopListIndex>
   <my-footer @onChange='changes'></my-footer>
  </div>
</template>
<script>
  import footer from './footer';
  import shopListIndex from './shopList/index';
  export default{
    components:{
      "my-footer": footer,
      "my-shopListIndex": shopListIndex
    },
    data(){
      return{
        active: 0
      }
    },
    methods:{
      changes(val){
        this.active = val
      }
    }
  }
</script>
<style scoped>
  .all{
    max-width: 414px;
    max-height: 667px;
    min-width: 320px;
    min-height: 560px;
    margin: 0 auto;
    display: block;
  }
</style>
