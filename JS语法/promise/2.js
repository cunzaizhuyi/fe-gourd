

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    })
})


p.then((v) => {
    console.log(v)
}).then((v) => {
    console.log(v)
})
