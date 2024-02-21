<template>
  <div class="mx-4 container">
    <div class="big-box">
      <div class="big-title">
        <div class="text-white about-decoration">Service</div>
        <div class="text-white about-title">业务内容</div>
      </div>
      <div class="text-white text-left about-text">
        隐入科技总部位于中国浙江省杭州市，是一家致力于医疗大语言模型与数字人应用技术研发的前沿科技公司。
      </div>
      <div class="text-white text-left mt-2 about-text">
        隐入科技在医疗领域推动先进的<b>语言模型技术</b>，以提高患者护理质量、推动医疗行业的数字化转型。在数字人领域打造<b>智能化的数字人物</b>，以提供更加高效、互动性强的服务体验。
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
* {
  position: relative;
}

.container {
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
//border: #000000 1px solid;
}

.about-title {
  font-size: 8vh;
  font-weight: 800;

  bottom: 10vh;
//border: #000000 1px solid;
}


.about-text {
  align-self: start;

  font-size: 20px;
  max-width: 95%;
//border: #000000 1px solid;
}
</style>
