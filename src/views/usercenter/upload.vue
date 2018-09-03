<template>
    <div class="hello">
        <div class="upload">
            <div class="upload_warp">
                <div class="upload_warp_left" @click="fileClick">
                    <img src="../../common/img/usercenter/upload.png">
                </div>
                <div class="upload_warp_right" @drop="drop($event)" @dragenter="dragenter($event)" @dragover="dragover($event)">
                    {{$t("bd.jwjtd")}}
                </div>
            </div>
            <div class="upload_warp_text">
                {{$t("bd.xz")}} {{imgList.length}} {{$t("bd.xz1")}} {{bytesToSize(this.size)}}
            </div>
            <input @change="fileChange($event)" type="file" :id="'upload_file'+imgid" multiple style="display: none" />
            <div class="upload_warp_img" v-show="imgList[imgid] && imgList[imgid].length!=0">
                <div class="upload_warp_img_div" v-for="(item,index) of imgList[imgid]">
                    <div class="upload_warp_img_div_top">
                        <div class="upload_warp_img_div_text">
                            {{item.file.name}}
                        </div>
                        <img src="../../common/img/usercenter/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
                    </div>
                    <img :src="item.file.src" :id = "'img' + imgid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [[],[],[]],
      size: 0,
    };
  },
  props:['imgid'],
  mounted:function(){
    //console.log(this.imgid);
  },
  // watch: {
  //   imgList(val) {
  //     let count = 0;
  //     val.map((item,index) => {
  //         if(item.length > 0){
  //           count += index;
  //           // console.log(item);
  //         }
  //     })
  //     console.log(999999999999999);
  //     console.log(count)
  //     if(count >= 2){
  //       this.$emit('pto' , val)
  //     }
  //   }
  // },
  methods: {
    fileClick() {
      document.getElementById("upload_file"+this.imgid).click();
    },
    fileChange(el) {
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    foldersAdd(entry) {
      let _this = this;
      entry.file(function(file) {
        _this.fileAdd(file);
      });
    },
    fileAdd(file) {
      let vm =this;
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf("image") == -1) {
        file.src = "wenjian.png";
        this.imgList[this.imgid].push({
          file
        });
      } else {
        let reader = new FileReader();
        reader.vue = this;
        reader.readAsDataURL(file);
        reader.onload = function() {
          file.src = this.result;
          this.vue.imgList[vm.imgid].push({
            file
          });
        };
      }
    },
    fileDel(index) {
      this.size = this.size - this.imgList[this.imgid][index].file.size; //总大小
      this.imgList[this.imgid].splice(index, 1);
    },
    bytesToSize(bytes) {
      if (bytes === 0) return "0 B";
      let k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    dragenter(el) {
      el.stopPropagation();
      el.preventDefault();
    },
    dragover(el) {
      el.stopPropagation();
      el.preventDefault();
    },
    drop(el) {
      el.stopPropagation();
      el.preventDefault();
      this.fileList(el.dataTransfer);
    }
  }
};
</script>

<style scoped lang="scss">
.upload_warp_img_div_del {
      position: absolute;
      top: 0.06rem;
      width: 0.16rem;
      right: 0.04rem;
    }

    .upload_warp_img_div_top {
      position: absolute;
      top: 0;
      width: 100%;
      height: 0.3rem;
      background-color: rgba(0, 0, 0, 0.4);
      line-height: 0.3rem;
      text-align: left;
      color: #fff;
      font-size: 0.12rem;
      text-indent: 0.04rem;
    }

    .upload_warp_img_div_text {
      white-space: nowrap;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .upload_warp_img_div img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }

    .upload_warp_img_div {
      position: relative;
      height: 1rem;
      width: 1.2rem;
      border: 0.1rem solid #ccc;
      margin: 0 0.3rem 0.1rem 0;
      float: left;
      line-height: 1rem;
      display: table-cell;
      text-align: center;
      background-color: #eee;
      cursor: pointer;
    }

    .upload_warp_img {
      border-top: 0.01rem solid #D2D2D2;
      padding: 0.14rem 0 0 0.14rem;
      overflow: hidden
    }

    .upload_warp_text {
      text-align: left;
      margin-bottom: 0.1rem;
      padding-top: 0.1rem;
      text-indent: 0.14rem;
      border-top: 0.01rem solid #ccc;
      font-size: 0.14rem;
    }

    .upload_warp_right {
      float: left;
      width: 57%;
      margin-left: 2%;
      height: 100%;
      border: 0.01rem dashed #999;
      border-radius: 0.04rem;
      line-height: 1.3rem;
      color: #999;
    }

    .upload_warp_left img {
      margin-top: 0.32rem;
    }

    .upload_warp_left {
      float: left;
      width: 40%;
      height: 100%;
      border: 0.01rem dashed #999;
      border-radius: 0.04rem;
      cursor: pointer;
    }

    .upload_warp {
      margin: 0.14rem;
      height: 1.3rem;
    }

    .upload {
      border: 0.01rem solid #ccc;
      background-color: #fff;
      width: 6rem;
      box-shadow: 0 0.01rem 0 #ccc;
      border-radius: 0.04rem;
    }

    .hello {
        margin-top: 0.2rem;
      width: 6.5rem;
    //   margin-left: 34%;
      text-align: center;
    }
</style>