"use strict";

/**
 *  service controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::service.service",
  ({ strapi }) => ({
    async findOne(ctx: { request: any; params: { slug: any }; query: any }) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const service = await strapi.entityService.findMany(
        "api::service.service",
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(service, ctx);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
