const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();

const strToday = yyyy + "-" + mm + "-" + dd;

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
});
