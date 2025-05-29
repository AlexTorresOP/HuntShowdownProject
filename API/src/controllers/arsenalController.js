const arsenalModel = require("../models/arsenalModel");

function listar (req, res) {
    var orderPreço = req.body.orderPreçoServer;
    arsenalModel.listar(orderPreço)
        .then(resultado => {
            if (resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(204).send("Nenhuma arma encontrada.");
            }
        })
        .catch(erro => {
            console.error("Erro ao listar arsenal:", erro);
            res.status(500).json(erro);
        });
}
function pesquisar(req,res) {
    var pesquisa = req.body.pesquisaServer;
    var orderPreço = req.body.orderPreçoServer;
    arsenalModel.pesquisar(pesquisa,orderPreço)
        .then(resultado => {
            if(resultado.length > 0){
                res.json(resultado)
            } else {
                res.status(200).json([])
            }
        })
        .catch(erro => {
            console.error("Erro na pesquisa de arsenal", erro)
            res.status(500).json(erro);
        });
}
function favoritar(req,res){
    var idArma = req.body.idArmaServer
    var idUsuario = req.body.idUsuarioServer
    arsenalModel.favoritar(idArma,idUsuario)
    .then(() => {
        res.status(200).json({ mensagem: "Arma favoritada com sucesso!" });
    })
    .catch((erro) => {
        console.error("Erro ao favoritar arma:", erro);
        res.status(500).json({ erro: "Erro ao favoritar arma." });
    });
}

module.exports = {
    listar,
    pesquisar,
    favoritar
};