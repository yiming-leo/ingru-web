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
    <div id="scroll-container" v-smooth-scrollbar class="scroll-container">
      <!--放在首页的视频-->
      <div id="#top" class="top-container">
        <DisplayVideo></DisplayVideo>
      </div>
      <!--关于隐入-->
      <div id="#about" class="about-container">
        <AboutContent></AboutContent>
      </div>
      <!--隐入业务-->
      <div id="#service" class="service-container">
        <ServiceContent></ServiceContent>
      </div>
      <!--联系我们-->
      <div id="#contact" class="contact-container">
        <ContactContent></ContactContent>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import DisplayVideo from "@/components/DisplayVideo.vue";
import Footer from "@/components/Footer.vue";
import SmoothScrollbar from "smooth-scrollbar";
import AboutContent from "@/components/AboutContent.vue";
import ServiceContent from "@/components/ServiceContent.vue";
import ContactContent from "@/components/ContactContent.vue";

export default {
  name: 'HomeView',
  components: {
    ContactContent,
    ServiceContent,
    AboutContent,
    Footer,
    DisplayVideo,
    MainMenu,
  },
  data() {
    return {}
  },
  mounted() {
    //--------------丝滑锚点滚动------------
    const anchors = document.querySelectorAll('a[href^="/#"]');
    // 初始化 SmoothScrollbar，绑定到id=scroll-container上
    const scrollbar = SmoothScrollbar.init(document.getElementById('scroll-container'));

    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认点击事件

        const targetId = this.getAttribute('href').substring(1); // 获取锚点的目标ID
        const targetElement = document.getElementById(targetId); // 获取目标元素
        //特殊判断#top锚点
        if (targetElement) {
          let offsetTop = 0
          if (String(targetId) === "#top") {
            console.log("侦测到", targetId)
            offsetTop = targetElement.offsetTop;
          } else {
            offsetTop = targetElement.offsetTop; // 获取目标元素距离页面顶部的偏移量
          }
          console.log("offsetTop", offsetTop)
          // 使用 SmoothScrollbar 提供的 API 实现平滑滚动效果
          scrollbar.scrollTo(
              0, offsetTop, 1700, // 滚动持续时间（以毫秒为单位）
          );
        }
      });
    });
    //----------------------------------
  },
  methods: {}
}
</script>
<style scoped>

/* --------------------Scroll-------------------------- */

/* 丝滑滚动元素 */
.scroll-container {
  width: 100%;
  height: 100vh; /* !!!三方库与原生js冲突开关!!! */
  object-fit: cover;
}

/* --------------------Navbar-------------------------- */

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

/* --------------------Footer-------------------------- */

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 500;
}

/* --------------------Top-------------------------- */

.top-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

video { /* 控制DisplayVideo内部的video标签的工具 */
  width: 100%;
  height: 100%;
  object-fit: cover; /* 或者使用 "object-fit: fill;" */
}

/* --------------------About-------------------------- */

.about-container {
  background-image: url("@/assets/img/about_bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;

}

/* --------------------Service-------------------------- */

.service-container {
  position: relative;
  /* 添加额外的上边距，以避免内容被视频容器遮挡 */
//padding-top: 100vh; /* 使用视频容器的高度作为上边距 */
}

/* --------------------Contact-------------------------- */
/* before可以再背景图片前面加一层遮罩层 */
.contact-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, rgba(44, 155, 196, 0.7), rgba(44, 69, 196, 0.7), rgba(97, 33, 225, 0.65)); /* 半透明蓝色背景 */
}

.contact-container {
  background-image: url("@/assets/img/cop_map_hz.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100vh;
}
</style>
