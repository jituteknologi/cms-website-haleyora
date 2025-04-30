"use strict";

/**
 *  csr controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::csr.csr", ({ strapi }) => ({
  async findOne(ctx: { request: any; params: { slug: any }; query: any }) {
    const { slug } = ctx.params;

    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const csr = await strapi.entityService.findMany("api::csr.csr", query);

    const sanitizedEntity = await this.sanitizeOutput(csr, ctx);

    return this.transformResponse(sanitizedEntity[0]);
  },
}));
