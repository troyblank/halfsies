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
    this.updated_at = new Date();
    next();
});

mongoose.model('Balance', BalanceSchema);