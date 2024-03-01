<!--公司招聘的页面，招聘信息填报-->
<template>
  <div class="recruitment">
    <div id="main-menu" :class="{ 'main-menu': true, 'scrolled': isScrolled }">
      <MainMenu text-color="black"></MainMenu>
    </div>
    <div id="scroll-container" v-smooth-scrollbar="{ options: {damping: 0.05} }" class="scroll-container">
      <div class="big-box">
        <div class="title-box">
          <div class="title">
            招贤纳士
            <p>加入隐入科技 — 与我们共筑未来！</p>
          </div>
        </div>
        <div class="introduction">
          <div class="intro-card" v-for="intro_item in intro_sentences" :key="intro_item.index"
               :style="'background-image: url('+intro_item.image+')'">
            <h2>{{ intro_item.title }}</h2>
            <p>{{ intro_item.content }}</p>
          </div>
        </div>
        <div class="job-box">
          <div class="title-box">
            <div class="title">
              人才计划
              <p>与我们携手，开启职业新篇章！</p>
            </div>
            <p>
              我们致力于构建卓越团队，追求增长与素质并重<br>
              我们提供文化和项目驱动的工作环境，鼓励创新、学习和团队合作<br>
              如果您是愿意挑战和成长的专才，欢迎加入我们，共同开创职业新篇章<br>
            </p>
          </div>
          <div class="job-occupancy">
            <JobCard v-for="job_item in current_job_list" :key="job_item.index"
                     :name="job_item.name"
                     :salary="job_item.salary"
                     :description="job_item.description"
                     :background="job_item.background">
            </JobCard>
          </div>
          <div class="tail-box">
            <div class="tail-one">
              即刻将您的简历信息发送至邮箱<b>it@ingru.ai</b>，与我们建立联络了解更多详情。
            </div>
            <div class="tail-two">
              让我们共同筑梦，共创辉煌未来。期盼您的加入！<br>
              隐入科技，让每一个科技梦想在这里放飞。
            </div>
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
import Footer from "@/components/Footer.vue";
import SmoothScrollbar from "smooth-scrollbar";
import JobCard from "@/components/JobCard.vue";

