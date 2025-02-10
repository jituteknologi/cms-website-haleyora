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
      <title>SELOG - Subscribe Newsletter</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
    </head>

    <body style="background-color: #f8fafc" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
      <center style="background-color: #f8fafc">
        <table border="0" width="640" style="font-family: 'Open Sans', sans-serif; border-spacing: 0; max-width: 640px;">
          <tbody>
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
            <tr>
              <td style="padding: 49px; line-height: 26px; padding-bottom: 75px; background-color: #ffffff">
                <table border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <span style="font-size: 24px; color: #121A26">Terimakasih sudah berlangganan!</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 40px">
                        <strong>Halo <%= result.email %></strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 24px">
                        <span>
                          Subscribe anda berhasil!<br />
                          Anda akan mendapatkan Berita dan Informasi terbaru dari SELOG, yang akan kami kirimkan setiap minggunya.
                          <br /><br />
                          Jika anda ingin berhenti berlangganan, silahkan klik link dibawah ini
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center;color: #107ABF;font-weight: 700;padding-top: 45px;font-size: 14px;">
                        <a href="<%= result.url_unsubscribe %>?token=<%= result.token %>" target="_blank">Berhenti berlangganan</a>
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
  Terimakasih sudah berlangganan!



  Halo <%= result.email %>

  Subscribe anda berhasil!
  Anda akan mendapatkan Berita dan Informasi terbaru dari SELOG, yang akan kami kirimkan setiap minggunya.

  Jika anda ingin berhenti berlangganan, silahkan klik link dibawah ini


  <%= result.url_unsubscribe %>?token=<%= result.token %>



  Butuh bantuan? Hubungi kami.
  Call Center : 021 - 26605333
  `,
  HTML_TEMPLATE_UNSUBSCRIBE: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>SELOG - Unsubscribe Newsletter</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
    </head>

    <body style="background-color: #f8fafc" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
      <center style="background-color: #f8fafc">
        <table border="0" width="640" style="font-family: 'Open Sans', sans-serif; border-spacing: 0; max-width: 640px;">
          <tbody>
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
            <tr>
              <td style="padding: 49px; line-height: 26px; padding-bottom: 75px; background-color: #ffffff">
                <table border="0" width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <span style="font-size: 24px; color: #121A26">Terimakasih dan sampai jumpa!</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 40px">
                        <strong>Halo <%= result.email %></strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 24px">
                        <span>
                          Unsubscribe anda berhasil!<br />
                          Agar tidak terlewatkan Berita dan Informasi terbaru dari SELOG, yang akan kami kirimkan setiap minggunya.
                          <br /><br />
                          Lakukan subscribe dengan klik link dibawah ini
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: center;font-weight: 700;padding-top: 22px;font-size: 14px;">
                        <a style="display:inline-block; color: #ffffff;background-color: #107ABF;text-decoration: none;padding: 16px 48px;border-radius: 100px;" href="<%= result.url_web %>/subscribe" target="_blank">Berlangganan</a>
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
  TEXT_TEMPLATE_UNSUBSCRIBE: `
  Terimakasih dan sampai jumpa!



  Halo <%= result.email %>

  Unsubscribe anda berhasil!
  Agar tidak terlewatkan Berita dan Informasi terbaru dari SELOG, yang akan kami kirimkan setiap minggunya.

  Lakukan subscribe dengan klik link dibawah ini


  <%= result.url_web %>/subscribe



  Butuh bantuan? Hubungi kami.
  Call Center : 26605333
  `,
};
