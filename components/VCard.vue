<template>
  <nuxt-link :to="postPath">
    <div class="relative min-h-24 border-b-1 sm:h-80 sm:rounded-lg sm:border">
      <div class="w-full hidden sm:block sm:h-1/2 rounded-t-lg relative">
        <img :src="image" class="object-cover rounded-t-lg w-full h-full" />
        <!-- <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full break-all text-center"
        >
          <slot name="subtitle">subtitle</slot>
        </div> -->
      </div>
      <div class="pt-2 px-2 border-t h-full sm:h-1/2">
        <div class="h-2/5 font-semibold text-md break-all">
          <slot name="title">title</slot>
        </div>
        <div class="h-2/5 text-xs text-gray-500 mt-1 break-all">
          <slot name="subtitle">subtitle</slot>
        </div>
        <div class="h-1/5 text-xs mt-1">
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
