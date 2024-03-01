<template>
  <div>
    <!--固定区域-->
    <!--导航栏的主菜单-->
    <div id="main-menu" :class="{ 'main-menu': true, 'scrolled': isScrolled }" class="navbar-container">
      <MainMenu text-color="white"></MainMenu>
    </div>
    <div id="scroll-container" v-smooth-scrollbar="{ options: {damping: 0.05} }" class="scroll-container">
      <!--放在首页的视频-->
      <div id="#top" class="top-container">
        <div class="top-cortina">
          <MainDisplay></MainDisplay>
        </div>
      </div>
      <!--关于隐入-->
      <div id="#about" class="about-container">
        <div class="about-cortina">
          <AboutContent></AboutContent>
        </div>
      </div>
      <!--隐入业务-->
      <div id="#service" class="service-container" @scroll="serviceParallaxScroll">
        <div class="service-cortina">
          <div class="service-background"></div>
        </div>
        <div class="service-foreground" :style="{ transform: `translateY(${serviceForegroundOffset}px)` }">
          <ServiceContent></ServiceContent>
        </div>
      </div>
      <!--联系我们-->
      <div id="#contact" class="contact-container">
        <div class="contact-container-lg" :style="backgroundImageStyle">
          <div class="contact-container-bg">
            <ContactContent @change-location-image="handleLocationImageChange"></ContactContent>
          </div>
        </div>
      </div>
      <div id="footer" class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Footer from "@/components/Footer.vue";
import SmoothScrollbar from "smooth-scrollbar";
import AboutContent from "@/components/AboutContent.vue";
import ServiceContent from "@/components/ServiceContent.vue";
import ContactContent from "@/components/ContactContent.vue";
import MainDisplay from "@/components/TopContent.vue";

export default {
  name: 'HomeView',
  components: {
    MainDisplay,
    ContactContent,
    ServiceContent,
    AboutContent,
    Footer,
    MainMenu,
  },
  data() {
    return {
      location_abbr: 'hz',
      serviceForegroundOffset: 0,
      isScrolled: false
    }
  },
  computed: {
    //--------------------------contact背景图片监听------------------------
    backgroundImageStyle() {
      return {
        backgroundImage: `url(${require('@/assets/img/main/cop_map_' + this.location_abbr + '.png')})`,
        transform: 'translateX(0)'
      };
    }
  },
  mounted() {
    //--------------------------service视差监听------------------------
    // 初始化 SmoothScrollbar，绑定到id=scroll-container上
    const parallax_scrollbar = SmoothScrollbar.init(document.getElementById('#service'));
    // 监听 Smooth Scrollbar 提供的 scroll 事件
    parallax_scrollbar.addListener((status) => {
      this.serviceParallaxScroll();
    });


    //--------------------------丝滑锚点滚动------------------------
    // 初始化 SmoothScrollbar，绑定到id=scroll-container上
    const scrollbar = SmoothScrollbar.init(document.getElementById('scroll-container'));
    // const anchors = document.querySelectorAll('div[id^="#"]');
    // anchors.forEach(anchor => {
    //   anchor.addEventListener('click', function (e) {
    //     e.preventDefault(); // 阻止默认点击事件
    //     const targetId = this.getAttribute('href').substring(1); // 获取锚点的目标ID
    //     const targetElement = document.getElementById(targetId); // 获取目标元素
    //     //特殊判断#top锚点
    //     if (targetElement) {
    //       let offsetTop = 0
    //       if (String(targetId) === "#top") {
    //         // console.log("侦测到", targetId)
    //         offsetTop = targetElement.offsetTop;
    //       } else {
    //         offsetTop = targetElement.offsetTop; // 获取目标元素距离页面顶部的偏移量
    //       }
    //       // console.log("offsetTop", offsetTop)
    //       // 使用 SmoothScrollbar 提供的 API 实现平滑滚动效果
    //       scrollbar.scrollTo(
    //           0, offsetTop, 1700, // 滚动持续时间（以毫秒为单位）
    //       );
    //     }
    //   });
    // });

    // --------------------------滚轮锚点定位--------------------------
    document.addEventListener('wheel', function (event) {
      event.preventDefault(); // 阻止默认滚动行为
      const anchors = document.querySelectorAll('div[id^="#"]'); // 获取所有带有 href 属性以 "#" 开头的锚点链接
      // console.log("anchors: ", anchors)
      const currentScrollY = scrollbar.scrollTop; // 获取当前滚动位置
      let targetAnchor = null;
      // 判断滚动方向
      if (event.deltaY < 0) {
        // 向上滚动
        for (let i = anchors.length - 1; i >= 0; i--) {
          const anchor = anchors[i];
          // console.log('anchor: ', anchor)
          const targetId = anchor.getAttribute('id') // 获取锚点的目标ID
          // console.log('targetId', targetId)
          const targetElement = document.getElementById(targetId); // 获取目标元素
          if (targetElement.offsetTop < currentScrollY) {
            targetAnchor = anchor;
            break;
          }
        }
      } else {
        // 向下滚动
        for (let i = 0; i < anchors.length; i++) {
          const anchor = anchors[i];
          // console.log('anchor: ', anchor)
          const targetId = anchor.getAttribute('id') // 获取锚点的目标ID
          const targetElement = document.getElementById(targetId); // 获取目标元素
          if (targetElement.offsetTop > currentScrollY) {
            targetAnchor = anchor;
            break;
          }
        }
      }
      // 如果找到了目标锚点，则滚动到该锚点
      if (targetAnchor) {
        const targetId = targetAnchor.getAttribute('id')
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop; // 获取目标元素距离页面顶部的偏移量
        scrollbar.scrollTo(0, offsetTop, 1200); // 使用 SmoothScrollbar 提供的 API 实现平滑滚动效果
      }
    });
    //--------------------------滚轮滚动监听------------------------
    const height_scrollbar = SmoothScrollbar.init(document.getElementById('scroll-container')); // 获取SmoothScrollbar对象
    height_scrollbar.addListener(this.handleScroll); // 添加滚动事件监听器
  },
  methods: {
    //--------------------------“联系我们”背景图片切换------------------------
    handleLocationImageChange(newLocationImageAbbr) {
      this.location_abbr = newLocationImageAbbr;
    },
    //--------------------------“业务内容”视差背景制造----------------------
    serviceParallaxScroll() {
      const scrollbar = SmoothScrollbar.get(document.getElementById('#service'));
      // console.log('scrollbar: ', scrollbar)
      if (scrollbar) {
        const scrollTop = scrollbar.offset.y;
        this.serviceForegroundOffset = scrollTop * 0.95; // 调整视差滚动速度(x>1:上下图层反向滚动, 1:前景不动背景动, 0<x<1: 数值越大，视差越明显)
      }
    },
    //--------------------------用于navbar固定------------------------
    handleScroll(status) {
      const scrolledPercentage = (status.offset.y / window.innerHeight) * 100; // 计算滚动位置占视口高度的百分比
      // console.log('scrolledPercentage ', scrolledPercentage)
      this.isScrolled = scrolledPercentage > 0;
    },
  },
  //--------------------------用于navbar固定------------------------
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // 在组件销毁前移除滚动事件监听器
  }
}
</script>
<style scoped>
/* --------------------Scroll-------------------------- */
/* 丝滑滚动元素 */
.scroll-container {
  width: 100vw;
  height: 100vh; /* !!!三方库与原生js冲突开关!!! */
  object-fit: cover;
}

