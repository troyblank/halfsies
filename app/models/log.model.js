var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
    amount: Number,
    user: String,
    description: String
});

mongoose.model('Log', LogSchema);