var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: './src/index.js',
    output: {
        filename : 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['env']
            }
        }
        }]
    },
    plugins: [ new BundleAnalyzerPlugin()]
};