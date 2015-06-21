var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Log', LogSchema);