const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// Defines specifically what happens when a user querys the data.
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // A query to mongo to actually get the data.
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
