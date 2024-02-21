<template>
  <div class="mx-4 container">
    <div class="big-box">
      <div class="big-title">
        <div class="text-white about-decoration">CONTACT</div>
        <div class="text-white about-title">联系我们</div>
      </div>

      <div class="all-container">
        <div class="location-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               class="bi bi-geo-alt-fill icon"
               viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>

          <div class="text-white text-left about-text">
            浙江省杭州市滨江区星城中心B座1101
          </div>
        </div>

        <div class="email-container">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-envelope-fill icon"
               viewBox="0 0 16 16">
            <path
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>

          <div class="text-white text-left about-text ">
            it@ingru.ai
          </div>
        </div>
        <div class="telephone-container">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-telephone-fill icon"
               viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
          <div class="text-white text-left about-text">
            +86 17788886513<br>
            +86 13918186286
          </div>
        </div>
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
