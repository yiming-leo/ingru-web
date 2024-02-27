<template>
  <div class="mx-4 container">
    <div class="big-box">
      <!--左边的文字-->
      <div class="left-word" ref="leftWord">
        <div class="big-title">
          <div class="text-white service-decoration">SERVICE</div>
          <div class="text-white service-title">业务内容</div>
        </div>
        <div class="text-white text-left service-text">
          公司以数据科技为基石，专注于研发医疗大模型，涵盖了医疗数据分析、预测模型构建以及基于深度学习的医疗影像处理等领域。
        </div>
        <div class="text-white text-left mt-2 service-text">
          团队不断挖掘和应用最新的人工智能技术，致力于提高医疗诊断的准确性、提升患者治疗体验以及优化医疗资源的分配和利用。
        </div>
      </div>
      <!--右边的动画-->
      <div class="right-animation">
        <div class="animation-content" ref="animationContent">
          <div class="background-cortina" v-for="display_box in display_list" :key="display_list.index"
               :style="'background-image: url('+display_box.background+')'">
            <div class="display-box">
              <div class="display-icon">{{ display_box.icon }}</div>
              <div class="display-name">{{ display_box.name }}</div>
              <div class="display-description">{{ display_box.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {gsap} from 'gsap';

export default {
  data() {
    return {
      showImage1: true,
      display_list: [
        {
          index: 1,
          icon: '',
          name: '医疗数据分析',
          description: '打造领先的医疗数据分析平台，深度挖掘和分析医疗数据，提供可靠的洞察和决策支持，助力医疗行业迈向智能化和高效化的未来',
          background: require('@/assets/img/bk4.jpg')
        },
        {
          index: 2,
          icon: '',
          name: '医疗影像处理',
          description: '搭建先进的处理系统，通过精准的图像分析和处理技术，为临床医生提供可靠的诊断支持，引领医疗科技向更高水平发展',
          background: require('@/assets/img/bk7.jpg')
        },
        {
          index: 3,
          icon: '',
          name: '预测模型构建',
          description: '开发前沿的医疗预测模型平台，持续分析医疗数据，迭代模型产品，为医疗行业提供可靠的预测模型，为未来的医疗决策提供重要支持',
          background: require('@/assets/img/bk9.jpg')
        },
      ]
    }
  },
  mounted() {
    //--------------------------监听视口而响应第一次进入的动画------------------------
    const animationContent = this.$refs.animationContent;
    const leftWord = this.$refs.leftWord;
    const imgElements = animationContent.querySelectorAll('.image-part');
    const leftTitleElement = leftWord.querySelector('.big-title');
    const leftTextElements = leftWord.querySelectorAll('.text-left');
    //这是对左边文字的监听
    const leftTextObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('animation-content 进入视口');
          // 在这里可以触发你想要的动画效果
          gsap.to(leftTitleElement, {opacity: 1, y: 0, duration: 2.5});
          gsap.to(leftTextElements, {opacity: 1, y: 0, duration: 2.5});
        } else {
          console.log('animation-content 离开视口');
          // 在这里可以触发你想要的反向动画效果
          gsap.set(leftTitleElement, {opacity: 0, y: 150, duration: 2});
          gsap.set(leftTextElements, {opacity: 0, y: 150, duration: 2});
        }
      });
    }, {
      threshold: 0.01 // 定义进入视口的阈值，最好是接近0，不然会有向上滚动会有不适
    });
    //这是对右边图片的监听
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('animation-content 进入视口');
          gsap.to(imgElements, {opacity: 1, duration: 2});
        } else {
          console.log('animation-content 离开视口');
          gsap.set(imgElements, {opacity: 0, duration: 2});
        }
      });
    }, {
      threshold: 0.01 // 定义进入视口的阈值，最好是接近0，不然会有向上滚动会有不适
    });
    observer.observe(animationContent);
    leftTextObserver.observe(leftWord);
  },
  methods: {}
}
</script>

<style scoped>
* {
  position: relative;
}

.container {
  height: 130vh; /* 文字前景高度，这里改动后还要在HomeView里面调整.service-background的高度 */
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //border: rgba(114, 224, 114, 0.34) 1px solid;
}

.big-box {
  height: 100%;
  width: 95vw;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  position: relative;
  left: 0;

  //border: #e0b25c 1px solid;
}

.left-word {
  height: 80%;
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //border: #c3e05c 1px solid;
}

.right-animation {
  height: 90%;
  width: 60%;
  margin-top: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //border: #5ce0c1 1px solid;
}

.animation-content {
  width: 70%;
  height: 70%;

  //border: #5cb8e0 1px solid;
}

.background-cortina {
  margin: 20px 30px 20px 30px;
  border-radius: 15px;
  width: auto;
  height: 25vh;
  background-size: cover;
  background-position: center;

  //border: #2f6ca9 1px solid;
}


.display-box {
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-content: flex-start;
  flex-wrap: nowrap;

  border-radius: 15px;
  box-shadow: #2c3e50 1px 1px 15px;
  color: #eaeaea;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: linear-gradient(to bottom right, rgba(37, 102, 175, 0.7), rgba(10, 19, 70, 0.7));
  transition: all ease-in-out 0.3s;
}

.display-box:hover {
  box-shadow: #5c748c 1px 1px 15px;
  transition: all ease-in-out 0.3s;
}

.display-icon {

}

.display-name {
  text-align: left;
  padding: 10px 10px 5px 15px; /* 改变右边文字离左边的间隙 */

  font-size: 25px;
  font-weight: 800;

//border: #e02121 1px solid;
}

.display-description {
  width: 80%;
  text-align: left;
  margin: 15px 10px 5px 15px; /* 改变右边文字离左边的间隙 */

  font-size: 20px;

//border: #40a92f 1px solid;
}

.image-part {
  height: 50%;
  width: 100%;
}

.big-title {
  align-self: start;
  text-align: left;

  //border: #ffffff 1px solid;
}

.service-decoration {
  opacity: 0.3;
  font-weight: 700;
  font-size: 10vh;
  //border: #ffffff 1px solid;
}

.service-title {
  font-size: 8vh;
  font-weight: 800;

  bottom: 10vh;
  //border: #ffffff 1px solid;
}

.service-text {
  align-self: start;

  font-size: 20px;
  max-width: 95%;
  //border: #60b7a8 1px solid;
}
</style>
