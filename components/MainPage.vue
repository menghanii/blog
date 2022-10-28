<template>
  <div class="grid grid-cols-12 font">
    <div class="col-span-1 bg-zinc-400 text-center">hello</div>
    <div class="col-span-1 bg-slate-700 text-white text-center">world</div>
    <div class="col-span-1 bg-zinc-400 text-center">hello</div>
    <div class="col-span-1 bg-slate-700 text-white text-center">world</div>
    <div class="col-span-1 bg-zinc-400 text-center">hello</div>
    <div class="col-span-1 bg-slate-700 text-white text-center">world</div>
    <div class="col-span-1 bg-zinc-400 text-center">hello</div>
    <div class="col-span-1 bg-slate-700 text-white text-center">world</div>
    <div class="col-span-1 bg-zinc-400 text-center">hello</div>
    <div class="col-span-1 bg-slate-700 text-white text-center">world</div>
    <div class="col-span-1 bg-zinc-400 text-center">hello</div>
    <div class="col-span-1 bg-slate-700 text-white text-center">world</div>
    <div class="col-span-12">
      <MainHeader />
    </div>
    <div class="col-span-3">
      <SideBar />
    </div>
    <div class="col-start-4 col-end-10 2xl:col-start-5 2xl:col-end-9">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

.font {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
}
</style>
