var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true },
    city: {type: String, required: true, default: "Киев"},
    addressMap: {type: String, required: true},
    addressUrl: {type: String, required: false},
    usualBeginningTime: {type: String, required: false}
});

module.exports = mongoose.model('ConcertHall', schema);