<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="card-wrapper">
            <div class="card-left">
              <i class="el-icon-user"></i>
            </div>
            <div class="card-right">
              <div class="card-num">{{ 10 }}</div>
              <div>用户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <!-- 卡片包裹 -->
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="card-wrapper">
            <div class="card-left">
              <i class="el-icon-microphone"></i>
            </div>
            <div class="card-right">
              <div class="card-num">{{ 20 }}</div>
              <div>歌曲总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="card-wrapper">
            <div class="card-left">
              <i class="el-icon-service"></i>
            </div>
            <div class="card-right">
              <div class="card-num">{{ 30 }}</div>
              <div>歌手总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="card-wrapper">
            <div class="card-left">
              <i class="el-icon-document"></i>
            </div>
            <div class="card-right">
              <div class="card-num">{{ 40 }}</div>
              <div>歌单总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
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
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple {
  background: #d3dce6;
}
</style>