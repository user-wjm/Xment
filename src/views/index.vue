<template>
  <div class="index">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img style="width:34px;height:34px;" src="../assets/wendang.png" alt />
          <el-divider direction="vertical"></el-divider>
          <span>我的文档</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <div class="linkbox">
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
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple1">
          <div class="link1">
            <el-link :underline="false">登录</el-link>
          </div>
          <el-divider direction="vertical"></el-divider>
          <el-button type="primary">立即入驻</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style >
.index {
  width: 70%; 
    margin: 0 auto;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
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
.bg-purple-light {
  /* background: #e5e9f2; */
  padding: 20px;
  display: flex;
  align-items: center;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
