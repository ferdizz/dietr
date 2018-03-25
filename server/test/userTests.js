const UserModel = require('../api/models/user');
const config = require('../config');
const mongoose = require('mongoose');
const assert = require('assert');
const USERNAME = 'testuser'

describe('User db testing', () => {

  before((done) => {
    mongoose.connect(config.db_uri);
    mongoose.Promise = global.Promise;
    mongoose.connection.once('open', () => {
      done();
    });
  });

  beforeEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });

  describe('Saving to user db', () => {

    it('Saves record to db', (done) => {

      var user = new UserModel({
        username: USERNAME,
        weight: 60
      });

      user.save().then(() => {
        assert(!user.isNew);
        done();
      });

    });

  });

  describe('Reading from user db', () => {

    var user;

    beforeEach((done) => {
      user = new UserModel({
        username: USERNAME,
        weight: 60
      });

      user.save().then(() => {
        done();
      });
    })

    it('Finds existing record by id', (done) => {

      UserModel.findOne({
        _id: user._id
      }).then((result) => {
        assert(result._id.toString() === user._id.toString());
        done();
      });

    });

    it('Finds existing record by username', (done) => {

      UserModel.findOne({
        username: USERNAME
      }).then((result) => {
        assert(result.username === USERNAME);
        done();
      });

    });

  });

  describe('Deleting from user db', () => {

    var user;

    beforeEach((done) => {
      user = new UserModel({
        username: USERNAME,
        weight: 60
      });

      user.save().then(() => {
        done();
      });
    });

    it('Deletes existing user by id', (done) => {
      UserModel.findOneAndRemove({
        _id: user._id
      }).then(() => {
        UserModel.findOne({
          _id: user._id
        }).then((result) => {
          assert(result === null);
          done();
        });
      });
    });

    it('Deletes existing user by username', (done) => {
      UserModel.findOneAndRemove({
        username: USERNAME
      }).then(() => {
        UserModel.findOne({
          username: USERNAME
        }).then((result) => {
          assert(result === null);
          done();
        });
      });
    });

  });

  describe('Updating the user db', () => {

    var user;

    beforeEach((done) => {
      user = new UserModel({
        username: USERNAME,
        weight: 60
      });

      user.save().then(() => {
        done();
      });
    });

    it('Updates weight of existing user', (done) => {
      UserModel.findOneAndUpdate({
        username: USERNAME
      }, {
        weight: 70
      }).then(() => {
        UserModel.findOne({
          username: USERNAME
        }).then((result) => {
          assert(user.weight !== result.weight && result.weight === 70);
          done();
        });
      });
    });

  });

});
