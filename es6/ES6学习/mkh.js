
//模块化

let A=23;
let test=function(){
    console.log("test")
}

class hello{
    test(){
        console.log("class")
    }
}

export default{
    A,
    test,
    hello
}