 const inquirer = require ("inquirer")
 const chalk = require ("chalk")


 inquirer

    .prompt([

        {
            name: 'nome',
            message: 'Qual é o seu nome?'
        }])

        .then((answers) => {
            const resposta = `Seu nome é ${answers.nome} seja bem-vindo😁😉🥴`
            console.log(chalk.blue(resposta))
        })
        .catch((err) => {
            console.log(err)
        })
            