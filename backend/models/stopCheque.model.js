const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stopChequeSchema = new Schema({
    action: {type: String,require: true},
    account: {type: String,require: true},
    reason: {type: String,require: true},
    chequeNo: {type: Number,require: true},
}, {
    timestamps: true,
});

const StopCheque = mongoose.model('StopCheque',stopChequeSchema);
module.exports = StopCheque;