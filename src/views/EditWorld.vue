<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="文档发表" name="first">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="onReady"></ckeditor>
        <div class="uploadworld">
          <el-button type="primary" @click="editorOk">立即发表</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
    <el-dialog title="提交文档" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="文档标题" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="文档标签" :label-width="formLabelWidth">
          <el-select v-model="form.region" multiple collapse-tags placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDocument">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      dialogFormVisible: false,
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        },
        {
          value: "北京烤鸭",
          label: "北京烤鸭"
        }
      ],
      form: {
        name: "",
        region: [],
       editordata:''
      },
      formLabelWidth: "120px",
      activeName: "first",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        removePlugins: ["MediaEmbed"], //除去视频按钮
        language: "zh-cn", //中文包
        ckfinder: {
          uploaded: 2,
          url: "/"
          // 后端处理上传逻辑返回json数据,包括uploaded(选项true/false)和url两个字段
        },
        toolbar: [
          "heading", //段落
          "|", //分隔
          "bold", //加粗
          "italic", //倾斜
          "link", //超链接
          "bulletedList", //项目列表
          "numberedList", //编号列表
          "blockQuote", //块引用
          "undo", //撤销
          "redo", //重做
          "imageStyle:full", //图片通栏显示
          "imageStyle:side", //图片侧边显示
          "imageTextAlternative", //更换图片替换文本
          "imageUpload" //插入图像
        ] //工具栏显示
      }
    };
  },
  methods: {
    //添加文档
    addDocument(){
        this.form.region = (this.form.region).toString()
        // console.log(s.toString())
        axios({
          url:'/api/addDocument/',
          method:'POST',
          data:this.form
        }).then(res=>{
          console.log(res)
          this.dialogFormVisible = false
        })
    },
    editorOk() {
      console.log(this.editorData);
      this.dialogFormVisible = true;
      this.form.editordata = this.editorData
    },
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    onReady(editor) {
      // 自定义上传图片插件
      editor.plugins.get("FileRepository").createUploadAdapter = loader => {
        return new MyUploadAdapter(loader);
      };
    }
  }
};

class MyUploadAdapter {
  constructor(loader) {
    // Save Loader instance to update upload progress.
    this.loader = loader;
  }

  async upload() {
    const data = new FormData();
    data.append("typeOption", "upload_image");
    data.append("upload", await this.loader.file);

    return new Promise((resolve, reject) => {
      axios({
        url: "/api/getimg/",
        method: "post",
        data,
        // headers: {
        //   'Authorization': 'Bearer tokenxxxxxxxxxxxxxxxxxxx'  // 此处为你定义的token 值(Bearer token 接口认证方式)
        // },
        withCredentials: false // true 为不允许带 token, false 为允许，可能会遇到跨域报错：Error: Network Error 弹窗提示（感谢@ big_yellow 指正）
      })
        .then(res => {
          var resData = res.data;
          resData.default = resData.data;
          console.log(resData.default);
          resolve(resData);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}
</script>

<style scoped>
.uploadworld {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
</style>