// import http from "http"
const http=require("http")
const fs=require("fs")


const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,"utf-8");



const server=http.createServer((req, res)=>{

    const currentPath=req.url

    if(currentPath==="/" || currentPath==="/overview"){
        res.end("<h1>You are in the Home Page</h1>")
    }else if(currentPath==="/sahan" ){
        res.end("<h1>You are in the Home Page</h1>")
    }else if(currentPath==="/daddy" ){
        res.end("<h1>You are in the Home Page</h1>")
    }else if(currentPath==="/data" ){
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end(data)
    }else if(currentPath==="/daddy" ){
        res.end("<h1>You are in the Home Page</h1>")
    }else {
        res.writeHead(404,{
            "Content-type":"text/html",
            "sahan":`Ths is a RESPONSE FO BY SAHAN`
        })
        res.end("<h1 style='color: darkred'>PAGE NOT FOUND FUCKER</h1>")
    }

})

server.listen(4000,"127.0.0.29",()=>{
    console.log("WAITING FOR REQUESTSS")
})