const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'), // absolute path
        publicPath: 'dist/', // creates path to static files
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
        ],
    },
};
