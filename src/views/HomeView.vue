<template>
  <div>
    <!--固定区域-->
    <!--导航栏的主菜单-->
    <div id="main-menu" class="main-menu">
      <MainMenu></MainMenu>
    </div>
    <div id="footer" class="footer">
      <Footer></Footer>
    </div>
    <div v-smooth-scrollbar="{ options: { damping: 0.05 } }" class="scroll-container">
      <!--第1部分-->
      <!--放在首页的视频-->
      <div id="#top" class="top-container">
<!--        top-->
        <DisplayVideo></DisplayVideo>
      </div>
      <!--第2部分-->
      <!--关于隐入-->
      <div id="#about" class="about-container">
<!--        about-->

      </div>
      <!--第3部分-->
      <!--隐入业务-->
      <div id="#service" class="service-container">
<!--        service-->
        <DisplayVideo></DisplayVideo>
      </div>
      <!--第4部分-->
      <!--联系我们-->
      <div id="#contact" class="contact-container">
<!--        contact-->
        <DisplayVideo></DisplayVideo>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import DisplayVideo from "@/components/DisplayVideo.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'HomeView',
  components: {
    Footer,
    DisplayVideo,
    MainMenu,
  },
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}
</script>
<style scoped>
.scroll-container {
  width: 100%;
  height: 100%; /* !!!三方库与原生js冲突开关!!! */
}

video { /* 控制DisplayVideo内部的video标签的工具 */
  width: 100%;
  height: 100%;
  object-fit: cover; /* 或者使用 "object-fit: fill;" */
}

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 500;
}

.top-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.about-container {
  /* 添加额外的上边距，以避免内容被视频容器遮挡 */
  padding-top: 100vh; /* 使用视频容器的高度作为上边距 */
}

.service-container {
  /* 添加额外的上边距，以避免内容被视频容器遮挡 */
  padding-top: 100vh; /* 使用视频容器的高度作为上边距 */
}

.contact-container {
  /* 添加额外的上边距，以避免内容被视频容器遮挡 */
  padding-top: 100vh; /* 使用视频容器的高度作为上边距 */
}
</style>
