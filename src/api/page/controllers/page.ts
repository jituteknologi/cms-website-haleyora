"use strict";

/**
 *  page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async findOne(ctx: { request: any; params: { slug: any }; query: any }) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const page = await strapi.entityService.findMany("api::page.page", query);

      const sanitizedEntity = await this.sanitizeOutput(page, ctx);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
