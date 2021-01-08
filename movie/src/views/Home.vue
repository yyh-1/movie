<template>
<div>
	<div class="banner">
		<ul class="con" :style="classobj">
			<li
		v-for="img in imgPath"
		:key="img.id"
		><img 
		:src="img.poster" 
		alt=""
		></li>
		</ul>
		<!-- <ul class="btn">
			<li 
		v-for="(item,index) in btns"
		:key="item"
		@click="now(index)"
		></li>
		</ul> -->
	</div>
	<div class="rb" @click="rb">
		<img src="../assets/right.png" alt="">
	</div>
	<div class="lb" @click="lb">
		<img src="../assets/left.png" alt="">
	</div>	
	<div class="mark">
		<div class="top">
			<div class="line"></div>
			<h2>Fan  favorites</h2>
			<img src="../assets/whiteright.png" alt="">
			<p>this is week's top TV and movies</p>
		</div>
		<div class="content">
			<ul :style="ml">
				<li
					v-for="type in typeList"
					:key="type.id"
				>
						<img :src="type.imgPath" alt="" class="img1">
						<img src="../assets/xx.png" alt="" class="img2">
						<p class="p1">{{ type.fraction }}</p>
						<p class="p2">{{ type.name }}</p>
						<div class="add">
							<img src="../assets/add.png" alt="" class="img3">
							<p>参与打分</p>
						</div>
				</li>
			</ul>
		</div>
		<div class="rightbtn" @click="rbtn" v-if="mlnum<2">
			<img src="../assets/right.png" alt="">
		</div>
		<div class="leftbtn" @click="lbtn" v-if="mlnum>0">
			<img src="../assets/left.png" alt="">
		</div>
	</div>
</div>

    
</template>

