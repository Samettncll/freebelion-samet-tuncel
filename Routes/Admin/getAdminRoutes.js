const express = require('express');
const app = express.Router();

// Admin Controller

const getAdminControllers = require('../../Controller/Admin/getAdminArticleController');

exports.getAdminIndexRoute = app.get('/',getAdminControllers.getAdminIndexController);
exports.getAdminCategoryRoute = app.get('/category',getAdminControllers.getAdminCategoryController);
exports.getAdminArticleRoute = app.get('/article',getAdminControllers.getAdminArticleController);