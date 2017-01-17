var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true },
    eventDate: {type: Date, required: true},
    performerTitle: {type: String, required: true},
    description: {type: String, required: true},
    concertHall: {type: Object, required: true},
    interestRate: {type: Number, min: 0, max: 3, default: 0},
    linkTo: {type: String, required: false}
});

module.exports = mongoose.model('EventItem', schema);