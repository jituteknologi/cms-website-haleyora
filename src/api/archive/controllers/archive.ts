/**
 * A set of functions called "actions" for `archive`
 */

const moment = require("moment-timezone");

export default {
  find: async (ctx: { body: {} }) => {
    try {
      const posts = await strapi.entityService.findMany("api::post.post", {
        sort: {
          post_date: "desc",
        },
        pagination: {
          page: 1,
          pageSize: 1000,
        },
      });

      // Kelompokkan berdasarkan bulan dan tahun
      const grouped = posts.reduce((acc, post) => {
        const monthYear = moment(post.post_date).format("MMMM YYYY"); // Contoh: "January 2024"
        const month = moment(post.post_date).format("MM"); // Contoh: "January 2024"
        const year = moment(post.post_date).format("YYYY"); // Contoh: "January 2024"

        if (!acc[monthYear]) {
          acc[monthYear] = { month, year }; // Buat grup baru
        }

        // acc[monthYear].push(post); // Tambahkan post ke grup
        return acc;
      }, {});
      ctx.body = grouped; // Kirim hasil sebagai response
    } catch (err) {
      ctx.body = err;
    }
  },
};
