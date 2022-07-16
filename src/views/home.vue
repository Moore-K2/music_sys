<template>
  <div>
    <el-row :gutter="20">
      <!-- 利用v-for遍历渲染  user,singer, song,songlist-->
      <el-col :span="6" v-for="(item, index) in headList" :key="index">
        <!-- 用el-card包裹更清晰 -->
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="card-wrapper">
            <!-- 左边的icon图标 -->
            <div class="card-left">
              <i :class="`el-icon-${item.icon}`" :style="'color:' + item.color">
              </i>
            </div>
            <!-- 右边的label与总数count -->
            <div class="card-right">
              <div class="card-num">{{ item.count }}</div>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 下一行 -->
    <el-row>
      <el-col :span="12">
        <h3>用户性别比例</h3>
      </el-col>
      <el-col :span="12">
        <h3>歌曲类型</h3>
      </el-col>
    </el-row>
    <!-- 下2行 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card
          shadow="hover"
          :body-style="{ padding: '0px' }"
          class="card-diagram-wrapper"
        >
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          shadow="hover"
          :body-style="{ padding: '0px' }"
          class="card-diagram-wrapper"
        >
        </el-card>
      </el-col>
    </el-row>
    <!-- 下3行 -->
    <el-row>
      <el-col :span="12">
        <h3>用户性别比例</h3>
      </el-col>
      <el-col :span="12">
        <h3>歌曲类型</h3>
      </el-col>
    </el-row>
    <!-- 下4行 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card
          shadow="hover"
          :body-style="{ padding: '0px' }"
          class="card-diagram-wrapper"
        >
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card
          shadow="hover"
          :body-style="{ padding: '0px' }"
          class="card-diagram-wrapper"
        >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // user, song,singer, songlist
      headList: [
        {
          label: "用户总数",
          icon: "user",
          color: "red",
          count: 10,
        },
        {
          label: "歌曲总数",
          icon: "microphone",
          color: "blue",
          count: 20,
        },
        {
          label: "歌手总数",
          icon: "service",
          color: "black",
          count: 30,
        },
        {
          label: "歌单总数",
          icon: "document",
          color: "gold",
          count: 40,
        },
      ],
    };
  },
  created() {
    console.log("axios获取user, singer,song,list的总数量，再赋值给对应的总数");
    const userCount = 19;
    const songCount = 29;
    const singerCount = 39;
    const songListCount = 49;
    this.headList.forEach((item) => {
      if (item.label == "用户总数") {
        item.count = userCount;
      }
      if (item.label == "歌曲总数") {
        item.count = songCount;
      }
      if (item.label == "歌手总数") {
        item.count = singerCount;
      }
      if (item.label == "歌单总数") {
        item.count = songListCount;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.card-wrapper {
  height: 100px;
  padding-left: 19%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  .card-left {
    display: flex;
    font-size: 3rem;
  }
  .card-right {
    // 表示占1/2 让cardleft与card-right各占一半。nice
    flex: 1;
    font-size: 14px;
    .card-num {
      margin-bottom: 3px;
      font-size: 32px;
      font-weight: bold;
    }
  }
}
h3 {
  font-size: 1.17rem;
  font-weight: bold;
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
// 设置diagram容器的样式
.card-diagram-wrapper {
  background-color: #fff;
  border-radius: 8px;
  height: 250px;
  border: 1px transparent #e4e7ed;
}
.bg-purple {
  background: #d3dce6;
}
</style>