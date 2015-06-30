'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CounterSchema = new Schema({
    model: {
        type: String,
        unique: true,
        required: 'model is require'
    },
    count: {
        type: Number,
        required: 'count is require'
    }
});

mongoose.model('Counter', CounterSchema);