export default {
  name: "recruitment",
  components: {JobCard, Footer, MainMenu},
  data() {
    return {
      isScrolled: false,
      intro_sentences: [
        {
          index: 1,
          title: '我们的使命',
          content: '富有动力的您，想必在寻找这样一个平台：技术驱动，创新赋能，以人才为核心。隐入科技，正是那个使您激情迸发的地方——这里，让每一个技术狂热者能找到自己的舞台！',
          image: require('@/assets/img/recruitment/stream_green.png')
        },
        {
          index: 2,
          title: '我们的信念',
          content: '在隐入科技，我们珍视每一位员工，如飞轮般不断前行，凭借创新力量把握未来。欢迎与我们愿景和价值观相契合的人加入，共同推进战略目标，为前行之路照亮光芒。',
          image: require('@/assets/img/recruitment/stream_blue.png')
        },
        {
          index: 3,
          title: '我们的愿景',
          content: '以创新科技为铺路石，隐入科技正在开辟一条引领行业变革的道路。我们紧跟世界经济的脉动，以梦想追寻者的姿态，不断超越科技的边界，致力于为世界打造智慧互联的桥梁。',
          image: require('@/assets/img/recruitment/stream_yellow.png')
        },
      ],
      current_job_list: [
        {
          index: 1,
          name: '测试工程师',
          salary: '8-13k',
          background: require('@/assets/img/illustration/test_engineer.png'),
          description:
              '💦工作职责：\n' +
              '1. 负责应用系统、移动客户端的功能、接口、兼容性等测试\n' +
              '2. 独立完成软件测试的全流程，包括需求分析、测试计划制定、设计功能测试用例，测试执行，输出测试报告等，能够敏锐的发现深层次高质量的bug\n' +
              '3. 根据测试结果，及时和项目经理、开发人员进行沟通，控制项目测试进度，安排产品上线跟踪测试，推动缺陷解决并进行回归验证\n' +
              '4. 保证被测系统的质量，并能通过改善测试流程、方法、技能，提高测试效率和质量\n' +
              '💪任职要求\n' +
              '1. 3-6年工作经验，其中互联网相关的业务测试经验不少于3年\n' +
              '2. 熟悉软件工程及方法理论，熟悉测试流程，了解测试文档制定标准\n' +
              '3. 熟悉接口测试，抓包技术，数据库增删改查，熟练使用postman、jmeter、fiddler、Charles、Mysql等常用工具\n' +
              '4. 热爱测试工作，有较强的学习能力、沟通表达能力，具备良好的团队合作精神，能从整体层面考虑测试工作\n' +
              '5. 熟悉脚本和python语言者优先；有性能测试或自动化脚本编写能力者优先；熟悉医疗系统业务的测试则优先'
        },
        {
          index: 2,
          name: '爬虫工程师',
          salary: '10-15k',
          background: require('@/assets/img/illustration/spider_engineer.png'),
          description:
              '💦工作职责：\n' +
              '1. 负责设计和开发分布式爬虫和调度系统，爬虫核心算法和调度策略优化\n' +
              '2. 负责部分网站验证码破解和现有爬虫系统效率的提升\n' +
              '3. 负责网络数据抓取规划和数据链路规划、高效且稳定爬取指定网站的数据\n' +
              '4. 构建高可用性、高可扩展性的网络信息搜集平台\n' +
              '5. 项目中遇到其他问题\n' +
              '💪任职要求\n' +
              '1. 计算机相关专业，精通python语言，1年及以上爬虫经验\n' +
              '2. 熟悉Selenium模拟浏览器爬取，Scrapy爬虫开发，了解js引擎技术等优先考虑\n' +
              '3. 了解Python常用的第三方类库\n' +
              '4. 熟悉node语言，有node项目开发经验优先\n' +
              '5. 熟悉Linux平台开发、常用操作及命令，良好的编码习惯，有独立思考的能力，善于解决问题\n' +
              '6. 具备较强的团队协作精神，工作责任心强，良好的沟通、理解和执行能力'
        },
        {
          index: 3,
          name: '大数据工程师',
          salary: '12-18k',
          background: require('@/assets/img/illustration/big_data_engineer.png'),
          description:
              '💦工作职责：\n' +
              '1. 负责公司大数据平台产品的技术工作，包括需求分析、架构设计、研发、以及性能分析工作\n' +
              '2. 负责整体提升doris集群的高可用性、高性能、高扩展特性，已有的大数据平台架构的维护工作\n' +
              '3. 负责海量数据的导入优化工作以及整理和完善各类技术文档\n' +
              '💪任职要求\n' +
              '1. 计算机相关专业毕业，具备2年以上开发工作经验\n' +
              '2. 从事过关系型数据库开发，熟悉SQL语言\n' +
              '3. 熟悉函数式编程规范，精通Java（JDK 1.8以上）或Scala语言\n' +
              '4. 熟悉Hadoop、Spark、Solr等大数据平台体系结构和工作原理，具备MapReduce、RDD等编程模型的开发经验\n' +
              '5. 了解基本的统计分析方法和机器学习理论'
        },
        {
          index: 4,
          name: 'UI设计师',
          salary: '8-12k',
          background: require('@/assets/img/illustration/ui_designer.png'),
          description:
              '💦工作职责：\n' +
              '负责完成公司全平台（小程序、PC端）产品的UI设计和体验优化工作\n' +
              '2.参与产品团队设计讨论，结合对产品/业务的理解，跟踪产品效果，并持续对产品进行迭代优化\n' +
              '3.运用自己的经验对产品进行交互优化与改进，注重用户体验\n' +
              '5.参与设计体验、工作流程、平台规范的建立和维护\n' +
              '4.分享设计经验，推动提高团队的设计能力\n' +
              '💪任职要求\n' +
              '全日制本科及以上学历，设计科班出身，三年以上UI设计经验，有saas化产品设计经验优先，有全端界面设计经验优先\n' +
              '2.有较复杂的大型产品经验，对TOB方向产品设计熟悉，了解其中的设计方法、规范，有UX经验更佳\n' +
              '3.丰富的设计理论知识，对UI设计趋势有灵敏触觉和领悟能力\n' +
              '4.注重细节，苛求体验，熟悉全端产品的设计理念和规范\n' +
              '5.精通使用SKETCH、PHOTOSHOP、ILLUSTRATOR等基础设计软件\n' +
              '6.工作富有激情，良好的团队合作意识，极强的责任感和创造力\n' +
              '加分项\n' +
              '有以下行业经验：企业服务·计算机软件·互联网'
        },
        {
          index: 5,
          name: '高级算法工程师/全栈工程师/架构师',
          salary: '25-50k(具体薪资面议)',
          background: require('@/assets/img/illustration/senior_algorithm_engineer.png'),
          description:
              '🎖️基本要求：\n' +
              '1. 计算机科学、软件工程或相关领域的学士学位\n' +
              '2. 至少3年的全栈开发经验\n' +
              '🛠️技术要求：\n' +
              '1. 熟练掌握 React, Vue, Angular 等至少一种前端框架或库\n' +
              '2. 了解 Web 性能优化、响应式设计和跨浏览器兼容性\n' +
              '3. 熟练使用Python和Node.js\n' +
              '4. 能够设计和实现 RESTful 或 GraphQL API\n' +
              '5. 熟悉至少一种关系型数据库，如 MySQL、PostgreSQL，以及了解 NoSQL 数据库，如 MongoDB、Redis\n' +
              '6. 熟悉 Git 版本控制和基本的 CI/CD 流程\n' +
              '7. 对 Docker 和 Kubernetes 有实践经验\n' +
              '8. 对云平台部署和服务有一定了解，如 AWS、Azure、阿里云\n' +
              '✨其他要求：\n' +
              '- 出色的逻辑思维和问题解决能力\n' +
              '- 良好的团队协作和沟通技巧，能够跨团队协作\n' +
              '- 能够快速适应新技术和工具，并有持续学习的热情\n' +
              '- 对代码质量和测试有严格的要求\n' +
              '💎加分项：\n' +
              '- 对人工智能（尤其是LLM）和Web3有开发经验\n' +
              '- 有开源项目或个人技术博客\n' +
              '- 对 Web 安全和最佳实践有深入理解\n' +
              '- 持有相关的技术认证或参与过大型项目开发'
        },
      ],
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
    },
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

/* --------------------recruitment-------------------------- */
.recruitment {
  width: 100vw;
  height: 100%;
}

/* --------------------Introduction-------------------------- */
.big-box {
  width: 100vw;
  height: 100%; /*页面高度*/
  padding: 0 0 50px 0;
  background-color: white;
  background-image: url("@/assets/img/background/bg_white_2.jpg");
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

  margin: 0 0 20px 0;

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
  background-image: linear-gradient(to right, rgba(124, 58, 237, 0.01), #4a90e2, #edb43a, rgba(124, 58, 237, 0));
}

/* --------------------三句长话-------------------------- */
.introduction {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  margin: 60px 0 200px 0;
//border: rgba(154, 114, 224, 0.8) 1px solid;
}

.intro-card {
  padding: 10px 20px 10px 20px;
  margin: 10px 20px 10px 20px;
  letter-spacing: 2px;
  text-align: left;
  width: 400px;
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-position: center;
  background-size: cover;

  color: #ffffff;
  text-shadow: #000000 1px 1px 5px;

  box-shadow: #a9a9a9 1px 1px 15px;
  border-radius: 5px;

//border: rgba(224, 153, 114, 0.8) 1px solid;
}

.intro-card h2 {
  font-size: 36px;
  font-weight: 900;
  margin: 30px 0 30px 0;
}

/* --------------------职位空缺，需要招聘-------------------------- */
.title-box p {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 5px;
  top: 10px;
  position: relative;
}

.job-occupancy {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

//border: rgba(224, 114, 140, 0.8) 1px solid;
}

/* --------------------tail-box-------------------------- */
.tail-box {
  margin: 50px 0 30px 0;
//border: rgba(206, 33, 131, 0.8) 1px solid;
}

.tail-box .tail-one {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 4px;

  margin: 0 0 20px 0;
}

.tail-box .tail-two {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 5px;
}

/* --------------------Footer-------------------------- */
.footer {
  bottom: 0;
  left: 0;

  width: 100%;
}
</style>
