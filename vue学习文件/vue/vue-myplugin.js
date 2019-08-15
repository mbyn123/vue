
(function(){
    //提供需要向外暴露的插件对象
    const MyPlugin={}
    //插件对象必须有一个install()
    MyPlugin.install = function (Vue, options) {
  

        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
          console.log('vue函数对象的方法myGlobalMethod')
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive',(el,binding)=>{//添加一个自定义指令
          el.textContent=binding.value.toUpperCase()
         
        })
      
        // 3. 注入组件选项
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
         
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function () {
          console.log('vue实例对象的方法$myMethod')
        }
      }

  //向外暴露
  window.MyPlugin=MyPlugin   
})()