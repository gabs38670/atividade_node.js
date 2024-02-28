const inquirer =  require ("inquirer")
const chalk = require ("chalk")


const opcao = [
    {
        type: 'list',
        name: 'cor',
        message:'Qual é a sua cor favorita?',
        choices: ['Vermelho','Verde','Azul'],
    }
]

inquirer
    .prompt(opcao)
    .then(answers =>{
        console.log('Sua cor favorita é : ', answers.cor)
    }) 
    .catch(error =>{
        console.error("Ocorreu um erro:", error)
    });