<template>
<mu-carousel class="startpage" :active="active">
  <template slot="indicator" slot-scope="{ index, active }">
    <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
      <span class="rect-indicator"></span>
    </mu-button>
  </template>
  <mu-carousel-item  class="startpage_item" >
    <img class="carouselImg" :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item  class="startpage_item" >
    <img class="carouselImg" :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item  class="startpage_item" >
    <img class="carouselImg" :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item class="startpage_item">
    <img class="carouselImg" :src="carouselImg4">
    <img @click="LinkIndex()" class="carouselImg4_bottom" :src="carouselImg4_bottom">
  </mu-carousel-item>
</mu-carousel>
</template>

<script>
import carouselImg1 from '../assets/images/StartPage/splash_img_1.png';
import carouselImg2 from '../assets/images/StartPage/splash_img_2.png';
import carouselImg3 from '../assets/images/StartPage/splash_img_3.png';
import carouselImg4 from '../assets/images/StartPage/splash_img_4.png';
import carouselImg4_bottom from '../assets/images/StartPage/splash_img_4_bottom.png';

export default {
  name: 'StartPage',
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4,
      carouselImg4_bottom,
      active: 0
    }
  },
  methods: {
    changeActive (index) {
      console.log('当前的index:'+index)
      this.active = index;
    },
    LinkIndex () {
      this.$router.push('/index')
    }
  }
}
</script>

<style scoped>
.startpage{
  height:100vh;
  position:absolute;
  top:0;  bottom:0;  left:0;  right:0;
}
.startpage_item{
  width:100%;
}
.startpage .carouselImg{
  width:100%;  
}
.carouselImg4_bottom{
    width:90px;
    top:85%;
}


.rect-indicator{
  background:green;
}
</style>

