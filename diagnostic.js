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
  description: description,
  startYear: startYear,
  endYear: endYear,
  }).then(function(movement) {
    // Success -> console.log new Movement as JSON
    console.log(movement.toJSON());
  }).catch(function(error) {
    // Failure -> Console.error
    console.error(error);
  });
};

const index = () => {
  // we did .find(search) in the class but this time the user will 'click' on
  // a particular piece of art
  Movement.find(click).then(function(movements) {
  movements.forEach(function(movement) {
    // Success -> console.log all Movements as JSON
    console.log(movement.toJSON());
  }).catch(function(error) {
    // Failure -> Console.error
    console.error(error);
  });
});
};

const show = (id) => {
  Movement.findById(id).then(function(movement) {
    if (id.length !== 0) {
    console.log(movement.toJSON());
  } else {
    // Success -> If the specified Movement exists, console.log it as JSON;
    // otherwise, console.log "Not Found" and exit.
    console.log('Not Found' + exit); // not sure what is meant by 'exit'....
  }
  }).catch(function(error) {
    // Failure -> Console.error
    console.error(error);
  });
};

const update = (id, field, value) => {
  let modify = {};
  modify[field] = value;
  Movement.findById(id).then(function(movement) {
  movement[field] = value;
  return movement.save();
}).then(function(movement) {
  if (id.length !== 0) {
    // Success -> If the specified Movement exists, console.log it as JSON;
  console.log(movement.toJSON());
  } else {
  // otherwise, console.log "Not Found" and exit.
  console.log('Not Found' + exit); // not sure what is meant by 'exit'....
  }
}).catch(function(error) {
    // Failure -> Console.error
    console.error(error);
  });
};


const destroy = (id) => {
  Movement.findById(id).then(function(movement) {
  }).then(function(movement) {
    // Success -> If the specified Movement exists, destroy it and console.log 'removed';
    if (id.length !== 0) {
    return movement.remove();
    console.log('removed');
    } else {
    // otherwise, console.log "Not Found" and exit.
    console.log('Not Found' + exit); // not sure what is meant by 'exit'....
    }
  }).catch(function(error) {
      // Failure -> Console.error
      console.error(error);
  });
};

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
