const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  # Defines the Class schema.
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # Defines what a query returns (in this case, an array of classes).
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
