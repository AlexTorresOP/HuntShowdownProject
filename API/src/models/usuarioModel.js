var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario , email , usuario FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorEmail(email) {
    console.log("Acessando o banco para buscar o e-mail:", email);

    var instrucaoSql = `
        SELECT * FROM usuario WHERE email = '${email}';
    `;

    console.log("Executando a instrução SQL:" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (email, usuario,  senha) VALUES ('${email}','${nome}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function verificarSenha(senha,idUsuario) {
    console.log("Acessando o banco para verificar se senha esta correta:", senha);

    var instrucaoSql = `
        SELECT * FROM usuario WHERE senha = '${senha}' and idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL:" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function alterarNome(idUsuario,novoNome){
    console.log("Alterando Nome")
    var instrucao =`
    UPDATE usuario SET usuario = '${novoNome}' WHERE idUsuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL:" + instrucao);
    return database.executar(instrucao)
}
function alterarEmail(idUsuario,novoEmail){
    console.log("Alterando Email")
    var instrucao =`
    UPDATE usuario SET email = '${novoEmail}' WHERE idUsuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL:" + instrucao);
    return database.executar(instrucao)
}
function alterarSenha(idUsuario,novaSenha){
    console.log("Alterando Senha")
    var instrucao=`
    UPDATE usuario SET senha = '${novaSenha}' WHERE idUsuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL:" + instrucao);
    return database.executar(instrucao)
}

module.exports = {
    autenticar,
    registrar,
    buscarPorEmail,
    verificarSenha,
    alterarNome,
    alterarEmail,
    alterarSenha
};