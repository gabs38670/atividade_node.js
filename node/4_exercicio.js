const inquirer = require ("inquirer")

const frutas = [
    {
        type: 'list',
        name: 'fruta1',
        message: 'Qual sua fruta cítrica favorita?',
        choices: ['Laranja','Limão','Tangerina'] ,
    },
    {
        type: 'list',
        name: 'fruta2',
        message: 'qual sua fruta favorita?',
        choices: ['Morango','Abacaxi','Mirtilo'] ,   
    }
    
]

inquirer
.prompt(frutas)
.then(answers =>{
    console.log('sua fruta cítrica favorita é' , answers.fruta1)
    console.log('sua fruta favorita é', answers.fruta2)
})
.catch(error =>{
    console.error("Ocorreu um erro:", error)
});




