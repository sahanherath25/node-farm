const fs=require("fs");
const crypto=require("crypto");

const start=Date.now();
console.log(start)

// process.env.UV_THREADPOOL_SIZE=1;
process.env.UV_THREADPOOL_SIZE = '4';

console.log(`Thread pool size set to: ${process.env.UV_THREADPOOL_SIZE}`);

fs.readFile("./txt/read-this.txt","utf-8",(err, data)=>{

    if(err){
        console.log("Error While Reading the fie ",err)
    }
    console.log("I/O Finished ")
    console.log("----------------------------")
    setTimeout(()=>{
        console.log("1s Timer is Ended ")
    },0)
    setTimeout(()=>{
        console.log("3s Timer is Ended ")
    },3000)
    setImmediate(()=>{
        console.log("Set Immediate Timer")
    })


    process.nextTick(()=>{
        console.log("Next Tick CallBack Ended")
    })

    crypto.pbkdf2Sync("password","salt",1000000,1024,"sha512",()=>{
        console.log("Password Encrypted ",Date.now()-start)
    })
    crypto.pbkdf2Sync("password","salt",10000,1024,"sha512",()=>{
        console.log("Password Encrypted ",Date.now()-start)
    })
    crypto.pbkdf2("password","salt",100000,1024,"sha512",()=>{
        console.log("Password Encrypted ",Date.now()-start)
    })
    crypto.pbkdf2("password","salt",1000,1024,"sha512",()=>{
        console.log("Password Encrypted ",Date.now()-start)
    })

})



console.log("Hello From the Top Level Code ")

