<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

export default {
  name: "axios-2-2",
  //生命周期
  created() {
    //get请求写法一 别名
    axios
      .get("/data.json", {
        params: {
          id: 12
        }
      })
      .then(res => {
        console.log(res);
      });
    //get请求写法二
    axios({
      method: "get",
      url: "/data.json",
      params: { id: 12 }
    }).then(res => {
      console.log(res);
    });

    //提交数据
    let data = {
      id: 12
    };
    //post请求写法一别名  默认格式 applicition/json
    axios.post("/post", data).then(res => {
      console.log(res);
    });
    //post 请求写法二
    axios({
      method: "post",
      url: "/post",
      data: data
    }).then(res => {
      console.log(res);
    });
    //post请求 formData 表单提交 （图片上传，文件上传）
    let formData = new FormData();
    for (let key in data) {
      //遍历提交的数据
      formData.append(key, data[key]);
    }
    axios.post("post", formData).then(res => {
      console.log(res);
    });

    //put请求(更新数据，所有数据提交到后台)
    axios.put("/put", data).then(res => {
      console.log(res);
    });

    //patch请求(更新数据，只提交修改的数据到后台)
    axios.patch("/patch", data).then(res => {
      console.log(res);
    });

    //delete请求 别名
    axios
      .delete("/delete", {
        params: {
          id: 12 //删除请求 url
        }
      })
      .then(res => {
        console.log(res);
      });


       axios
      .delete("/delete", {
        data: {
          id: 12 //删除请求 数据 请求体
        }
      })
      .then(res => {
        console.log(res);
      });

      axios({
          method:"delete",
          url:'/delete',
          params:{},
          data:{},
      }).then(res=>{
          console.log(res)
      })
  }
};
</script>