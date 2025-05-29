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


module.exports = router;