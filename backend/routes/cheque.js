const router = require('express').Router();
const Cheque = require('../models/cheque.model');

router.route('/').get((req, res) => {
    Cheque.find()
        .then(Cheques => res.json(Cheques))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {

    const accNo = req.body.accNo;
    const chequeBooks = req.body.chequeBooks;
    const chequeOption = req.body.chequeOption;
    const delivery = req.body.delivery;
    const date = Date.parse(req.body.date);
    const status = req.body.status;

    const newCheque = new Cheque ({
        accNo,
        chequeBooks,
        chequeOption,
        delivery,
        date,
        status,
    });

    newCheque.save()
        .then(() => res.json('Cheque Request Sent!'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').get((req, res) => {
    Cheque.findById(req.params.id)
        .then(Cheques => res.json(Cheques))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/:id').delete((req, res) => {
    Cheque.findByIdAndDelete(req.params.id)
        .then(Cheques => res.json('Cheque Request Canceled'))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/update/:id').post((req, res) => {
Cheque.findById(req.params.id)
.then(cheque =>{

    cheque.accNo = req.body.accNo;
    cheque.chequeBooks = req.body.chequeBooks;
    cheque.chequeOption = req.body.chequeOption;
    cheque.delivery = req.body.delivery;
    cheque.date = Date.parse(req.body.date);
    cheque.status = req.body.status;

    cheque.save()
        .then(() => res.json('Cheque Request Details Updated'))
        .catch(err => res.status(400).json('Error:' + err));

})
.catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;