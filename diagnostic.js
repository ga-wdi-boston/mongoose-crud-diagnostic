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

const Movement = ('app/models/movement');

/// ADD YOUR CODE BELOW

// My comments:  This is not complete and I feel like I did the diagnostic
// based off of Antony's api.

const create = (req, res, next) => {
  Movement.create(req.body.movement)
    .then(movement => res.json({ movement }))
    .catch(err => next(err));
};
// Success -> Print new Movement as JSON
// Failure -> Console.error

const index = (req, res, next) => {
  Movement.find()
  .then(movement => res.json({ movement }))
  .catch(err => next(err));
};
// Success -> Print all Movements as JSON
// Failure -> Console.error

const show = (req, res, next) => {
  Movement.findById(req.params.id)
  .then(movement => res.json({ movement }))
  .catch(err => next(err));
};
// Success -> If the specified Movement exists, print it as JSON;
//              otherwise, print "Not Found" and exit.
// Failure -> Console.error

const update = (req, res, next) => {
  Movement.findById(req.params.id)
  .then(movement => {
    if(!movement){
      return next();
    }

  })
};
// Success -> If the specified Movement exists, update it and print the
//              updated Movement as JSON; otherwise, print "Not Found" and exit.
// Failure -> Console.error

const destroy = (id) => {};
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