<script>
export default {
  data() {
    return {
    btns:[1,2,3,4,5],
	num:0,
	mlnum:0,

          imgPath:[
        {
          poster:require('../assets/1.png'),
          id:"1"
        },
        {
          poster:require('../assets/2.png'),
          id:"2"
        },
        {
          poster:require('../assets/3.png'),
          id:"3"
        },
        {
          poster:require('../assets/4.png'),
          id:"4"
        },
        {
          poster:require('../assets/5.png'),
          id:"5"
        },
	  ],
	  typeList:[
		  {
			  id:"1",
			  imgPath:require('../assets/mgdz.jpg'),
			  fraction:"7.2",
			  name:"美国队长",
		  },
		  {
			  id:"2",
			  imgPath:require('../assets/ms.jpg'),
			  fraction:"8.3",
			  name:"魔兽",
		  },
		  {
			  id:"3",
			  imgPath:require('../assets/bxqy.jpg'),
			  fraction:"7.6",
			  name:"冰雪奇缘",
		  },
		  {
			  id:"4",
			  imgPath:require('../assets/tz.jpg'),
			  fraction:"6.9",
			  name:"爱宠大机密",
		  },
		  {
			  id:"5",
			  imgPath:require('../assets/haqs.jpg'),
			  fraction:"9.1",
			  name:"黑暗骑士",
		  },
		  {
			  id:"6",
			  imgPath:require('../assets/dog.jpg'),
			  fraction:"8.4",
			  name:"天才眼睛狗",
		  },
			{
			  id:"7",
			  imgPath:require('../assets/mnyys.jpg'),
			  fraction:"9.1",
			  name:"美女与野兽",
		  },
		  {
			  id:"8",
			  imgPath:require('../assets/fczlm.jpg'),
			  fraction:"8.4",
			  name:"复仇者联盟",
		  },
		  {
			  id:"9",
			  imgPath:require('../assets/dyht.jpg'),
			  fraction:"9.1",
			  name:"大鱼海棠",
		  },
		  {
			  id:"10",
			  imgPath:require('../assets/dlr.jpg'),
			  fraction:"8.4",
			  name:"独立日",
		  },
		  {
			  id:"11",
			  imgPath:require('../assets/klr.jpg'),
			  fraction:"9.1",
			  name:"克隆人",
		  },
		  {
			  id:"12",
			  imgPath:require('../assets/zt.jpg'),
			  fraction:"8.4",
			  name:"征途",
		  },
			{
			  id:"13",
			  imgPath:require('../assets/cl.jpg'),
			  fraction:"9.1",
			  name:"查理与巧克力工厂",
		  },
		  {
			  id:"14",
			  imgPath:require('../assets/xhr.jpg'),
			  fraction:"8.4",
			  name:"小黄人",
		  },
		  {
			  id:"15",
			  imgPath:require('../assets/xqdz.jpg'),
			  fraction:"9.1",
			  name:"星球大战",
		  },
		  {
			  id:"16",
			  imgPath:require('../assets/tt2.jpg'),
			  fraction:"8.4",
			  name:"唐人街探案2",
		  },
		  {
			  id:"17",
			  imgPath:require('../assets/zzx.jpg'),
			  fraction:"9.1",
			  name:"蜘蛛侠",
		  },
		  {
			  id:"18",
			  imgPath:require('../assets/ls2.jpg'),
			  fraction:"8.4",
			  name:"雷神2",
		  },
	  ]
    }
  },
methods:{
		now(index){
			this.num=index;
		},
		rb(){
			if(this.num==4){
				this.num=0;
			}else{
				this.num++;
			}						
		},
		lb(){
			if(this.num==0){
				this.num=4;
			}else{
				this.num--;
			}												
		},
		rbtn(){
			this.mlnum++;
		},
		lbtn(){
			this.mlnum--;
		}					
	},
	computed:{
		classobj:function(){	
			return {marginLeft:this.num*-937.5+"px"}
		},
		ml:function(){
			// console.log("3")
			return {marginLeft:this.mlnum*-1202.55+'px'}
		}			
	}
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
.banner{
	top: 40px;
	width: 937.5px;
    height: 330px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
}
.con{
	width: 4687.5px;
	height: 330px;
}
.con li{
	width: 937.5px;
	height: 330px;
	float: left;
}
.con li img{
    width: 937.5px;
    height: 330px;
	/* transform:translateY(-50%) */
}
.btn{
	position: absolute;			
	bottom: 10px;
	left: 140px;		
}
.btn li{
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #cbcbcb;
	float: left;
	margin: 10px;
	text-align: center;
	line-height: 30px;
	/* color: white; */
}
.rb,.lb{
	position: absolute;
	font-size: 30px;
	color: white;
	top: 35%;
	margin-top: -20px;
	width: 40px;
	height: 80px;
	line-height: 80px;
	/* text-align: center; */
	border: 2px solid #fa320a;
	border-radius: 5px;
	box-shadow: inset 0 0 15px #fff;
	cursor: pointer;
}
.lb:hover{
	box-shadow: 0 0 10px #fa320a;
	transition: all .5s linear;
}
.rb:hover{
	box-shadow: 0 0 10px #fa320a;
	transition: all .5s linear;
}
.rb img{
	position: relative;
	left: 5px;
	top: calc(50% - 15px);
	display: block;
	width: 30px;
	height: 30px;
}
.lb img{
	position: relative;
	left: 2px;
	top: calc(50% - 15px);
	display: block;
	width: 30px;
	height: 30px;
}
.rb{
	right: 180px;
}
.lb{
	left: 180px;
}
.mark{
	position: relative;
	top: 100px;
	left: calc(10%);
	width: 80%;
	height:550px;
	/* background-color: #121212; */
}
.mark .top{
	position: relative;
	height: 100px;
	background-color: black;
}
.mark .top .line{
	position: relative;
	left: 20px;
	width: 1px;
	height: 30px;
	background-color: #fa320a;
	border: 2px solid #fa320a;
	border-radius: 2px;
	float: left;
}
.mark .top h2{
	position: relative;
	left: 30px;
	color: #fff;
	float: left;
}
.mark .top img{
	position: relative;
	left: 40px;
	top: 7px;
	width: 24px;
	height: 24px;
	/* color: #fff; */
}
.mark .top p{
	position: absolute;
	left: 20px;
	top: 50px;
	color: #FFFFFFB3;
}
.mark .content{
	width: 100%;
	height:430px;
	overflow: hidden;
	float: left;
	/* background-color: #fff; */
}
.mark .content ul{
	height: 430px;
	width: 300%;
}
.mark .content ul li{
	margin: 0 10px;
	width: 180px;
	height: 430px;
	background-color: #1A1A1A;
	float: left;
}
.mark .content ul li .img1{
	width: 100%;
	height: 270px;
}
.mark .content ul li .img2{
	position: relative;
	top: 8px;
	left: 6px;
	width: 18px;
	height: 18px;
	float: left;
}
.mark .content ul li .p1{
	position: relative;
	top: 6px;
	left: 12px;
	color: #FFFFFFB3;
}
.mark .content ul li .p2{
	position: relative;
	top: 15px;
	left: 8px;
	/* text-align: center; */
	color: #fff;
}
.mark .content ul li .add{
	position: relative;
	left: 5%;
	top: 40px;
	border: 1px solid #FFFFFF14;
	border-radius: 4px;
	background-color: #FFFFFF14;
	width: 90%;
	height: 35px;
	line-height: 35px;
	cursor: pointer;
}
.mark .content ul li .add:hover{
	background-color: #FFFFFFB6;
	/* font-size: 16px; */
}
.mark .content ul li .add .img3{
	position: relative;
	color: #5799EF;
	width: 18px;
	height: 18px;
	top: calc(50% - 9px);
	left: 36px;
	/* line-height: 24px; */
	float: left;
}
.mark .content ul li .add p{
	position: relative;
	left: 42px;
	font-size: 14px;
	color: #5799EF;
}
.rightbtn{
	position: absolute;
	right: -50px;
	top: 260px;
	width: 80px;
	height: 50px;
	border: 2px solid #fa320a;
	border-radius: 5px;
	box-shadow: inset 0 0 15px #fff;
	cursor: pointer;
	/* background-color: #5799EF; */
}
.rightbtn:hover{
	box-shadow: 0 0 10px #fa320a;
	transition: all .5s linear;
}
.rightbtn img{
	position: relative;
	left: calc(50% - 15px);
	top: calc(50% - 15px);
	display: block;
	width: 30px;
	height: 30px;
}
.leftbtn{
	position: absolute;
	/* right: -50px; */
	left: -52px;
	top: 260px;
	width: 80px;
	height: 50px;
	border: 2px solid #fa320a;
	border-radius: 5px;
	box-shadow: inset 0 0 15px #fff;
	cursor: pointer;
}
.leftbtn:hover{
	box-shadow: 0 0 10px #fa320a;
	transition: all .5s linear;
}
.leftbtn img{
	position: relative;
	left: calc(50% - 15px);
	top: calc(50% - 15px);
	display: block;
	width: 30px;
	height: 30px;
}
</style>