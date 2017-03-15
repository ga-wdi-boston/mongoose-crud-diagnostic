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
const db = mongoose.connection;

const Movement = require('./models/movement.js');

const done = function() {
  db.close();
};

const create = (name, description, startYear, endYear) => {
  Movement.create({
    'name': name,
    'description': description,
    'startYear': startYear,
    'endYear': endYear
  })
  .then(function(movement){
    console.log(movement);
  })
  .catch(console.error())
  .then(done);
};


const index = () => {
  Movement.find()
   .then(function(movements){
     movements.forEach(function(movement) {
       console.log(movement.toJSON());
     });
   }
 )
 .catch(console.error)
 .then(done);
};


const show = (id) => {
  Movement.findById(id)
    .then(function(movement){
      console.log(movement.toJSON());
    }
  )
  .catch(console.error())
  .then(done);
};


const update = (id, field, value) => {
  let modify = {};
  modify[field] = value;
  Movement.findById(id)
    .then(function(movement){
      movement[field] = value;
      return movement.save();
    }
  )
  .then(function(movement){
    console.log(movement.toJSON());
  })
  .catch(console.error())
  .then(done);
};


const destroy = (id) => {
  Movement.findById(id)
    .then(function(movement){
      return movement.remove();
    }
  )
  .catch(console.error())
  .then(done);
};

db.once('open', function() {
  let command = process.argv[2];

  // Using more than once, avoiding jshint complaints
  let field;
  let id;

  switch (command) {
    case 'create':
      let name = process.argv[3];
      let description = process.argv[4];
      let startYear =  process.argv[5];
      let endYear =  process.argv[6];
      if (true || name) {
        create(name, description, startYear, endYear);
      } else {
        console.log('usage c <name> <description> <startYear> <endYear>');
        done();
      }
      break;

    case `show`:
      id = process.argv[3];
      show(id);
      break;

    case 'update':
      id = process.argv[3];
      field = process.argv[4];
      let value = process.argv[5];
      update(id, field, value);
      break;

    case 'destroy':
      id = process.argv[3];
      destroy(id);
      break;

    default:
      index();
      break;
  }
});


module.exports = {
  create,
  index,
  show,
  update,
  destroy
};
