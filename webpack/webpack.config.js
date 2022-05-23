
const path = require('path')
const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports ={

    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.(sa|c|sc)ss$/, //expressão regular = regex sa c e sc são variações da expresao com final ss (cSS, saSS, scSS)
                use:[
                    MiniCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: 'style.css'
        })
    ]

}