<template>
  <div class="cool-page">
    <h1>哈哈哈，这页没啥用</h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "CoolPage",
};
</script>

<style scoped>
.cool-page {
  background-color: #333;
  color: #fff;
  padding: 2rem;
  text-align: center;
  animation: cool-animation 2s ease-in-out infinite;
}

@keyframes cool-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
