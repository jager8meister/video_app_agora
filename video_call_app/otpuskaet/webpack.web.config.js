/*
********************************************
 Copyright © 2021 Agora Lab, Inc., all rights reserved.
 AppBuilder and all associated components, source code, APIs, services, and documentation 
 (the “Materials”) are owned by Agora Lab, Inc. and its licensors. The Materials may not be 
 accessed, used, modified, or distributed for any purpose without a license from Agora Lab, Inc.  
 Use without a license or in violation of any license terms and conditions (including use for 
 any purpose competitive to Agora Lab, Inc.’s business) is strictly prohibited. For more 
 information visit https://appbuilder.agora.io. 
*********************************************
*/
const commons = require('./webpack.commons');
const {merge} = require('webpack-merge');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = merge(commons, {
  // Enable optimizations in production
  mode: isDevelopment ? 'development' : 'production',
  // Main entry point for the web application
  entry: {
    main: './index.web.js',
  },
  output: {
    path: path.resolve(__dirname, `../Builds/web`),
    filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: isDevelopment ? '[name].chunk.js' : '[name].[contenthash].chunk.js',
  },
  // Webpack dev server config
  devServer: {
    host: '0.0.0.0', // Allow external access
    port: 9000,
    https: true, // Enable HTTPS for local development
    allowedHosts: 'all', // Allow ngrok and other tunneling services
    historyApiFallback: true, // Support for react-router
    static: './', // same as contentBase from webpack v4 config
    client: {
      overlay: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
  },
  module: {
    rules: [
      {
        // Ignore all .native files (React Native specific code)
        test: /\.native\.(tsx?|jsx?|js)$/,
        use: 'ignore-loader',
      },
    ],
  },
  // Exclude mobile-only packages from web bundle
  externals: {
    '@datadog/mobile-react-native': 'null',
    '@supersami/rn-foreground-service': 'null',
    'react-native-exit-app': 'null',
    'react-native-keyboard-manager': 'null',
    'react-native-reanimated': 'null',
    'react-native-share': 'null',
    'rn-emoji-keyboard': 'null',
    'react-native-document-picker': 'null',
    '@gorhom/bottom-sheet': 'null',
    'react-native-fs': 'null',
    '@openspacelabs/react-native-zoomable-view': 'null',
    '@netless/react-native-whiteboard': 'null',
    'rn-fetch-blob': 'null',
    'react-native-get-random-values': 'null',
    'react-native-hyperlink': 'null',
    'react-native-inappbrowser-reborn': 'null',
    'react-native-keep-awake': 'null',
    'react-native-responsive-fontsize': 'null',
    'react-native-walkthrough-tooltip': 'null',
    'react-native-agora-chat': 'null',
    'react-native-gesture-handler': 'null',
    // Electron packages (not needed for web)
    'electron': 'null',
    'electron-log': 'null',
    'electron-squirrel-startup': 'null',
    'electron-updater': 'null',
  },
  optimization: {
    // Code splitting configuration
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // Vendor libraries
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
          reuseExistingChunk: true,
        },
        // Agora SDK (large library, separate chunk)
        agora: {
          test: /[\\/]node_modules[\\/](agora-rtc-sdk-ng|agora-rtm-sdk|agora-extension-)/,
          name: 'agora-sdk',
          priority: 20,
          reuseExistingChunk: true,
        },
        // React & React DOM
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-is)[\\/]/,
          name: 'react-vendor',
          priority: 30,
          reuseExistingChunk: true,
        },
        // Common code shared between routes
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true,
          name: 'common',
        },
      },
    },
    // Runtime chunk for webpack runtime code
    runtimeChunk: 'single',
    // Module IDs optimization
    moduleIds: 'deterministic',
  },
});
