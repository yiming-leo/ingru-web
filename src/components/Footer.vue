<!--页脚文件-->
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
            <!--微信公众号-->
            <svg id="wechat" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-wechat icon"
                 viewBox="0 0 16 16">
              <path
                  d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.32.32 0 0 0-.12.366l.218.81a.6.6 0 0 1 .029.117.166.166 0 0 1-.162.162.2.2 0 0 1-.092-.03l-1.057-.61a.5.5 0 0 0-.256-.074.5.5 0 0 0-.142.021 5.7 5.7 0 0 1-1.576.22M9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.6.6 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.63.63 0 0 0 .098.356"/>
              <path
                  d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.5.5 0 0 0-.032.14.19.19 0 0 0 .193.193q.06 0 .111-.029l1.268-.733a.6.6 0 0 1 .308-.088q.088 0 .171.025a6.8 6.8 0 0 0 1.625.26 4.5 4.5 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02l.15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826m4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0m3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0"/>
            </svg>
            <!--领英-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-linkedin icon"
                 viewBox="0 0 16 16">
              <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
            </svg>
            <!--Facebook-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-facebook icon"
                 viewBox="0 0 16 16">
              <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
            <!--Instagram-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-instagram icon"
                 viewBox="0 0 16 16">
              <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
            </svg>
            <!--新浪微博-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-sina-weibo icon"
                 viewBox="0 0 16 16">
              <path
                  d="M10.878 1.093a4.23 4.23 0 0 1 4.031 1.305 4.22 4.22 0 0 1 .886 4.14v.001a.612.612 0 0 1-1.166-.377 3.01 3.01 0 0 0-3.495-3.873.611.611 0 1 1-.256-1.196M3.753 9.465c.548-1.11 1.972-1.74 3.233-1.411 1.304.338 1.971 1.568 1.437 2.764-.541 1.221-2.095 1.875-3.416 1.449-1.271-.411-1.812-1.67-1.254-2.802m2.658.567c.16.066.365-.009.458-.168.088-.16.03-.34-.129-.397-.156-.062-.353.013-.446.168-.09.154-.041.333.117.397m-1.607 1.314c.413.188.963.009 1.219-.4.252-.413.12-.883-.296-1.062-.41-.172-.94.005-1.194.402-.256.4-.135.874.271 1.06"/>
              <path
                  d="m12.014 7.238.005.001c.919.285 1.941.974 1.939 2.188 0 2.007-2.895 4.535-7.246 4.535C3.393 13.962 0 12.352 0 9.708c0-1.385.876-2.985 2.384-4.493C4.4 3.199 6.751 2.28 7.634 3.165c.39.392.427 1.065.177 1.87-.132.405.38.182.38.182 1.63-.682 3.051-.722 3.57.02.278.397.252.951-.004 1.594-.116.293.035.34.257.407m-10.4 3.101c.172 1.738 2.46 2.936 5.109 2.674 2.647-.26 4.656-1.883 4.482-3.623-.17-1.738-2.458-2.937-5.107-2.674-2.647.263-4.656 1.883-4.484 3.623m11.681-6.484a2.06 2.06 0 0 0-1.962-.634.526.526 0 1 0 .219 1.031 1.008 1.008 0 0 1 1.17 1.296.528.528 0 0 0 1.005.325 2.06 2.06 0 0 0-.432-2.018"/>
            </svg>
            <!--推特X-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-twitter-x icon"
                 viewBox="0 0 16 16">
              <path
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
            </svg>
            <!--TikTok-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok icon"
                 viewBox="0 0 16 16">
              <path
                  d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
            <!--Youtube-->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 class="bi bi-youtube icon"
                 viewBox="0 0 16 16">
              <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
            </svg>
            <!--1. 如果后续有新的社交媒体logo，请放这里: svg或者是b-icon-->
          </div>
          <b-popover target="wechat" triggers="hover" placement="top">
            <img src="../assets/img/social_media/wechat_qr_code.png" alt="你的浏览器暂不支持显示此图片" width="100px" height="100px">
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

/* 修饰作用的水平线 */
.copy-right:before {
  content: '';
  position: absolute;
  top: 0px;
  width: 100%;
  height: 3px;
  background-image: linear-gradient(to right, rgba(124, 58, 237, 0), #edb43a, #4a90e2, rgba(124, 58, 237, 0));
//background-image: linear-gradient(to right, rgba(124, 58, 237, 0), #edb43a, #a54ae2, rgba(124, 58, 237, 0)); //background-image: linear-gradient(to right, rgba(124, 58, 237, 0), #edb43a, #edb43a, rgba(124, 58, 237, 0));
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
