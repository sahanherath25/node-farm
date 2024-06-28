const fs=require("fs");
const server=require("http").createServer();

const redable=fs.createReadStream("./txt/test-file.txt");



//TODO Responding For Request

server.on("request",(req, res)=>{

    // fs.readFile("./txt/input.txt",(err, data)=>{
    //     if (err){
    //         return
    //     }
    //     console.log("Data Reading ",data.toString());
    //     res.end(data)
    // })

    //Here the issue is How fat we read the daa is not speed as to the Response speed
    //TODO This is Called Back Pressure Data Handling Speed Issue
    // redable.on("data",(chunk)=>{
    //     res.write(chunk);
    // })
    //
    // redable.on("error",(error)=>{
    //     res.statusCode=500;
    //     res.end("File Not Found")
    // })
    //
    // redable.on("end",()=>{
    //     console.log("Finish Data Read")
    //     res.end();
    // })

//    Solution 3
//     use  pipe operator
    const redable=fs.createReadStream("./txt/test-file.txt");
    redable.pipe(res)
//  TODO   redableSource.pipe(writableSource)

    redable.on("end",()=>{
        console.log("Finish Data Read")
        res.end();
    })

})

//TODO Starting Server
server.listen(3002,"127.0.0.1",()=>{
    console.log("LISTENING FOR REQUESTS");
})



// (function export,require,module,__dirname,__filename{
//
// })