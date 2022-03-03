const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js', // for caching
        path: path.resolve(__dirname, './dist'), // absolute path
        publicPath: '', // creates path to static files
    },
    mode: 'none',
    module: {
        // everytime we import an png or jpg file, webpack will check if we hav rule for it. If not a suitable rule, will give an error = "don't know how to import this file"
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024, // 3 kilobytes (size if less than 3 kilobytes, inline asset module)
                    },
                },
            },
            {
                test: /\.txt/,
                type: 'asset/source',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ],
    },
    plugins: [
        new TerserPlugin(), // minimise JS
        new MiniCssExtractPlugin({filename: 'styles.[contenthash].css'}),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // remove all files, subfolders inside output folder (i.e. dist folder)
                path.join(process.cwd(), 'build/**/*'), // remove all files, subfolders inside build folder
            ],
        }),
        new HTMLWebpackPlugin({
            title: 'Hello World',
            meta: {
                description: 'Some description',
            },
        }),
    ],
};
