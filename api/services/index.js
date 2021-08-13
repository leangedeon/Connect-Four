const GameModel      = require('../models/game.model');
const constants   = require('../constants');
const self = {};

self.setGameForPlay = async (game) => {

    try {
        var gameAvailable = await GameModel.find({ state:constants.STATE.INITIAL }).exec();
        if (gameAvailable.length) {
            return gameAvailable.shift();    
        }

        const newGame = new GameModel(game);
        const saveGame = await newGame.save();
        return saveGame;
    } catch (err) {
        console.log('err' + err);
        return err;
    }
}

self.deleteGames = async () => {
    try {
        const response = await GameModel.deleteMany().exec();
        return response;
    } catch (err) {
        console.log('err' + err);
        return err;
    }
}

self.getGameForPlay = async (state) => {
    try {
        const game = await GameModel.find({ state: state }).exec();
        return game.shift();
    } catch (err) {
        console.log('err' + err);
        return err;
    }
}

self.getGame = async (game_id) => {
    try {
        var game = await GameModel.find({ _id:game_id }).exec();
        return game.shift();
    } catch (err) {
        console.log('err' + err);
        return err;
    }
}

self.updateGame = async (game_id, game) => {
    try {
        var updatedGame = await GameModel.findOne()
        .where("_id").in([game_id])
        .exec();
        updatedGame.dashboard = game.dashboard;
        updatedGame.state = game.state;
        updatedGame.next = game.next;
        updatedGame.save();
        return updatedGame;
    } catch (err) {
        console.log('err' + err);
        return err;
    }
}

self.updateState = async (state) => {
    try {
        var updatedGame = await GameModel.findOne()
        .where("_id").in([game_id])
        .exec();
        updatedGame.state = state;
        updatedGame.save();
        return updatedGame;
    } catch (err) {
        console.log('err' + err);
        return err;
    }
}

module.exports = self;
