// const { blastEmailArticle } = require("../../src/utils/blast-email");

export default {
  blastNewsUpdateJob: {
    options: {
      rule: "* * * * *",
      // rule: '*/10 * * * *', //every 10 minutes
      tz: "Asia/Jakarta",
    },
    task: async ({ strapi }) => {
      // blastEmailArticle(strapi);
    },
  },
};
