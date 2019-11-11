//这是 main.js 是我们项目的入口文件

//1.导入jquery
// import *** from *** 是ES6中导入模块的方式
//由于ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery')

//使用 import 语法，导入 css样式表
import './css/index.css'

import './css/index.less'

import './css/index.scss'

//注意：webpack 默认只打包处理 JS 类型的文件，无法处理 其他的非 JS 类型的文件；
//如果要处理 非JS类型的文件，我们需要手动安装一些 合适的 第三方 loader 加载器

$(function(){
    $('li:odd').css('backgroundColor','green')
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    })
})

//经过演示，webpack可以做什么事情？？
//1.webpack 能够处理 JS 文件的相互依赖关系；
//2.webpack 能够处理 JS 的兼容问题，把高级的、浏览器不识别的语法，转为低级的，浏览器能正常识别的语法


//使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1.运行 npm install --save-dev webpack-dev-server 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法和 webpack 命令的用法，完全一样
// 3.由于，我们是在项目中，本地安装的 webpack-dev-server，所以，无法把它当做 脚本命令，在powershell 终端中直接运行（只有那些 安装到全局 -g 的工具，才能在 终端中正常执行）
// 4.注意：webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
// 5.webpack-dev-server 帮我们打包生成的 BeforeUnloadEvent.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在项目的根目录中，根本找不到 这个打包好的 bundle.js
// 6.我们可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了 咱们项目的根目录中，虽然我们看不到它，但是，可以认为，和 dist src node_modules 平级，有一个看不见的文件，叫做 bundle.js
