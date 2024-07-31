// routes/articles.js

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const Article = require('../models/Article');

// GET all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single article by articleId
router.get('/:id', getArticleById, (req, res) => {
  res.json(res.article);
});

// CREATE an article
router.post('/', async (req, res) => {
  const article = new Article({
    articleId: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    webLink: req.body.webLink,
    image: req.body.image,
    category: req.body.category,
    author: req.body.author
  });
  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE an article by articleId
router.put('/:id', getArticleById, async (req, res) => {
  if (req.body.title != null) {
    res.article.title = req.body.title;
  }
  if (req.body.description != null) {
    res.article.description = req.body.description;
  }
  if (req.body.webLink != null) {
    res.article.webLink = req.body.webLink;
  }
  if (req.body.image != null) {
    res.article.image = req.body.image;
  }
  if (req.body.category != null) {
    res.article.category = req.body.category;
  }
  res.article.updatedAt = Date.now();

  try {
    const updatedArticle = await res.article.save();
    res.json(updatedArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an article by articleId
router.delete('/:id', getArticleById, async (req, res) => {
  try {
    await res.article.remove();
    res.json({ message: 'Deleted Article' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getArticleById(req, res, next) {
  let article;
  try {
    article = await Article.findOne({ articleId: req.params.id });
    if (article == null) {
      return res.status(404).json({ message: 'Cannot find article' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.article = article;
  next();
}

module.exports = router;
