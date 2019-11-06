var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

  var app2 = new Vue({
      el:'#app-2',
      data:{
          message:'页面加载于' + new Date().toLocaleString()
      }
  })

  var app3 = new Vue({
      el:'#app-3',
      data:{
          seen:true
      }
  })

  var app4 = new Vue({
      el:'#app-4',
      data:{
          todos:[
              {text:'学习javascript'},
              {text:'学习Vue'},
              {text:'学习React'}
          ]
      }
  })

  var app5 = new Vue({
      el:'#app-5',
      data:{
          message:'hello Vue.js!'
      },
      methods:{
          reverseMessage:function(){
              this.message = this.message.split('').reverse().join('')
          }
      }
  })

  var app6 = new Vue({
      el:'#app-6',
      data:{
          message:'输入框是什么我就是什么'
      }
  })

  Vue.component('todo-item',{
      props:['todo'],
      template:'<li>{{ todo.text }}</li>'
  })
  var app7 = new Vue({
      el:'#app-7',
      data:{
          groceryList:[
              {id:0,text:'蔬菜'},
              {id:1,text:'水果'},
              {id:2,text:'零食'}
          ]
      }
  })

  var obj = {
      foo:'bar'
  }
  Object.freeze(obj)
  var app8 = new Vue({
      el:'#app-8',
      data:obj
  })

  var app9 = new Vue({
      el:'#app-9',
      data:{
          a:1
      },
      created:function(){
        //   this指向vm实例
          console.log('a is:' + this.a)
      }
  })