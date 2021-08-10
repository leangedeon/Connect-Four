"use strict"
const services    = require('../services/index');
const constants   = require('../constants');

module.exports = class Api {

    async setGameForPlay(req, res) {
        const dashboard = await services.setGameForPlay(constants.INITIAL_GAME);
		if (dashboard.state) {
			return res.json(dashboard);
		}
		return res.status(500).send({'msg': 'error'})
    }

	async getGameForPlay(req, res) {
		const game = await services.getGameForPlay(constants.STATE_INITIAL, 1);

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
			players: req.body.players,
			next: req.body.next,
		}

		const dashboard = await services.updateGame(game_id, game);

        if (dashboard.state) {
			return res.json(dashboard);
		}
		return res.status(500).send({'msg': 'error'})
    }

}



