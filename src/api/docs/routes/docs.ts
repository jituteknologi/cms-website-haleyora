export default {
  routes: [
    {
      method: "GET",
      path: "/docs/openapi.json",
      handler: "docs.index",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/docs/v:major(\\d+).:minor(\\d+).:patch(\\d+)/openapi.json",
      handler: "docs.index",
      config: {
        auth: false,
      },
    },
  ],
};
