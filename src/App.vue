<template>
  <div id="app" class="root">
    <router-view/>
  </div>
</template>

<style lang="less">

/* 隐藏滚动条但保留滚动功能 */
html,body {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  height: 100%;
  margin: 0;
  padding: 0;

  ::selection { /* 将文字选择时的蓝色框框颜色 */
    background-color: rgba(255, 196, 0, 0.6);
  }

}

/* 添加滚动条样式以保持滚动功能 */
::-webkit-scrollbar {
  display: none; /* Safari 和 Chrome */
}

.root {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #456df2, #7c3aed);

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
