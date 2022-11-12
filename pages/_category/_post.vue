<template>
  <MainPage>
    <div class="px-4 sm:px-8">
      <article>
        <div class="my-10 sm:my-16">
          <h1 class="font-bold text-xl text-center sm:text-4xl break-keep">
            {{ page.title }}
          </h1>
          <div class="text-xs sm:text-sm text-center text-gray-500 my-2">
            🗓 {{ page.date }}
          </div>
          <div class="flex justify-center">
            <div
              v-for="(tag, i) in page.tag"
              :key="i"
              class="px-2 py-1 m-0.5 mt-2 bg-slate-700 text-white text-[0.6rem] sm:text-xs rounded-full"
            >
              #{{ tag }}
            </div>
          </div>
        </div>
        <nuxt-content :document="page" />
        <div class="mt-8 sm:mt-16">
          <PostFooter :prev="prev" :next="next" />
        </div>
      </article>
    </div>
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
  data() {
    return {
      prev: {},
      next: {},
    };
  },
  mounted() {
    this.$content({ deep: true })
      .sortBy("date", "desc")
      .sortBy("order", "desc")
      .only(["title", "path"])
      .surround(this.page.slug)
      .fetch()
      .then((result) => {
        if (result[0] === null) {
          this.prev = { title: "없음", path: "/" };
        } else {
          this.prev = result[0];
        }
        if (result[1] === null) {
          this.next = { title: "없음", path: "/" };
        } else {
          this.next = result[1];
        }
      });
  },
};
</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

.nuxt-content {
  font-family: "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji";
  word-break: break-all;
  line-height: 1.5rem;
  color: #262626;
  font-weight: 400;
  font-size: 1rem;
  word-break: break-all;
}

.nuxt-content h1 {
  font-size: 2rem;
  color: black;
  font-weight: bold;
  margin: 2rem 0;
}

.nuxt-content h2 {
  font-size: 1.8rem;
  color: black;
  font-weight: 500;
  margin: 1.8rem 0;
}

.nuxt-content h3 {
  font-size: 1.5rem;
  color: black;
  font-weight: 500;
  margin: 1.5rem 0;
  border-left: 0.5rem solid rgb(63 63 70);
  border-bottom: 1px solid rgb(63 63 70);
  padding: 0.5rem;
}

.nuxt-content h4 {
  font-size: 1rem;
  color: black;
  font-weight: bold;
  margin: 1rem 0;
}

.nuxt-content p {
  margin: 1.2rem 0;
}

@media (max-width: 640px) {
  .nuxt-content {
    font-size: 1rem;
  }

  .nuxt-content h1 {
    font-size: 1.6rem;
  }

  .nuxt-content h2 {
    font-size: 1.3rem;
  }

  .nuxt-content h3 {
    font-size: 1.2rem;
  }

  .nuxt-content h4 {
    font-size: 1rem;
  }

  .nuxt-content-highlight {
    font-size: 0.7rem;
  }
}
</style>
