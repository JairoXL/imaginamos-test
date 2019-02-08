const User = require('../models/User');
const Address = require('../models/Address');
const Driver = require('../models/Driver');
const Order = require('../models/Order');
const Delivery = require('../models/Delivery');

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send('respond with a resource test.... 111');
});

/*********************** TODO USERS OPERATIONS ******************/

/* GET users listing from API */
router.get('/users', function(req, res, next) {
    User.find({}, function(error, users){
        res.send({'users': users})
    })
});

/* POST add user */
router.post('/users',  function(req, res, next) {
    User.create(req.body, function(err, user) {
        if (err) res.status(400).send(err);
        else res.status(201).json(user);
    });
});

/*********************** TODO ADDRESSES OPERATIONS ******************/

/* GET Address listing from API */
router.get('/addresses', function(req, res, next){
    Address.find({}, function (error, addresess) {
        res.send({'addresses': addresess})
    })
});

router.post('/addresses',  function(req, res, next) {
    Address.create(req.body, function(err, address) {
        if (err) res.status(400).send(err);
        else res.status(201).json(address);
    });
});

/*********************** TODO DRIVERS OPERATIONS ******************/

/* GET Drivers listing from API */
router.get('/drivers', function(req, res, next){
    Driver.find({}, function (error, drivers) {
        res.send({'drivers': drivers})
    })
});

router.post('/drivers',  function(req, res, next) {
    Driver.create(req.body, function(err, driver) {
        if (err) res.status(400).send(err);
        else res.status(201).json(driver);
    });
});

/*********************** TODO ORDERS OPERATIONS ******************/

/* GET Drivers listing from API */
router.get('/orders', function(req, res, next){
    Order.find({}, function (error, orders) {
        res.send({'orders': orders})
    })
});

router.post('/orders',  function(req, res, next) {
    Order.create(req.body, function(err, order) {
        if (err) res.status(400).send(err);
        else res.status(201).json(order);
    });
});

/*********************** TODO DELIVERIES OPERATIONS ******************/

/* GET Drivers listing from API */
router.get('/deliveries', function(req, res, next){
    Delivery.find({}, function (error, deliveries) {
        res.send({'deliveries': deliveries})
    })
});

router.post('/deliveries',  function(req, res, next) {

    Delivery.find({
        driver: {
            $eq: req.body.driver
        },
        time_frame: {
            $eq: req.body.time_frame
        },
        date_delivery: {
            $eq: req.body.date_delivery
        }

    }, function(error, data){
        if(data.length > 0){
            res.status(400).send({ 'error': 'Check data values timeframe, date or driver'});
        }
        else {
            Delivery.create(req.body, function(err, delivery){
                if (err) res.status(400).send(err);
                else res.status(201).json(delivery);
            })
        }
    });
});

router.get('/deliveries/:id_driver/:date_delivery', function(req, res, next){
    Delivery.find({
        driver: {
            $eq: req.params.id_driver
        },
        date_delivery: {
            $eq: req.params.date_delivery
        }
    }, function(error, deliveries){
        if(error){
            res.status(400).send({ 'error': error })
        }
        res.send({ "deliveries": deliveries})
    })
})

module.exports = router;
