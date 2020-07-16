<template>
  <div class="detail">
    <div class="topbox">
      <div class="tittle">
        <span>Tips 引导</span>
      </div>
      <div class="desinginfo">
        <div class="name">
          <img src="../assets/logo.png" alt />
          <span>7 Years</span>
        </div>
        <div class="time">
          <span>2020-06-04 15:05:54</span>
        </div>
      </div>
    </div>
    <div v-html="data"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data:'',
      id:'',
      detaiinfo:''
    };
  },
 mounted(){
//    this.data = '<figure class="image"><img src="api/upload/WX20200709-140121@2x.png"></figure><p><strong>Content of the editor.</strong></p><figure class="image"><img src="api/upload/组54.png"></figure><figure class="image"><img src="api/upload/组54.png"></figure>'
//    console.log(this.$route.params.id)
   this.id = this.$route.params.id
   this.getdocumentgetail()
 },
  methods: {
        getdocumentgetail(){
            axios({
                url:'/api/GetDocumentDetail/'+this.id,
                method:'GET'
            }).then(res=>{
                console.log(res)
                this.detaiinfo = res.data.data
                this.data = res.data.data[0].Documentinfo
            })
        }
  }
};
</script>

<style scoped>
.tittle {
  padding-bottom: 20px;
}
.topbox {
  margin-top: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}
.desinginfo {
  display: flex;
  align-items: center;
}
.desinginfo .name {
  width: 20%;
}
.desinginfo .time {
  widows: 80%;
}
.tittle span {
  font-size: 30px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.name img {
  width: 14px;
  height: 14px;
  /* margin-left: 10px; */
}
.detail {
  width: 70%;
  margin: 0 auto;
  /* background: black; */
}
.name span {
  font-size: 14px;
  color: #999999;
  padding-left: 10px;
}
.time span {
  font-size: 14px;
  color: #999999;
}
</style>