const inquirer = require("inquirer")

const classificacao = [{
    type: 'list',
    name:'estrelas',
    message: 'Como foi o atendimento no hospital? ',
    choices: ['⭐ Péssimo','⭐⭐ Ruim ','⭐⭐⭐ OK','⭐⭐⭐⭐ Bom','⭐⭐⭐⭐⭐ Ótimo'],
}
    
]

inquirer
.prompt(classificacao)
.then(answers =>{
    console.log(answers.estrelas)
})
.catch(error =>{
    console.error("Ocorreu um erro:", error)
});