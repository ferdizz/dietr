const express = require('express');
const router = express.Router();
const auth = require('../middleware/check_auth');

const UserController = require('../controllers/user');

router.get('/', auth, UserController.get_users);
router.get('/:id', UserController.get_user_by_id);

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = router;