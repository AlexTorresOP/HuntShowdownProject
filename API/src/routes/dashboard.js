const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/favoritas", function (req, res) {
    dashboardController.favoritas(req, res);
});
router.get("/municao", function (req, res) {
    dashboardController.municao(req, res);
});
router.get("/listar", function (req,res){
    dashboardController.listar(req,res);
})
router.get("/listarUsuarios", function (req,res){
    dashboardController.listarUsuarios(req,res);
})
router.get("/mediaPreco", function (req,res){
    dashboardController.mediaPreco(req,res);
})
router.get("/tipoMaisFav", function (req,res){
    dashboardController.tipoMaisFav(req,res);
})
router.get("/tipoMenosFav", function (req,res){
    dashboardController.tipoMenosFav(req,res);
})
router.post("/listarFavUsuario", function(req,res){
    dashboardController.listarFavUsuario(req,res)
})


module.exports = router;