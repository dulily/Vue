<template>
    <div>
        <h1> 这是APP组件</h1>

        <!--为什么这里叫做 mt-button 的 button 直接就能用 -->
        <mt-button type="default" @click="show">default</mt-button>
        <mt-button type="danger" size="small">default</mt-button>

        <!-- MUI的按钮样式 -->
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>   
        <span class="mui-btn mui-btn-success">
            绿色
        </span>

        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>

        <span class="oi oi-account-login"></span>
    </div>
</template>

<script>
// 按需导入 Toast 组件
import { Toast } from 'mint-ui';

export default {
    data() {
        return {
            toastInstance:null
        }
    },
    created() {
        this.getList()
    },
    methods:{
        getList() {
            // 模拟获取列表的一个AJAX方法
            // 在获取数据之前，立即弹出 Toast 提示用户，正在加载数据
            this.show();
            setTimeout(() => {
                // 当 3 秒过后，数据获取回来了，要移除 Toast
                this.toastInstance.close();
            },3000)
        },
        show() {
            // Toast('提示信息');
            this.toastInstance = Toast({
                message:'提示信息',
                position:'top',
                duration:-1,  //如果是-1，弹出之后不消失
                // bpptstrap 4的图标
                iconClass:'oi oi-heart',  //设置图标的类
                className:'mytoast'   //自定义Toast的样式，需自己提供一个类名
            })
        }
    }
}
</script>

<style>

</style>