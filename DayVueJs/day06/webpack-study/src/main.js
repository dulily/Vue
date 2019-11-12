//项目的JS入口文件
console.log('ok')

import './css/index.css'
import './css/index.less'
import './css/index.scss'

//注意：如果要通过路径的形式，去引入 node_modules 中相关的文件，可以直接省略 路径前面的 node_modules 这一层目录，直接写包的名称，然后后面跟上具体的文件路径
//不写 node_modules 这一层目录，默认就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

//class 关键字，是ES6中提供的新语法，是用来实现 ES6 中面向对象编程的方式
class Person {
    //使用 static 关键字，可以定义静态属性
    //所谓静态属性，就是可以直接通过 类名，直接访问的属性
    //实例属性：只能通过类的实例，来访问的属性，叫做实例属性
    static info = { name:'zs', age:20 }
}
//访问 Person 类身上的 info 静态属性
console.log(Person.info)
//在 webpack 中，默认只能处理 一部分 ES6的新语法，一些更高级的ES6语法或者ES7语法，webpack是处理不了的；这时候，就需要借助于第三方的 loader，来帮助webpack处理这些高级的语法，当第三方loader把高级语法转为低级的语法之后，会把结果交给webpack去打包到 bundle.js中

//通过 Babel，我们可以将 高级的语法转换为 低级的语法
// 1.在 webpack中，可以运行如下命令，安装需要的包，去安装 babel 相关的 loader功能：
// 1.1 第一套包：
// 1.2 第二套包：
// 2.打开 webpack 的配置文件，在module节点下的 rules 数组中，添加一个 新的匹配规则：
// 2.1 { test:\.js$/,use:'babel-loader',exclude:/node-modules/ }
// 2.2 注意：在配置babel的loader规则的时候，必须把 node_modules 目录，通过 exclude 选项排除掉，原因有两：
// 2.2.1 如果不排除 node_modules ，则babel 会把 node_modules 中所有的第三方 js 文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢；
// 2.2.2 哪怕，最终，babel 把所有 node_modules 中的js转换完毕了，但是，项目也无法正常运行


//java c# 实现面向对象的方式完全一样了，class是从后端语言中借鉴过来的，来实现面向对象
//var p1 = new Person()