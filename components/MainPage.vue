<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <MainHeader @showSidebar="showSidebar" />
    </div>
    <div
      v-if="showSide"
      class="col-span-12 lg:col-start-1 lg:col-end-4 2xl:col-start-3 2xl:col-end-5 mt-16 sm:mt-24"
    >
      <div class="lg:fixed">
        <SideBar :menus="menus" />
      </div>
    </div>
    <div
      class="bg-white col-span-12 lg:col-start-4 lg:col-end-12 2xl:col-start-5 2xl:col-end-9 min-h-screen rounded-xl mt-10 sm:mt-16"
    >
      <div v-if="showCard">
        <div class="text-center text-2xl md:text-4xl font-semibold my-8">
          {{ menus[path]["name"] }}
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="(post, i) in menus[path]['content']"
            :key="i"
            class="w-full sm:w-1/2 lg:w-1/3 p-0.5 sm:mb-8"
          >
            <VCard :postPath="post.url" :image="propImage(post.image)">
              <div slot="title">{{ post.title }}</div>
              <div slot="subtitle">{{ post.subtitle }}</div>
              <div slot="date">🗓 {{ post.date }}</div>
            </VCard>
          </div>
        </div>
      </div>
      <div v-else>
        <slot></slot>
      </div>
    </div>
    <div class="col-span-12">
      <MainFooter />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSide: false,
      menus: {
        all: { name: "전체", content: [] },
        python: { name: "파이썬", content: [] },
        linux: { name: "리눅스", content: [] },
        git: { name: "Git", content: [] },
        algorithm: { name: "알고리즘", content: [] },
        statistics: { name: "통계", content: [] },
        nlp: { name: "NLP", content: [] },
        vision: { name: "비전", content: [] },
        recsys: { name: "추천시스템", content: [] },
        ops: { name: "Ops", content: [] },
        graph: { name: "그래프", content: [] },
        etc: { name: "기타", content: [] },
      },
    };
  },
  mounted() {
    this.$content({ deep: true })
      .sortBy("date", "desc")
      .sortBy("order", "desc")
      .only(["title", "subtitle", "image", "path", "date", "order"])
      .fetch()
      .then((result) => {
        result.map((r) => {
          const category = r["path"].split("/")[1];
          this.menus["all"]["content"].push({
            title: r["title"],
            subtitle: r["subtitle"],
            image: r["image"],
            url: r["path"],
            date: r["date"],
            order: r["order"],
          });
          this.menus[category]["content"].push({
            title: r["title"],
            subtitle: r["subtitle"],
            image: r["image"],
            url: r["path"],
            date: r["date"],
            order: r["order"],
          });
        });
      });
  },
  props: {
    showCard: Boolean,
    path: String,
  },
  methods: {
    showSidebar() {
      this.showSide = !this.showSide;
    },
    propImage(image) {
      if (!image) {
        return "/gradient_image.png";
      } else {
        return image;
      }
    },
  },
};
</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

.font {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
}
</style>
