<!--Profile Card是专门为了给团队介绍页面增加任务用的卡片-->
<template>
  <div class="profile-card">
    <img class="avatar" :src="avatar" alt="Your Browser Does Not Support Such of This Image"/>
    <div class="detail">
      <div class="name">{{ name }}</div>
      <div class="occupation">{{ occupation }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: {
    avatar: String,
    name: String,
    occupation: String,
    description: String,
  }
}
</script>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.detail {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

.avatar {
  height: 275px;
  width: 275px;
  border-radius: 999px;

  border: rgba(154, 114, 224, 0.8) 1px solid;
}

.name {
  height: 50px;
  width: 100%;

  font-size: 30px;
  font-weight: 800;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.occupation {
  height: 50px;
  width: 100%;

  font-size: 20px;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.description {
  height: 100px;
  width: 300px;

  font-size: 18px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 20px 0 20px;
  text-align: left;

//border: rgba(154, 114, 224, 0.8) 1px solid;
}
</style>
