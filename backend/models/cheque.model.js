const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chequeSchema = new Schema({
    accNo: {type: String,require: true},
    chequeBooks: {type: Number,require: true},
    chequeOption: {type: String,require: true},
    delivery: {type: String,require: true},
    date: {type: Date,require: true},
    status: {type: String,require:true}
}, {
    timestamps: true,
});

const Cheque = mongoose.model('Cheque',chequeSchema);
module.exports = Cheque;