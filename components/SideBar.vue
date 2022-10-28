<template>
  <div class="bg-white border p-4 h-screen">
    <div v-for="(menu, i) in menuList" :key="i" class="mb-4">
      <VMenu :bigMenu="menu.bigMenu" :smallMenu="menu.smallMenu"></VMenu>
    </div>
    <div v-for="(content, i) in contentList" :key="i" class="mb-4">
      {{ content.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSideBar",

  data() {
    return {
      contentList: [],
      menuList: [
        {
          bigMenu: "Python",
          smallMenu: ["python1", "python2", "python3"],
        },
        {
          bigMenu: "About",
          smallMenu: ["me", "you", "we", "all"],
        },
      ],
    };
  },

  mounted() {
    this.$content("/posts", { deep: true })
      .only(["title"])
      .fetch()
      .then((result) => {
        this.contentList = result;
      });
    console.log(this.contentList);
  },

  methods: {},
};
</script>

<style scoped></style>
