const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const GasPlugin = require('gas-webpack-plugin');

const commonConfig = require('./webpack.common.config');

/** @type {import('webpack').Configuration} */
module.exports = {
  ...commonConfig,
  entry: {
    server: path.join(__dirname, './src/server/code.ts'),
  },
  plugins: [
    ...commonConfig.plugins,
    new GasPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'appsscript.json' }],
    }),
  ],
};
