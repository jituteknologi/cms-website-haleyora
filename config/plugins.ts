export default ({ env }) => ({
  email: {
    config: {
      provider: "msgraph",
      providerOptions: {
        clientId: env("EMAIL_CLIENT_ID"),
        clientSecret: env("EMAIL_CLIENT_SECRET"),
        tenantId: env("EMAIL_TENANT_ID"),
      },
      settings: {
        defaultFrom: env("EMAIL_DEFAULT_FROM"),
        defaultReplyTo: env("EMAIL_DEFAULT_REPLY_TO"),
      },
    },
  },
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
