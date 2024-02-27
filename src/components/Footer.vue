<template>
  <div class="footer">
    <div class="top-box">
      <div class="left-card">
        <img class="logo" src="@/assets/icon/text_logo_white.png"
             alt="Your browser does not support such of this image"/>
        <div class="cop-name">隐入（杭州）科技有限公司</div>
        <div class="location">地址：浙江省杭州市滨江区星城中心B座1101</div>
        <div class="area-code">邮编：310051</div>
      </div>
      <!--      <div class="middle-card">-->
      <!--        权威认证-->
      <!--      </div>-->
      <div class="right-card">
        <div class="brand">联系我们</div>
        <div class="social-media">
          <div class="contact-method">
            <svg id="wechat" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-wechat icon"
                 viewBox="0 0 16 16">
              <path
                  d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
              <path
                  d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
            </svg>
            <!--1. 如果后续有新的社交媒体logo，请放这里: svg或者是b-icon-->
          </div>
          <b-popover target="wechat" triggers="hover" placement="top">
            <img src="@/assets/img/wechat_qr_code.png" alt="你的浏览器暂不支持显示此图片" width="100px" height="100px">
            <div class="popover-text">打开微信扫一扫</div>
          </b-popover>
          <!--2. 如果后续有新的社交媒体链接，请放这里: b-popover target写绑定社交媒体的id-->
          <div class="contact-method" id="email">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill icon"
                 viewBox="0 0 16 16">
              <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
            </svg>
            <div class="icon-context">邮箱：it@ingru.ai</div>
          </div>
          <div class="contact-method" id="telephone">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill icon"
                 viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
            <div class="icon-context">电话：+86 17788886513 / +86 13918186286</div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <span>Copyright©2024隐入（杭州）科技有限公司版权所有&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a href="http://beian.miit.gov.cn/" class="beian">浙ICP备2024065338号</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.footer {
  box-shadow: rgba(54, 54, 54, 0.15) 1px -1px 15px;
  background-color: rgb(24, 33, 65); /* 设置 footer 的背景颜色 */
  backdrop-filter: blur(10px); /* 添加毛玻璃效果，模糊半径为 10px */

  color: #d2d2d2;
  display: flex;
  flex-direction: column;

  font-size: 14px;

  height: 300px;
  z-index: 500;

//border: rgba(206, 33, 94, 0.8) 1px solid;
}

.top-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  height: 80%;

//border: rgba(33, 206, 174, 0.8) 1px solid;
}

/*----------left-card------------*/
.left-card {
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;

//border: rgba(33, 114, 206, 0.8) 1px solid;
}

.logo {
  margin: 5px 0 10px 0;
  width: 120px;
  height: 50px;
}

.cop-name {
  margin: 5px 0 10px 0;
  font-size: 25px;
  color: #ffffff;
  font-weight: 900;
}

.location, .area-code {
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0 5px 0;
}

/*----------middle-card------------*/
.middle-card {
  width: 20%;
  height: 100%;
//border: rgba(33, 114, 206, 0.8) 1px solid;
}

/*----------right-card------------*/
.right-card {
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

//border: rgba(33, 114, 206, 0.8) 1px solid;
}

.brand {
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  margin: 15px 0 15px 0;
}

.social-media {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

//border: rgba(206, 59, 33, 0.8) 1px solid;
}

.contact-method:first-child {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
}

.contact-method:nth-last-child(-n+2) {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;
}

.icon-context {
  margin: 0 0 0 10px;
}

.icon {
  color: #eaeaea;
  width: 28px;
  height: 28px;
}


/*----------bottom------------*/

.copy-right {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  height: 20%;

//border: rgba(206, 177, 33, 0.8) 1px solid;
}

.beian {
  text-decoration: none;
  color: #d2d2d2;

//border: rgba(65, 206, 33, 0.8) 1px solid;
}

</style>
