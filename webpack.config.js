const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'none',
    module: {
        // everytime we import an png or jpg file, webpack will check if we hav rule for it. If not a suitable rule will give an error = "don't know how to import this file"
        rules: [{ test: /\.(png|jpg)$/, type: 'asset/resource' }],
    },
};
