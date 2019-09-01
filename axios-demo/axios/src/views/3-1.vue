<template>
  <div >
  
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios"


export default {
  name: 'axios3-1',
  created(){
      //axios实例  当使用多个接口
    let instance  = axios.create({
        baseURL:'http://localhost:8080',//域名
        timeout:1000 //超时时间
    })
  }
}
</script>
