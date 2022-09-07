<template>
  <div class="main">
    <app-sidebar/>
    <div class="container">
      <app-header class="header"/>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppHeader from "../../components/Header.vue";
import AppSidebar from "../../components/Sidebar.vue";
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container {
    flex: 1;
    height: 100%;
    overflow-y: scroll;
    position: relative;
    .header {
      width: 100%;
      position: fixed;
      top: 0;
      box-sizing: border-box;
    }
    .content-wrapper {
      margin-top: 70px;
      padding: 20px;
    }
  }
}
</style>
