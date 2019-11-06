var vm = new Vue({
    el:'#example',
    data:{
        message:'我是缓存'
    },
    computed:{
        reversedMessage:function(){
            // this 指向 vm 实例
            return this.message.split('').reverse().join('')
        }
    }
})

var vm2 = new Vue({
    el:'#example-2',
    data:{
        message:'我是方法'
    },
    methods:{
        reversedMessage:function(){
            return this.message.split('').reverse().join('')
        }
    }
})

var vm3 = new Vue({
    el:'#demo',
    data:{
        firstName:'Foo',
        lastName:'Bar',
        fullName:'Foo Bar'
    },
    watch:{
        firstName:function(val){
            this.fullName = val + ' ' + this.lastName
        },
        lastName:function(val){
            this.fullName = this.firstName + ' ' + val
        }
    }
})

var vm4 = new Vue({
    el:'#demo-2',
    data:{
        firstName:'Foo',
        lastName:'Bar'
    },
    computed:{
        fullName:function(){
            return this.firstName + ' ' + this.lastName
        }
    }
})

var vm5 = new Vue({
    el:'#setter',
    data:{
        firstName:'Foo',
        lastName:'Bar'
    },
    computed:{
        fullName:{
            //getter
            get:function(){
                return this.firstName + ' ' + this.lastName
            },
            //setter
            set:function(newValue){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})