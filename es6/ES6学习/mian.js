

//数组__解构赋值
{
    let   [a,b]=[1,2]
    console.log(a,b)//1 2
}

//json__解构赋值
{
    let {a,b}={a:1,b:2}
    console.log(a,b)//1 2
}

//参数展开
{
    //剩余参数__必须是最后一个
    let [a,b,...rest]=[1,2,3,4,5,6]
    console.log(a,b,rest)//1 2 (4) [3, 4, 5, 6]

    //展开数组__相当于代替数组
    let  a=[1,2,3]
    let  b=[7,8,9]
    let c=[...a,...b]//相当于c=[1,2,3,7,8,9]  
    console.log(c)//[1,2,3,7,8,9]
}



{
    let a,b,c;
    [a,b,c=3]=[1,2]
    console.log(a,b)//1 2
}

//应用
{
    let a=1;
    let b=2;
   [a,b]=[b,a]
   console.log(a,b)//2 1
}

{
    function f(){
        return[1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b)//1 2
}

{
    function f(){
        return[1,2,3,4,5]
    }
    let a,b;
    [a,,,b]=f()//,表示中间的数值2 3
    console.log(a,b)//1 4
}

{
    function f(){
        return[1,2,3,4,5]
    }
    let a,b;
    [a,,...b]=f()//...表示数值2后的数为一个数组
    console.log(a,b)//1  [3, 4, 5]
}



//对象解构赋值
{
    let o={p:42,q:true}
    let {p,q}=o
    console.log(p,q)//42 true
}

{
    let{a=10,b=5}={a:3};
    console.log(a,b)//3 5
}

{
    let metaData={
        title:'abc',
        test:[{
            title:'test',
            desc:'sescription'
        }]
    }
   let {title:estitle,test:[{title:cntitle}]}=metaData
   console.log(estitle,cntitle)//abc test
}



//字符串


//查找判断字符
{
    let str="string"
    console.log("includes",str.includes("s"))//true 
    console.log("includes",str.includes("c"))//false
    console.log("strat",str.startsWith("str"))//true
    console.log("end",str.endsWith("ng"))//true
}

//复制字符串
{
    let str="abc"
    console.log(str.repeat(2))//abcabc
}

//模板  
{
    let name="JACK"
    let info="hello world"
    let m=`I am ${name},${info}` 
    console.log(m)//I am JACK,hello world
}

//字符串补位
{
 console.log("1".padStart(2,"0"));//01
 console.log("1".padEnd(3,"0"));//100
}

//模板标签
{
    let user={
        name:"list",
        info:"hello world"
    }
    console.log(abc`i am ${user.name}${user.info}`)
    function abc(s,v1,v2){
        console.log(s,v1,v2)//i am ,,listhello world
        return s+v1+v2
    }
}

{
    //console.log(string.raw`hi\n${1+2}`)
    console.log(`hi\n${1+2}`)//hi 3
}


//数值

//判断数值是否有限数值
{
  console.log("15",Number.isFinite(15))//15 true
  console.log("NaN",Number.isFinite(NaN))//NaN false
  console.log("4/9",Number.isFinite(4/9))//4/9 true
}

//判断是否为非数值
{
  console.log("15",Number.isNaN(15))//15 false
  console.log("NaN",Number.isNaN(NaN))//NaN true
  console.log("0",Number.isNaN(0))//0 false
}

//判断是否为整数
{
    console.log('25',Number.isInteger(25))//25 true
    console.log('25.0',Number.isInteger(25.0))//25.0 true
    console.log('25.1',Number.isInteger(25.1))//25.1 false
}

//判断是否为安全整数

{
    console.log('10.1',Number.isSafeInteger(10.1))//10.1 true
}


//提取整数部分
{
    console.log(4.1,Math.trunc(4.1))//4.1 4
    console.log(4.9,Math.trunc(4.9))//4.9 4
}

//是否为正数，负数，0，NaN
{
    console.log('-5',Math.sign(-5))//-1
    console.log('5',Math.sign(5))//1
    console.log('0',Math.sign(0))//0
    console.log('foo',Math.sign('foo'))//NaN
}


//立方根
{
    console.log('-8',Math.cbrt(-8))//-2

}


//数组

//转换为数组
{
    let arr=Array.of(3,4,7,9,11)
    console.log('arr=',(arr))//[3, 4, 7, 9, 11]

    let a=Array.of()
    console.log('a=',(a))//[]
}

//替换值
{
    console.log('fill-7',[1,'a',undefined].fill(7))//[7,7,7]
    console.log('fill,pos',['a','b','c','d','e'].fill(7,1,4))//["a", 7, 7, 7, "e"] 将索引从1到4之间的值替换为7
}

//keys(索引) values(值)
{
   for(let a of ['1','g','ty'].keys()){//遍历获取索引
        console.log('keys',a)//0 1 2
   }

   for(let b of ['1','g','ty'].values()){//遍历获取值
     console.log('values',b)// 1  g ty
   }

   for(let [a,b] of ['1','g','ty'].entries()){//遍历获取值与索引
    console.log('values',a,b)//0 1 1 g 2 ty
   }
}


{
    console.log([1,2,3,4,5].copyWithin(0,3,4))//[4, 2, 3, 4, 5]
}

//查找
{
    console.log([1,2,3,4,5,6].find(function(item){return item>3}));//查找大于3的值 4 只找第一个
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));//查找大于3的值的索引 3 只找第一个
}

