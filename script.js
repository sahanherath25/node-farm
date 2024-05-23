const fs = require("fs")

//TODO Blocking/Synchronous ways of reading a file
// let text=fs.readFileSync("./txt/input.txt","utf-8")
// console.log(text)

//TODO Reading a file Asynchronously

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         fs.readFile(`./txt/append.txt`, "utf-8", (err1, data3) => {
//             fs.writeFile("./txt/final.txt", `${data2} \n ${data3}`, "utf-8", error => {
//                 console.log("File is created or Written")
//             })
//         })
//     })
// })

//TODO Writing text to a file
// let addedText=`${text} You will find a new Job Within these 38 Days believe in Yourself ${Date.now().toLocaleString()}`
//
// fs.writeFileSync("./txt/input.txt",addedText)

//TODO Writing a file using Asynchronously
// fs.writeFile("./txt/final.txt", `${data2} \n ${data3}`, "utf-8", error => {
//     console.log("File is created or Written")
// })

//TODO Step 1.Creating a Web Server
const http=require("http");


//Reading json data and storing
const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,"utf-8")


//Step 1 --->Create Server
const server=http.createServer((req, res)=>{
    const pathURL=req.url;
    if(pathURL==="/" || pathURL === "/overview"){
        res.end("This is the Overview Page")
    } else if(pathURL==="/api"){
        //Reading the JSON file
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end(data)

    }else if(pathURL==="/sahan"){
        res.end("Hello From the Page Sahan")
    }else if(pathURL==="/suru"){
        res.end("Hello From the Page Isuru")
    }else if(pathURL==="/daddy"){
        res.end("Hello From the Page Daddy")
    }else {
        res.writeHead(404,{
            "Context-type":"text/html",
            "Sahan-Header":"Hello Sahan Welcom"
        })
        res.end("<h1 style='color: darkred'>Page Not Found 404</h1>")
    }
})

//Step 2 -->Listening to incoming request
server.listen(8000,"127.0.0.25",()=>{
    console.log("server is Listening for incoming Requests from Port 8000")
})





