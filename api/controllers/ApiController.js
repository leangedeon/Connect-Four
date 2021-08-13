"use strict"
const services    = require('../services/index');
const constants   = require('../constants');

module.exports = class Api {

    async setGameForPlay(req, res) {
		
        const dashboard = await services.setGameForPlay(constants.INITIAL_GAME);

		console.log('game created', dashboard);

		if (dashboard.state) {
			return res.json(dashboard);
		}
		return res.status(500).send({'msg': 'error'})
    }

	async getGameForPlay(req, res) {
		const game = await services.getGameForPlay(constants.STATE.INITIAL);
		
		if (game) {
			return res.json(game);
		}
		return res.status(500).send({'msg': 'error'})
    }
	
	async getGame(req, res) {
		const game_id = req.params.game_id;
		const dashboard = await services.getGame(game_id);

		if (dashboard.state) {
			return res.json(dashboard);
		}
		return res.status(500).send({'msg': 'error'})
    }

	async updateGame(req, res) {
		const game_id = req.params.game_id;
		const game = {
			dashboard: req.body.dashboard,
			state: req.body.state,
			player: req.body.player,
			next: (req.body.player === 1) ? 2 : 1,
		}

		const dashboard = await services.updateGame(game_id, game);

        if (dashboard.state) {
			return res.json(dashboard);
		}
		return res.status(500).send({'msg': 'error'})
    }

	async setMoveForGame(req, res) {
		const game_id = req.params.game_id;
		const move = req.params.move;
		const player = req.body.player;
		let position = null;
		const game = await services.getGame(game_id);
		game.player = player;
		game.state = constants.STATE.IN_PROGRESS;
		game.next = (player === 1) ? 2 : 1;

		for (var i = 0; i < game.dashboard.length; i++) {
			if (game.dashboard[i].columns[move] === null) {
			  position = i;
			  break;
			}
		}

		if (position !== null && position < game.dashboard.length) {
			game.dashboard[position].columns[move] = player;
		}

		const updatedGame = await services.updateGame(game_id, game);

		if(this.checkWinner(game)) {
			updateState(constants.STATE.DONE);
		}

		if (updatedGame.state) {
			return res.json(updatedGame);
		}

		return res.status(500).send({'msg': 'error'})
    }

	async deleteGames(req, res) {
		
        const response = await services.deleteGames();
		return res.json(response);
    }

	checkWinner(game) {
		return false;
	}
}



