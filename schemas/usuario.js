var mongoose    = require('mongoose');

//create BeerSchema as a Mongoose Schema
var UsuarioSchema  = new mongoose.Schema({
  name: { type: String, required: true },
});

//export as default
module.exports = mongoose.model('Usuario', UsuarioSchema);
