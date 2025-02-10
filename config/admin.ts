export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  host: env("ADMIN_HOST"), // only used along with `strapi develop --watch-admin` command
  port: env.int("ADMIN_PORT"), // only used along with `strapi develop --watch-admin` command
  url: env("ADMIN_PATH"),
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
