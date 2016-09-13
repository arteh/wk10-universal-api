var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var athleteSchema = new Schema({
  name: String,
  country: String,
  birth: String,
  image: String,
  cover: String,
  link: String,
  medals: Array
})

module.exports = mongoose.model('Athletes', athleteSchema);
