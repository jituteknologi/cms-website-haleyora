export default ({ env }) => ({
  "image-optimizer": {
    enabled: true,
    config: {
      formats: ["webp"],
      sizes: [
        {
          name: "original",
        },
      ],
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "60m",
      },
    },
  },
  "react-icons": true,
  "content-export-import": {
    enabled: true,
    resolve: "./src/plugins/content-export-import", // path to plugin folder
  },
});
