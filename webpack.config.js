const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',        
                options: {
                    presets: ['env']
                },
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'eslint-loader',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'

        }]
    },
    
    externals: {
        'react': 'commonjs react'
    },
    
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
}