
//const { favoritar } = require("../controllers/arsenalController");
const database = require("../database/config");

function listar(orderPreço) {
    console.log('EXECUTANDO INSTRUÇÃO SQL - LISTAR ARMAS!')
    const instrucao = `SELECT * FROM armas as a JOIN detalhesArma as d ON a.idArma = d.idArma ORDER BY preço ${orderPreço};`;
    console.log('Executando: ' + instrucao)
    return database.executar(instrucao);
}
function pesquisar(pesquisa,orderPreço){
    console.log('EXECUTANDO PESQUISA')
    var instrucao = `SELECT * FROM armas as a JOIN detalhesArma as d ON a.idArma = d.idArma WHERE nome LIKE '%${pesquisa}%' ORDER BY preço ${orderPreço}`
    console.log('Executando Instrução' + instrucao)
    return database.executar(instrucao)
}
function favoritar(idArma,idUsuario){
    console.log('FAVORITANDO ARMA')
    var instrucao = `INSERT INTO armasFavoritos (idUsuario, idArma) VALUES (${idUsuario},${idArma})`
    console.log('Inserindo no banco de dados: ' + instrucao)
    return database.executar(instrucao)
}
function desfavoritar(idArma,idUsuario){
    console.log('FAVORITANDO ARMA')
    var instrucao = `DELETE FROM armasFavoritos WHERE idArma = ${idArma} AND idUsuario = ${idUsuario};`
    console.log('Inserindo no banco de dados: ' + instrucao)
    return database.executar(instrucao)
}
function armasFavoritadas(idUsuario){
    console.log('Checando Armas Já Favoritadas')
    var instrucao = `SELECT idArma,idUsuario FROM armasFavoritos WHERE idUsuario = ${idUsuario};`
    console.log('Fazendo consulta de armas favoritadas' + instrucao)
    return database.executar(instrucao)
}
module.exports = {
    listar,
    pesquisar,
    favoritar,
    desfavoritar,
    armasFavoritadas
};