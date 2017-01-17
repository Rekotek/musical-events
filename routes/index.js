var express = require('express');
var router = express.Router();
var EventItem = require('../models/event-item');

/* GET home page. */
router.get('/', function (req, res, next) {
    EventItem.find(function (err, doc) {
        if (err) {
            return res.send('Error accessing database');
        }
        if (doc) {
        return res.render('index',
            {
                title: 'Список событий',
                eventItems: doc
            });
        }
        res.send('No data found');
    });
});

module.exports = router;
