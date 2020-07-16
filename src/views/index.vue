<template>
  <div class="index">
    <el-row>
      <el-col :span="8" :xs="24">
        <div class="grid-content bg-purple">
          <img style="width:34px;height:34px;padding-right:10px;" src="../assets/wendang.png" alt />
          <el-divider direction="vertical"></el-divider>
          <span style="padding-left:10px;font-weight: 600;">我的文档</span>
        </div>
      </el-col>
      <el-col :span="10" :xs="0">
        <div class="grid-content bg-purple-light">
          <!-- <div class="linkbox">
            <div class="link">
              <el-link :underline="false">无下划线</el-link>
            </div>
            <div class="link">
              <el-link :underline="false">无下划线</el-link>
            </div>
            <div class="link">
              <el-link :underline="false">无下划线</el-link>
            </div>
            <div class="link">
              <el-dropdown>
                <span class="el-dropdown-link">
                  下拉菜单
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>-->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1" @click="ToEdit">文档发表</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">消息中心</el-menu-item>
            <!-- <el-menu-item index="5" >消息中心</el-menu-item> -->
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6" :xs="0">
        <div class="grid-content bg-purple1">
          <div class="link1">
            <el-link :underline="false" style="font-weight: 600;">登录</el-link>
          </div>
          <el-divider direction="vertical"></el-divider>
          <div class="but">
            <el-button type="primary">立即入驻</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="searchtext">
      <el-row>
        <el-col :span="24" :xs="0">
          <div>文档中心</div>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="24">
        <div class="searchinput">
          <div class="input">
            <el-input
              placeholder="请输入内容"
              v-model="form.searchinput"
              clearable
              @input="searchdocument"
            ></el-input>
            <el-button type="primary" @click="searchdocument">搜索</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <div v-if="flage">
      <div class="smallbox">
        <!-- <el-row>
        <el-col :span="6" :xs="24">-->
        <div class="box" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
          <img src="../assets/iPhoneX.png" alt />
          <span class="first">小程序</span>
          <span class="second">开发小程序，在支付宝客户端提供服务</span>
        </div>
        <!-- </el-col>
        <el-col :span="6" :xs="24">-->
        <div class="box" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
          <img src="../assets/WEB.png" alt />
          <span class="first">网页&移动应用</span>
          <span class="second">查看应用开发文档，接入开放平台提供的</span>
        </div>
        <!-- </el-col> -->
        <!-- <el-col :span="6" :xs="0"> -->
        <div class="box" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
          <img src="../assets/BAOGAO.png" alt />
          <span class="first">生活号</span>
          <span class="second">查看生活号文档，接入生活号服务解</span>
        </div>
        <!-- </el-col>
        <el-col :span="6"   :xs="0">-->
        <div class="box" @mouseenter="changeActive($event)" @mouseleave="removeActive($event)">
          <img src="../assets/SSS.png" alt />
          <span class="first">第三方应用</span>
          <span class="second">查看第三方平台文档，作为服务..</span>
        </div>
        <!-- </el-col>
        </el-row>-->
      </div>

      <div class="textbottom">
        <el-row :gutter="20">
          <el-col :span="6" :xs="0">
            <span>快速入门</span>
          </el-col>
          <el-col :span="6" :xs="0">
            <span>API 文档</span>
          </el-col>
          <el-col :span="6" :xs="0">
            <span>开发工具</span>
          </el-col>
          <el-col :span="6" :xs="0">
            <span>服务器调试</span>
          </el-col>
        </el-row>
      </div>

      <div class="textbottom1">
        <el-row :gutter="20">
          <el-col :span="6" :xs="0">
            <div class="textlink">
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :xs="0">
            <div class="textlink">
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :xs="0">
            <div class="textlink">
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
            </div>
          </el-col>
          <el-col :span="6" :xs="0">
            <div class="textlink">
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
              <div class="inkbox">
                <el-link :underline="false">无下划线</el-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 搜索结果 -->
    <div v-else>
      <searchlist></searchlist>
    </div>
    <div class="finallybottom">
      <div class="firstlink">
        <div class="inkbox">
          <el-link :underline="false">Copyright © 2020 jimmy</el-link>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="inkbox">
          <el-link :underline="false">UI from Element</el-link>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="inkbox">
          <el-link :underline="false">VUE</el-link>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="inkbox">
          <el-link :underline="false">联系我们</el-link>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="inkbox">
          <el-link :underline="false">...</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import searchlist from "../components/searchlist";
