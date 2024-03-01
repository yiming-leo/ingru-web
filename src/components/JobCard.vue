<template>
  <div>
    <div class="job-card" :style="'background-image: url('+background+')'">
      <div class="brand">
        <div class="name">{{ name }}</div>
        <div class="salary">￥{{ salary }}</div>
      </div>
      <div class="click-content">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             class="bi bi-hand-index-thumb click-btn" viewBox="0 0 16 16">
          <path
              d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
        </svg>
        <div class="click-text">
          悬停查看详情
        </div>
      </div>
      <div class="card-back">
        <template v-for="line in description.split('\n')">
          <div>{{ line }}</div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "JobCard",
  props: {
    name: String,
    salary: String,
    background: String,
    description: String,
  },
  data() {
    return {};
  },
  methods: {}
}
</script>
<style scoped>
.job-card {
  height: 337px; /* 卡片大小修改处 */
  width: 600px; /* 卡片大小修改处 */
  margin: 20px 40px 20px 40px;
  position: relative;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;

  background-size: cover;
  background-position: center;

  border-radius: 5px;
  box-shadow: #2c3e50 1px 1px 10px;
  cursor: pointer;

  transition: all ease-in-out 0.6s;
  transition-delay: 0.3s;

//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.job-card:hover {
  height: 600px; /* 卡片大小修改处 */
  width: 600px; /* 卡片大小修改处 */

  transition: all ease-in-out 0.6s;
  transition-delay: 0.2s;

//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.job-card:hover .card-back {
  opacity: 1; /* 悬停时显示 */
  transition-delay: 0.2s;
}

.card-back {
  width: 100%;
  height: 100%;
  padding: 10px 10px 10px 10px;
  position: absolute;
  border-radius: 5px;
  color: #ffffff;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.6));
  font-size: 16px;
  text-align: left;
  opacity: 0; /* 默认隐藏 */
  transition: opacity 0.5s; /* 过渡效果 */
  transition-delay: 0.2s;

  //border: rgba(224, 169, 114, 0.8) 1px solid;
}

/* --------------------卡片头部标题和薪资-------------------------- */
.brand {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  padding: 20px 30px 20px 30px;
  border-radius: 5px 0 0 0;
  background-image: linear-gradient(to bottom right, rgba(35, 34, 34, 0.8) 15%, rgba(0, 0, 0, 0.00) 60%, rgba(0, 0, 0, 0.00) 100%);

//border: rgba(218, 127, 36, 0.8) 1px solid;
}

.name {
  color: #ffffff;
  text-shadow: #1f2a34 1px 1px 5px;
  font-size: 30px;
  font-weight: 900;
//width: 200px; text-align: left;
}

.salary {
  color: #ffffff;
  text-shadow: #1f2a34 2px 2px 5px;
  font-size: 22px;
//width: 200px; text-align: left;
}

/* --------------------卡片底部点击栏-------------------------- */
.click-content {
  width: 100%;
  height: 80px;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: center;
  border-radius: 0 0 5px 0;
  background-image: linear-gradient(to bottom right, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 75%, rgba(35, 34, 34, 0.8) 100%);

//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.click-btn {
  width: 24px;
  height: 24px;
  margin: 10px 5px 10px 5px;
}

.click-text {
  font-size: 20px;
  margin: 10px 10px 10px 5px;
}

</style>
