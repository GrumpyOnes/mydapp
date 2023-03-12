/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

/**
 * TODO: 区分环境 —— NODE_ENV
 * - whenDev ☞ process.env.NODE_ENV === 'development'
 * - whenTest ☞ process.env.NODE_ENV === 'test'
 * - whenProd ☞ process.env.NODE_ENV === 'production'

*/
const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");
const CracoLessPlugin = require("craco-less");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");
const WebpackBar = require("webpackbar");
const CircularDependencyPlugin = require("circular-dependency-plugin"); //检查循环依赖

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

const isBuildAnalyzer = process.env.BUILD_ANALYZER === "true";
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  // ...
  webpack: {
    alias: {
      "@": pathResolve("src"),
      components: pathResolve("src/components"),
    },
    plugins: [
      new WebpackBar({ profile: true }),
      ...when(
        isBuildAnalyzer,
        () => [
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
            analyzerHost: "127.0.0.1",
            analyzerPort: 8888,
            openAnalyzer: true, // 构建完打开浏览器
            reportFilename: path.resolve(__dirname, `analyzer/index.html`),
          }),
        ],
        []
      ),
      ...whenDev(
        () => [
          new CircularDependencyPlugin({
            exclude: /node_modules/,
            include: /src/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
          }),
        ],
        []
      ),
      ...whenProd(
        () => [
          new CompressionWebpackPlugin({
            algorithm: "gzip",
            // eslint-disable-next-line prefer-template
            test: new RegExp(".(" + ["js", "css"].join("|") + ")$"),
            threshold: 1024,
            minRatio: 0.8,
          }),
        ],
        []
      ),
    ],
    configure: (webpackConfig, { env: webpackEnv, paths }) => {
      // eslint-disable-next-line no-param-reassign
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        cacheGroups: {
          vendor: {
            name: "vendor",
            priority: -10,
            filename: "vendor.js",
            minSize: 0,
            minChunks: 1,
            test: /[\\/]node_modules[\\/]/,
          },
          common: {
            // 将两个以上的chunk所共享的模块打包至commons组。
            name: "commons",
            priority: -20,
            minSize: 0,
            minChunks: 2,
          },
        },
      };
      return webpackConfig;
    },
  },
  babel: {
    babel: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
            useBuiltIns: "entry", // browserslist环境不支持的所有垫片都导入
            // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
            // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
            corejs: {
              version: 3, // 使用core-js@3
              proposals: true,
            },
          },
        ],
      ],
      plugins: [
        // 配置 babel-plugin-import
        [
          "import",
          { libraryName: "antd", libraryDirectory: "es", style: true },
          "antd",
        ],
        // 配置解析器
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["babel-plugin-styled-components", { displayName: true }],
      ],
      loaderOptions: {},
      loaderOptions: (babelLoaderOptions, { env, paths }) => babelLoaderOptions,
    },
  },

  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            math: "always",
            modifyVars: {
              "@primary-color": "#1890ff", //主题颜色
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
