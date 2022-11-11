<template>
  <div class="flex justify-between w-full">
    <div
      class="w-1/2 sm:w-48 py-2 sm:py-4 px-1 border-2 border-neutral-900 cursor-pointer text-center"
    >
      <nuxt-link :to="prevPath">
        <div class="text-md sm:text-lg mb-2 font-bold border-b-2">Prev</div>
        <div class="text-xs sm:text-md font-semibold">{{ prev.title }}</div>
      </nuxt-link>
    </div>
    <div
      class="w-1/2 sm:w-48 py-2 sm:py-4 px-1 border-2 border-neutral-900 cursor-pointer text-center"
    >
      <nuxt-link :to="nextPath">
        <div class="text-md sm:text-lg mb-2 font-bold border-b-2">Next</div>
        <div class="text-xs sm:text-md font-semibold">{{ next.title }}</div>
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
