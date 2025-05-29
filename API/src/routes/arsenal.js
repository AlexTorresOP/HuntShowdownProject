const express = require("express");
const router = express.Router();
const arsenalController = require("../controllers/arsenalController");

router.post("/listar", function(req,res){ 
    arsenalController.listar(req,res)
});

router.post("/pesquisar", function(req,res){
    arsenalController.pesquisar(req,res)
});

router.post("/favoritar", function(req,res){
    arsenalController.favoritar(req,res)
});

module.exports = router;