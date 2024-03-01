<!--首页联系我们展示的文件-->
<template>
  <div class="mx-4 container">
    <div class="big-box">
      <div class="big-title">
        <div class="text-white about-decoration">CONTACT</div>
        <div class="text-white about-title">联系我们</div>
      </div>

      <div class="location-tab">
        <div class="text-white about-location-btn" @click="cityChange(1)">杭州</div>
<!--        <div class="text-white about-location-btn ml-4" @click="cityChange(2)">上海</div>-->
      </div>

      <div class="all-container">
        <div class="location-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-geo-alt-fill icon"
               viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>

          <div class="text-white text-left about-text">
            {{ default_location }}
          </div>
        </div>

        <div class="email-container">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill icon"
               viewBox="0 0 16 16">
            <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>
          <div class="text-white text-left about-text ">
            {{ default_email }}
          </div>
        </div>
        <div class="telephone-container">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill icon"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          <div class="text-white text-left about-text">
            <!--模板用于解析多个电话号码的换行符-->
            <template v-for="line in default_telephone.split('\n')">
              <div>{{ line }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      default_city: '杭州',
      default_location: '浙江省杭州市滨江区星城中心B座1101',
      default_email: 'it@ingru.ai',
      default_telephone: '+86 17788886513\n+86 13918186286',
      default_bk_map: '@/assets/img/cop_map_hz.png'
    }
  },
  computed: {},
  methods: {
    cityChange(location) {
      if (location === 1) {
        this.default_city = '杭州'
        this.default_location = '浙江省杭州市滨江区星城中心B座1101'
        this.default_email = 'it@ingru.ai'
        this.default_telephone = '+86 17788886513\n+86 13918186286'
        this.default_bk_map = '@/assets/img/cop_map_hz.png'
        //切换城市背景
        this.$emit('change-location-image', 'hz')
      } else if (location === 2) {
        this.default_city = '上海'
        this.default_location = '上海市青浦区双联路158号1幢11层S区005室'
        this.default_email = 'it@ingru.ai'
        this.default_telephone = '+86 18916939905'
        this.default_bk_map = '@/assets/img/cop_map_sh.png'
        //切换城市背景
        this.$emit('change-location-image', 'sh')
      }
      const element = document.querySelector('.all-container');
      element.classList.remove('animate-location'); // 先移除动画类名
      setTimeout(() => {
        element.classList.add('animate-location'); // 一段时间后重新添加动画类名
      }, 2); // 这里设置一个小延迟，以确保类名移除成功
    }
  }
}

</script>

<style scoped>
* {
  position: relative;
}

.container {
  height: 95vh;

  display: flex;
  flex-direction: column;
}

.location-tab {
  display: flex;
  align-self: start;

  margin: 0px 0px 40px 0px;
//border: #000000 1px solid;
}

/* 虚拟类 */
.animate-location {
  animation: moveLocation 0.7s ease-in-out;
}

@keyframes moveLocation {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.about-location-btn {
  font-size: 20px;
  padding: 4px 10px 4px 10px;
  border-radius: 2px;
  cursor: pointer;
  backdrop-filter: blur(0px);
  border: rgba(255, 255, 255, 1) 2px solid;
  transition: all 0.5s ease;
}

.about-location-btn:hover {
  font-size: 20px;
  background: rgba(231, 218, 218, 0.15);
  padding: 4px 10px 4px 10px;
  border-radius: 2px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  border: rgba(255, 255, 255, 1) 2px solid;
  transition: all 0.5s ease;
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
  height: 200px;

//border: #000000 1px solid;
}

.about-decoration {
  opacity: 0.3;
  font-weight: 700;
  font-size: 10vh;
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
  margin-left: 6px;

  font-size: 20px;
  max-width: 95%;

//border: #000000 1px solid;
}

.icon {
  color: #eaeaea;
  width: 31px;
  height: 31px;

//border: black 1px solid;
}

.all-container {
  display: flex;
  align-self: start;
  flex-direction: column;

  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  backdrop-filter: blur(3px);
  box-shadow: rgba(54, 54, 54, 0.15) 2px 2px 15px;
  background-color: rgba(255, 255, 255, 0.1);

//border: black 1px solid;
}

.location-container {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;

  margin: 0 0 5px 0;
}

.email-container {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;

  margin: 5px 0 5px 0;
}

.telephone-container {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
