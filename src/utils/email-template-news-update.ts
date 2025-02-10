const storageURL = `${process.env.STORAGE_URL}/${
  process.env.STORAGE_CONTAINER_NAME
}${
  process.env.STORAGE_DEFAULT_PATH ? `/${process.env.STORAGE_DEFAULT_PATH}` : ""
}`;

const logo = `${storageURL}/logo_selog_0660453d4e/logo_selog_0660453d4e.png`;
const twitter = `${storageURL}/twitter_ca14813e68/twitter_ca14813e68.png`;
const facebook = `${storageURL}/facebook_0e921e9e7c/facebook_0e921e9e7c.png`;
const instagram = `${storageURL}/instagram_d5a7b2b737/instagram_d5a7b2b737.png`;

module.exports = {
  HTML_TEMPLATE: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>SELOG - General Inquiry</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
    </head>

    <body style="background-color: #f8fafc" bgcolor="#f8fafc" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
      <center style="background-color: #f8fafc">
        <table border="0" width="640" style="font-family: 'Open Sans', sans-serif; border-spacing: 0; max-width: 640px;">
          <thead>
            <tr>
              <td style="padding: 18px 0px;">
                <table border="0" width="100%">
                  <tbody>
                    <tr>
                      <td width="20%">
                        <img src="${logo}" width="95" alt="SELOG" />
                      </td>
                      <td width="50%"></td>
                      <td width="30%" style="text-align: right;"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr style="background-color: #fff">
              <td style="padding: 40px; line-height: 26px">
                <table border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <strong style="font-size: 18px; color: black"><%= result.headline.title %></strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="<%= result.headline.featuredImage.url %>" alt="<%= result.headline.featuredImage.alternativeText %>" width="100%" />
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 12px">
                        <span style="font-size: 14px; color: #414042"><%= result.headline.short_description %></span>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; padding-top: 35px">
                        <a
                          style="color: #ffffff; background-color: #107abf; text-decoration: none; padding: 16px 48px; border-radius: 8px; font-size: 14px; font-weight: 700"
                          href="<%= result.url_blog %>/<%= result.category.slug %>/<%= result.headline.slug %>"
                          target="_blank"
                          >Baca Selengkapnya</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style="background-color: #fff">
              <td style="padding: 40px; line-height: 26px">
                <table border="0" width="100%">
                  <tbody>
                    <!-- foreach article -->
                    <%= result.articlesText %>
                    <!-- end foreach article -->
                    <tr>
                      <td style="text-align: center; padding-top: 35px" colspan="2">
                        <a style="color: #ffffff; background-color: #107abf; text-decoration: none; padding: 16px 48px; border-radius: 8px; font-size: 14px; font-weight: 700" href="<%= result.url_blog %>" target="_blank"
                          >Lihat berita lainnya</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center; padding-top: 110px" colspan="2">
                        <span style="font-size: 13px; color: #7a7474; width: 75%; display: inline-block"
                          >Ini adalah email otomatis. Mohon untuk tidak membalas email ini klik <a href="<%= result.url_unsubscribe %>?token=<%= result.subscriber.token %>" target="_blank" style="color: #17376d">link ini</a> untuk
                          berhenti berlangganan</span
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <table border="0" width="100%" style="font-family: 'Open Sans', sans-serif; border-spacing: 0; margin-top: 50px; background-color: #fff">
          <tbody style="height: 150px;">
            <tr>
              <td style="padding: 45px; text-align: center; line-height: 18px; color: #2c2d2d">
                <table border="0" width="100%">
                  <tbody>
                    <tr>
                      <td style="text-align: center;">Butuh bantuan? Hubungi kami. <span>Call Center : <a style="text-decoration: underline; color: #202B3C;" href="tel:02126605333">021 - 26605333</a></span></td>
                    </tr>
                    <tr>
                      <td style="padding-top: 20px; text-align: center">
                        <span style="#202B3C; max-width: 230px; margin: 0 auto;">
                          <a style="color: #202B3C; text-decoration: underline" href="<%= result.url_privacy %>" target="_blank">Kebijakan Privasi</a>
                          &nbsp;&nbsp;|&nbsp;&nbsp;
                          <a style="color: #202B3C; text-decoration: underline" href="<%= result.url_tnc %>" target="_blank">Syarat dan Ketentuan</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    </body>
  </html>
  `,
  TEXT_TEMPLATE: `
    Something New!

    Please click on the link below.
  `,
};
