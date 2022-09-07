<template>
  <div class="header">
    <div class="user-school-info">
      <span class="user-institution">
        <span style="color: #626d7b">机构：</span>{{ userInstitution }}</span
      >
      <span class="user-branch-school"
        ><span style="color: #626d7b">学校：</span>{{ userBranchSchool }}</span
      >
    </div>
    <div class="user-info">
      <img :src="userAvatar" width="30" height="30" class="user-avatar" />
      <span class="user-name">{{ userName }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
// import { getUserInfo } from "@/api/login";
import { useStore } from "vuex";
const store = useStore();
const userName = ref("用户名");
const userAvatar = ref("");
const userInstitution = ref("机构名");
const userBranchSchool = ref("学校名");
</script>
<style lang="less" scoped>
.header {
  height: 70px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
  box-shadow: 0px 2px 20px 0px rgba(32, 36, 40, 0.06);
  position: relative;
  .user-institution {
    height: 20px;
    font-size: 14px;
    color: #202428;
    font-weight: 500;
    display: inline-block;
  }
  .user-branch-school {
    height: 20px;
    font-size: 14px;
    color: #202428;
    font-weight: 500;
    display: inline-block;
    margin-left: 60px;
  }
  .user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    .user-avatar {
      border-radius: 15px;
    }
    .user-name {
      display: inline-block;
      font-size: 15px;
      font-weight: bold;
      color: #202428;
      margin-left: 10px;
    }
  }
}
</style>
