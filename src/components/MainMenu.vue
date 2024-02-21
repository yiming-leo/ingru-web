<template>
  <nav class="navbar bg-body-tertiary navbar-dark">
    <b-navbar toggleable class="container-fluid mt-2 mx-1">
      <!--公司logo和名称-->
      <b-navbar-brand class="navbar-brand" href="/">
        <img src="../assets/icon/pure_logo_white.png" class="align-middle" alt="Menu" width="50" height="50">
        <span class="fs-4 align-middle">隐入科技</span>
      </b-navbar-brand>
      <!--跳转链接栏-->
      <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" class="nav-toggle-btn"></b-icon>
          <b-icon v-else icon="chevron-bar-down" class="nav-toggle-btn"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="tab_link.link_url" v-for="tab_link in tab_link_list" class="ml-auto nav-select-list">
            <div class="nav-text py-1 px-2">{{ tab_link.text }}</div>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav_link_list: [
        {index: 1, link_url: "#main-menu", text: "首页"},
        {index: 2, link_url: "#about", text: "关于隐入"},
        {index: 3, link_url: "#service", text: "隐入业务"},
        {index: 4, link_url: "#contact", text: "联系我们"},
      ],
      tab_link_list: [
        {index: 0, link_url: "#top", text: "官网顶部", link_element_id: "top"},
        {index: 1, link_url: "#about", text: "关于隐入", link_element_id: "about"},
        {index: 2, link_url: "#service", text: "隐入业务", link_element_id: "service"},
        {index: 3, link_url: "/investment", text: "投资组合"},
        {index: 4, link_url: "#contact", text: "联系我们", link_element_id: "contact"},
        {index: 5, link_url: "/recruitment", text: "加入我们"},
      ],
      isSidebarOpen: false
    };
  },
  mounted() {
    const anchors = document.querySelectorAll('a[href^="/#"]');
    // 为每个锚点元素添加点击事件监听器
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认点击事件

        const targetId = this.getAttribute('href').substring(1); // 获取锚点的目标ID
        const targetElement = document.getElementById(targetId); // 获取目标元素

        if (targetElement) {
          const offsetTop = targetElement.offsetTop; // 获取目标元素距离页面顶部的偏移量
          const scrollOffset = window.scrollY; // 获取当前页面滚动的偏移量

          let distance = 0;
          console.log("targetId", targetId)
          //特殊判断#top锚点
          if (String(targetId) === "#top") {
            console.log("侦测到", targetId)
            distance = offsetTop - scrollOffset;
          } else {
            distance = offsetTop - scrollOffset + window.innerHeight; // 计算目标元素与当前页面顶部的距离
          }
          // 使用 requestAnimationFrame() 实现平滑滚动效果
          requestAnimationFrame((currentTime) => {
            const duration = 1700; // 总滚动持续时间（以毫秒为单位）
            let startTime = currentTime;

            const easeOutCubic = (t, b, c, d) => {
              return c * ((t = t / d - 1) * t * t + 1) + b;
            };

            // 使用 requestAnimationFrame() 实现平滑滚动效果
            const smoothScroll = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const timeElapsed = currentTime - startTime;

              // 添加延迟
              if (timeElapsed < delay) {
                requestAnimationFrame(smoothScroll);
                return;
              }

              const scrollAmount = easeOutCubic(timeElapsed - delay, scrollOffset, distance, duration);
              window.scrollTo(0, scrollAmount);
              if (timeElapsed - delay < duration) {
                requestAnimationFrame(smoothScroll);
              }
            };

            const delay = 400; // 初始延迟时间（以毫秒为单位）
            setTimeout(() => {
              requestAnimationFrame(smoothScroll); // 开始平滑滚动
            }, delay);

            requestAnimationFrame(smoothScroll); // 开始平滑滚动
          });
        }
      });
    });
  },

  computed: {},
  methods: {},
}
</script>

<style scoped>

.nav-select-list:hover .nav-text {
  background: rgba(231, 218, 218, 0.2);
  transition: background 0.5s ease, color 0.5s ease, border 0.5s ease;
//border-radius: 3px; border: #eaeaea 2px solid;
}

.nav-text {
  color: white;
  text-shadow: rgba(79, 74, 74, 0.8) 1px 1px 5px;
  transition: background 0.7s ease, color 0.7s ease, border 1s ease;
//border-radius: 3px; border: rgba(234, 234, 234, 0.0) 2px solid;
}

.nav-toggle-btn {
  color: aliceblue;
  font-size: 24px;
}

.menu-btn {
  z-index: 999;
//pointer-events: none; /* 忽略鼠标事件 */
}

img {
  vertical-align: middle;
}

/* 清除按钮在 focus 状态下的样式 */
.btn:focus {
  box-shadow: none !important;
}

/* b-sidebar底层 */
.custom-sidebar {
  z-index: 900;
}

::v-deep .bg-light {
  background-color: rgba(255, 255, 255, 0.97) !important;
}

.navbar {
  background-color: transparent !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

.nav-tab-link {
  text-decoration: none;
  font-size: 20px;
  color: #0240b9;
}

</style>
