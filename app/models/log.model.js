var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
    amount: Number,
    user: String,
    description: String,
    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Log', LogSchema);