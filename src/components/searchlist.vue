<template>
  <div class="searchlist">
    <!-- <span>这是搜索结果组件</span> -->
    <div v-for="item in searchdocumentlist " :key="item.Documentid">
      <div class="searchbox">
        <div class="tittle" @click="todetail(item.Documentid)">
          <el-link :underline="false">{{item.Documenttittle}}</el-link>
        </div>
        <div class="sometips">
          小提示。分 tips-dialog （对话型）和 tips-plain （简单型）两种类型。 说明： 仅用于 UI 展示没有对应的业务逻辑功能。 收藏引导 tips 不针对小程序，只针对用户，用户见到第一次引导收藏 tips ...
          小提示。分 tips-dialog （对话型）和 tips-plain （简单型）两种类型。 说明： 仅用于 UI 展示没有对应的业务逻辑功能。 收藏引导 tips 不针对小程序，只针对用户，用户见到第一次引导收藏 tips ...
          小提示。分 tips-dialog （对话型）和 tips-plain （简单型）两种类型。 说明： 仅用于 UI 展示没有对应的业务逻辑功能。 收藏引导 tips 不针对小程序，只针对用户，用户见到第一次引导收藏 tips ...
        </div>
        <div class="tags" >
          <div class="tagbox" v-for="(tags,index) in (item.Documentags).split(',')" :key="index">
            <el-tag type="success">{{tags}}</el-tag>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div class="pagination" v-if="searchdocumentlist.length>0">
      <el-pagination background layout="prev, pager, next" :total="searchdocumentlist.length"></el-pagination>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    todetail(id) {
      this.$router.push({name: 'Document', params: {id: id}});
    }
  },
  computed: {
    ...mapState({
      searchdocumentlist: state => state.searchdocumentlist
    })
  }
};
</script>

<style scoped>
.el-pagination {
  font-weight: 0;
}
.pagination {
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.tags {
  padding-bottom: 20px;
  display: flex;
  align-items: center;
}
.tags .tagbox {
  margin-left: 10px;
}
.sometips {
  width: 100%;
  padding: 10px;
  color: #999999;
  line-height: 25px;
  word-break: break-all;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.searchlist {
  width: 70%;
  margin: 0 auto;
  /* background-color: black; */
}
.searchbox {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-bottom: 1px solid #f0f0f0;
}
.tittle el-link {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  padding-top: 20px;
}

.el-divider__text,
.el-link {
  font-weight: 500;
  font-size: 16px;
}
</style>