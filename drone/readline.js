const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a command: ', (answer) => {
    console.log(`DJI Tello: ${answer}`)
    
    switch (answer) {
        case 'command':
            console.log('starting drone')
            break;
        case 'takeoff':
            console.log('taking off drone')
            break;
    
        default:
            console.log('turn on drone')
            break;
    }

    rl.close()
})