'use strict';
// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.
const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  startYear: {
    type: String,

  },
  endYear: {
    type: String
  }
},{
      timestamps: true,
      toObject: { virtuals: true },
      toJSON: { virtuals: true }
  });

movementSchema.virtual('ancestor').get(function(){
   if (this.startYear === this.endYear) {
     return this;
   }
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
