const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {'hello-world': './src/hello-world.js', mock: './src/mock.js'},
    output: {
        filename: '[name].js', // for caching
        path: path.resolve(__dirname, './dist'), // absolute path
        publicPath: '', // creates path to static files
    },
    mode: 'development',
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        },
    },
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
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
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
            {test: /\.hbs/, use: ['handlebars-loader']},
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*', // remove all files, subfolders inside output folder (i.e. dist folder)
                path.join(process.cwd(), 'build/**/*'), // remove all files, subfolders inside build folder
            ],
        }),
        new HTMLWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World',
            template: 'src/page-template.hbs',
            description: 'Hello World',
        }),
        new HTMLWebpackPlugin({
            filename: 'mock-image.html',
            chunks: ['mock'],
            title: 'Mock Image',
            template: 'src/page-template.hbs',
            description: 'mock image',
        }),
    ],
};
