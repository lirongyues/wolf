<template>
  <div class="all">
    <div class="contentBox">
      <van-row>
        <van-col span="12" v-for="item in 10" class="vanCol">
          <div class="childBox">
            <div class="imageBox">
              <img src="http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
  export  default {

  }
</script>
<style scoped>
  .contentBox{
    display: flex;;
  }
  .childBox{
    height: 170px;
    border: 1px solid #352e2e1f;
    display: inline-block;
    flex:1;
    background: white;
  }
  .vanCol:nth-child(odd){
    padding: 0px 4px 8px 4px;
  }
  .vanCol:nth-child(even){
    padding: 0px 4px 8px 4px;
  }
  .imageBox{
    width: 100%;
    height: 130px;
  }
  .imageBox img {
    width: 100%;
    height: 100%;
  }
  .imageBox img {
    width: 100%;
    height: 100%;
  }
  .all{
    padding: 8px;
    background: rgba(192, 201, 192, 0.09);
  }
</style>
