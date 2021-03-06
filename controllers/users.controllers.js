const {
  fetchAllUsers,
  removeUserById,
  addUser
} = require('../models/users.models');

// GET
const getAllUsers = (req, res, next) => {
  fetchAllUsers()
    .then((users) => {
      res.status(200).send({ users });
    })
    .catch(next);
};

// DELETE
const deleteUserById = (req, res, next) => {
  const { user_id } = req.params;
  removeUserById(user_id)
    .then(() => res.sendStatus(204))
    .catch(next);
};

// POST
const postNewUser = (req, res, next) => {
  const { email, first_name, last_name, role } = req.body;

  addUser(email, first_name, last_name, role)
    .then((user) => {
      res.status(201).send({ user });
    })
    .catch(next);
};

// PATCH
module.exports = { getAllUsers, deleteUserById, postNewUser };
