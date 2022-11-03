<template>
  <div class="relative border h-64 rounded-lg">
    <a :href="postPath">
      <div class="w-full h-2/3 bg-slate-600 rounded-t-lg">
        <img :src="image" class="object-cover rounded-t-lg h-full" />
      </div>
      <div class="p-2 border-t">
        <div class="font-semibold text-md"><slot name="title">title</slot></div>
        <div class="text-sm"><slot name="subtitle">subtitle</slot></div>
        <div class="absolute bottom-0 left-2 text-xs">
          <slot name="date">date</slot>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "BlogVCard",

  data() {
    return {};
  },

  props: {
    postPath: String,
    image: String,
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