//是否包含
{
 console.log('number',[1,2,NaN].includes(1));//number true
 console.log('number',[1,2,NaN].includes(NaN));//number true
}



//函数

//函数参数默认值
{
    function test(x,y = 'world'){
        console.log(x,y)
    }
    test('hello')// hello world
    test('hello','kill')// hello kill
}


//作用域
{
    let x='test';//块级作用域，其他位置引用不了
    function test2(x,y=x){
      console.log(x,y);// kill kill
    }
    test2('kill')
}

//rest参数
{
    function test3(...a){
        for(let v of a){
            console.log(v)
        }
    }
    test3(1,2,3,4,'a')//拆分为一个个的值
}

{
    console.log(...[1,2,3])//将数组拆分 1 2 3
    console.log('a',...[1,2,3])//将数组拆分 a 1 2 3 
}

//箭头函数
{    //函数名 变量  返回值（执行代码）
    let Arr = v => v*2;
    let Arr2 = () => 5;
    console.log(Arr(3))//6
    console.log(Arr2())//5
}

//伪调用
{
    function a1(x){
        console.log(x)//123
    }
    function a2(x){
        return a1(x)//函数中调用另外一个函数
    }
    a2(123)
}

//对象

//简洁表示法
{
    let o=1;
    let k=2;
    let  es5={
        o:o,
        k:k
    }
    let es6={
        o,
        k
    }
    console.log(es5,es6)//{o: 1, k: 2} {o: 1, k: 2}

    let es5_a={
        hello:function(){
            console.log('heello')
        }
    }

    let es6_a={
        hello(){
            console.log('heello')
        }
    }
}

//属性表达式
{
    let a="k"
    let es5_obj={
        a:"c",
        b:"c"
    }
    console.log(es5_obj)//{a: "c", b: "c"}
    
    let es6_obj={
        [a]:'c'//[a]=变量a="k"
    }
    console.log(es6_obj)//{k: "c"}
}



//symbol
{
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2)//false
    
    let a3=Symbol.for('a3')
    let a4=Symbol.for('a3')
    console.log(a3===a4)//true
    
}

{

}




//数据结构set

//它类似于数组，但是存储的元素都是唯一的，这里的唯一指的是他们存储的内存位置是唯一。

//定义
{
    let list=new Set()
    list.add(5)//使用add添加元素
    list.add(7)
  //使用size获取set数量
    console.log('size',list.size)//获取list的数量 2
}

{
    let arr=[1,2,3,4,5]
    let list=new Set(arr)
  
    console.log('size',list.size)//获取list的数量 5
}

{//set里面的值不重复
    let list =new Set();
    list.add(1)
    list.add(2)
    list.add(1)

    console.log(list)//{1, 2}

  //利用set的特性去除数组arr里面重复的值
    let arr=[1,2,3,1,'2',2]
    let list2=new Set(arr)
  
    console.log(list2)//{1, 2, 3,'2'}
}

//set查找 删除 清空
{
    let arr=['add','delete','clear','has']
    let list=new Set(arr)

    console.log('has',list.has('add'))//true  使用has查找是否包含add  
    console.log('delete',list.delete('add'))//true 使用delete删除元素add
    list.clear();//使用clear清除所有元素
    console.log(list)//{}
}

//set 读取(遍历)
{
    let arr=['add','delete','clear','has']
    let list=new Set(arr)

    for(let i of list.keys() ){
          console.log('keys',i)//遍历获取所有的元素add delete  clear has
    }

    for(let x of list.values()){
        console.log('values',x)//add delete  clear has
    }

    for(let x of list){
        console.log(x)//add delete  clear has
    }

    list.forEach(function(t){
        console.log(t)//add delete  clear has
    })
}


//weakSet
//WeakSet只能存对象类型的元素，比如：Object, Array, Function 等
//　WeakSet对象的方法只有三个，而且WeakSet对象没有size属性；
//　weakSet.add();　weakSet.delete();　weakSet.has();
　　
{
    let list=new WeakSet()
    let arr=[1,2,3]
    let fun=function a(){}
    list.add(arr)
    list.add(fun)
    console.log(list)
}



//数据结构map 
//Map结构提供了 值-值 的对应  map[key,value] Object结构提供了 字符串-值 的对应
//Map的数据形式是一个二维数组，一种红黑树的数据结构，键是唯一的
//定义

