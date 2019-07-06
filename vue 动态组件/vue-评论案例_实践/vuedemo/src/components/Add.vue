<template>
        <div class="col-md-4">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="name">姓名</label>
              <input type="text" id="name" class="form-control" placeholder="用户名" v-model="name">
            </div>
            <div class="form-group">
              <label>评论内容</label>
                <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
            </div>
          <div class="form-group pull-right">
            <button type="button" class="btn btn-primary" @click="add">提交</button>
          </div>
          </form>
        </div>
</template>

<script>
export default{
  props:{
    addComment:{
      type:Function,
      required:true
    },
    
  },
  data(){
    return{
      name:'',
    content:''
    }
    
  },
 methods:{
   add(){
    const name=this.name.trim()
    const content=this.content.trim()
    if(!name || !content){
      alert("输入内容不能为空")
      return
    }
    const comment={
      name,
      content
    }
    this.addComment(comment)

    this.content=''

   }
 }
}
</script>

<style>

</style>
