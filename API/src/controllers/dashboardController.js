const dashboardModel = require("../models/dashboardModel");

function listarFavUsuario(req,res){
    var idUsuario = req.body.idUsuarioServer
    dashboardModel.listarFavUsuario(idUsuario)
    .then(resultado => {
        res.status(200).json(resultado)
    })
    .catch(erro => {
        console.error("Erro ao listar favoritadas", erro);
        res.status(500).json({erro: "Erro interno no servidor"})
    })
}


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

function mediaPreco(req,res){
    dashboardModel.mediaPreco()
    .then(resultado => {
        res.status(200).json(resultado)
    })
    .catch(erro => {
        console.error("Erro ao puxar média", erro);
        res.status(500).json({erro: "Erro interno no servidor"})
    })
}
function tipoMaisFav(req,res){
    dashboardModel.tipoMaisFav()
    .then(resultado => {
        res.status(200).json(resultado)
    })
    .catch(erro => {
        console.error("Erro ao puxar tipo arma mais Favoritada", erro);
        res.status(500).json({erro: "Erro interno no servidor"})
    })
}
function tipoMenosFav(req,res){
    dashboardModel.tipoMenosFav()
    .then(resultado => {
        res.status(200).json(resultado)
    })
    .catch(erro => {
        console.error("Erro ao puxar tipo arma menos Favoritada", erro);
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
    listarUsuarios,
    mediaPreco,
    tipoMaisFav,
    tipoMenosFav,
    listarFavUsuario
};