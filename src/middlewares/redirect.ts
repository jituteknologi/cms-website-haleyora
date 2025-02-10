/**
 * `redirect` middleware
 */

import { Strapi } from "@strapi/strapi";

export default (_config: any, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (
    ctx: {
      request: { url: string; header: { authorization: any } };
      redirect: (arg0: string) => any;
    },
    next: () => any
  ) => {
    const adminURL = JSON.parse(JSON.stringify(strapi.config.get("admin.url")));
    strapi.log.info(adminURL);

    if (ctx.request.url === "/") return ctx.redirect(adminURL);

    if (
      (ctx.request.url === adminURL || ctx.request.url === `${adminURL}/`) &&
      typeof ctx.request.header.authorization === "undefined"
    )
      return ctx.redirect(`${adminURL}/content-manager`);

    await next();
  };
};
