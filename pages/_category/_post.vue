<template>
  <MainPage>
    <article>
      <div class="my-2 md:my-16">
        <h1 class="font-bold text-xl text-center sm:text-5xl">
          {{ page.title }}
        </h1>
        <div class="flex justify-center">
          <div
            v-for="(tag, i) in page.tag"
            :key="i"
            class="px-2 py-1 m-0.5 mt-2 bg-slate-700 text-white text-xs rounded-full"
          >
            #{{ tag }}
          </div>
        </div>
      </div>
      <nuxt-content :document="page" />
    </article>
  </MainPage>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(`${params.category}/${params.post}`, {
      deep: true,
    }).fetch();
    return {
      page,
    };
  },
};
</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

.nuxt-content {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
  word-break: break-all;
  line-height: 2rem;
  color: #383839;
  font-weight: 300;
}

.nuxt-content h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
}
</style>
