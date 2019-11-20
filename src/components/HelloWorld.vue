<template>
  <div class="all">
    <div class="imageBox">
     <img :src="imdexImg"/>
    </div>
    <div class="btn" ref="btn"><span @click="jump">进入应用</span></div>
  </div>
</template>

<script>
  import indexImage from '../assets/index.jpg';
export default {
  name: 'HelloWorld',
  data () {
    return {
      imdexImg: indexImage,
    }
  },
  methods:{
    jump(){
      this.$router.push({path:"/index"})
    }
  },
  created(){
    this.$nextTick(() => {
      setTimeout(()=> {
        this.$refs.btn.classList.add('btnHover')
      },1000)
    })
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
  .imageBox img{
    width:100%;
    height:100%
  }

  .btn{
    opacity: 0;
    width: 100%;
    height: 200px;
    text-align: center;
    color: #ab979e;
    font-size: 20px;
    position: absolute;
    top: 55%;
    z-index: 100;
  }
  .btnHover{
    opacity: 1;
    width: 100%;
    height: 200px;
    text-align: center;
    color: #bfb7b9;
    font-size: 20px;
    position: absolute;
    top: 55%;
    z-index: 100;
    transition: all 2s;
  }
  .btn span{
    text-align: center;
    padding: 15px 30px;
    background: #5e5274;
    opacity: 0.9;
    border: 5%;
    border-radius: 10%;
    box-shadow:0 0 20px #4b3e64;
  }
</style>
