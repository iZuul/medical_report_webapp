const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  configureWebpack: (config => {
    if(process.env.NODE_ENV === 'production'){
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: { drop_console: true },
              mangle: true, // Note `mangle.properties` is `false` by default.
              module: false,
              output: { comments: false },
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: undefined,
              keep_fnames: false,
              safari10: false,
            },
          }),
        ],
      }
    }
  }),

  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Medical Web Application';
            args[0].meta = {viewport: 'width=device-width,initial-scale=1,user-scalable=no'};

         return args;
    })
}
}