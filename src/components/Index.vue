<template>
  <div>
    <div class="index_header">
      <div class="header_left" slot="left">
        <p>乐文</p>
        <p>MUSIC ARTICLE</p>
      </div>
      <mu-button icon slot="right"><img class="ic_menu" :src="ic_menu"></mu-button>
    </div>
    <div  class="index_content" style="padding-top:150px;">
      <div class="index_content_flex">
        <img :src="index_content_flex_img03">
        <h1>专访 | 一道能折断痛苦枷锁的光芒 </h1>
        <div class="index_content_flex_footer">
          <p slot="left">乐人 ： Miss Future</p>
          <p slot="right">阅读量 ：1958次</p>
        </div>
      </div>

      <div class="index_content_flex">
        <img :src="index_content_flex_img02">
        <h1>对于依旧在路上的你，他们用未来式民谣告诉你答案！</h1>
        <div class="index_content_flex_footer">
          <p slot="left">乐人 ： Wills乐队</p>
          <p slot="right">阅读量 ：7700次</p>
        </div>
      </div>

      <div class="index_content_flex">
        <img :src="index_content_flex_img04">
        <h1>他，不骄不躁，人称民谣界的方文山 </h1>
        <div class="index_content_flex_footer">
          <p slot="left">乐人 ： 唐映枫</p>
          <p slot="right">阅读量 ：18640次</p>
        </div>
      </div>

      <div class="index_content_flex">
        <img :src="index_content_flex_img01">
        <h1>在大海的亲吻中触碰到微弱的光亮 </h1>
        <div class="index_content_flex_footer">
          <p slot="left">乐人 ： 仙童（xiantong）</p>
          <p slot="right">阅读量 ：11486次</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ic_menu from '../assets/images/index/ic_menu.png';
import index_content_flex_img01 from '../assets/images/index/content01.jpg';
import index_content_flex_img02 from '../assets/images/index/content02.jpg';
import index_content_flex_img03 from '../assets/images/index/content03.jpg';
import index_content_flex_img04 from '../assets/images/index/content04.jpg';

export default {
  name: 'Index',
  beforeCreate() {
    this.axios.post("/api/web/admin_setting/personalcenter",{
        headers: {  "Content-Type":"application/json;charset=utf-8"},
        withCredentials : true
    }).then(res => {
          console.log(res.data);
    });
  },
  data () {
    return {
      ic_menu,
      index_content_flex_img01,
      index_content_flex_img02,
      index_content_flex_img03,
      index_content_flex_img04,
    }
  },
  methods: {
    showPage() {
      console.log(this.page);
    }
  }
}
</script>

<style scoped>
  .index_header{
    width: 100%;color:#000;display:flex;flex-flow:row;
    background:#fff;position:fixed;top:0px;padding:24px 24px 0px;
  }
  .header_left{
    flex:1;
    text-align:left;
  }
  .header_left>p:nth-child(1){
    line-height:0em;
    font-size:2.2em;
    font-weigth:bold;
  }
  .header_left>p:nth-child(2){
        font-size:1.2em;
  }
 .ic_menu{
   width:25px;
 }


 .index_content{
   width:100%;
   background:#fff;
   padding:24px;
 }
 .index_content_flex{
   width:100%;
 }
  .index_content_flex img{
     width:100%;
  }
  .index_content_flex h1{
    font-size: 1.5em;
    font-weight: bold;
    text-align:left;
    padding:12px 0px;
    line-height: 33.5px;
    -webkit-line-clamp: 3;
    margin:0px;
  }
  .index_content_flex_footer{
    display:flex;flex-flow:row;
    margin-bottom:24px;
  }
  .index_content_flex_footer p{
    font-size: 12px;
    font-family: "PingFangSC-Regular";
    color: #9B9B9B;
    height: 16.5px;
    overflow: hidden;
    line-height: 16.5px;
    margin-top:-3px;
  }
  .index_content_flex_footer>p:nth-child(2){
    margin-left:24px;
  }
</style>

