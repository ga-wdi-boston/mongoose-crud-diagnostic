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
const db = mongoose.connection;
const done = function() {
  db.close();
};
const Movement = require('./models/movement.js');

const create = (name, description, startYear, endYear, ancestor) => {
  Movement.create({
    name: name,
    description: description,
    startYear: startYear,
    endYear: endYear,
    ancestor: ancestor
  }).then(function(movement) {
    console.log(movement.toJson());
  }).catch(function(error) {
    console.error(error);
  }).then(done);
};
// Success -> Print new Movement as JSON
// Failure -> Console.error

const index = () => {
  Movement.find().then(function(movement) {
    movement.forEach(function(movement) {
      console.log(movement.toJSON());
    });
  }).catch(console.error).then(done);
};
// Success -> Print all Movements as JSON
// Failure -> Console.error

const show = (id) => {
  Movement.findById(id).then(function(movement) {
    if (!movement){
      console.log("Not Found");
    }
    else{
      console.log(movement.toJSON());
    }
  }).catch(console.error).then(done);
};
// Success -> If the specified Movement exists, print it as JSON;
//              otherwise, print "Not Found" and exit.
// Failure -> Console.error

const update = (id, field, value) => {
  let modify = {};
  modify[field] = value;
  Movement.findByIdAndUpdate(id, { $set: modify }, { new: true })
    .then(function(movement) {
      if (!movement){
        console.log("Not Found");
      }
      else {
        console.log(movement.toJSON());
      }
    })
    .catch(console.error)
    .then(done);
};
// Success -> If the specified Movement exists, update it and print the
//              updated Movement as JSON; otherwise, print "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {
  Movement.findById(id).then(function(movement) {
    if (!movement){
      console.log("Not Found");
    }
    else {
      return movement.remove();
    }
  }).catch(console.error
  ).then(console.log("removed")).then(done);
};
// Success -> If the specified Movement exists, destroy it and print 'removed';
//              otherwise, print "Not Found" and exit.
// Failure -> Console.error

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
