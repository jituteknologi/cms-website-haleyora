/**
 * A set of functions called "actions" for `archive`
 */

const moment = require("moment-timezone");

export default {
  find: async (ctx: { body: {} }) => {
    try {
      const posts = await strapi.entityService.findMany("api::post.post", {
        sort: { createdAt: "desc" },
      });

      // Kelompokkan berdasarkan bulan dan tahun
      const grouped = posts.reduce((acc, post) => {
        const monthYear = moment(post.createdAt).format("MMMM YYYY"); // Contoh: "January 2024"
        const month = moment(post.createdAt).format("MM"); // Contoh: "January 2024"
        const year = moment(post.createdAt).format("YYYY"); // Contoh: "January 2024"

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