{
    let map=new Map()
    let arr=['1']
    map.set(arr,456)//使用set添加值,为key设置键值，如已经存在该key则更新，否则添加新元素

    console.log(map.get(arr))//使用get获取指定的成员值
}



{               
  let map=new Map([['a',123],['b',456]])
  console.log(map)// {"a" => 123, "b" => 456}
  console.log(map.size)//2 使用size获取成员数量
  console.log(map.delete('a'),map)//true  {"b" => 456} 使用delete删除
  console.log(map.has('b'))//true 使用has判断是否存在指定成员
  console.log(map.clear(),map)//使用clear清空 {}
}

//weakMap
//weakmap与weakset一样只能存储对象

{
    let map=new WeakMap();
    let m={}
    map.set(m,123)
    console.log(map.get(m))//123

}




// set map与数组array 关于增,查,删,改 对比

//map与数组
let map=new Map()
let array=[]

//增
map.set('t',1);
array.push({t:1});

console.info(map,array)

//查
a=map.has('t')
b=array.find(item=>item.t)
console.info(a,b)//true {t: 1}

//改
map.set('t',2)
array.forEach(item=>item.t?item.t=2:"")

//删
map.delete("t")
array.splice(0,1);


//set与数组

let set=new Set()


//增
set.add({t:1});
array.push({t:1});

//查
let a1=set.has({t:1});
let b1=array.find(item=>item.t);
console.log(a1,b1)//false {t: 1}

//改
set.forEach(item=>item.t?item.t=9:"");
array.forEach(item=>item.t?item.t=2:"")
console.log(set,array)

//删
set.forEach(item=>item.t?set.delete(item):'')
let index=array.findIndex(item=>item.t)
array.splice(index,1)
console.log(set,array)



//set map与对象object对比
{
    let item={t:1}
    let map=new Map()
    let set=new Set()
    let obj={}
    
    //增
    
    set.add(item)
    map.set("t",1)
    obj['t']=1
    console.log(set,map,obj)
    
    //查
    console.log(
        map.has("t"),
        set.has(item),
        't'in obj
    )

    //改
    map.set("t",2)
    item.t=2
    obj["t"]=2
    console.log(set,map,obj)

    //删
    map.delete('t')
    set.delete(item)
    delete obj["t"]
    console.log(set,map,obj)
}




//proxy和reflect

//proxy用于修改阻止某些操作的默认行为
{
    let obj={
        timer:"2017-08-09",
        name:"net",
        _r:123
    }

    let mon=new Proxy(obj,{
     // get 用于拦截读取属性的操作
        get(target,key){
            return target[key].replace("2017","2018")//将时间改为2017改为2018
        },

    // set 用于拦截属性的赋值操作
        set(target,key,value){//target为操作的对象 key为对象里操作的属性名 value为操作的属性的值
           if(key==="name"){
               return target[key]=value;//只能修改name的值
           }else{
               return target[key];//其它的都不许修改,返回自身的属性名
           }
        },
        
    //has 拦截对象是否具有某个属性值的操作    
        has(target,key){
           if(key==="name"){//只能查找name属性
            return target[key]
           }else{
            return false//其它的属性都返回false
           }
        },

    //deleteProperty 拦截对象是否能被删除
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){//只允许删除带下划线的属性
                delete target[key];
                return true
            }else{
                return target[key]
            }
        },
     //ownkeys   拦截某个属性 起到过滤的作用
          ownKeys(target){
             return Object.keys(target).filter(item=>item!="timer")//过滤timer属性
          
            }
    })
      console.log("get",mon.timer)//2018-08-09
      mon.timer="2019"
      console.log('set',mon.timer)//2018-08-09
      mon.name="bool"
      console.log("set",mon.name)//bool
      console.log("has","name" in mon,"timer" in mon)//true false
      delete mon.name;
      console.log(mon)
      delete mon._r;//{timer: "2017-08-09", name: "bool", _r: 123}
      console.log(mon)//{timer: "2017-08-09", name: "bool"}
      console.log('ownkeys',Object.keys(mon))// ["name", "_r"]

}


//Reflect
//Reflect与proxy使用方法一致
{
    let obj={
        timer:"2017-08-09",
        name:"net",
        _r:123
    }

  
    console.log(Reflect.get(obj,"timer"))
    Reflect.set(obj,'name','boll')
    console.log(obj.name)//boll
    console.log(Reflect.has(obj,'name'))//true
}


//类 


 //基本定义和生成实例
{
    class parent{
        constructor(name="123"){
            this.name=name
        }
    }
    let v_parent=new parent('v')
    console.log(v_parent)//parent {name: "v"}
}


 //继承
{
    class parent{
        constructor(name='123'){
        this.name=name
    }
  }

class child extends parent{
      
      }

  console.log(new child())//child {name: "123"}
}

//继承传递参数
{
    class parent{
        constructor(name='123'){
        this.name=name
    }
  }

    class child extends parent{
        constructor(name="456"){
            super(name)
            this.type="789"
        }      
    }
    console.log(new child('hello'))
}


//promise





 
