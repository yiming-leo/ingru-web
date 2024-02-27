<!--公司招聘的页面，招聘信息填报-->
<template>
  <div class="development_team">
    <div id="main-menu" :class="{ 'main-menu': true, 'scrolled': isScrolled }">
      <MainMenu></MainMenu>
    </div>
    <div id="scroll-container" v-smooth-scrollbar="{ options: {damping: 0.05} }" class="scroll-container">
      <div class="team-container">
        <div class="title-box">
          <div class="title">
            研发团队
            <p>Research & Development Team</p>
          </div>
        </div>
        <div class="content">
          <!--创始人栏-->
          <div class="content-box">
            <ProfileCard class="profile-card"
                         v-for="team_member in display_team_info_1" :key="team_member.index"
                         :avatar="team_member.avatar"
                         :name="team_member.name"
                         :occupation="team_member.occupation"
                         :description="team_member.description">
            </ProfileCard>
          </div>
          <!--高管栏-->
          <div class="content-box">
            <ProfileCard class="profile-card"
                         v-for="team_member in display_team_info_2" :key="team_member.index"
                         :avatar="team_member.avatar"
                         :name="team_member.name"
                         :occupation="team_member.occupation"
                         :description="team_member.description">
            </ProfileCard>
          </div>
          <!--技术员栏-->
          <div class="content-box">
            <ProfileCard class="profile-card"
                         v-for="team_member in display_team_info_3" :key="team_member.index"
                         :avatar="team_member.avatar"
                         :name="team_member.name"
                         :occupation="team_member.occupation"
                         :description="team_member.description">
            </ProfileCard>
          </div>
        </div>
      </div>
      <div id="footer" class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
import MainDisplay from "@/components/MainDisplay.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import Footer from "@/components/Footer.vue";
import SmoothScrollbar from "smooth-scrollbar";

export default {
  name: "development_team",
  components: {
    Footer,
    ProfileCard,
    MainDisplay,
    MainMenu,
  },
  data() {
    return {
      isScrolled: false,
      //创始人栏
      display_team_info_1: [
        {
          index: 1,
          name: '高晗',
          avatar: '',
          occupation: '创始人兼CEO',
          description: '资深人工智能领域投资人、绿地素本合伙人'
        },
        {
          index: 2,
          name: '尹荣',
          avatar: '',
          occupation: '创始人兼CTO',
          description:
              '大数据、人工智能、企业架构和风险管理领域专家，前IBM、德勤、华为高级技术与管理专家'
        },
      ],
      //高管栏
      display_team_info_2: [
        {
          index: 1,
          name: '张国艳',
          avatar: '',
          occupation: '董事兼CFO',
          description: '前P&G销售总监，绿地素本创始人兼CEO'
        },
        {
          index: 2,
          name: '阮明烽',
          avatar: '',
          occupation: '独立董事兼CFA',
          description: '浙江工业大学金融系创办人、MBA导师，金融专家、投资专家'
        },
      ],
      //技术员栏
      display_team_info_3: [
        {
          index: 1,
          name: '杨波',
          avatar: require('@/assets/avatar/yangbo.png'),
          occupation: 'Senior Engineer',
          description: '产业大数据、互联网医疗、人工智能项目架构专家，前浙江智慧网络医疗、优健康、火石创造技术总监'
        },
        {
          index: 2,
          name: '陶涛',
          avatar: '',
          occupation: 'Senior Engineer',
          description: '如：曾任腾讯微视设计组负责人、高级设计师，MSRA-HCI组成员，前美年健康产品总监'
        },
        {
          index: 3,
          name: '赵生宁',
          avatar: '',
          occupation: 'AI Engineer',
          description: ''
        },
        {
          index: 4,
          name: '廖一鸣',
          avatar: '',
          occupation: 'AI Engineer',
          description: ''
        },
      ]
    }
  },
  mounted() {
    //--------------------------滚动监听------------------------
    const height_scrollbar = SmoothScrollbar.init(document.getElementById('scroll-container')); // 获取SmoothScrollbar对象
    height_scrollbar.addListener(this.handleScroll); // 添加滚动事件监听器
  },
  methods: {
    //----------------滚动页面时的navbar----------------
    handleScroll(status) {
      const scrolledPercentage = (status.offset.y / window.innerHeight) * 100; // 计算滚动位置占视口高度的百分比
      // console.log('scrolledPercentage ', scrolledPercentage)
      this.isScrolled = scrolledPercentage > 0;
    }
  },
  //----------------滚动页面时的navbar----------------
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll); // 在组件销毁前移除滚动事件监听器
  }
}
</script>

<style scoped>
/* --------------------Scroll-------------------------- */
/* 丝滑滚动元素 */
.scroll-container {
  width: 100vw;
  height: 100vh; /* !!!三方库与原生js冲突开关!!! */
  object-fit: cover;
}

/* --------------------Navbar-------------------------- */

.scrolled {
  padding: 10px 20px 10px -5px; /* 调整navbar宽度和高度的地方 */
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(42, 42, 42, 0.3) 1px 1px 15px;

  transition: all ease-in-out 0.3s;
}

.main-menu {
  position: fixed;
  top: 0;
  left: 2.5%;
  width: 95%;
  border-radius: 30px;
  z-index: 999;

  margin: 10px 10px 10px 0px;

  transition: all ease-in-out 0.3s;
}

/* --------------------Development Team-------------------------- */
.development_team {
  width: 100vw;
  height: 100vh; /* 这里不要动，要动页高就动team-container */
}

/* --------------------Profile-------------------------- */
.team-container {
  width: 100vw;
  height: 100%; /*页面高度*/
  background-color: white;
  background-image: url("@/assets/img/bk10.png");
  background-size: cover;
  background-position: center;

//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.title-box {
  width: 100%;
  height: 20vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

//border: rgba(33, 206, 33, 0.8) 1px solid;
}

.title {
  font-size: 44px;
  font-weight: 800;
  width: 400px;

//border: rgba(206, 33, 131, 0.8) 1px solid;
}

.title p {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 5px;

  top: 5px;

  position: relative;
}

/* 修饰作用的水平线 */
.title p:before {
  content: '';
  position: absolute;
  top: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, rgba(124, 58, 237, 0.01), #7c3aed, #4a90e2, rgba(124, 58, 237, 0));
}

.content-box {
  width: 100%; /* 肖像体宽度 */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

//border: rgba(206, 120, 33, 0.8) 1px solid;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;

//border: rgba(206, 177, 33, 0.8) 1px solid;
}

.profile-card {
  margin: 20px 10px 10px 10px;

  width: 400px; /* 卡片的宽度 */
  height: 500px; /* 卡片的高度 */
//border: rgba(56, 33, 206, 0.8) 1px solid;
}

/* --------------------Footer-------------------------- */
.footer {
  bottom: 0;
  left: 0;

  width: 100%;
}
</style>
