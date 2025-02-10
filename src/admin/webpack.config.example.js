"use strict";

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  config.plugins.push(
    new webpack.DefinePlugin({
      //All your custom ENVs that you want to use in frontend
      ENV: {
        DOMAIN: JSON.stringify(process.env.DOMAIN),
      },
    })
  );
  // Important: return the modified config
  return config;
};
