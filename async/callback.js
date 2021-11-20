function soma(x, callback) {
    return setTimeout(() => {
        return callback(null, x + 5000)
    }, 3000)
}

function resolveSoma(err, res){
    if(err) throw err
    console.log(res)
}

soma(200, resolveSoma)