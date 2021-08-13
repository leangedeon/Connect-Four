let self = {};

self.constants = {
	INITIAL_GAME: {"dashboard": [{"columns": [null, null, null, null, null, null ]}, {"columns": [null, null, null, null, null, null ]}, {"columns": [null, null, null, null, null, null ]}, {"columns": [null, null, null, null, null, null ]}, {"columns": [null, null, null, null, null, null ]}, {"columns": [null, null, null, null, null, null ]}],"state": "INITIAL","player": 1, "next": 1},
	STATE: {
		INITIAL: 'INITIAL',
		IN_PROGRESS: 'IN_PROGRESS', 
		DONE: 'DONE',
	}
};

module.exports = self.constants;