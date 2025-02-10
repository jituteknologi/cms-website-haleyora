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
  documentation: {
    enabled: true,
    config: {
      info: {
        version: "1.0.0",
        title: `${env("ADMIN_ENV")} - HALEYORA CMS Strapi`,
        description: "",
        termsOfService: "https://www.haleyora.co.id/privacy-policy",
        contact: {
          name: "HALEYORA TEAM",
          email: "wahyu.taufik@sera.astra.co.id",
          url: "https://selog.astra.co.id",
        },
      },
    },
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::post.post",
          draft: {
            url: `${env("DOMAIN")}/api/preview`,
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: `${env("WEBSITE_DOMAIN")}/blog/berita/{slug}`,
          },
        },
        {
          uid: "api::service.service",
          draft: {
            url: `${env("DOMAIN")}/api/preview`,
            query: {
              type: "service",
              slug: "{slug}",
            },
          },
          published: {
            url: `${env("WEBSITE_DOMAIN")}/layanan/{slug}`,
          },
        },
        {
          uid: "api::solution.solution",
          draft: {
            url: `${env("DOMAIN")}/api/preview`,
            query: {
              type: "solution",
              slug: "{slug}",
            },
          },
          published: {
            url: `${env("WEBSITE_DOMAIN")}/industri/{slug}`,
          },
        },
      ],
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
  "content-export-import": {
    enabled: true,
    resolve: "./src/plugins/content-export-import", // path to plugin folder
  },
});
