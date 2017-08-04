var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    // Enable hot-module-replacement
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
        // Config for minimal console.log mess.
        assets: true,
        colors: true,
        version: true,
        hash: true,
        timings: false,
        chunks: true,
        chunkModules: true
    }
}).listen(3000, 'localhost', function(err) {
    if (err) {
        console.error(err);
    }
    console.warn('Listening at localhost:3000');
});