'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
    amount: {
        type: Number,
        required: 'Amount is required'
    },
    user: {
        type: String,
        required: 'User is required'
    },
    description: {
        type: String,
        trim: true,
        required: 'Description is required'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Log', LogSchema);