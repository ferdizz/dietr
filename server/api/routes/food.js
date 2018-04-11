const express = require('express');
const router = express.Router();
// const auth = require('../middleware/check_auth')

const FoodController = require('../controllers/food');

router.get('/', FoodController.get_foods);
router.get('/:id', FoodController.get_food_by_id);
router.get('/search/:name', FoodController.get_food_by_name);

router.post('/', FoodController.create_food);

module.exports = router;