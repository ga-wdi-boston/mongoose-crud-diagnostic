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
    // using the module Movement, we are creating a new movement based on the
    // parameters given to us
    name: name,
    // the name param is the same as the name attribute
    description: description,
    // the description param is the same as the description attribute
    startYear: startYear,
    // the startYear param is the same as the startYear attribute
    endYear: endYear
    // the endYear param is the same as the endYear attribute
  }).then(function(movement) {
    console.log(movement.toJSON());
    // after the movement gets created, we turn it to JSON
  }).catch(function(error) {
    console.error(error);
    // if there's an error with the creation, log the error
  });
};
// Success -> console.log new Movement as JSON
// Failure -> Console.error

const index = () => {
  let search = {};
  // defining an empty variable
  if (arguments[0] && arguments[1]) {
    // defining an `if` statement, if there are 2 arguments
    let field = arguments[0];
    // field defined as the first argument
    let criterion = arguments[1];
    // criterion as the second
    if (criterion[0] === '/') {
      // if the first index of criterion is equal to '/'
      let regex = new RegExp(criterion.slice(1, criterion.length - 1));
      // than define regex as a new instance of RegExp as a copy of criterion
      search[field] = regex;
      // the empty object search, with an index of field now equal regex
    } else {
      // if criterion[0] !== '/'
      search[field] = criterion;
      // the empty object seach with an index of field now equal criterion
    }
  }

  Movement.find(search).then(function(movements) {
    // find the movement search, then
    movements.forEach(function(movement) {
      // for each movement that exists
      console.log(movement.toJSON());
      // log it into JSON
    });
  }).catch(console.error);
  // if there's an error with the search, log the error
};
// Success -> console.log all Movements as JSON
// Failure -> Console.error

const show = (id) => {
  Movement.findById(id).then(function(movement) {
    // finding the specified movement by its ID
    if (true) {
      // if it exists
      console.log(movement.toJSON());
      // log the movement into a json string
    } else {
      // if it doesn't
      console.log("Not Found");
      // log that it wasnt found
    }
  }).catch(console.error);
    // if there was an error in the search, log the error
};
// Success -> If the specified Movement exists, console.log it as JSON;
//              otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const update = (id, field, value) => {
  let modify = {};
  // define an empty object
  modify[field] = value;
  // modify with the index field equal to value
  Movement.findById(id)
  // find the movement by the id
  .then((movement) => {
    movement.set(field, value);
    // set the movement to its new field and value
    return movement.save();
    // save the movement
  })
  .then((movement) => {
    console.log(movement.toJSON());
    // log the updated movement into Json
  })
  .catch(console.error);
  // log the error
};
// Success -> If the specified Movement exists, update it and console.log the
//              updated Movement as JSON; otherwise, console.log "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {};
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
