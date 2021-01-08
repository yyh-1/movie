<template>
    <div class="learn">
      <div class="top">
        <img class="orange" src="../assets/orange.png" alt="">
        <img class="orange-logo" src="../assets/orange-logo.png" alt="">
      </div>
      <div class="content">
        <div class="content-head">
          <h2>登录</h2>
        </div>
        <div class="content-body">
          <input class="usename" type="text" placeholder="用户名">
          <input class="password" type="text" placeholder="密码">
          <input class="radio" type="radio">
          <p class="p1">记住密码</p>
          <p class="p2">忘记密码？</p>
          <div class="button">登录</div>
        </div>
        <div class="content-bottom">
          <p class="p1">第三方登录:</p>
          <img class="vx" src="../assets/vx .png" alt="">
          <img class="qq" src="../assets/qq.png" alt="">
          <p class="p2">注册</p>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/timg.jpg" alt="">
        <p class="p1">我想让你见识一下什么是真正的勇敢，而不要错误地认为一个人手握枪支就是勇敢。勇敢是：当你还未开始就已经知道自己要输，可你依然要去做，而且无论如何都要把它坚持到底。你很少能赢，但有时也会</p>
        <p class="p2">——    哈珀·李《杀死一只知更鸟》</p>
      </div>
    </div>
</template>

<style scoped>
.top{
  position: absolute;
  /* background-color: white; */
  width: 400px;
  height: 100px;
  top: 100px;
  left: calc(50% + 100px);
}
.top .orange{
  width: 90px;
  height: 64px;
  position:absolute;
  left: calc(50% - 90px);
}
.top .orange-logo{
  position: absolute;
  width: 48px;
  height: 48px;
  left: calc(50% + 10px);
  margin-top: 5px;
}
.content{
  position: absolute;
  width: 400px;
  height: 400px;
  top: 200px;
  left: calc(50% + 100px);
  border: 2px solid #fa320a;
  border-radius: 8px;
  box-shadow: 0 0 15px #fa320a;
  background-color: transparent;
  /* background-color: #1A1A1A; */
}
.content .content-head{
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.content .content-head h2{
  color: #fa320a;
}
.content .content-body .usename{
  position: absolute;
  top: 90px;
  display: inline-block;
  height: 22px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid;
  outline: none;
  padding: 5px 10px;
  left: calc(50% - 160px);
}
.content .content-body .password{
  position: absolute;
  top: 160px;
  display: inline-block;
  height: 22px;
  width: 300px;
  border-radius: 8px;
  border: 1px solid;
  outline: none;
  padding: 5px 10px;
  left: calc(50% - 160px);
}
.content .content-body .radio{
  position: absolute;
  float: left;
  top: 210px;
  left: 38px;
}
.content .content-body .p1{
  color: #fa320a;
  position: absolute;
  top: 199px;
  left: 60px;
  font-size: 12px;
}
.content .content-body .p2{
  position: absolute;
  top: 199px;
  right: 32px;
  font-size: 12px;
  color: #fa320a;
  cursor: pointer;
}
.content .content-body .button{
  /* display: inline-block; */
  position: absolute;
  top: 260px;
  left: calc(50% - 120px);
  width: 240px;
  height: 35px;
  line-height: 35px;
  background-color: #fa320a;
  color: #fff;
  text-align: center;
  border: 1px solid #fa320a;
  border-radius: 8px;
  cursor: pointer;
  transition: all .2s linear;
}
.content .content-body .button:hover{
  box-shadow: 0 0 15px #fa320a;
}
.content .content-bottom p{
  color: #fa320a;
  font-size: 14px;
}
.content .content-bottom .p1{
  position: absolute;
  bottom: 30px;
  left: 42px;
}
.content .content-bottom .p2{
  position: absolute;
  bottom: 30px;
  right: 40px;
  cursor: pointer;
}
.content .content-bottom .p2:hover{
  text-shadow: 0 0 15px #fa320a;
}
.content .content-bottom img{
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.content .content-bottom .vx{
  position: absolute;
  left: 130px;
  bottom: 40px;
}
.content .content-bottom .qq{
  position: absolute;
  left: 170px;
  bottom: 40px;
}
.foot img{
  position: relative;
  left: 100px;
  top: 150px;
  /* position: absolute; */
  /* right: 50px; */
  width: 216px;
  height: 384px;
}
.foot p{
  color: #fa320a;
  font-size: 17px;
  text-shadow: 10px 10px 10px #fff;
}
.foot .p1{
  position: relative;
  top: -200px;
  left: 360px;
  display: block;
  width: 400px;
}
.foot .p2{
  position: relative;
  top: -180px;
  left: 510px;
  font-style: italic;
}
</style>