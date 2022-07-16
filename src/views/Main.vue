<template>
  <div>
    <el-container style="height: 100%">
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="auto">
          <Aside />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/Aside.vue";
import Header from "@/components/Header.vue";
export default {
  name: "Main",
  components: { Aside, Header },
};
</script>

<style lang="less" scoped>
.el-aside {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.el-header {
  // background-color: #333;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
  padding: 0px;
}
.el-main {
  // 设置main可覆盖
  padding-top: 20px;
}
</style>
