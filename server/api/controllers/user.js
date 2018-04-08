const User = require('../models/user');
const jwt = require('jsonwebtoken')

exports.get_users = (req, res, next) => {
  console.log(req.userData)
  User.find({}, '-__v').then((users) => {
    res.status(200).send(users);
  }).catch(next);
}

exports.get_user_by_id = (req, res, next) => {
  User.findOne({ _id: req.params.id }, '-__v').then((user) => {
    res.status(200).send(user);
  }).catch(next);
}

exports.signup = (req, res, next) => {
  const username = req.body.username.toLowerCase();

  User.findOne({ username: username }).then(userExists => {
    if (userExists) {
      return res.status(409).json({
        message: 'Username taken'
      });
    }

    const user = new User({
      username: username,
      weight: req.body.weight
    });

    user.save().then((result) => {
      res.status(201).json({
        message: "User created",
        user: {
          id: result._id,
          username: result.username
        }
      });
    }).catch(next);

  });
}

exports.login = (req, res, next) => {
  const username = req.body.username.toLowerCase();

  User.findOne({ username: username }).then(user => {
    if (!user) {
      return res.status(401).json({
        message: 'Login failed'
      });
    }

    const token = jwt.sign({
      user_id: user._id,
      username: user.username
    }, process.env.JWT_KEY, {
      expiresIn: "1h"
    });

    res.status(200).json({
      message: 'Login successful',
      token: token
    });

  });
}