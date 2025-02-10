"use strict";

import fs from "fs-extra";
import path from "path";

module.exports = {
  index: async (ctx) => {
    try {
      const { major, minor, patch } = ctx.params;
      const version =
        major && minor && patch
          ? `${major}.${minor}.${patch}`
          : strapi.config.get("plugins.documentation.info.version", "1.0.0");

      const appPath = strapi.config.appPath || process.cwd();
      const openAPISpecsPath = path.join(
        appPath,
        "src",
        "extensions",
        "documentation",
        "documentation",
        version,
        "full_documentation.json"
      );

      const documentation = fs.readFileSync(openAPISpecsPath, "utf8");
      const response = JSON.parse(documentation);
      ctx.send(response);
    } catch (e) {
      strapi.log.error(e);
      ctx.badRequest(null, e.message);
    }
  },
};
