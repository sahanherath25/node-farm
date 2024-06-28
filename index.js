const fs = require("fs");

const superagent = require("superagent")

const readFilePromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8",(err, data) => {
            if (err) return reject("Cannot Find the File")
            resolve(data)
            // if (err) return reject((reason) => {
            //     console.log("ERROR", reason)
            // })
        })
    })
}

const writeFilePromise = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) return reject("Error While Writing the FIle")
            resolve("SUCCESS")
        })
    })
}


// fs.readFile(`${__dirname}/txt/dog.txt`, "utf-8", (err, data) => {
//     console.log("Reading the Dog FGile")
//     if (err) {
//         console.log("Error ", err)
//     }
//     // console.log(data)
//     // superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((er, res) => {
//     //     if (er) console.log(er.message)
//     //     console.log("RESPONSE ",res.body.message)
//     //     fs.writeFile(`${__dirname}/txt/dog-name.txt`,res.body.message,(e)=>{
//     //         if(e)return console.log(e.message)
//     //         console.log("RANDOM DOG IMAGE ")
//     //     })
//     // })
//
//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .then((res) => {
//             // if (er) console.log(er.message)
//             // console.log("RESPONSE ", res.body.message)
//             fs.writeFile(`${__dirname}/txt/dog-name.txt`, res.body.message, (e) => {
//                 if (e) return console.log(e.message)
//                 console.log("RANDOM DOG IMAGE ")
//             })
//         })
//         .catch((reason) => {
//             console.log("Reason", reason)
//         })
//
//
// })

//Handling Asynchronous With Promises

// readFilePromise(`${__dirname}/txt/dog.txt`)
//     .then((data) => {
//         return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     })
//     .then((res) => {
//         // if (er) console.log(er.message)
//         console.log("RESPONSE ", res.body.message)
//         return writeFilePromise(`${__dirname}/txt/dog-name.txt`, res.body.message)
//     }).then(() => {
//         console.log("Random Dog Image is saved  to Dog.txt File")})
//     .catch((reason) => {
//         console.log("Reason", reason)
//     })
//


const getDogImage=async ()=>{
    try{
        const data=await readFilePromise(`${__dirname}/txt/dog.txt`);
        console.log(data)
        const res=await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message)
        await writeFilePromise(`${__dirname}/txt/dog-name.txt`, res.body.message);
    }catch (e) {
        console.log("Exception Occured ",e)
    }
}

getDogImage();



