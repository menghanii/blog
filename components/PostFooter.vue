<template>
  <div class="flex justify-between w-full">
    <div
      class="w-1/3 sm:w-48 py-2 sm:py-4 px-1 cursor-pointer text-center rounded-lg bg-gray-200"
    >
      <nuxt-link :to="prevPath">
        <div class="text-md sm:text-xl mb-2 font-bold border-b border-gray-300">
          Prev
        </div>
        <div class="text-xs sm:text-lg font-semibold">{{ prev.title }}</div>
      </nuxt-link>
    </div>
    <div
      class="w-1/3 sm:w-48 py-2 sm:py-4 px-1 cursor-pointer text-center rounded-lg bg-gray-200"
    >
      <nuxt-link :to="nextPath">
        <div class="text-md sm:text-xl mb-2 font-bold border-b border-gray-300">
          Next
        </div>
        <div class="text-xs sm:text-lg font-semibold">{{ next.title }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prevPath: "/",
      nextPath: "/",
    };
  },
  props: {
    prev: Object,
    next: Object,
  },

  mounted() {},
  updated() {
    this.prevPath = this.prev.path;
    this.nextPath = this.next.path;
  },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
