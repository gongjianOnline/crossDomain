console.log("这是黑客")
// CORS解决法
const ajax = new XMLHttpRequest();
ajax.open("get","http://127.0.0.1:8081/data.json");
ajax.onreadystatechange  =()=>{
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(JSON.parse(ajax.response))
    }
}
ajax.send()

// JSONP解决法
function jsonp (url){
    return new Promise((reslove,reject)=>{
        const random = Math.random();
        const jsonpTest = document.createElement("script")
        jsonpTest.src = `${url}?callback=${random}`
        document.head.appendChild(jsonpTest)
        window[random] = (data)=>{
            reslove(data)
        }
        jsonpTest.onload = ()=>{
            jsonpTest.remove() 
        }
        jsonpTest.onerror = ()=>{
            reject()
        }
    })
}
jsonp("http://127.0.0.1:8081/jsonp.js").then((response)=>{
    console.log(response)
},()=>{
    console.log("失败了")
})







