<template>
    <div class="body1">
        <!-- <img src="../../common/img/home/welcome.png" alt=""> -->
        <p class="dj" @click="goin">CLICK</p>
        <span>Copyright  2018 Time Treaty Blockchain Foundation</span>
    </div>
</template>

<script>
export default {
  methods: {
    goin() {
      this.$router.push("/nav");
    }
  }
};
</script>

<style scoped lang="scss">
.body1 {
  position: fixed;
  width: 100%;
  //height: 10.8rem;
  height: 100%;
//   img{
//       width: 100%;
//       //height: 100%;
//   }
  background: url("../../common/img/home/welcome.jpg") no-repeat;
  background-size: 100% 100%;

  .dj {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 5.56rem;
    height: 1rem;
    background-image: linear-gradient(0deg, #3288d4 0%, #6ab1ef 100%),
      linear-gradient(#3288d4, #3288d4);
    border-radius: 0.1rem;
    text-align: center;
    line-height: 1rem;
    //top: 7.43rem;
    bottom: 2rem;
    color: #fff;
    font-size: 0.72rem;
    cursor: pointer;
  }
  span {
    position: absolute;
    left: 50%;
    bottom: 0.2rem;
    transform: scale(0.5) translateX(-100%);
    width: 8rem;
    height: 0.15rem;
    font-family: MicrosoftYaHei;
    font-size: 0.24rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.32rem;
    letter-spacing: 0rem;
    color: #333333;
    // cursor: pointer;
  }
}
</style>