<!--首页关于我们展示的文件-->
<template>
  <div class="mx-4 container">
    <div class="big-box">
      <div class="big-title">
        <div class="about-decoration">ABOUT</div>
        <div class="about-title">关于隐入</div>
      </div>
      <div class="text-left about-text">
        隐入科技总部位于中国浙江省杭州市，是一家致力于医疗大语言模型与数字人应用技术研发的前沿科技公司。
      </div>
      <div class="text-left mt-2 about-text">
        隐入科技在医疗领域推动先进的<b>语言模型技术</b>，以提高患者护理质量、推动医疗行业的数字化转型。在数字人领域打造<b>智能化的数字人物</b>，以提供更加高效、互动性强的服务体验。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>
* {
  position: relative;
}

.container {
  width: 100vw;
  height: 95vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

//border: #000000 1px solid;
}

.big-box {
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

//border: #000000 1px solid;
}

.big-title {
  align-self: start;
  text-align: left;

//border: #000000 1px solid;
}

.about-decoration {
  opacity: 0.3;
  font-weight: 700;
  font-size: 12vh;

  color: #ffffff;

  animation: about-decoration-infinite-slide 3s linear infinite alternate;
  animation-delay: 0.3s;
//border: #000000 1px solid;
}

.about-title {
  font-size: 8vh;
  font-weight: 800;

  bottom: 10vh;

  color: #ffffff;

  animation: about-title-infinite-slide 2.5s linear infinite alternate;
  animation-delay: 0.5s;
//border: #000000 1px solid;
}

.about-text {
  align-self: start;

  font-size: 20px;
  max-width: 95%;

  color: #ffffff;

//border: #000000 1px solid;
}

@keyframes about-decoration-infinite-slide {
  0% {
    transform: translateY(0); /* 初始位置 */
  }
  100% {
    transform: translateY(13px); /* 最终位置 */
  }
}

@keyframes about-title-infinite-slide {
  0% {
    transform: translateY(0); /* 初始位置 */
  }
  100% {
    transform: translateY(25px); /* 最终位置 */
  }
}
</style>