export default {
  data() {
    return {
      form: {
        searchinput: ""
      },
      activeIndex: "1",
      flage: true
    };
  },
  components: {
    searchlist
  },
  methods: {
    ...mapMutations(["setsearchdocumentlist"]),
    searchdocument() {
      if (this.form.searchinput === "") {
        this.flage = true;
      } else {
        axios({
          url: "/api/DocumentSearch/",
          data: this.form,
          method: "POST"
        }).then(res => {
          console.log(res.data.data[0].Documentags);
          let s = res.data.data[0].Documentags.split(",");
          console.log(s);
          this.setsearchdocumentlist(res.data.data);
          if (res.data.data === "") {
            console.log("00");
          } else {
            this.flage = false;
          }
        });
      }
    },
    changeActive($event) {
      $event.currentTarget.className = "active";
      console.log("addd");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    removeActive($event) {
      $event.currentTarget.className = "box";
    },
    ToEdit() {
      this.$router.push("/Edit");
    }
  }
};
</script>

<style >
.firstlink .linkbox {
  width: 50%;
}
.finallybottom .firstlink {
  width: 60%;
  display: flex;
  align-items: center;
  margin: 0 auto;
  transform: translateX(5%);
}
.finallybottom {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
}
.textbottom1 {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
.smallbox .active {
  transform: translateY(-30px);
  transition: transform 1s;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: auto;
  border: 1px solid rgb(240, 240, 240);
  padding: 20px;
  /* background-color: red; */
  box-shadow: 5px 20px 10px 5px rgba(0, 33, 110, 0.06);
  border-radius: 4px;
  margin-right: 10px;
}
.active img {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.active .first {
  color: #409eff;
  font-size: 16px;
  font-weight: 600;
}
.textlink {
  display: flex;
  flex-direction: column;
}
.el-link.el-link--default {
  padding: 10px;
}
.textbottom {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding-top: 35px;
  border-bottom: 1px solid rgb(240, 240, 240);
}
.smallbox {
  text-align: center;
  width: 70%;
  margin: 0 auto;
  /* background-color: black; */
  /* height: 300px; */
  padding: 30px;
  display: flex;
  align-items: center;
}
.box img {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.box .first {
  color: #303133;
  font-size: 16px;
  font-weight: 600;
}
.second {
  padding-top: 10px;
  color: #909399;
}
.box {
  transition: transform 1s;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: auto;
  border: 1px solid rgb(240, 240, 240);
  padding: 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 33, 110, 0.06);
  border-radius: 4px;
  margin-right: 10px;
}
.searchinput {
  width: 35%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
}
.input {
  /* width: 55%;
  padding-left: 25%;
  text-align: center; */
  display: flex;
  align-items: center;
}
.searchtext {
  text-align: center;
  font-size: 35px;
  line-height: 35px;
}
.index {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  /* height: 100vh;
  overflow-x: hidden;
  overflow: auto; */
}
.but {
  padding-left: 10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.link1 {
  padding-right: 10px;
}
el-divider {
  width: 10px;
}
.linkbox {
  width: 100%;
  display: flex;
  align-items: center;
}
.link {
  text-align: center;
  width: 30%;
}
.el-row {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  /* background-color: #1a1a1a; */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  /* background: #d3dce6; */
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.bg-purple1 {
  /* background: #d3dce6; */
  padding: 20px;
  display: flex;
  align-items: center;
}
.bg-purple1 button {
  font-size: 4px;
}
.bg-purple-light {
  /* background: #e5e9f2; */
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

@media screen and (max-width: 600px) {
  .bg-purple {
    justify-content: center;
  }
  .searchinput {
    width: 100%;
    padding-top: 0px;
  }
  .smallbox {
    display: flex;
    flex-direction: column;
  }
  .box {
    margin-top: 10px;
    width: 100%;
    /* padding: ; */
    padding: 5px;
  }
  .smallbox .active {
    transform: translateX(-15px);
    padding: 5px;
    width: 100%;
  }
  .finallybottom {
    width: 70%;
    margin: 0 auto;
    padding-top: 0px;
  }
  .firstlink {
    display: flex;
    flex-direction: column;
  }
}
</style>
