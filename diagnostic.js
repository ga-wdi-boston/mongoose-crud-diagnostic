"use strict";
////////////////////////
///  Art Movements   ///
////////////////////////

// Your team has been tasked with making an educational app for
// a museums's website. When a user clicks on a particular piece of art,
// they'll be able to see the movement that piece was part of, as well as
// a list of other related movements.

// Your job is to build the piece of the system for doing CRUD on the different
// art movements; the API for this part of the system must be standardized so
// so that other parts of the application can use it.

// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.

// Please implement the CRUD functions below, using Promises to handle the
//  specified success and failure behaviors.
// Your Mongoose model should go in a separate file, in the `models` directory.

/// STARTER CODE - DO NOT ALTER!
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose-crud');

/// ADD YOUR CODE BELOW
const Movement = require('./models/movement.js')

const done = function() {
  db.close();
};

const create = (name, description, startYear, endYear) => {};
// Success -> Print new Movement as JSON
// Failure -> Console.error
  Movement.create({
    name: name,
    description: description,
    startYear: startYear,
    endYear: endYear.
  }).then(function(err, movement) {
    console.log(movement.toJSON());
  }).catch(console.error).then(done);

const index = () => {
// Success -> Print all Movements as JSON
// Failure -> Console.error
  Movement.find().then(function(movement) {
    movement.forEach(function(movement) {
      console.log(movement.toJSON());
    });
  }).catch(console.error).then(done);
};


const show = (id) => {
// Success -> If the specified Movement exists, print it as JSON;
//              otherwise, print "Not Found" and exit.
// Failure -> Console.error
  if (Movement.findById(id)) {
    Movement.findById(id).then(function() {
     console.log(movement.toJSON());
   }).catch(console.error).then(done);
 }
 else {
   console.log("Not Found");
 }
};

const update = (id, field, value) => {
// Success -> If the specified Movement exists, update it and print the
//              updated Movement as JSON; otherwise, print "Not Found" and exit.
// Failure -> Console.error
  if (Movement.findById(id)) {
    let modify = {};
      modify[field] = value;
      Movement.findByIdAndUpdate(id, { $set: modify }, { new: true })
       .then(function(movement) {
         console.log(movement.toJSON());
       }).catch(console.error).then(done);
     }
     else {
       console.log("Not Found");
     }
};

const destroy = (id) => {
// Success -> If the specified Movement exists, destroy it and print 'removed';
//              otherwise, print "Not Found" and exit.
// Failure -> Console.error
  if (Movement.findById(id)) {
    Movement.findById(id).then(function(movement){
      movement.remove();
    }).catch(console.error).then(done);
  }
  else {
    console.log("Not Found");
  }     
};
module.exports = {
  create,
  index,
  show,
  update,
  destroy
}
