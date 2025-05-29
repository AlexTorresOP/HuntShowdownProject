const database = require("../database/config");

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
    municao
};
