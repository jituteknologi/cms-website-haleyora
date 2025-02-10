"use strict";

/**
 *  post controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::post.post",
  ({ strapi }) => ({
    async findOne(ctx: { request: any; params: { slug: any }; query: any }) {
      const { slug } = ctx.params;
      const read = ctx.request.header?.read && +ctx.request.header.read === 1;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi.entityService.findMany("api::post.post", query);
      if (read) {
        await strapi.entityService.update("api::post.post", post[0].id, {
          data: { views: post[0].views + 1 },
        });
      }

      const sanitizedEntity = await this.sanitizeOutput(post, ctx);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
