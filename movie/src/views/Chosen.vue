<template>
    <div class="type">
      <div class="type-head">
        <img class="img1" src="../assets/movietype.png" alt="">
        <ul>
          <li
            v-for="type in typeList"
            :key="type.id"
          >{{ type.type }}</li>
        </ul>
        <img 
        @click="pullOnClick"
        class="img2" 
        src="../assets/arrow.png" 
        alt="">
      </div>
      <div class="type-body">
        <ul>
          <li
            v-for="content in contentList"
            :key="content.id"
          >
            <img :src="content.path" alt="">
            <h2>{{ content.title }}</h2>
            <div class="body-content">
              <p>{{ content.content }}</p>
            </div>
            <p class="author">作者：{{ content.author }}</p>
            <button>
              <p>浏览全文</p>
              <img class="arrow" src="../assets/arrowright.png" alt="">
            </button>
          </li>
        </ul>
      </div>
      <div class="type-right">
        <div class="right-one">
          <div class="one-head">
            <div class="line"></div>
            <h2>今日推荐</h2>
          </div>
          <div class="one-body">
            <img class="img1" src="../assets/fuermosi.jpg" alt="">
            <img class="img2" src="../assets/fuermosi2.jpg" alt="">
            <p class="p1">大侦探福尔摩斯</p>
            <p class="p2">探案不如搞基</p>
            <img class="img3" src="../assets/yinhao.png" alt="">
            <p class="p3">真相不一定能得到正确的结果</p>
            <p class="p4">————橙子鉴片室</p>
          </div>
        </div>
        <right class="right-two">

        </right>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      typeList:[
        {
          type:"剧情",
          id:"1"
        },
        {
          type:"喜剧",
          id:"2"
        },
        {
          type:"动作",
          id:"3"
        },
        {
          type:"爱情",
          id:"4"
        },
        {
          type:"惊悚",
          id:"5"
        },
        {
          type:"犯罪",
          id:"6"
        },
        {
          type:"战争",
          id:"7"
        },
        {
          type:"科幻",
          id:"8"
        },
        {
          type:"悬疑",
          id:"9"
        },
        {
          type:"动画",
          id:"10"
        },
        {
          type:"传记",
          id:"11"
        },
        {
          type:"历史",
          id:"12"
        },
        {
          type:"音乐",
          id:"13"
        },
      ],
      contentList:[
        {
          path:require('../assets/babai.jpg'),
          title:'论八佰拜第三大声道',
          content:'第四 对普遍的恶言反对者讲一些最基本的道理。留白≠不交代≠交代不清。任何人都可以脑补完成一部电影。都说“他们的结局还用说？肯定都是死了啊”  我就问你 谁不知道他们死了。但你留下想象空间 就得有留的样子。你不能人还没走上前就切了。最起码 你镜头一切 背景给几个冲击强一些的枪声。这个结局都算交代清楚了。花的了你几秒钟吗 花点 花不了你几秒。这才叫遐想的空间。这些手法也不少见吧。再举一个姜武不怂了的过程例子。我们都知道人物的性格是渐变的是曲线的。性格就像是负上重物的隔板我们看上了累积 但也需要看到积压。那隔板断裂我们才会觉得合理。这是电影 不是历史。所以也不用说什么历史就是这样子的 所以电影得这么拍。电影有自己独一门的语言 不需要去附和其他的体系。',
          author:"哈哈哈",
          id:'1'
        },
        {
          path:require('../assets/huamulan.jpg'),
          title:'花木兰刘亦菲超棒',
          content:'第四 对普遍的恶言反对者讲一些最基本的道理。留白≠不交代≠交代不清。任何人都可以脑补完成一部电影。都说“他们的结局还用说？肯定都是死了啊”  我就问你 谁不知道他们死了。但你留下想象空间 就得有留的样子。你不能人还没走上前就切了。最起码 你镜头一切 背景给几个冲击强一些的枪声。这个结局都算交代清楚了。花的了你几秒钟吗 花点 花不了你几秒。这才叫遐想的空间。这些手法也不少见吧。再举一个姜武不怂了的过程例子。我们都知道人物的性格是渐变的是曲线的。性格就像是负上重物的隔板我们看上了累积 但也需要看到积压。那隔板断裂我们才会觉得合理。这是电影 不是历史。所以也不用说什么历史就是这样子的 所以电影得这么拍。电影有自己独一门的语言 不需要去附和其他的体系。',
          author:'刘亦菲',
          id:'2'
        },
        {
          path:require('../assets/duye.jpg'),
          title:'毒液是个话痨子',
          content:'第四 对普遍的恶言反对者讲一些最基本的道理。留白≠不交代≠交代不清。任何人都可以脑补完成一部电影。都说“他们的结局还用说？肯定都是死了啊”  我就问你 谁不知道他们死了。但你留下想象空间 就得有留的样子。你不能人还没走上前就切了。最起码 你镜头一切 背景给几个冲击强一些的枪声。这个结局都算交代清楚了。花的了你几秒钟吗 花点 花不了你几秒。这才叫遐想的空间。这些手法也不少见吧。再举一个姜武不怂了的过程例子。我们都知道人物的性格是渐变的是曲线的。性格就像是负上重物的隔板我们看上了累积 但也需要看到积压。那隔板断裂我们才会觉得合理。这是电影 不是历史。所以也不用说什么历史就是这样子的 所以电影得这么拍。电影有自己独一门的语言 不需要去附和其他的体系。',
          author:'詹姆斯',
          id:'3'
        },
        {
          path:require('../assets/xintiao.jpg'),
          title:'信条烧脑分析',
          content:'第四 对普遍的恶言反对者讲一些最基本的道理。留白≠不交代≠交代不清。任何人都可以脑补完成一部电影。都说“他们的结局还用说？肯定都是死了啊”  我就问你 谁不知道他们死了。但你留下想象空间 就得有留的样子。你不能人还没走上前就切了。最起码 你镜头一切 背景给几个冲击强一些的枪声。这个结局都算交代清楚了。花的了你几秒钟吗 花点 花不了你几秒。这才叫遐想的空间。这些手法也不少见吧。再举一个姜武不怂了的过程例子。我们都知道人物的性格是渐变的是曲线的。性格就像是负上重物的隔板我们看上了累积 但也需要看到积压。那隔板断裂我们才会觉得合理。这是电影 不是历史。所以也不用说什么历史就是这样子的 所以电影得这么拍。电影有自己独一门的语言 不需要去附和其他的体系。',
          author:'安东尼',
          id:'4'
        },
      ],
    }
  },
  methods: {
    pullOnClick(){

    }
  },
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.type{
  position: relative;
  top: 50px;
  left: calc(50% - 600px);
  width: 1200px;
  height: 1200px;
  background-color: #121212;
}
.type .type-head{
  position: relative;
  left: 20px;
  top: 20px;
  width: 760px;
  height: 40px;
  border: #fa320a 2px solid;
  border-radius: 8px;
  /* float: left; */
}
.type .type-head2{
  position: relative;
  left: 20px;
  top: 20px;
  width: 760px;
  height: 240px;
  border: #fa320a 2px solid;
  border-radius: 8px;
}
.type .img1{
  position: relative;
  top: 8px;
  /* display: inline-block; */
  width: 24px;
  height: 24px;
  padding: 0 10px;
  float: left;
}
.type .type-head ul{
  height: 40px;
  line-height: 40px;
  float: left;
}
.type .type-head ul li{
  display: inline;
  list-style: none;
  color: #fa320a;
  padding: 0 10px;
}
.type .img2{
  width: 20px;
  height: 20px;
  padding: 10px 0 10px 10px;
  cursor: pointer;
}

