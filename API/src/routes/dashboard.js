const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/favoritas", function (req, res) {
    dashboardController.favoritas(req, res);
});
router.get("/municao", function (req, res) {
    dashboardController.municao(req, res);
});

module.exports = router;