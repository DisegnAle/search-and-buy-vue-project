<template>
  <div id="app">
    <el-container>
      <el-main>
        <el-row>
          <el-col>
            <router-view />
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.el-table {
  .cell {
    word-break: initial !important;
  }
}
</style>
