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
      <title>SELOG - Customer Feedback</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
    </head>

    <body style="background-color: #f8fafc" bgcolor="#f8fafc" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
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
                        <span style="font-size: 24px; color: #204199">nomor tiket #<%= result.id %></span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 63px">
                        <strong>Halo PIC Customer Feedback</strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 12px">
                        <span>Berikut pertanyaan atau permasalahan terbaru dari Customer dengan detail sebagai berikut :</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 12px; padding-bottom: 12px;">
                        <table border="0" width="100%">
                          <tbody>
                            <tr>
                              <td><strong>Contact Type</strong></td>
                            </tr>
                            <tr>
                              <td>Feedback Inquiry</td>
                            </tr>
                            <tr>
                              <td style="width: 40%">Channel</td>
                              <td><strong><%= result.url_web %></strong></td>
                            </tr>
                            <tr>
                              <td>Tanggal &amp; Waktu</td>
                              <td><strong><%= result.createdAt %></strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td><hr style="color: #E2E8F0"/></td></tr>
                    <tr>
                      <td style="padding-top: 12px; padding-bottom: 12px;">
                        <table border="0" width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Penghubung</strong>
                              </td>
                            </tr>
                            <tr>
                              <td style="width: 40%">Nama Lengkap</td>
                              <td><strong><%= result.firstName %> <%= result.lastName %></strong></td>
                            </tr>
                            <tr>
                              <td>Kota</td>
                              <td><strong><%= result.city.name %></strong></td>
                            </tr>
                            <tr>
                              <td>Nomor Telpon</td>
                              <td><strong><%= result.country.code %><%= result.phone %></strong></td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td><strong><%= result.email %></strong></td>
                            </tr>
                            <tr>
                              <td>Pesan</td>
                              <td><strong><%= result.message %></strong></td>
                            </tr>
                          </tbody>
                        </table>
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
  nomor tiket #<%= result.id %>



  Halo PIC Customer Feedback

  Berikut pertanyaan atau permasalahan terbaru dari Customer dengan detail sebagai berikut :

  Channel         : <%= result.url_web %>
  Tanggal & Waktu : <%= result.createdAt %>
  Nama lengkap    : <%= result.firstName %> <%= result.lastName %>
  Email           : <%= result.email %>
  Telepon          : <%= result.country.code %><%= result.phone %>
  Kota            : <%= result.city.name %>
  Pesan           : <%= result.message %>



  Butuh bantuan? Hubungi kami.
  Call Center : 021 - 26605333
  `,
  HTML_TEMPLATE_CUSTOMER: `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>SELOG - Customer Feedback</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
    </head>

    <body style="background-color: #f8fafc" bgcolor="#f8fafc" leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0">
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
                        <span style="font-size: 24px; color: #204199">nomor tiket #<%= result.id %></span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 63px">
                        <strong>Halo <%= result.firstName %> <%= result.lastName %></strong>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 12px">
                        <span>
                          Terimakasih sudah menghubungi kami pada <%= result.createdAt %>. Secepatnya tim SELOG akan membantu menjawab pertanyaan atau permasalahan Anda
                          <br /><br />
                          Berikut informasi yang kami terima :
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top: 12px; padding-bottom: 12px;">
                        <table border="0" width="100%">
                          <tbody>
                            <tr>
                              <td><strong>Contact Type</strong></td>
                            </tr>
                            <tr>
                              <td>Feedback Inquiry</td>
                            </tr>
                            <tr>
                              <td style="width: 40%">Channel</td>
                              <td><strong><%= result.url_web %></strong></td>
                            </tr>
                            <tr>
                              <td>Tanggal &amp; Waktu</td>
                              <td><strong><%= result.createdAt %></strong></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr><td><hr style="color: #E2E8F0"/></td></tr>
                    <tr>
                      <td style="padding-top: 12px; padding-bottom: 12px;">
                        <table border="0" width="100%">
                          <tbody>
                            <tr>
                              <td>
                                <strong>Penghubung</strong>
                              </td>
                            </tr>
                            <tr>
                              <td style="width: 40%">Nama Lengkap</td>
                              <td><strong><%= result.firstName %> <%= result.lastName %></strong></td>
                            </tr>
                            <tr>
                              <td>Kota</td>
                              <td><strong><%= result.city.name %></strong></td>
                            </tr>
                            <tr>
                              <td>Nomor Telpon</td>
                              <td><strong><%= result.country.code %><%= result.phone %></strong></td>
                            </tr>
                            <tr>
                              <td>Email</td>
                              <td><strong><%= result.email %></strong></td>
                            </tr>
                            <tr>
                              <td>Pesan</td>
                              <td><strong><%= result.message %></strong></td>
                            </tr>
                          </tbody>
                        </table>
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
  TEXT_TEMPLATE_CUSTOMER: `
  nomor tiket #<%= result.id %>



  Halo <%= result.firstName %> <%= result.lastName %>

  Terimakasih sudah menghubungi kami pada <%= result.createdAt %>. Secepatnya tim SELOG akan membantu menjawab pertanyaan atau permasalahan Anda


  Berikut informasi yang kami terima :

  Nama lengkap    : <%= result.firstName %> <%= result.lastName %>
  Email           : <%= result.email %>
  Telepon          : <%= result.country.code %><%= result.phone %>
  Kota            : <%= result.city.name %>
  Pesan           : <%= result.message %>

  Terima kasih,
  SELOG Customer Service


  Butuh bantuan? Hubungi kami.
  Call Center : 26605333
  `,
};
