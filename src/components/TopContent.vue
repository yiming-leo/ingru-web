<!--首页展示部分(第一个100vh)-->
<template>
  <div class="main-background">
    <div class="left-content">
      <div class="top-text">
        <div class="slogan">
          打造一体化智能
        </div>
        <div class="slogan">
          开启医疗系统新时代
        </div>
        <div class="slogan-english">
          Create integrated intelligence and open a new era of medical systems
        </div>
        <div class="btn-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mouse icon"
               viewBox="0 0 16 16">
            <path
                d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>

.main-background {
  width: 100vw;
  height: 100vh;

//border: #7c3aed 1px solid;
}

.left-content {
  width: 50vw;
  height: 100%;

//border: #7c3aed 1px solid;
}

.top-text {
  width: 100%;
  height: 100%;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

//border: #1728e0 1px solid;
}

.btn-icon {
  height: 20%;
  margin-left: 10vw;

//border: #a7e017 1px solid;
}

.icon {
  position: relative;
  top: 10vh;
  width: 30px;
  height: 30px;
  color: #000000;
}

.slogan {
  margin-left: 10vw;
  margin-bottom: 2vh;
  font-size: 70px;
  font-weight: 900;

  text-align: left;
//border: #ed9f3a 1px solid;
}

.slogan-english {
  margin-left: 10vw;
  margin-bottom: 2vh;

  font-size: 25px;
  text-align: left;
  letter-spacing: 4px;

//border: #ed9f3a 1px solid;
}

</style>
