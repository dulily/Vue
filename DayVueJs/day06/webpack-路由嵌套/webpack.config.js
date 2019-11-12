//由于 webpack 是基于Node进行构建的，所以，webpack的配置文件中，任何合法的Node 代码都是支持的
var path = require('path')
//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle.js文件注入到页面底部
//如果要配置插件，需要在导出的对象中，挂载一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

//当以命令行形式运行 webpack 或 webpack-dev-server 的时候，工具会发现，我们并没有提供 要打包的文件的 入口和出口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建
module.exports = {
    entry:'./src/main.js',  //入口文件
    output:{  //指定输出选项
        path:path.resolve(__dirname,'./dist'),   //输出路径
        filename:'bundle.js'  //指定输出文件的名称
    },
    mode:'development',
    plugins:[ //所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),  //指定模板文件路径
            filename:'index.html'  //设置生成的内存页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module:{ //配置所有第三方loader模块
        rules:[ //第三方模块的匹配规则
            { test:/\.css$/, use:['style-loader','css-loader'] }, //处理CSS文件的loader
            { test:/\.less$/, use:['style-loader','css-loader','less-loader'] }, //处理less文件的loader
            { test:/\.scss$/, use:['style-loader','css-loader','sass-loader'] }, //处理scss文件的loader
            { test:/\.(png|jpg|jpeg|git|bmp)$/, use:[{
                loader:'url-loader',
                options:{
                    limit:7485,
                    name:'[hash:8]-[name].[ext]'
                }
            }] }, //处理图片路径的loader
            //limit 给定的值，是图片的大小，单位是 byte ，如果我们引用的 图片，大于或等于给定的 limit 值，则不会被转为 base64格式的字符串，如果图片小于给定的limit 的值，则会被转为 base64字符串
            //name属性设置图片被编译好之后的名称，如果文件中有重名的图片，为了防止图片覆盖，可以加上hash值
            { test:/\.(ttf|eot|svg|woff|woff2|otf)$/, use:'url-loader' }, //处理字体文件文件的loader
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins:['@babel/plugin-transform-runtime','@babel/plugin-proposal-class-properties']
                    }
                }
            }, //这是 babel 的匹配规则
            { test:/.vue$/, loader:'vue-loader' }, //这是vue文件的匹配规则
        ]
    },
    resolve:{
        alias:{ //修改 Vue 被导入时候的包的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}