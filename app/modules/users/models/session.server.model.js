'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sessionSchema = new Schema({
  accessToken: {
    type: String,
    unique: true,
    required: true
  },
  refreshToken: {
    type: String,
    unique: true,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  role: {
    type:String,
    default: 'user',
    required: 'Please provide atleast one role'
  },
  loggedInAt: {
    type: Date,
    default: Date.now()
  },
  loggedOutAt: {
    type: Date
  }

});

mongoose.model('Session', sessionSchema);