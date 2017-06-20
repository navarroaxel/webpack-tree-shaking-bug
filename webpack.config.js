const path = require('path');
const webpack = require('webpack');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

process.env.NODE_ENV = 'production';

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            './src'
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js'],
    },
    output: {
        path: path.join(__dirname, 'assets'),
        publicPath: '/assets/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new BundleAnalyzerPlugin()
    ],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
