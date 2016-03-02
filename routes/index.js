var router = require('express').Router();
//var beers = require('./beers');
var usuarios = require('./usuarios');

router.route('/').get(function(req, res){
    res.json({
        message: 'Welcome to Express/Mongodb Boilerplate. Enjoy!'
    });
});

//router.use(beers);
router.use(usuarios);

module.exports = router;
