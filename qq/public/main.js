console.log("这是QQ空间")
const ajax = new XMLHttpRequest();
ajax.open("get","/data.json")
ajax.onreadystatechange = ()=>{
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(JSON.parse(ajax.response))
    }
}
ajax.send()