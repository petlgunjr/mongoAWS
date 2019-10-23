'use strict';

const connectToDatabase = require('./db');
const Product = require('./models/Product');

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      NodeIterator.create(JSON.parse(event.body))
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: "Could not create the note."
        }));
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Product.findById(event.pathParameters.id)
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: "Could not create the note."
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Product.find()
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: "Could not create the note."
        }));
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Product.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify(note)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: "Could not update the note."
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  connectToDatabase()
    .then(() => {
      Product.findByIdAndRemove(event.pathParameters.id)
        .then(note => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: "Removed note with id: " + note._id, note: note })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { "ContentType" : "text/plain" },
          body: "Could not fetch the notes."
        }))
    })
}