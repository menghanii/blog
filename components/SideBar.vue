<template>
  <div class="px-8">
    <div v-for="(menu, i) in Object.keys(menus)" :key="i" class="mb-4">
      <nuxt-link :to="'/' + menu">
        <div>
          <VMenu
            :category="menus[menu]['name']"
            :contents="menus[menu]['content']"
          ></VMenu>
        </div>
      </nuxt-link>
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
  methods: {},
};
</script>

<style scoped></style>
