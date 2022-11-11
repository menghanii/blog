<template>
  <div
    class="grid grid-cols-12 fixed bg-white w-full h-10 md:h-16 z-50 bg-zinc-700"
  >
    <div
      class="flex items-center col-start-1 col-end-2 2xl:col-start-3 2xl:col-end-5 px-4"
    >
      <div class="w-full sm:w-1/2 lg:w-1/4 2xl:w-1/8">
        <font-awesome-icon
          icon="bars"
          class="cursor-pointer text-white"
          @click="showSidebar"
        />
      </div>
    </div>
    <div
      class="flex justify-center items-center p-2 col-start-2 col-end-12 2xl:col-start-5 2xl:col-end-9 text-white"
    >
      My Blog
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogMainHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    showSidebar() {
      this.$emit("showSidebar");
    },
  },
};
</script>

<style scoped></style>
