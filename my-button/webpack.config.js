const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    mode: 'development',

    devtool: 'source-map',

    plugins: [
        new CopyPlugin([
            {
                from: path.resolve(__dirname, 'index.html'),
                to: path.resolve(__dirname, 'dist', "index.html")
            },
        ]),
    ],

    devServer: {
        host: 'localhost',
        port: 9000,
        writeToDisk: false,
        contentBase: false,
        overlay: {
            errors:true
        },
    },
};