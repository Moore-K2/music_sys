<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      active-text-color="#30a4fc"
      :collapse="isCollapse"
      router
    >
      <span class="super">
        <img
          :src="superimg"
          :style="isCollapse ? 'display:none' : 'display:block'"
          alt=""
        />
      </span>
      <h3 :style="isCollapse ? 'color: red;margin-top:30px' : 'color:#409eff'">
        {{ isCollapse ? "Moore" : "music-sys " }}
      </h3>
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-mic"></i>
        <span slot="title">歌手管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-tickets"></i>
        <span slot="title">歌单管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  data() {
    return {
      isCollapse: false,
      superimg: require("@/assets/img/super.png"),
    };
  },
};
</script>

<style lang="less" scoped>
.super {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  margin-top: 15px;
  height: 45px;
  border-radius: 15px;
  display: block;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 170px;
  min-height: 400px;
}
.el-menu {
  // vh是屏幕视角
  height: 100vh;
  // height:100%;
  border: none;
  h3 {
    margin-top: 10px;
    font-size: 20px;
    text-align: center;
    line-height: 39px;
    color: #fff;
  }
}
.el-menu-item,
.el-submenu__title {
  font-size: 16px;
}
</style>