/* --------------------Navbar-------------------------- */

.scrolled {
  padding: 10px 20px 10px -5px; /* 调整navbar宽度和高度的地方 */
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: rgba(42, 42, 42, 0.3) 1px 1px 15px;

  transition: all ease-in-out 0.3s;
}

.main-menu {
  position: fixed;
  top: 0;
  left: 2.5%;
  width: 95%;
  border-radius: 30px;
  z-index: 999;

  margin: 10px 10px 10px 0px;

  transition: all ease-in-out 0.3s;
}

/* --------------------Top-------------------------- */
.top-container {
  background-image: url("@/assets/img/main/cube_ocean.png");
  width: 100vw;
  height: 100vh;
  color: #ffffff; /* 对top内容的全局变量修饰 */
  text-shadow: black 1px 1px 15px; /* 对about内容的全局变量修饰 */

  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.top-cortina {
  width: 100vw;
  height: 100vh;
}

video { /* 控制DisplayVideo内部的video标签的工具，如果要在首页放置视频的话 */
  width: 100%;
  height: 100%;
  object-fit: cover; /* 或者使用 "object-fit: fill;" */
}

/* --------------------About-------------------------- */
.about-container {
  background-image: url("@/assets/img/main/honeycomb_pink.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.about-cortina {
  width: 100vw;
  height: 100vh;
  text-shadow: black 1px 1px 15px; /* 对about内容的全局变量修饰 */
//background-image: linear-gradient(to bottom right, rgba(12, 14, 140, 0.2), rgba(44, 69, 196, 0.2), rgba(16, 47, 225, 0.15));
}

/* --------------------Service-------------------------- */

.service-container {
  position: relative;
  width: 100%;
  height: 100vh; /* 保证整个视口都在黑幕里 */

  overflow-y: scroll;
  display: flex;

//border: #dbe2ec 1px solid;
}

.service-cortina { /* 再背景后面的幕布 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150%;

  background-color: white; /* 背景色 */
}

.service-background {
  position: absolute;
  top: 0;
  left: -45%; /* 左移50% */
  transform: translateX(-45%); /* 移回50% */
  width: 300%; /* 宽度300% */

  height: 150%; /* 视差背景高度 */
  /* 超级背景 */
  background: radial-gradient(rgba(25, 25, 28, 0) 10%, #19191c 50%),
  conic-gradient(#9c3cf7 0, #3754e3 14%, #19191c 21.2%, #19191c 22.2%,
      #b40a45 30.5%, #b73b06 46.4%, #060551 54.2%, #9c3cf7 100%);
  background-size: cover;
}

.service-foreground {
  width: 100vw;
//border: #e77878 1px solid;
}

/* --------------------Contact-------------------------- */
.contact-container {
  width: 100%;
  height: 100vh;
}

.contact-container-lg {
  background-size: cover;
  background-position: 0 100%;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 200;
}

.contact-container-bg {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom right, rgba(44, 155, 196, 0.4), rgba(44, 69, 196, 0.4), rgba(97, 33, 225, 0.35));
  z-index: 195;
}

/* --------------------Footer-------------------------- */
.footer {
  bottom: 0;
  left: 0;

  width: 100%;
}

</style>
