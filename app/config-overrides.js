/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const { override, addWebpackAlias } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");
const {
  aliasDangerous,
  configPaths,
} = require("react-app-rewire-alias/lib/aliasDangerous");
const paths = require("react-scripts/config/paths");
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

const processDefine = Object.entries(process.env).reduce(
  (res, [key, value]) => ({
    ...res,
    [`process.env.${key}`]: JSON.stringify(value),
  }),
  {}
);

module.exports = {
  webpack: override(
    addLessLoader({
      lessLoaderOptions: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            "@primary-color": "#038fde",
          },
        },
      },
    })
  ),
};
//react-app-rewired  不再使用
