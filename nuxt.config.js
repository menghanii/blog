export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  generate: {
    subFolders: false,
    crawler: false,
    // async routes() {
    //   const { $content } = require("@nuxt/content");
    //   const files = await $content({ deep: true }).only(["path"]).fetch();
    //   return files.map((file) => (file.path === "/index" ? "/" : file.path));
    // },
    async routes() {
      const { $content } = require("@nuxt/content");
      const files = await $content({ deep: true }).only(["path"]).fetch();
      const routes = [];
      files.map((file) => {
        const dir = "/" + file.path.split("/")[1];
        if (routes.includes(dir)) {
          routes.push(file.path);
        } else {
          routes.push(dir);
          if (file.path === "/index") {
            routes.push("/");
          } else {
            routes.push(file.path);
          }
        }
      });
      console.log(routes);
      return routes;
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //router
  router: {
    base: "/blog/",
  },
};
