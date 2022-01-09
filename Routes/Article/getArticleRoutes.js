const express = require('express');
const app = express.Router();

// Controllers

const ArticleControllers = require('../../Controller/Article/getArticleController');

exports.getIndexRoute = app.get('/',ArticleControllers.getIndexController);
exports.getDetailRoute = app.get('/detail/:id',ArticleControllers.getIndexDetailController);