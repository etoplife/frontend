const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const isProduction = process.env.NODE_ENV !== 'development';

const UglifyConfig = new UglifyJsPlugin({
    cache: true,
    extractComments: true,
    parallel: true,
    exclude: /node_modules/,
    uglifyOptions: {
        compress: {
            drop_console: true
        },
    },
});

const optimization = {
    splitChunks: {
        chunks: 'all',
        minSize: 0,
        maxSize: 0,
        cacheGroups: {
            vendors: {
                filename: 'vendor.js',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                reuseExistingChunk: true,
            }
        }
    },
    minimizer: [UglifyConfig],
};

const plugins = [
    new webpack.IgnorePlugin({
        resourceRegExp: /.*\.(scss|css|sass)$/
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
    }),
    new VueLoaderPlugin(),
];
if (!isProduction) {
    plugins.push(new HardSourceWebpackPlugin());
}

const options = {
    entry: {
        main: './dev/static/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]'
    },
    mode: process.env.NODE_ENV,
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /.+\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true,
                    }
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ],
    },
    watch: !isProduction,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins,
};

if (isProduction) {
    options.optimization = optimization;
}

module.exports = options;