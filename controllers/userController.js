const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  
  getSingleUser(req, res) {

  },

  createUser(req, res) {

  },

  updateUser(req, res) {

  },

  deleteUser(req, res) {

  },

  addFriend(req, res) {

  },

  removeFriend(req, res) {

  }
};
