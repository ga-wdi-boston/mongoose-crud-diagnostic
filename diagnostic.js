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

'use strict';

const models = require('app/models');
const Movement = models.movement;

const create = (name, description, startYear, endYear) => {
  Movement.create(name, description, startYear, endYear)
    .then(movement => {
      return movement.save();
    })
    .then(movement => print(movement.json()))
    .catch(err => console.error(err));
};
// Success -> Print new Movement as JSON
// Failure -> Console.error

const index = () => {};
// Success -> Print all Movements as JSON
// Failure -> Console.error

const show = (id) => {};
// Success -> If the specified Movement exists, print it as JSON;
//              otherwise, print "Not Found" and exit.
// Failure -> Console.error

const update = (id, field, value) => {
  let movement = {_id: id};
  Movement.findOneAndUpdate(movement, field, value)
  .then(movement => {
    if (!movement) {
      return next();
    }

    return movement.update(movement, field, value)
      .then(movement => print(movement.json()));
  })
  .catch(err => console.error(err));
};
// Success -> If the specified Movement exists, update it and print the
//              updated Movement as JSON; otherwise, print "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {
  Movement.findById(id)
  .then( movement => {
    if (!movement) {
      return next();
    }
    movement.remove();
    print('removed');
  })
  .catch(() => print('Not Found'))
  .then(() => exit();
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
}
