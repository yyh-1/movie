<template>
  <div id="app">
    <div class="header">
      <div class="header-content">
        <ul>
          <router-link to="/home">首页</router-link>
          <router-link to="/chosen">精选</router-link>
          <router-link to="/community">社区</router-link>
          <router-link to="/report">发表</router-link>
        </ul>
        <div class="search">
          <input type="text" placeholder="搜索电影、影院、影人">
          <button>
            <img src="./assets/s.png" alt="">
          </button>
        </div>
        <div class="logo">
          <div class="logo-content">
            <p>大家好！橙子影评是一家致力于文字影视评价的网站，希望得到大家的喜欢</p>
          </div>
          <img class="orange" src="./assets/orange.png" alt="">
          <img class="orange-logo" src="./assets/orange-logo.png" alt="">
        </div>
        <div class="line"></div>
        <router-link
          to="/login"
          class="login"
        >登录</router-link>
        <div 
          class="register"
        >注册</div>
      </div>
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footer">
      <ul>
        <li 
          v-for="logo in logoList"
          :key="logo.id"
        ><img 
          :src="logo.poster" 
          alt=""
        ></li>
      </ul>
      <div class="footer-content">
        <p style="margin-bottom:20px">违法和不良信息举报电话：4006-059-500 举报邮箱：948461446@qq.com</p>
        <p class="p1">商业合作联系方式</p>
        <p class="p2">电话：187****4692</p>
        <p class="p3" style="margin-bottom:20px">微信：yu航</p>
        <p>Copyright @ 2010-2020 杨宇航的个人网站 All rights reserved 有免费开源的WordPress强力驱动 鲁ICP备14017955号站长统计</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoList:[
        {
          poster:require('./assets/facebook.png'),
          id:"1"
        },
                {
          poster:require('./assets/ins.png'),
          id:"2"
        },
                {
          poster:require('./assets/twitch.png'),
          id:"3"
        },
                {
          poster:require('./assets/twitter.png'),
          id:"4"
        },
                {
          poster:require('./assets/youtube.png'),
          id:"5"
        },
      ]
    }
  },
  methods: {
    headonClick(){

    },
    loginClick(){

    }
  },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}


.header{
  /* position: fixed; */
  /* width: 100%; */
  height: 60px;
  background-color: #121212;
  /* background-color: #FA320A; */
}
.header .header-content{
  position: relative;
  height: 60px;
  width: 1200px;
  background-color: #121212;
  left: calc(50% - 600px);
}
.header .header-content ul{
  float: left;
}
.header .header-content ul a{
  display: inline-block;
  height: 58px;
  line-height: 60px;
  color: #fa320a;
  text-decoration: none;
  padding: 0 20px;
  font-size: 18px;
  /* font-family: '华文行楷'; */
  /* border-left: 1px solid #fa320a; */
}
.header .header-content ul .router-link-active{
  border-bottom: #fa320a 2px solid;
  transition: ease-in-out;
}
.search input{
    display: inline-block;
    position: absolute;
    height: 22px;
    width: 450px;
    padding: 5px 10px;
    border-radius: 8px 0 0 8px;
    outline: none;
    border: 1px solid;
    font-size: 14px;
    margin-top: -18px;
    top: 50%;
    right: 380px;
    /* float: left; */
}
.search button{
  display: inline-block;
  position: absolute;
  height: 32.5px;
  width: 50px;
  top: 50%;
  margin-top: -17px;
  background-color: white;
  border: none;
  right: 331px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}
.search button img{
  width: 16px;
  height: 16px;
  margin: 2px 0 0 2px;
}
.header .header-content .logo{
  position: absolute;
  right: 190px;
  width: 100px;
  height: 60px;
  line-height: 60px;
  padding: 0 10px 0 10px;
  cursor: pointer;
}
.header .header-content .logo .logo-content{
  display: none;
  width: 300px;
  height: 210px;
  background-color: black;
  /* opacity: .5; */
  border: #fa320a 2px solid;
  border-radius: 6px;
  position: absolute;
  right: -60px;
  top: 60px;
  z-index: 1;
}
.header .header-content .logo .logo-content p{
  color: #fa320a;
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 100px);
  width: 200px;
  height: 60px;
  line-height: 30px;
}
.header .header-content .logo:hover .logo-content{
  display: block;
}
.header .header-content .logo .orange{
  position: absolute;
  margin-top: 14px;
}
.header .header-content .logo .orange-logo{
  position: absolute;
  /* right: 200px; */
  right: 30px;
  margin-top: 16px;
  width: 24px;
  height: 24px;
}
.header .header-content .line{
  position: absolute;
  right: 180px;
  top: 10px;
  width: 1px;
  height: 40px;
  background-color: #fa320a;
  border: #fa320a 1px solid;
}
.header .header-content .login{
  position: absolute;
  width: 58px;
  height: 38px;
  line-height: 38px;
  background-color: #121212;
  color: #fa320a;
  margin-top: 10px;
  border-radius: 6px;
  text-align: center;
  border: #fa320a 2px solid;
  right: 80px;
  text-decoration: none;
  transition: all .3s linear;
  cursor: pointer;
}
.header .header-content .login:hover{
  background-color: #fa320a;
  color: #121212;
}
.header .header-content .register{
  position: absolute;
  width: 58px;
  height: 38px;
  line-height: 40px;
  background-color: #121212;
  color: #fa320a;
  margin-top: 10px;
  border-radius: 6px;
  text-align: center;
  border: #fa320a 2px solid;
  right: 0;
  transition: all .3s linear;
  cursor: pointer;
}
.header .header-content .register:hover{
  background-color: #fa320a;
  color: #121212;
}




.body{
  /* height: 1200px; */
  height: 2400px;
  background-color: black;
}
/* .body .body-content{
  width: 1200px;
  background-color: black;
} */

.footer{
    /* width: 100%; */
    height: 200px;
    background: black;
    text-align: center;
    padding: 20px;
    border-top: #fa320a 2px outset;
}
.footer ul{
  position: relative;
  top: 30px;
}
.footer ul li{
  display: inline;
  list-style: none;
  padding: 0 20px;
  cursor: pointer;
}
.footer ul li:hover{
  background-color: #121212;
}
.footer ul li img{
  display: inline-block;
  width: 20px;
  height: 20px;
}
.footer p{
  color: white;
}
.footer .footer-content{
  position: relative;
  margin-top: 50px;
}
.footer .footer-content .p1{
  float: left;
  position: relative;
  left: 500px;
}
.footer .footer-content .p2{
  position: relative;
  left: 530px;
  float: left;
}
</style>