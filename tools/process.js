require('./subdirectory/sub')
console.log('------------------------------------------------------------------')
console.log('Arquivo: ', __filename)
console.log('Diretório: ', __dirname)
console.log('Parâmetros: ', process.argv)
console.log('Diretório em que foi chamado: ', process.cwd())
console.log('Sistema Operacional: ', process.env.OS) // OS do servidor
console.log('Nome do Usuário: ', process.env.USERNAME) // nome do usuário
console.log('Idioma: ', process.env.LANG) // idioma
console.log('Nome do Server: ', process.env.COMPUTERNAME) // idioma

console.log(`Ambiente do servidor: `, process.platform)

switch (process.argv[2]) {
    case '-a':
        console.log('Execute rotina principal')
        break;
    case '-i':
        console.log('Execute instalação')
        break;
    case '-q':
        console.log('Encerrando aplicação')
        process.exit() // interrompe imediatamente o código
        break;
    default:
        console.log('Parâmetro inválido')
}