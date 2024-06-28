const EventEmitter=require("events");
const http=require("http");


class Sales extends EventEmitter{
    constructor() {
        super();
    }
}


const myEmitter=new Sales();


//TODO Listening For Event
myEmitter.on("test",({data,id})=>{
    console.log("Event Emited");
    console.log("NAME   ",data)
    console.log("ID NO  ",id)
});

//TODO Emitting test Event
myEmitter.emit("test",{data:"Sahan",id:9725});


//Creating a Server

const server=http.createServer((req, res)=>{
    console.log("Request Received 25");
    console.log(req.url)
    // res.end();
});

server.on("request",(req, res)=>{
    console.log("Request Received 100");
    res.end("<h1> Hello Guys </h1>");
    // server.close()
    server.emit("close")
})

server.listen(9000,"127.168.1.2",()=>{
    console.log("Waiting for Requests")
})
//
server.on("close",(req, res)=>{
    console.log("Goodbye Folks")
    // res.end("<h1> Goodbye Folks ( </h1>");
})



