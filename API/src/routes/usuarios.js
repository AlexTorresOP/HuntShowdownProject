var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrar", function (req, res) {
    usuarioController.registrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/verificarEmail", function (req, res){
    usuarioController.verificarEmail(req,res);
});
router.post("/verificarSenha", function (req, res) {
    usuarioController.verificarSenha(req, res);
});
router.post("/alterarNome", function (req,res){
    usuarioController.alterarNome(req,res);
})
router.post("/alterarEmail", function (req,res){
    usuarioController.alterarEmail(req,res);
})
router.post("/alterarSenha", function (req,res){
    usuarioController.alterarSenha(req,res);
})


module.exports = router;
