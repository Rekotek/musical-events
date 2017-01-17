var User = require('../models/user');
var EventItem = require('../models/event-item');
var ConcertHall = require('../models/concert-hall');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var config = require('../config/config');

mongoose.connect(config.MONGO_HOST + ':' + config.MONGO_PORT + '/' + config.MONGO_DB_NAME);

var adminUser = new User({
    firstName: 'YOUR_NAME',
    lastName: 'YOUR_SURBNAME',
    email: 'test@example.com',
    password: 'xxx',
    notifyMe: false
});

console.log("Adding admin user: " + adminUser);
adminUser.save();

var filarmoniaHall = new ConcertHall({
    title: 'Филармония',
    addressMap: 'Европейская площадь',
    addressUrl: 'http://filarmonia.com.ua/ua.afisha',
    usualBeginningTime: '19:00'
});

filarmoniaHall.save();

var organHall = new ConcertHall({
    title: 'Дом Органной Музыки',
    addressMap: 'ул. Красноармейская 77',
    addressUrl: 'http://www.organhall.kiev.ua',
    usualBeginningTime: '19:30'
});

organHall.save();

var eventItems = [
    new EventItem({
        title: 'Чайковский',
        eventDate: new Date('2016-10-09 19:00'),
        performerTitle: 'Дирижер: И. Палкин; фортепиано: П. Качнов',
        description: 'Концерт №1 для ф-но с оркестров; Симфония №2',
        insertedWho: adminUser,
        concertHall: filarmoniaHall
    }),
    new EventItem({
        title: 'Посвящение Ференцу Листу',
        eventDate: new Date('2016-10-22 19:00'),
        performerTitle: 'Дирижер: В. Шейко; фортепиано: Д. Оравец (Венгрия)',
        description: 'Totentanz; Венгерские рапсодии №8, 10; Этюд «Мазепа»; Концерт №1 для ф-но с оркестром; Концерт №2 для ф-но с оркестром',
        insertedWho: adminUser,
        concertHall: filarmoniaHall
    }),
    new EventItem({
        title: 'Фортепианный концерт Шумана',
        eventDate: new Date('2016-11-04 19:00'),
        performerTitle: 'Дирижер: Р. Кофман; фортепиано: Э. Вирсаладзе',
        description: 'Увертюра Манфред, Op. 115; Концерт ля минор для ф-но с оркестром Op. 54; Карнавал (оркестровая версия)',
        insertedWho: adminUser,
        concertHall: filarmoniaHall
    }),
    new EventItem({
        title: 'Камерные произведения венских классиков',
        eventDate: new Date('2016-11-13 19:30'),
        performerTitle: 'Трио «Рависан»; орган: М. Сидоренко',
        description: 'Гайдн, Моцарт, Бетховен',
        insertedWho: adminUser,
        concertHall: organHall
    })

];

var countProcessed = 0;
eventItems.forEach( function(item) {
    item.save( function (err, res) {
        countProcessed++;
        console.log('Processed: ' + item);
        if (countProcessed == eventItems.length) {
            done();
        }
    })
});

function done() {
    mongoose.disconnect();
}