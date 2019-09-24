const webpack = require('webpack');
const path = require('path');
const {smart} = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const manifestJson = require('../public/dll/libs.manifest.json');

module.exports = smart(baseConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        // 开发环境下，不能使用 contenthash/chunkhash
        filename: '[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ['style-loader','css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            localsConvention: 'camelCase',
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ],
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // dll 不要和 splitChunks 一起使用，会出问题
        new DllReferencePlugin({
            manifest: manifestJson
        }),
    ],
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: './',
        host: '0.0.0.0',
        disableHostCheck: true,
        useLocalIp: true,
        port: 666,
        historyApiFallback: true,
        inline: true,
        hot: true,
        overlay: {
            errors: true,
            warnings: true,
        },
        // open: true,
        // openPage:'dist/index.html',
    }
});




