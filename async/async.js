function sum(x) {
    return new Promise((resolve, reject) => {
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Invalid number!')
        }
        setTimeout(() => {
            resolve(x + 5000)
        }, 3000)
    })
}

async function main(){
    try {
        const res = await sum(230)
        console.log(res)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

main()