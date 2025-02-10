const moment = require("moment-timezone");
const tz = "Asia/Bangkok";
const format = "DD MMMM YYYY";

module.exports = {
  generateCode() {
    const length = 100;
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },

  generateHTMLArticleList(articles) {
    let HTML = "";
    moment.locale("id");

    articles &&
      articles.length > 0 &&
      articles.forEach((article) => {
        HTML += `
        <tr>
          <td style="width: 45%">
            <img src="${article.featuredImage.url}" alt="${
          article.featuredImage.alternativeText
        }" width="100%" />
          </td>
          <td style="vertical-align: top; padding-left: 12px; padding-bottom: 20px">
            <a href="${process.env.WEB_DOMAIN}${process.env.WEB_PAGE_BLOG}/${
          article.post_category.length > 0 ? article.post_category[0].slug : ""
        }/${article.slug}" target="_blank" style="text-decoration: none;">
              <table>
                <tbody>
                  <tr>
                    <td style="line-height: 1; padding-bottom: 10px">
                      <span style="background-color: #7daadc; border-radius: 4px; padding: 5px 8px; color: white; text-transform: uppercase; font-size: 10px; font-weight: 700">${
                        article.post_category.length > 0
                          ? article.post_category[0].name
                          : ""
                      }</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong style="font-size: 20px; color: black; line-height: 30px">${
                        article.title
                      }</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-size: 12px; color: #969696; line-height: 20px">${moment(
                        article.publishedAt
                      )
                        .tz(tz)
                        .format(format)}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
          </td>
        </tr>
      `;
      });

    return HTML;
  },
};
