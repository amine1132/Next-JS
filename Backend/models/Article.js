// models/Article.js

const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  articleId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  webLink: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);
