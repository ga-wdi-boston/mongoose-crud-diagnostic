'use strict';

const mongoose = require('mongoose');
const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    validate: {
      validator: function(v) {
        return v.length <= 200;
      },
      message: '{VALUE} should not be longer than 200 characters!'
    }
  },
  startYear: {
    type: String,
    required: true,
  },
  endYear: {
    type: String,
    required: true,
  },

    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  });

const Movement = mongoose.model('Movement', movementSchema);
model.exports = {
  Movement
};
