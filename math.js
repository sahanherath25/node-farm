// class BDConnection {
//     instance="";
//     constructor(uri) {
//         this.uri=uri;
//     }
// }
//
// export class add {
// }
//
// export class divide {
// }
//
// export class subtract {
// }
//
// export class multiply {
// }

const fs=require("fs")

fs.readFile(`${__dirname}/txt/read-this.txt`,(err, data) => {
    if(err){
        console.log("ERROR WHILE READING THE FILE",err);
    }else {
        console.log(data.toString())
    }

    fs.writeFile(`${__dirname}/txt/my-new-file.txt`,`IM SURE  I WILL GET AN GOOD ANSWER WITHOUT TRANSPLANT This is my NEWLY ADDED TEXT WOTH THE EXISTING TEXT \n ${data}`,"utf-8",(err)=>{
        console.log(err)
        fs.readFile(`${__dirname}/txt/my-new-file.txt`,"utf-8",(err1, data1) => {
            console.log(data1)
        })
    })
})



for (let i = 0; i <51 ; i++) {
    console.log(`No ${i}`,i)
}