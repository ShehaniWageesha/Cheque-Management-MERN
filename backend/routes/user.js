const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {

    const accNo = req.body.accNo;
    const newUser = new User({ accNo });

    newUser.save()
        .then(() => res.json('user added!'))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(users => res.json('user deleted'))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {

            user.accNo = req.body.accNo;

            user.save()
                .then(() => res.json('user updated!'))
                .catch(err => res.status(400).json('Error:' + err));

        })

});


module.exports = router;