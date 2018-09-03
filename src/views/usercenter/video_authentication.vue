<template>
    <div class="video_check">
        <p>打造一个真实的交友社区. 让大家从这里交流，从这里开始，相识相知！ 我们希望大家上传的都是本人的真实照片。所以我们推出了视频认证的方式，来对照您是否是照片本人。视频认证也是会员证明自己诚信 的一种方式！这个认证标志，更受欢迎、人气排行高。
        </p>
        <span class="p1">1、什么是视频认证?</span>
        <p>网络虚拟但不应虚假！我们要打造一个真实的网络！ 我们希望大家上传的都是本人的真实照片。所以我们率先在互联网上推出视频认证的方式，来对照您是否照片本人。 视频认证也是证明会员诚信的一种方式。
        </p>
        <span class="p1">2、视频认证的前提条件</span>
        <p>您的电脑必须安装有摄像头 视频认证需知 为保证视频认证的真实性，大家在进入视频认证之前，乐讯会要求大家使用乐讯的在线拍照视频认证照的功能拍照一张 照片作为视频认证的参考照片。
        </p>
        <div class="vedio_check_b">
            <div class="vedio_check_b_l">
                <span>特别注意:如果您拍照的照片属于以下情况,我们将拒绝您的认证申请</span>
                <p>1.非本人</p>
                <p>2.性别错误</p>
                <p>3.戴帽子</p>
                <p>4.戴墨镜</p>
                <p>5.抽烟</p>
                <p>6.赤裸上身</p>
                <p>7.照片过亮,过暗或模糊不清,辨别不清</p>
                <p>8.非正面照</p>
                <p>9.表情过分夸张</p>
                <p>10.有任何物件遮挡住五官</p>
                <p>11.照片里面不止一个人</p>
            </div>
            <img src="../../common/img/usercenter/video authentication.png" alt="">
        </div>
        <p class="ksyz" @click="spyz">开始验证</p>
    </div>
</template>

<script>
export default {
  methods: {
    spyz() {
      this.$router.push('/video_authentication_status')
    }
  }
};
</script>

<style scoped lang="scss">
.video_check {
  background-color: #eeeeee;
  position: relative;
  width: 9.3rem;
  box-sizing: border-box;
  padding: 0.3rem 0.3rem;
  height: 8.48rem;
  span.p1 {
    display: block;
    width: 8.51rem;
    height: 0.3rem;
    line-height: 0.3rem;
    background-color: #bddefb;
    border: solid 0.01rem #6ab1ef;
    font-size: 0.16rem;
    text-indent: 0.15rem;
    color: #3288d4;
    margin: 0.2rem auto;
  }
  p {
    font-size: 0.16rem;
    color: #666;
  }
  .vedio_check_b {
    margin-top: 0.2rem;
    overflow: hidden;
    .vedio_check_b_l {
      float: left;
      span {
        display: block;
        font-size: 0.2rem;
        line-height: 0.24rem;
        height: 0.24rem;
        color: #6ab1ef;
        margin-bottom: 0.2rem;
      }
      p {
        font-size: 0.2rem;
        height: 0.3rem;
        line-height: 0.3rem;
      }
    }
    img {
      position: relative;
      top: 1.5rem;
      right: 0.5rem;
      float: right;
      width: 2.52rem;
      height: 1.98rem;
    }
  }
  .ksyz {
    position: absolute;
    left: 50%;
    bottom: 0.2rem;
    transform: translateX(-50%);
    width: 1.26rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #6ab1ef;
    border-radius: 0.04rem;
    color: #fff;
    text-align: center;
    margin-top: 0.1rem;
    cursor: pointer;
  }
}
</style>