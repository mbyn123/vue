<template>
  <div>
    <input type="text" placeholder="输入账号" v-model="form.account" />
    <br />
    <input type="password" placeholder="输入密码" v-model="form.password" />
    <br />
    <button @click="login">登陆</button>
  </div>
</template>

<script>
import store from "../store"


export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      }
    };
  },
  methods:{
      login(){
    
    if (!this.form.account && !this.form.password){
        alert('请填写账号密码')
        return
    }
        const that=this
        setTimeout(()=>{
            store.commit("login",{
                account:that.form.account,
                password:that.form.password
            })
            that.$router.push("./")
        },500)
      }
  }
};
</script>

<style >
</style>