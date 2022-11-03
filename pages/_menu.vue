<template>
  <MainPage :showCard="true" :path="path"></MainPage>
</template>
<script>
export default {
  async asyncData({ params }) {
    const path = params.menu;
    return {
      path,
    };
  },
};
</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
</style>
