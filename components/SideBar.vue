<template>
  <div class="bg-white pl-8 h-screen">
    <div class="bg-black">sss</div>
    <div class="mt-16">
      <div v-for="(menu, i) in Object.keys(menus)" :key="i" class="mb-4">
        <div @click="moveOnTo(menu)">
          <VMenu
            :category="menus[menu]['name']"
            :contents="menus[menu]['content']"
          ></VMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSideBar",

  data() {
    return {};
  },
  props: {
    menus: Object,
  },

  mounted() {},
  methods: {
    moveOnTo(target) {
      location.href = target;
    },
  },
};
</script>

<style scoped></style>
