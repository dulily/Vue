<template>
    <div>
        <h1>这是登录组件，使用 .vue 文件定义出来的 --{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    // 注意：组件中的data 必须是 function
    data() {
        return {
            msg:'这是 login.vue 的data中的数据'
        }
    },
    methods:{
        show() {
            console.log('调用了 login.vue 中的 show 方法')
        }
    }
}
</script>

<style>

</style>