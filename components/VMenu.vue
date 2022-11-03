<template>
  <div>
    <div>
      <VMenuBig> {{ category }} ({{ contents.length }}) </VMenuBig>
    </div>
    <div v-if="show">
      <div v-for="(content, i) in contents" :key="i">
        <VMenuSmall>
          <a :href="content['url']">
            {{ content["title"] }}
          </a>
        </VMenuSmall>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogVMenu",

  data() {
    return {
      show: false,
    };
  },

  props: {
    category: String,
    contents: Array,
  },
  mounted() {},

  methods: {
    onExpand() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped></style>
