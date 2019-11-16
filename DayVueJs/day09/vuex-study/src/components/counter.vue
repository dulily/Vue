<template>
  <div>
      <input type="button" value="减少" @click="remove">
      <input type="button" value="增加" @click="add">
      <br>
      <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        add(){
            this.$store.commit('increment');
        },
        remove(){
            // this.$store.commit('subtract',3);
            this.$store.commit('subtract',{ a:1,b:3 });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>