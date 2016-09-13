var mongoose = require('mongoose');
var async = require('async');
var Athlete = require('./models/athletes');
var athletes = require('./athletes.js');

mongoose.connect('mongodb://localhost:27017/athletes', function (err, result) {
  if(err) {
    console.log(err);
  }

  addAthletes(athletes);
});

function addAthletes(athletes) {
  async.eachSeries(athletes, function(athlete, callback) {
    var athlete = new Athlete(athlete);
    athlete.save(function(err, doc) {
      callback(err || null, doc);
    });
  }, function () {
    console.log('done');
  })
}
