const fs = require("fs")

const slugify=require("slugify")

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
const url=require("url");

const {replaceTemplate} = require("./replaceTemplate");


//Reading json data and storing
const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,"utf-8")
const dataObject=JSON.parse(data);

const templateCard=fs.readFileSync(`${__dirname}/templates/template-card.html`,"utf-8")
const templateProduct=fs.readFileSync(`${__dirname}/templates/product.html`,"utf-8")
const templateOverview=fs.readFileSync(`${__dirname}/templates/overview.html`,"utf-8")

fs.readFile(`${__dirname}/txt/final.txt`,"utf-8",(err, data) => {
    console.log("READING THE FINAL TEST FILE")
    console.log(data)
})

const slugs=dataObject.map((item)=>slugify(item.productName,{lower:true}))
console.log("SLUG ARRAY",slugs)

console.log(slugify("Fresh Avocados",{lower:true}))

//Step 1 --->Create Server
const server=http.createServer((req, res)=>{
    const pathURL=req.url;
    const {query,pathname}=url.parse(req.url,true)
    // const {query,pathname}=url.parse(req.url,true)
    console.log("id",query.id)
    console.log("pathName",pathname)
    //TODO For Overview
    if(pathURL==="/" || pathURL === "/overview"){


    //    Mapping the data Object
    //     const cardsHTML=dataObject.map((element)=>{
    //     //    we want to replace the placeholders in our html page
    //         return replaceTemplate(templateCard,element)
    //     }).join('')
    //    Creating the HTML cards with replaced Values  and then joins all the cards gother to be all values to string

        const cardsHTML=dataObject.map((element)=> replaceTemplate(templateCard,element)).join('');

        //All cards in string form are replaced to card container
        const output=templateOverview.replace("{%PRODUCT_CARDS%}",cardsHTML)

        res.end(output)
    //    Product Page

    //    FOR API
    }
    else if(pathname==="/product"){
        res.writeHead(200,{
            "Content-type":"text/html"
        })
        const product=dataObject[query.id]
        console.log(product)
        const output=replaceTemplate(templateProduct,product)
        console.log(output)
        res.end(output)
    }
    else if(pathURL==="/api"){
        //Reading the JSON file
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end(data)

    }else {
        //    FOR 404 Page
        res.writeHead(404,{
            "Context-type":"text/html",
            "Sahan-Header":"Hello Sahan Welcom"
        })
        res.end("<h1 style='color: darkred'>Page Not Found 404</h1>")
    }
})



//Step 2 -->Listening to incoming request
server.listen(8000,"127.0.5.25",()=>{
    console.log("server is Listening for incoming Requests from Port 8000")
})





