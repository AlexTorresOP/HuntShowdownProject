const dashboardModel = require("../models/dashboardModel");

function listar(req,res){
    dashboardModel.listar()
        .then(resultado => {
            res.status(200).json(resultado)
        })
        .catch(erro => {
            console.error("Erro ao listar armas mais favoritadas", erro);
            res.status(500).json({erro: "Erro interno no servidor"})
        })
}

function listarUsuarios(req,res){
    dashboardModel.listarUsuarios()
        .then(resultado => {
            res.status(200).json(resultado)
        })
        .catch(erro => {
            console.error("Erro ao listar usuarios", erro);
            res.status(500).json({erro: "Erro interno no servidor"})
        })
}


function municao(req,res) {
    dashboardModel.municao()
        .then(resultado => {
            res.status(200).json(resultado || [])
        })
        .catch(erro => {
            console.error("Erro ao buscar Muniçoẽs mais Favoritadas:", erro);
            res.status(500).json({erro: "Erro interno no servidor"});
        })
}

function favoritas(req,res) {
  dashboardModel.favoritas()
      .then(resultado => {
          res.status(200).json(resultado || []);
      })
      .catch(erro => {
          console.error("Erro ao buscar armas favoritadas:", erro);
          res.status(500).json({ error: "Erro interno no servidor" });
      });
}



module.exports = {
    favoritas,
    municao,
    listar,
    listarUsuarios
};