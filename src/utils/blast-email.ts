const { generateHTMLArticleList } = require("./global-function");
const {
  HTML_TEMPLATE,
  TEXT_TEMPLATE,
} = require("./email-template-news-update");

import type { Strapi } from "@strapi/types";

module.exports = {
  async blastEmailArticle(strapi: Strapi) {
    // find headline news and article
    const today = new Date();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    try {
      const populateArticle = {
        select: ["title", "slug", "short_description", "publishedAt"],
        populate: {
          featuredImage: {
            select: ["url", "alternativeText"],
          },
          post_category: {
            select: ["name", "slug"],
          },
        },
      };
      const dataBlast = await strapi.db
        .query("api::mail-blast-article.mail-blast-article")
        .findMany({
          populate: {
            headline_article: populateArticle,
            other_articles: populateArticle,
          },
          where: {
            scheduled_at: {
              $lte: today,
            },
            published: false,
          },
        });

      dataBlast &&
        dataBlast.length > 0 &&
        dataBlast.map(async (blast) => {
          const subscribers = await strapi.db
            .query("api::subscriber.subscriber")
            .findMany({
              select: ["email", "token"],
              where: {
                active: true,
              },
              page: 1,
              pageSize: 1000,
            });

          let result = {
            headline: blast.headline_article,
            category: blast.headline_article?.post_category?.[0],
            articlesText: generateHTMLArticleList(blast.other_articles),
            url_web: process.env.WEB_DOMAIN,
            url_privacy: `${process.env.WEB_DOMAIN}${process.env.WEB_PAGE_PRIVACY}`,
            url_tnc: `${process.env.WEB_DOMAIN}${process.env.WEB_PAGE_TNC}`,
            url_unsubscribe: `${process.env.WEB_DOMAIN}${process.env.WEB_PAGE_UNSUBSCRIBE}`,
            url_blog: `${process.env.WEB_DOMAIN}${process.env.WEB_PAGE_BLOG}`,
            subscriber: null,
          };

          if (subscribers && subscribers.length > 0) {
            for (const subscriber of subscribers) {
              // Validasi format email
              if (!emailRegex.test(subscriber.email)) {
                console.warn(`Invalid email format: ${subscriber.email}`);
                continue; // Lanjutkan ke iterasi berikutnya tanpa mengirim email
              }

              // Jika email valid, lanjutkan proses pengiriman
              result = {
                ...result,
                subscriber: subscriber,
              };

              const emailTemplate = {
                subject: blast.title,
                text: TEXT_TEMPLATE,
                html: HTML_TEMPLATE,
              };

              try {
                await strapi.plugins.email.services.email.sendTemplatedEmail(
                  {
                    to: subscriber.email,
                    from: `<${process.env.EMAIL_DEFAULT_FROM}>`,
                    replyTo: process.env.EMAIL_DEFAULT_TO,
                  },
                  emailTemplate,
                  {
                    result,
                  }
                );
                console.log(`Email sent to: ${subscriber.email}`);
              } catch (error) {
                console.error(
                  `Failed to send email to ${subscriber.email}:`,
                  error
                );
              }
            }
          }
        });

      await Promise.all(
        dataBlast.map((item: { id: any }) => {
          return strapi.db
            .query("api::mail-blast-article.mail-blast-article")
            .update({
              where: { id: item.id },
              data: { published: true },
            });
        })
      );

      strapi.log.info(
        `Successfully published ${dataBlast.length} notifications to email.`
      );
    } catch (error) {
      strapi.log.error("Error blasting articles:", error);
    }
  },
};
