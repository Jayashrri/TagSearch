const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tag = require('./Tag.js');

const articleSchema = new Schema({
    title: String,
    body: String,
    tags: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Article', articleSchema);