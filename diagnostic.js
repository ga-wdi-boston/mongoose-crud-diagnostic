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
// Your Mongoose model has already been created for you in models/movement.js

/// STARTER CODE - DO NOT ALTER!
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose-crud-diagnostic');

const Movement = require('./models/movement.js');

/// ADD YOUR CODE BELOW

const create = (name, description, startYear, endYear) => {
  Movement.create({
    name: name,
    description: description, // already limited by the model, not sure if extra validation required
    startYear: startYear,
    endYear: endYear
  }).then(function (movement) {
    console.log(movement);
  }).catch(console.error);
};
// Success -> console.log new Movement as JSON
// Failure -> Console.error

const index = () => {
  // do we need to implement the search functionality here?
  Movement.find({}).then(function (movements) {
    movements.forEach(function (movement) {
      console.log(movement.toJSON());
    });
  }).catch(console.error);
};
// Success -> console.log all Movements as JSON
// Failure -> Console.error

const show = (id) => {
  Movement.findById(id).then(function (movement) {
    // I'm very unclear about what this function will return if the movement
    // doesn't exist, I'm assuming some falsy value, probably undefined
    // Alternatively it might error out?
    // The mongoose docs don't mention anything about it.
    if (movement) {
      return console.log(movement.toObject());
    } else {
      return console.log('Not Found');
    }
  }).catch(console.error);
};
// Success -> If the specified Movement exists, console.log it as JSON;
//              otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const update = (id, field, value) => {
  let modify = {};
  modify[field] = value;
  Movement.findById(id)
  .then((movement) => {
    movement.set(field, value);
    return movement.save();
  })
  .then((movement) => {
    // as above, I'm not sure this will ever log 'Not Found'
    if (movement) {
      return console.log(movement.toJSON());
    } else {
      return console.log('Not Found');
    }
  })
  .catch(console.error);
};
// Success -> If the specified Movement exists, update it and console.log the
//              updated Movement as JSON; otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {
  Movement.findById(id).then(function (movement) {
    // as above, I'm not sure this will ever log 'Not Found'
    if (movement) {
      movement.remove();
      return console.log('removed');
    } else {
      return console.log('Not Found');
    }
  }).catch(console.error);
};
// Success -> If the specified Movement exists, destroy it and console.log 'removed';
//              otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
