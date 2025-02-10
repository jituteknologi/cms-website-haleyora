/**
 * `file-sanitize` middleware
 */

import { Strapi } from "@strapi/strapi";
import { PDFDocument, PDFName } from "pdf-lib";
const fs = require("fs").promises;

export default (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    const { method, url } = ctx.request;

    if (
      (method === "POST" || method === "PUT") &&
      url.includes("/upload") &&
      ctx.request.files
    ) {
      const { files } = ctx.request.files;

      if (files && files.type === "application/pdf") {
        const filePath = files.path;

        try {
          // Load PDF file from temporary path
          const fileBuffer = await fs.readFile(filePath);
          const pdfDoc = await PDFDocument.load(fileBuffer);

          // Validate the PDF

          // Check annotations
          const pages = pdfDoc.getPages();
          for (const [index, page] of pages.entries()) {
            if (page.node.has(PDFName.of("Annots"))) {
              return ctx.badRequest(
                `Page ${index + 1} may contains dangerous content!`
              );
            }

            if (page.node.has(PDFName.of("AA"))) {
              return ctx.badRequest(
                `Page ${index + 1} may contains dangerous content!`
              );
            }
          }

          if (pdfDoc.catalog.has(PDFName.of("OpenAction"))) {
            return ctx.badRequest(
              "Document may contains OpenAction, which may execute JavaScript when opened!"
            );
          }
          console.log("PDF is safe.");
        } catch (error) {
          console.error("Error validation PDF:", error);
          return ctx.badRequest("Cek dulu!");
        }
      }
    }

    await next();
  };
};
