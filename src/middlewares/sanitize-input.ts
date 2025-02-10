/**
 * `sanitize-input` middleware
 */

import { Strapi } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const { method, url } = ctx.request;
    const sanitizeObject = (inputObj) => {
      const sanitizedObj = {};

      for (const key in inputObj) {
        if (Object.hasOwnProperty.call(inputObj, key)) {
          const value = inputObj[key];

          if (typeof value === "object" && !Array.isArray(value)) {
            // Recursively sanitize nested objects
            sanitizedObj[key] = sanitizeObject(value);
          } else if (typeof value === "string") {
            // Remove HTML tags from string
            sanitizedObj[key] = value.replace(/<[^>]*>/g, "");
          } else {
            // For other types or when sanitization is not required, keep the value unchanged
            sanitizedObj[key] = value;
          }
        }
      }

      return sanitizedObj;
    };

    if (
      (method === "POST" || method === "PUT") &&
      url.includes("/api/") &&
      !url.includes("::")
    ) {
      const data = ctx.request.body;
      const sanitizedData = sanitizeObject(data);
      ctx.request.body = sanitizedData;
    }

    await next();
  };
};
