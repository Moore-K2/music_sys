<template>
  <header>
    <div class="header">
      <div class="left-content">
        <el-button
          icon="el-icon-menu"
          size="mini"
          type="primary"
          @click="handleCollapse()"
        ></el-button>
        <div class="logo">{{ musicName }}</div>
      </div>
      <div class="right-content"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      musicName: "mm-cc 后台管理",
    };
  },
  methods: {
    handleCollapse() {
      console.log("操作侧栏");
      // 提交HandleCollapse方法
      this.$store.commit("HANDELCOLLAPSE");
    },
  },
  mounted() {
    const store = this.$store;
    console.log(store);
  },
};
</script>

<style lang="less" scoped>
header {
  display: flex;
  // 有了height才能实现align-items的居住效果
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  // box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
  z-index: 100;
}
.left-content {
  display: flex;
  align-items: center;
  padding-left: 62px;
  .el-button {
    margin-right: 20px;
  }
}
.right-content {
  span {
    margin-right: 40px;
  }
  .userimg {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
}
</style>
