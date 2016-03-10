'use strict';

const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    validate: {
      validator: function(v) {
        return v < 200;
      },
      message: '{VALUE} is too long'
    }
  },
  startYear: String,
  endYear: String,
  ancestor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movement'
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
