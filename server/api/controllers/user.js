const User = require('../models/user');

exports.get_users = function(req, res, next) {
  User.find({}).then((users) => {
    res.status(200).send(users);
  }).catch(next);
}

exports.get_user_by_id = function(req, res, next) {
  User.findOne({ _id: req.params.id }).then((user) => {
    res.status(200).send(user);
  }).catch(next);
}
