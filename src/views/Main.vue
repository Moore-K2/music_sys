<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}
.el-main {
  // 设置main可覆盖
  padding-top: 0;
}
</style>
