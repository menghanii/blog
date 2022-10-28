<template>
  <div>
    <div>
      <VMenuBig>{{ bigMenu }}</VMenuBig>
    </div>
    <div v-for="(menu, i) in smallMenu" :key="i" class="pl-4">
      <VMenuSmall>{{ menu }}</VMenuSmall>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogVMenu",

  data() {
    return {};
  },

  props: {
    bigMenu: String,
    smallMenu: Array,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
