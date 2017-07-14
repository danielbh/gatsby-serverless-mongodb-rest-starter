const mongoose = require('mongoose');
const bluebird = require('bluebird');
const validator = require('validator');
const PostModel = require('./model/Post.js');

mongoose.Promise = bluebird;

const mongoString = 'mongodb://localhost:27017';

module.exports.post = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const id = event.pathParameters.id;

  if (!validator.isAlphanumeric(id)) throw Error('Incorrect id');

  db.once('open', () => {
    PostModel
      .find({ _id: event.pathParameters.id })
      .then((post) => {
        callback(null, { statusCode: 200, body: JSON.stringify(post) });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        // Close db connection or node event loop won't exit , and lambda will timeout
        db.close();
      });
  });
};

module.exports.posts = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const limit = event.pathParameters.limit;

  if (!validator.isAlphanumeric(limit)) throw Error('Invalid limit');

  db.once('open', () => {
    PostModel
      .find().limit(parseInt(limit))
      .then((post) => {
        callback(null, { statusCode: 200, body: JSON.stringify(post) });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        // Close db connection or node event loop won't exit , and lambda will timeout
        db.close();
      });
  });
};

module.exports.createPost = (event, context, callback) => {
  let db = {};
  let data = {};
  let errs = {};
  let post = {};
  const mongooseId = '_id';

  db = mongoose.connect(mongoString).connection;

  data = JSON.parse(event.body);

  post = new PostModel({
    title: data.title,
    body: data.body
  });

  errs = post.validateSync();

  if (errs) {
    console.log(errs);
    throw Error('Incorrect blog data');
  }


  db.once('open', () => {
    post
      .save()
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify({ id: post[mongooseId] }) });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
  });
};

module.exports.deletePost = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const id = event.pathParameters.id;

  if (!validator.isAlphanumeric(id)) throw Error('Incorrect id');

  db.once('open', () => {
    PostModel
      .remove({ _id: event.pathParameters.id })
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify('Ok') });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
  });
};

module.exports.updatePost = (event, context, callback) => {
  const db = mongoose.connect(mongoString).connection;
  const data = JSON.parse(event.body);
  const id = event.pathParameters.id;
  let errs = {};
  let post = {};

  if (!validator.isAlphanumeric(id)) throw Error('Incorrect id');

  post = new PostModel({
    _id: id,
    title: data.title,
    body: data.body
  });

  errs = post.validateSync();

  if (errs) throw Error('Incorrect parameter');
  db.once('open', () => {
    // postModel.save() could be used too
    PostModel.findByIdAndUpdate(id, post)
      .then(() => {
        callback(null, { statusCode: 200, body: JSON.stringify('Ok') });
      })
      .catch((err) => {
        callback(err);
      })
      .finally(() => {
        db.close();
      });
  });
};