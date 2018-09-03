<template>
  <div class="google_success">
    <div class="header_title">
      {{$t("ggyz.title")}}
    </div>
    <div class="status">
      <img v-if="success == 1" src="../../common/img/usercenter/yzcg.png" alt="">
      <img v-if="success == 2" src="../../common/img/usercenter/yzsb.png" alt="">
      <div v-if="success == 1" class="status_info">
        <i>{{$t("ggyz.p3")}}</i>
        <span>{{$t("ggyz.p5")}}</span>
      </div>
      <div v-if="success == 2" class="status_info">
        <i>{{$t("ggyz.p3")}}</i>
        <span>谷歌验证失败</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: 1
    }
  },
};
</script>

<style scoped lang="scss">
.google_success {
  background-color: #eeeeee;
  width: 9.3rem;
  height: 3.85rem;
  box-sizing: border-box;
  padding: 0.33rem 0.4rem;
  .header_title {
    width: 8.5rem;
    height: 0.3rem;
    background-color: #bddefb;
    border: solid 0.01rem #6ab1ef;
    font-family: MicrosoftYaHei;
    font-size: 0.16rem;
    font-weight: normal;
    font-stretch: normal;
    line-height: 0.3rem;
    letter-spacing: 0;
    color: #3288d4;
    text-indent: 0.1rem;
    box-sizing: border-box;
  }
  .status {
    width: 4rem;
    height: 1.46rem;
    margin: 0.75rem auto 0;
    position: relative;
    img {
      float: left;
      width: 1.46rem;
      height: 1.46rem;
    }
    .status_info {
      width: 2.5rem;
      position: absolute;
      right: 0;
      bottom: 0;
      i {
        font-style: normal;
        font-size: 0.2rem;
        display: inline-block;
        margin-right: 0.05rem;
      }
      span {
        color: #6ab1ef;
        font-size: 0.18rem;
      }
    }
  }
}
</style>