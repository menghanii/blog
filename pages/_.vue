<template>
  <MainPage :showCard="true" :path="path"></MainPage>
</template>
<script>
export default {
  async asyncData({ route }) {
    const path = route.fullPath.slice(1);
    return {
      path,
    };
  },
};
</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
</style>
