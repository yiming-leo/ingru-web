<template>
  <div>
    <nav class="navbar bg-body-tertiary">
      <b-navbar toggleable class="container-fluid mx-1">
        <!--公司logo和名称-->
        <b-navbar-brand class="navbar-brand" href="/">
          <img src="../assets/icon/pure_logo.png" class="align-middle" alt="Menu" width="50" height="50">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab_link_list: [
        {index: 1, link_url: "#top", text: "官网顶部"},
        {index: 2, link_url: "#about", text: "关于隐入"},
        {index: 3, link_url: "#service", text: "业务内容"},
        {index: 4, link_url: "#contact", text: "合作联系"},
        {index: 5, link_url: "/development_team", text: "研发团队"},
        // {index: 5, link_url: "/investment", text: "投资组合"},
        {index: 6, link_url: "/recruitment", text: "诚聘英才"},
      ],
      isSidebarOpen: false,
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
.navbar-brand {
  color: #2c3e50;
  padding-right: 5px;
  border-radius: 5px;
}

.nav-select-list:hover .nav-text {
  color: #ffffff;
  background-color: rgba(24, 64, 196, 1);
  backdrop-filter: blur(10px);
  border-radius: 2px;
  transition: all 0.25s ease;
  border: rgba(24, 64, 196, 1) 2px solid;
}

.nav-text {
  background-color: rgba(255, 255, 255, 0.9);
  color: rgba(31, 72, 224, 1);
  border-radius: 2px;
  border: rgba(31, 72, 224, 1) 2px solid;

  backdrop-filter: blur(5px);
//text-shadow: rgba(79, 74, 74, 0.8) 1px 1px 5px; transition: background 0.7s ease, color 0.7s ease, border 1s ease;
}

.nav-toggle {
//background-color: rgba(24, 64, 196, 0.8); border: rgba(31, 72, 224, 1) 2px solid !important;
  border-radius: 2px;
  backdrop-filter: blur(10px);

  transition: all 0.25s ease;
}

.nav-toggle:hover {
  background-color: rgba(24, 64, 196, 1);;

  transition: all 0.25s ease;
}

.nav-toggle:hover .nav-toggle-btn {
  color: #ffffff;
  transition: all 0.25s ease;
}

.nav-toggle-btn {
  color: rgba(31, 72, 224, 1);
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
  background-color: rgba(117, 110, 110, 0.97) !important;
}

.navbar {
  padding: 0 10px 0 5px; /* 调整navbar宽度和高度的地方 */
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
