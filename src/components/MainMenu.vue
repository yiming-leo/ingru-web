<template>
  <nav class="navbar bg-body-tertiary navbar-dark">
    <b-navbar toggleable class="container-fluid mt-2 mx-1">
      <!--公司logo和名称-->
      <b-navbar-brand class="navbar-brand" href="/">
        <img src="../assets/icon/pure_logo_white.png" class="align-middle" alt="Menu" width="50" height="50">
        <span class="fs-4 align-middle">隐入科技</span>
      </b-navbar-brand>
      <!--跳转链接栏-->
      <b-navbar-toggle id="nav-toggle" class="nav-toggle" target="nav-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" class="nav-toggle-btn"></b-icon>
          <b-icon v-else icon="chevron-bar-down" class="nav-toggle-btn"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="tab_link.link_url" v-for="tab_link in tab_link_list" :key="tab_link.index"
                      class="ml-auto nav-select-list">
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
      tab_link_list: [
        {index: 1, link_url: "#top", text: "官网顶部"},
        {index: 2, link_url: "#about", text: "关于隐入"},
        {index: 3, link_url: "#service", text: "业务内容"},
        {index: 4, link_url: "#contact", text: "联系我们"},
        {index: 5, link_url: "/investment", text: "投资组合"},
        {index: 6, link_url: "/recruitment", text: "加入我们"},
      ],
      isSidebarOpen: false
    };
  },
  mounted() {
    //这里有个丝滑滚动已被绑定到HomeView上
  },

  computed: {},
  methods: {},
}
</script>

<style scoped>
.navbar-brand{
  padding-right: 5px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.nav-select-list:hover .nav-text {
  background: rgba(231, 218, 218, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2px;
  transition: all 0.25s ease;
  border: #eaeaea 2px solid;
}

.nav-text {
  color: white;
  border-radius: 2px;
  backdrop-filter: blur(5px);
  text-shadow: rgba(79, 74, 74, 0.8) 1px 1px 5px;
  transition: background 0.7s ease, color 0.7s ease, border 1s ease;
  border: rgba(234, 234, 234, 0.0) 2px solid;
}

.nav-toggle{
  border-radius: 5px;
  backdrop-filter: blur(10px);
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
