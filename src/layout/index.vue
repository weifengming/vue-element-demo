<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside width="200px">
        <sidebar />
      </el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>
<script>
import Sidebar from './componnets/Sidebar/index'
export default {
  name: 'Layout',
  data () {
    return {}
  },
  components: {
    Sidebar
  }
}
</script>
<style scoped>
.el-container {
  position: absolute;
  width: 100%;
  top: 0px;
  left: 0;
  bottom: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header .el-menu {
  border-bottom: none;
}
.el-aside,
.el-main {
  padding-top: 60px;
}
.el-aside {
  background: #545c64;
}
.el-aside .el-menu {
  border-right: none;
}
</style>
