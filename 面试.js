window.onload = function(){
    let body = document.getElementById('body');
    let div1 = document.getElementById('div1');
    body.addEventListener('click',function(){
        console.log('打印body')
    })
    div1.addEventListener('click',function(){
        console.log('打印div1')
    })
    
}

//   function ol1(){
//       console.log('1')
//     }
  
//    function ol2(){
//       console.log('2')
//     }
  
//    function ol3(){
//       console.log('3')
//     }
//     u1.addEventListener('click',function(e){
//       var sid=event.target.id
     
//       if(sid == 'l1'){
//         ol1()
//       }else if(sid == 'l2'){
//         ol2()
//       }else if(sid == 'l3'){
//         ol3()
//       }
      
//     })

// 事件委托
var ul=document.getElementById('ul')
//普通版
ul.addEventListener('click',function(e){
  if(e.target.tagName.toLowerCase() == 'li'){
    console.log(e.target.tagName)
  }  
})
//高级版
function delegate(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
      let el = e.target
      while (!el.matches(selector)) {
        if (element === el) {
          el = null
          break
        }
        el = el.parentNode
      }
      el && fn.call(el, e, el)
    })
    return element
  }

//手写AJAX
var request = new XMLHttpRequest()
request.open('GET','/a/b/c?name=ff',true);
request.onreadystatechange = function(){
  if(request.readystate === 4 && request.status === 200){
      console.log(request.responseText)
  }
}
request.send()
 

var request = new XMLHttpRequest()
request.open('GET','/a/b/c?name=ff',true)
request.onreadystatechange = function(){
    if(request.readyState===4 &&　request.status===200){
        console.log(request.responseText)
    }
}
request.send()


//手写promise

function fn(){
 return new Promise((resolve,reject)=>{
     resolve(数据)
     reject(错误)
 })    
}

// promise all用法 当所有请求都完成后才执行 .then回调函数
Promise.all([promise1,promise2]).then(success1,fail1)

// promise race  子请求中率先完成的请求的 执行它的回调函数
promise.race([promise1,promise2]).then(success1,fail1)

//正则实现trim()

function trim(string){
    return string.replace(/^\s+|\s+$/g,'')
}   return string.replace(/^\s+|\s+$/g,'')

