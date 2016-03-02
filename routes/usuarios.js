var router = require('express').Router();
var beers = require('../middlewares/usuarios');

router.route('/usuarios').get(Usuario.find).post(user1.save);

module.exports = router;
