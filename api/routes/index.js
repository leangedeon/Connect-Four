var express = require('express');
var router = express.Router();
const controllers = require('../controllers/index');

// Create a new Game
router.post("/game", (req, res) => controllers.api.setGameForPlay(req, res));

// Get an available Game
router.get("/game", (req, res) => controllers.api.getGameForPlay(req, res));

// Get an especific Game ID
router.get("/game/:game_id", (req, res) => controllers.api.getGame(req, res));

// Update an especific Game
router.post("/game/:game_id", (req, res, next) => controllers.api.updateGame(req, res, next));

module.exports = router;
