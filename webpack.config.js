const path = require("path");
const postCSS = require("./postcss.config.js");
const config = require("./project.config");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const workboxPlugin = require("workbox-webpack-plugin");

// This is main configuration object.
// Here you write different options and tell Webpack what to do
const globalConfig = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: {
    app: [
      "babel-polyfill",
      "@webcomponents/webcomponentsjs",
      config.paths.js,
      config.paths.scss,
      config.paths.deferredScss,
      config.paths.offlinePage
    ]
    // idb: ["idb"]
  },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js"
  },

  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       chunkFilter: chunk => {
  //         // Exclude uglification for the `vendor` chunk
  //         if (chunk.name === "idb") {
  //           return false;
  //         }

  //         return true;
  //       }
  //     })
  //   ]
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
            //   // plugins: [
            //   //   "transform-custom-element-classes",
            //   //   "transform-es2015-classes"
            //   // ]
          }
        }
      },
      {
        test: /\.html$/,
        use: ["file-loader?name=[name].[ext]", "extract-loader", "html-loader"]
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].scss",
      //         context: "./src/scss/",
      //         // outputPath: '/OPPA/build/',
      //         outputPath: config.paths.projBuild,
      //         publicPath: "../"
      //       }
      //     },
      //     {
      //       loader: "extract-loader"
      //     },
      //     { loader: "css-loader" },
      //     { loader: "postcss-loader" },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         outputStyle: config.isProd ? "compressed" : "compact"
      //       }
      //     }
      //   ]
      // }

      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     // {
      //     //   loader: "file-loader",
      //     //   options: {
      //     //     name: "[name].css",
      //     //     context: "./src/css/",
      //     //     // outputPath: '/OPPA/build/',
      //     //     outputPath: config.paths.projBuild,
      //     //     publicPath: "../"
      //     //   }
      //     // },
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     {
      //       // This loader resolves url() and @imports inside CSS
      //       loader: "css-loader"
      //     },
      //     {
      //       // Then we apply postCSS fixes like autoprefixer and minifying
      //       loader: "postcss-loader"
      //     },
      //     {
      //       // First we transform SASS to standard CSS
      //       loader: "sass-loader",
      //       options: {
      //         // implementation: require("sass"),
      //         outputStyle: config.isProd ? "compressed" : "compact"
      //       }
      //     }
      //   ]
      // }
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
              // context: './',
              context: "./src/css/",
              outputPath: "",
              publicPath: "../"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new workboxPlugin.InjectManifest({
    //   swSrc: "./CMS/OPPA/src/js/service-workers/service-worker-base.js",
    //   swDest: "../../oppa-pwa-sw.js",
    //   importsDirectory: "./OPPA/build"
    // }),
    new MiniCssExtractPlugin({
      // filename: "bundle.css",
      chunkFilename: "[name].css"
    })
    // new FileManagerPlugin({
    //   onEnd: {
    //     copy: [
    //       {
    //         source: path.resolve(
    //           __dirname,
    //           "CMS/OPPA/build/OPPA/build/precache-manifest*.js"
    //         ),
    //         destination: path.resolve(__dirname, "CMS/OPPA/build")
    //       },
    //       {
    //         source: path.resolve(__dirname, "CMS/OPPA/src/js/vendor/idb.js"),
    //         destination: path.resolve(__dirname, "CMS/OPPA/build")
    //       }
    //     ],
    //     delete: [path.resolve(__dirname, "CMS/OPPA/build/OPPA")]
    //   }
    // })
  ],

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: "development"
};

if (config.isProd) {
  // globalConfig.plugins.push(
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true,
  //     compress: {
  //       warnings: false,
  //       conditionals: true,
  //       unused: true,
  //       comparisons: true,
  //       sequences: true,
  //       dead_code: true,
  //       evaluate: true,
  //       if_return: true,
  //       join_vars: true
  //     },
  //     output: {
  //       comments: false
  //     },
  //     ie8: false
  //   })
  // );
} else {
  // globalConfig.plugins.push(function() {
  //   this.plugin("watch-run", (watching, callback) => {
  //     console.log("Begin compile at " + new Date());
  //     callback();
  //   });
  // });
}

module.exports = globalConfig;
