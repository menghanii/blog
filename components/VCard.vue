<template>
  <nuxt-link :to="postPath">
    <div class="relative h-24 border-b-1 sm:h-64 sm:rounded-lg sm:border">
      <div class="w-full h-0 sm:h-2/3 bg-slate-600 rounded-t-lg">
        <img :src="image" class="object-cover rounded-t-lg h-full" />
      </div>
      <div class="p-2 border-t">
        <div class="font-semibold text-sm sm:text-md">
          <slot name="title">title</slot>
        </div>
        <div class="text-xs text-gray-500 mt-1">
          <slot name="subtitle">subtitle</slot>
        </div>
        <div class="absolute bottom-0 left-2 text-xs">
          <slot name="date">date</slot>
        </div>
      </div>
    </div>
  </nuxt-link>
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
