/**
 * `save-tags` middleware
 */

import { Strapi } from "@strapi/strapi";

export default (_config: any, { strapi }: { strapi: Strapi }) => {
  return async (
    ctx: { request: { method: any; body: any } },
    next: () => any
  ) => {
    const { method, body } = ctx.request;

    if (shouldHandleTags(method, body)) {
      const { post_tags } = body;

      await processTags(post_tags, strapi);
    }

    await next();
  };
};

// Utility function to check if we should handle tags
const shouldHandleTags = (method: string, body: any) => {
  return (
    (method === "POST" || method === "PUT") && Array.isArray(body.post_tags)
  );
};

// Utility function to process tags
const processTags = async (tags: any[], strapi: Strapi) => {
  for (const tag of tags) {
    const { name } = tag;
    if (name) {
      await findOrCreateTag(name, strapi);
    }
  }
};

// Utility function to find or create a tag
const findOrCreateTag = async (name: string, strapi: Strapi) => {
  const existingTag = await strapi.db.query("api::post-tag.post-tag").findOne({
    where: { name },
  });

  if (!existingTag) {
    await strapi.db.query("api::post-tag.post-tag").create({
      data: { name },
    });

    strapi.log.info(`Tag "${name}" created.`);
  } else {
    strapi.log.info(`Tag "${name}" already exists.`);
  }
};
