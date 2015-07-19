'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BalanceSchema = new Schema({
    balancePrimary: {
        type: Number,
        default: 0
    },
    userPrimary: {
        type: String,
        required: 'Primary user is required'
    },
    userSecondary: {
        type: String,
        required: 'Secondary user is required'
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

BalanceSchema.pre('save', function (next) {
    mongoose.model('Balance').count({}, function (err, count) {
        if (count >= 1) {
            next(new Error('You can only have one balance in Halfsies.'));
        }

        this.updated_at = new Date();
        next();
    });
});

mongoose.model('Balance', BalanceSchema);