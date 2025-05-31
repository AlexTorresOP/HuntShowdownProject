var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    
                    if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].idUsuario,
                                        email: resultadoAutenticar[0].email,
                                        usuario: resultadoAutenticar[0].usuario,
                                        senha: resultadoAutenticar[0].senha,
                                    });
                                }
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}
function verificarEmail(req, res){
    var email = req.body.emailServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } 

    usuarioModel.buscarPorEmail(email).then(
        function (resultadoEmail){
            console.log(`\nResultados encontrados: ${verificarEmail.length}`);
            console.log(`Resultados: ${JSON.stringify(verificarEmail)}`); // transforma JSON em String

            if (resultadoEmail.length > 0) {
                // Email existe
                   res.status(404).send("E-mail Encontrado No Banco! Abortando Registro!");
            } else {
                // Email não existe
                res.status(200).json({
                    email : 'Email Não Existe No Banco! Prosseguir Com Cadastro!'
                });    
                res.status(200).json({
                email : resultadoEmail[0].email       
                });      
            }
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function registrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo register-page.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.registrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function alterarNome(req,res){
    var idUsuario = req.body.idUsuarioServer;
    var novoNome = req.body.novoNomeServer;
    usuarioModel.alterarNome(idUsuario,novoNome)
        .then(resultado=>{
            res.status(200).json(novoNome)
        })
        .catch(erro => {
            console.error("Erro ao alterar nome", erro);
            res.status(500).json({erro: "Erro interno no servidor"})
        })
}
function alterarEmail(req,res){
    var idUsuario = req.body.idUsuarioServer;
    var novoEmail = req.body.novoEmailServer;
    usuarioModel.alterarEmail(idUsuario,novoEmail)
        .then(resultado =>{
            res.status(200).json(novoEmail)
        })
        .catch(erro => {
            console.error("Erro ao alterar email", erro);
            res.status(500).json({erro: "Erro interno no servidor"})
        })
}
function alterarSenha(req,res){
    var idUsuario = req.body.idUsuarioServer;
    var novaSenha = req.body.senhaServer;
    usuarioModel.alterarSenha(idUsuario,novaSenha)
        .then(resultado =>{
            res.status(200).json('SENHA ALTERADA')
        })
        .catch(erro => {
            console.error("Erro ao alterar senha", erro);
            res.status(500).json({erro: "Erro interno no servidor"})
        })
}
function verificarSenha(req, res){
    var senha = req.body.senhaServer;
    var idUsuario = req.body.idUsuarioServer

    usuarioModel.verificarSenha(senha,idUsuario)
    .then( function (resultadoSenha){
            console.log(`\nResultados encontrados: ${resultadoSenha.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoSenha)}`); // transforma JSON em String

            if (resultadoSenha.length > 0) {
                res.status(200).json({ status: "ok" });
            } else {
                res.status(200).json({ status: "erro", mensagem: "SENHA INCORRETA" });
            }
        })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    autenticar,
    registrar,
    verificarEmail,
    verificarSenha,
    alterarNome,
    alterarEmail,
    alterarSenha
}