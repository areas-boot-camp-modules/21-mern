const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('thoughts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // TODO: Add comments to each line of code below to describe the functionality below
    // A function that maps to the addUser mutation.
    addUser: async (parent, args) => {
      // Create a new user.
      const user = await User.create(args);
      // Create a token for the new user.
      const token = signToken(user);
      // Return the new user and token.
      return { token, user };
    },
    // TODO: Add comments to each line of code below to describe the functionality below
    // A function that maps to the login mutation.
    login: async (parent, { email, password }) => {
      // Find a user by their email.
      const user = await User.findOne({ email });
      // If the user’s not found, throw an error.
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // If the user’s found, check their password.
      const correctPw = await user.isCorrectPassword(password);
      // If the password’s incorrect, throw an error.
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // If the user’s found and the password’s correct, create a token for the user.
      const token = signToken(user);
      // Return the user and token.
      return { token, user };
    },
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor });

      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought;
    },
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId });
    },
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
