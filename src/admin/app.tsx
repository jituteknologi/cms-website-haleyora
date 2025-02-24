import AuthLogo from "./extensions/logo_login.png";
import MenuLogo from "./extensions/logo_menu.svg";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: AuthLogo,
    },
    head: {
      favicon: favicon,
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      "id",
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    menu: {
      logo: MenuLogo,
    },

    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "PLN CMS",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.button.password-recovery": "Password Recovery",
        "Auth.form.welcome.subtitle": "Log in to your PLN CMS account",
        "Auth.form.welcome.title": "Welcome!",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in PLN CMS. All saved data will be stored in your database.",
        "Settings.permissions.users.listview.header.subtitle":
          "All the users who have access to the PLN CMS admin panel",
        "Settings.profile.form.section.experience.interfaceLanguageHelp": " ",
        "notification.info.autoreaload-disable":
          "This feature only runs in development mode",
      },
      id: {
        "app.components.LeftMenu.navbrand.title": "PLN CMS",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.button.password-recovery": "Pemulihan Kata Sandi",
        "Auth.form.welcome.subtitle": "Masuk menggunakan akun PLN CMS Anda",
        "Auth.form.welcome.title": "Selamat Datang!",
        "Auth.form.register.subtitle":
          "Kredensial hanya digunakan untuk mengautentikasi di PLN CMS. Semua data yang disimpan akan disimpan dalam database Anda.",
        "Settings.permissions.users.listview.header.subtitle":
          "Semua pengguna yang memiliki akses ke panel admin PLN CMS",
        "Settings.profile.form.section.experience.interfaceLanguageHelp": " ",
        "notification.info.autoreaload-disable":
          "Fitur ini hanya berjalan di mode pengembangan",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: {
      releases: false,
    },
  },
  bootstrap() {},
};
