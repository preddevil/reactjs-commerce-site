var path = require('path');
var webpack = require('webpack');
var React = require('react');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'babel-polyfill',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        path.join(__dirname, 'src/app/index.jsx')
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    module: {
        loaders: [{
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src', 'app'),
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        /**
         * Generate an HTML5 file that includes all your webpack bundles in the body using script tags
         */
        HtmlWebpackPluginConfig,
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        /**
         * Assign the module and chunk ids by occurrence count. 
         * Ids that are used often get lower (shorter) ids. 
         * This make ids predictable, reduces to total file size and is recommended
         */
        new webpack.optimize.OccurrenceOrderPlugin(),
        /**
         * Gives you the ability to change code, save it, 
         * and see the change appear almost instantly in your browser, without having to reload it
         */
        new webpack.HotModuleReplacementPlugin(),
        /**
         * Pass what environment we are in (dev or prod) so that our js files act accordingly
         */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};