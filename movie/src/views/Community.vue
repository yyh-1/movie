<template>
      <div class="wrapper" id="wrap">
        <ul>
          <li><img 
            :src="imgPath[curDisplay].poster" 
            alt=""
          ></li>
        </ul>
    </div>

    
</template>

<script>
export default {
  data() {
    return {
      //笔记：如果数据是路径的话一定要在前面写require
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
      curDisplay:0,
      timer:null,
    }
  },
  computed: {
    play(){
      timer = setInterval(function () {
        if (curDisplay == len - 1) {
            curDisplay = 0;
        } else {
            curDisplay++;
        }
        show();
      }, 2000);
    }
  },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

.wrapper {
    position: relative;
    width:1200px;
    /* height:100%; */
    /* background-color:#ffffff; */
    /* left: clac(50% - 600px); */
    perspective: 800px;
    transform-style: preserve-3d;
}
.wrapper img {
    position: absolute;
    left:calc(50% - 150px);
    top:40px;
    width:625px;
    height:220px;
    border-radius: 8px;
    transition: transform 0.5s ease-in-out;
}
</style>