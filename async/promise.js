function sum(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x + 5000)
        }, 3000)
    })
}

sum(230)
.then((res) => {
    console.log(`Resolved: ${res}`)
})