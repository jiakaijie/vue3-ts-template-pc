<template>
  <div class="home">
    <div class="box">{{ title }}</div>
    <button @click="onClickDetails">查看详情</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter, } from 'vue-router';

const title = ref<string>("学生管理");
const router = useRouter();

const onClickDetails = () => {
  router.push({
    path: '/bu/stuDetails'
  })
}
</script>
<style lang="less" scoped>
</style>