const router = require('express').Router();
const StopCheque = require('../models/stopCheque.model');

router.route('/').get((req, res) => {
    StopCheque.find()
        .then(StopCheques => res.json(StopCheques))
        .catch(err => res.status(400).json('Error:' + err));

});

router.route('/add').post((req, res) => {

    const action = req.body.action;
    const account = req.body.account;
    const reason = req.body.reason;
    const chequeNo = req.body.chequeNo;
    
    const newStopCheque = new StopCheque ({
        action,
        account,
        reason,
        chequeNo,

    });

    newStopCheque.save()
        .then(() => res.json('Cheque Stopped!'))
        .catch(err => res.status(400).json('Error:' + err));

});
router.route('/:id').get((req, res) => {
    StopCheque.findById(req.params.id)
        .then(StopCheques => res.json(StopCheques))
        .catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;