const inquirer = require("inquirer")
const chalk = require ("chalk")

const resposta = [
    {
        type: 'list',
        name: 'pergunta',
        message: 'Você deseja continuar?',
        choices: [chalk.green.bold('Sim'),chalk.red.bold('Não') ] ,
    }
]

inquirer
.prompt(resposta)
.then(answers =>{
    console.log(answers.pergunta)
})
.catch(error =>{
    console.error("Ocorreu um erro:", error)
});