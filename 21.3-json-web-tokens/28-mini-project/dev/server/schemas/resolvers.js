const { Tech, Matchup } = require('../models');

module.exports = {
	Query: {
		getAllTech: async () => {
			const allTech = await Tech.find({});
			return allTech
		},
		getAllMatchups: async () => {
			const allMatchups = await Matchup.find({});
			return allMatchups
		},
	},
}
