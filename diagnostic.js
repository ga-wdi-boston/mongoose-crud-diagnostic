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

const db = mongoose.connection;


const done = function() {
  // close our connection to the database
  db.close();
};


const create = (name, description, startYear, endYear) => {
  Movement.create({
    'name': name,
    'description': description,
    'startYear': startYear,
    'endYear': endYear
  })
  .then(movement => JSON.stringify(movement))
    // Success -> console.log new Movement as JSON
  .then(console.log)
    // Failure -> Console.error
  .catch(console.error)
  .then(done);
};


const index = () => {
  Movement.find()
  .then(movements => JSON.stringify(movements))
  // Success -> console.log all Movements as JSON
  .then(console.log)
  // Failure -> Console.error
  .then(console.error)
  .then(done);
};


const show = (id) => {
  Movement.findById(id)
  // Success -> If the specified Movement exists, console.log it as JSON;
  //              otherwise, console.log "Not Found" and exit.
  .then((movement) => {
    if (!movement) {
      console.log("Not Found");
    } else {
      console.log(movement);
    }
  })
  // Failure -> Console.error
  .catch(console.error)
  .then(done);
};


const update = (id, field, value) => {
  // get the movement we want to update
  Movement.findById(id)
  // Success -> If the specified Movement exists, update it and console.log the
  //      updated Movement as JSON; otherwise, console.log "Not Found" and exit.
  .then( (movement) => {
    if (!movement) {
      console.log("Not Found");
    } else {
      movement[field] = value;
      console.log(movement);
      return movement.save();
    }
  })
  // Failure -> Console.error
  .catch(console.error)
  .then(done);
};


const destroy = (id) => {
  Movement.findById(id)
  // Success -> If the specified Movement exists, destroy it and console.log 'removed';
  //              otherwise, console.log "Not Found" and exit.
  .then((movement) => {
    if (!movement) {
      console.log("Not Found");
    } else {
      console.log("removed");
      return movement.remove();
    }
  })
  // Failure -> Console.error
  .catch(console.error)
  .then(done);
};

module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
