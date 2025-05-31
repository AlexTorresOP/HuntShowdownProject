const database = require("../database/config");


function listarFavUsuario(idUsuario){
    var instrucao =`
    SELECT a.nome , a.imagem , a.idArma from armas as a join armasFavoritos as f on a.idArma = f.idArma where f.idUsuario = ${idUsuario};
    `
    return database.executar(instrucao)
}

function listar() {
    var instrucao =`
    SELECT a.nome, a.imagem, COUNT(*) as TotalDeVotos FROM armas as a 
    JOIN armasFavoritos as af ON a.idArma = af.idArma 
    GROUP BY af.idArma ORDER BY TotalDeVotos DESC LIMIT 3;
    `
    return database.executar(instrucao)
}
function listarUsuarios(){
    var instrucao = `
    SELECT COUNT(DISTINCT idUsuario) AS UsuariosTotais FROM armasFavoritos;
    `
    return database.executar(instrucao)
}
function mediaPreco(){
    var instrucao = `
    SELECT ROUND(AVG(a.preço), 2) AS MediaGeralArmasFavoritadas
    FROM armasFavoritos AS af
    JOIN armas AS a ON af.idArma = a.idArma;
    `
    return database.executar(instrucao)
}
function tipoMaisFav(){
    var instrucao = `
    SELECT a.tipo, COUNT(*) AS vezesFavoritados
    FROM armas AS a
    JOIN armasFavoritos AS af ON a.idArma = af.idArma
    GROUP BY a.tipo
    ORDER BY vezesFavoritados DESC LIMIT 1;
    `
    return database.executar(instrucao)
}
function tipoMenosFav(){
    var instrucao = `
    SELECT a.tipo, COUNT(*) AS vezesFavoritados
    FROM armas AS a
    JOIN armasFavoritos AS af ON a.idArma = af.idArma
    GROUP BY a.tipo
    ORDER BY vezesFavoritados ASC LIMIT 1;
    `
    return database.executar(instrucao)
}

function favoritas() {
    var instrucao = `
        SELECT af.idArma, a.nome, COUNT(*) AS TotalFavoritadas 
        FROM armasFavoritos AS af 
        JOIN armas AS a ON af.idArma = a.idArma 
        GROUP BY af.idArma, a.nome 
        ORDER BY TotalFavoritadas DESC;`;
    return database.executar(instrucao);
}
function municao(){
    var instrucao = `
    SELECT a.tipoMunição, COUNT(*) AS TipoMuniçãoMaisFavoritadas
    FROM armasFavoritos AS af
    JOIN armas AS a ON af.idArma = a.idArma
    GROUP BY a.tipoMunição ORDER BY TipoMuniçãoMaisFavoritadas DESC;`;
    return database.executar(instrucao);
}

module.exports = { 
    favoritas,
    municao,
    listar,
    listarUsuarios,
    mediaPreco,
    tipoMaisFav,
    tipoMenosFav,
    listarFavUsuario
};
