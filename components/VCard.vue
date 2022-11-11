<template>
  <nuxt-link :to="postPath">
    <div class="relative h-24 border-b-1 sm:h-64 sm:rounded-lg sm:border">
      <div class="w-full h-0 sm:h-2/3 bg-indigo-50 rounded-t-lg">
        <img :src="image" class="object-cover rounded-t-lg w-full h-full" />
      </div>
      <div class="p-2 border-t h-full sm:h-1/3">
        <div class="h-2/5 sm:h-4/5 font-semibold text-sm sm:text-md break-all">
          <slot name="title">title</slot>
        </div>
        <div
          class="h-2/5 sm:hidden text-xs text-gray-500 mt-1 break-all truncate"
        >
          <slot name="subtitle">subtitle</slot>
        </div>
        <div class="h-1/5 text-xs relative">
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
