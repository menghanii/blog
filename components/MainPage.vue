<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12">
      <MainHeader @showSidebar="showSidebar" />
    </div>
    <div
      v-if="showSide"
      class="fixed top-10 sm:top-16 z-50 bg-zinc-700 w-full border-b grid grid-cols-12"
      id="slide"
    >
      <div
        class="col-span-12 lg:col-start-1 lg:col-end-4 2xl:col-start-3 2xl:col-end-5"
      >
        <SideBar :menus="menus" />
      </div>
    </div>
    <div
      class="bg-white col-span-12 lg:col-start-4 lg:col-end-12 2xl:col-start-5 2xl:col-end-9 min-h-screen rounded-xl mt-10 sm:mt-16"
    >
      <div v-if="showCard">
        <div class="text-center text-2xl md:text-4xl my-8 select-none">
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
              <div slot="date">π {{ post.date }}</div>
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
        all: { name: "μ μ²΄", content: [] },
        python: { name: "νμ΄μ¬", content: [] },
        linux: { name: "λ¦¬λμ€", content: [] },
        git: { name: "Git", content: [] },
        algorithm: { name: "μκ³ λ¦¬μ¦", content: [] },
        statistics: { name: "ν΅κ³", content: [] },
        nlp: { name: "NLP", content: [] },
        vision: { name: "λΉμ ", content: [] },
        recsys: { name: "μΆμ²μμ€ν", content: [] },
        ops: { name: "Ops", content: [] },
        graph: { name: "κ·Έλν", content: [] },
        etc: { name: "κΈ°ν", content: [] },
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
        return "./gradient_image.png";
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
