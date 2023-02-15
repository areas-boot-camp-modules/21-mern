const { gql } = require("apollo-server-express")

const typeDefs = gql`
	type Tech {
		name: String
		_id: ID
	}
	type Matchup {
		tech1: String
		tech2: String
		tech1_votes: Int
		tech2_votes: Int
		_id: ID
	}
	type Query {
		getAllTech: [Tech]
		getAllMatchups: [Matchup]
	}
`

module.exports = typeDefs
