const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Article = require('./Article');

const tagSchema = new Schema({
    name: { type: String, unique: true },
    articles: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Tag', tagSchema);