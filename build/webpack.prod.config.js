const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const {smart} = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.config');

module.exports = smart(baseConfig, {
    mode: 'production',
    devtool:'none',
    output: {
        path: path.resolve('dist'),
        filename: '[name].[contenthash:8].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        localsConvention: 'camelCase',
                        modules: {
                            localIdentName: '[local]--[hash:base64:6]'
                        },
                    }
                }, 'postcss-loader', 'less-loader']
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            //     {
            //         from: 'public',
            //         to: 'public',
            //         // toType:'dir',
            //         ignore:['libs.dll.js','libs.manifest.json']
            //     }
            {
                from: 'src/assets/fonts/',
                to: 'fonts/',
            },
        ]),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${path.resolve('src')}/**/*`, {nodir: true}),
        }),
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {removeAll: true},
                    parser: require('postcss-safe-parser'),
                    autoprefixer: {disable: true}
                },
                canPrint: true
            }),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                // include: ['src/'],
                exclude: /\.min\.js$/,
                parallel: true,
                cache: true,
                // sourceMap: true,
            }),
        ],
        // 新版的 webpack 不需要设置这个了
        // runtimeChunk: {
        //     name: "manifest"
        // },
        splitChunks: {
            minSize: 30000,
            cacheGroups: {
                // default:false,
                vendors: {
                    // 单页面应用：使用默认的就行了，因为就只有一个入口，只需要做代码分割
                    // chunks: 'async',
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10,
                },
            }
        }
    },
});


