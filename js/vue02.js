var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  });

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Hello v-once!'
    }
});

var app3 = new Vue({
    el:'#app-3',
    data:{
        rawHtml:'<span style="color:red">this should be red.</span>'
    }
})

var app4 = new Vue({
    el:'#app-4',
    data:{
        isButtonDisabled:true
    }
})

var cesi = new Vue({
    el:'#dynamicId',
    data:{
        msg:'hello'
    }
})