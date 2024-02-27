<!--公司招聘的页面，招聘信息填报-->
<template>
  <div class="recruitment">
    <div id="main-menu" :class="{ 'main-menu': true, 'scrolled': isScrolled }">
      <MainMenu></MainMenu>
    </div>
    <div id="scroll-container" v-smooth-scrollbar="{ options: {damping: 0.05} }" class="scroll-container"></div>
    <div id="footer" class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import Footer from "@/components/Footer.vue";
import SmoothScrollbar from "smooth-scrollbar";

export default {
  name: "recruitment",
  components: {Footer, MainMenu},
  data() {
    return {}
  },
  mounted() {
    //--------------------------滚动监听------------------------
    const height_scrollbar = SmoothScrollbar.init(document.getElementById('scroll-container')); // 获取SmoothScrollbar对象
    height_scrollbar.addListener(this.handleScroll); // 添加滚动事件监听器
  },
  methods: {
    //----------------滚动页面时的navbar----------------
    handleScroll(status) {
      const scrolledPercentage = (status.offset.y / window.innerHeight) * 100; // 计算滚动位置占视口高度的百分比
      // console.log('scrolledPercentage ', scrolledPercentage)
      this.isScrolled = scrolledPercentage > 0;
    }
  },
  //----------------滚动页面时的navbar----------------
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // 在组件销毁前移除滚动事件监听器
  }
}
</script>

<style scoped>

</style>
