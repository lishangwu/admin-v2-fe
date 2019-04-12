const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin') 
/**
 * 它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。 如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载。
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const CleanWebpackPlugin = require('clean-webpack-plugin');


const webpack=require('webpack');

module.exports = {
    mode: 'development',
    entry: ['./src/app.jsx'],
    output: {
        path: resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    resolve: {
        alias: {
            page: resolve(__dirname, './src/page'),
            component: resolve(__dirname, './src/component'),
            util: resolve(__dirname, './src/util'),
            service: resolve(__dirname, './src/service'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                include: resolve(__dirname, './src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                  })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192,
                      name: 'resource/[name].[ext]'
                    }
                  }
                ]
            },
            // 字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }

        ]
    },
    plugins:[

        new HtmlWebpackPlugin({
            title:'tao bao',
            template:'./src/index.html',
            filename:'index.html',
            favicon: './favicon.ico',
        }),

        //独立css文件
        new ExtractTextPlugin("css/[name].css"),
        //提出公共模块
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common',
        //     filename: 'js/base.js'
        // }),
        // new webpack.optimize.RuntimeChunkPlugin({
        //     name: 'common',
        //     filename: 'js/base.js'
        // }),
        new CleanWebpackPlugin(),
        
        new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {  //公共模块 
                    name: "commons",
                    chunks: "initial",  //入口处开始提取代码
                    minSize:0,      //代码最小多大，进行抽离
                    minChunks:2,    //代码复 2 次以上的抽离
                },
                vendors: { 
                    test: /node_modules/,
                     name: 'vendors', 
                     minSize: 0,
                      minChunks: 1, 
                      chunks: 'initial',
                       priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理 
               }
            }
        }
    },
    
    devServer:{
        // contentBase: './dist',
        // host:'localhost',    //服务器的ip地址
        port:1573,    //端口
        // open:true,    //自动打开页面
        historyApiFallback: {
            index: '/dist/index.html'
        },
        proxy : {
            '/manage' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin : true
            },
            '/user/logout.do' : {
                target: 'http://admintest.happymmall.com',
                changeOrigin : true
            }
        }
    }
}