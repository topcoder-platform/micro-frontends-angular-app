const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // we have to list here all the microapps which we would like to use in imports
  // so webpack doesn't tries to import them
  singleSpaWebpackConfig.externals = {
    '@topcoder/micro-frontends-navbar-app':
      '@topcoder/micro-frontends-navbar-app',
  };

  // Feel free to modify this webpack config however you'd like to
  return singleSpaWebpackConfig;
};