.type .type-body ul{
  float: left;
}
.type .type-body ul li{
  position: relative;
  top: 50px;
  left: 20px;
  display: inline-block;
  width: 760px;
  height: 200px;
  border: #fa320a 2px solid;
  margin-top: 10px;
  border-radius: 6px;
}
.type .type-body ul li img{
  width: 121.5px;
  height: 170px;
  padding: 15px 20px;
  float: left;
}
.type .type-body ul li h2{
  margin-top: 15px;
  color: #fa320a;
}
.type .type-body ul li p{
  color: white;
}.type .type-body ul li .body-content{
  margin-top: 10px;
  height: 84px;
  overflow: hidden;
  text-overflow:ellipsis;
}
.type .type-body ul li .author{
  margin-top: 10px;
  font-size: 18px;
  float: left;
}
.type .type-body ul li button{
  /* display: inline-block; */
  /* width: 80px;
  height: 30px; */
  position: absolute;
  right: 10px;
  border: 0;
  margin-top: 12px;
  /* border-radius: 8px; */
  background-color: #121212;
  /* color: #121212; */
  cursor: pointer;
  float: left;
}
.type .type-body ul li button p{
  color: #fa320a;
  font-size: 16px;
  float: left;
}
.type .type-body ul li button .arrow{
  padding: 0 2px;
  width: 20.8px;
  height: 20.8px;
  /* float: left; */
}

