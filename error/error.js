function execute(){
    executeTo()
}

function executeTo() {
    throw new Error('Erro ao executar!')
}

// tente executar algo, se der erro, execute o catch automaticamente
function init() {
    try {
        execute()
    } catch (error) {
        console.log(`Houston, temos um problema! ${error.message}`)
    }
}

init()
console.log('Depois do erro')