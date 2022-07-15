<template>
  <header>
    <div class="left-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
    </div>
    <div class="right-content"></div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
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
}
.left-content {
  display: flex;
  align-items: center;
  padding-left: 47px;
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