.type-right{
  position: absolute;
  width: 300px;
  height: 1500px;
  /* background-color: green; */
  right: 50px;
  top: 0;
}
.type-right .right-one{
  position: absolute;
  top: 20px;
  height: 450px;
  width: 296px;
  background-color: #121212;
  border: #fa320a 2px solid;
  border-radius: 8px 8px 0 0;
  /* border-radius: 8px; */
}
.type-right .right-one .one-head{
  position: relative;
  height: 45px;
  /* background-color: #fff; */
}
.type-right .right-one .one-head .line{
  height: 30px;
  width: 2px;
  background-color: #fa320a;
  border: #fa320a 2px solid;
  border-radius: 8px;
  margin: 0 10px;
  /* margin: 15px 20px; */
  /* padding: 10px 20px; */
  float: left;
}
.type-right .right-one .one-head h2{
  /* font-size: 30px; */
  margin-top: 15px;
  color: #fa320a;
}
.type-right .right-one .one-body{
  position: relative;
  left: calc(50% - 125px);
  width: 250px;
  height: 380px;
  background-color: #1A1A1A;
}
.type-right .right-one .one-body .img1{
  width: 250px;
  height: 200px;
  top: 0;
  padding: 0;
  /* float: left; */
}
.type-right .right-one .one-body .img2{
  position: relative;
  top: -50px;
  left: 150px;
  width: 83.2px;
  height: 120px;
  padding: 0;
  border: #fff 2px solid;
  float: left;
}
.type-right .right-one .one-body .p1{
  position: absolute;
  left: 10px;
  top: 210px;
  font-size: 18px;
  color: #fff;
  /* padding: 0; */
  /* float: left; */
}
.type-right .right-one .one-body .p2{
  position: absolute;
  left: 10px;
  top: 250px;
  color: #fff;
  font-size: 12px;
}
.type-right .right-one .one-body .img3{
  position: absolute;
  left: 8px;
  top: 290px;
  width: 40px;
  height: 30px;
  float: left;
}
.type-right .right-one .one-body .p3{
  position: absolute;
  left: 50px;
  top: 300px;
  font-size: 13px;
  color: #fff;
}
.type-right .right-one .one-body .p4{
  position: absolute;
  right: 10px;
  top: 330px;
  color: #fff;
  opacity: .7;
  font-size: 13px;
}

.type-right .right-two{
  position: absolute;
  top: 500px;
  height: 450px;
  width: 296px;
  background-color: #121212;
  border: #fa320a 2px solid;
  border-radius: 8px 8px 0 0;
  /* border-radius: 8px; */
}
</style>