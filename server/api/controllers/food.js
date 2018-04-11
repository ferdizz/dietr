const Food = require('../models/food');

exports.get_foods = (req, res, next) => {
    Food.find({}, '-__v').then((foods) => {
        res.status(200).send(foods);
    }).catch(next);
}

exports.get_food_by_id = (req, res, next) => {
    Food.findOne({ _id: req.params.id }, '-__v').then((food) => {
        res.status(200).send(food);
    }).catch(next);
}

exports.create_food = (req, res, next) => {
    const name = req.body.name.toLowerCase();
    const nutrients = req.body.nutrients;

    Food.findOne({ name: name }).then(foodExists => {
        if (foodExists) {
            return res.status(409).json({
                message: 'Food already exists'
            });
        }

        const food = new Food({
            name: name,
            nutrients: nutrients
        });

        food.save().then((result) => {
            res.status(201).json({
                message: "Food created",
                food: {
                    id: result._id,
                    name: result.name,
                    nutrients: result.nutrients
                }
            });
        }).catch(next);
    })
}

exports.get_food_by_name = (req, res, next) => {
    const name = req.params.name

    Food.find({ name: new RegExp("^" + name) }, '-__v').limit(5).then((foods) => {
        res.status(200).send(foods);
    }).catch(next);
}