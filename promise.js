// var promise = new Promise(function (resolve,reject){
//     const x = "Adfar"
//     const y = "Addfar"
//     if(x===y){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })
// promise.then(function(){
//     console.log("success")
// }).catch(function(){
//     console.log("some error")
//})

// var promise = new Promise(function(resolve,reject){
//     reject("Adfar Rasheed")
// })
// promise.then(function(successMessage){
//     console.log(successMessage)
// }).catch(function(errorMessage){
//     console.log(errorMessage)
// })

let promise = new Promise((resolve,reject)=>{
    resolve("Hello Adfar")
})
promise.then(
    new Promise((resolve,reject)=>{
        resolve("Hello Javascript")
    }).then((result1)=>{
    console.log(result1)
})).then((result2)=>{
    console.log(result2)
})


