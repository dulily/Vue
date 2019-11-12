//入口文件
console.log('ok')

// 如何在 webpack 构建的项目中，使用 Vue进行开发

// 复习 在普通网页中如何使用Vue：
// 1.使用 script 标签，引入 Vue的包
// 2.在 index 页面中， 创建一个 id 为 app div 容器
// 3.通过 new Vue 得到一个 vm 的实例


// 在 webpack 中尝试使用 Vue：
// 注意：在webpack中，使用 import Vue from 'vue' 导入的Vue构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则：
// 1.找 项目根目录中有没有 node_modules 的文件夹
// 2.在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3.在 vue 文件夹中，找一个叫做 package.json 的包配置文件
// 4.在 packsge.json 文件中，查找 一个 main 属性 【main属性指定了这个包在被加载时候，的入口文件】

// var login = {
//     template:'<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }

// 1.导入 login 组件
import login from './login.vue'
// 默认，webpack 无法打包 .vue 文件，需要安装 相关的 loader

var vm = new Vue({
    el:'#app',
    data:{
        msg:'哈哈'
    },
    // components:{
    //     login
    // }
    render:createElements => createElements(login)
})


import m111,{ title as t,content } from './test.js'
console.log(m111)
console.log(t + '----' + content)