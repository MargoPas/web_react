const path = require('path');
const WEBPACK = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test:  /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /plugin\.css$/,
                use: [
                    'style-loader', 'css',
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                //IMAGE LOADER
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:{
                    loader:'file-loader'
                }
            },
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, '/public'),
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true,
        proxy:{
            '/api/*':{
                target:{
                    host:'localhost',
                    protocol: 'http',
                    port: '3001'
                },
                secure: false
            }
        }
    }
}