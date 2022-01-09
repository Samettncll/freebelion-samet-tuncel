const express = require('express');
const app = express.Router();

// Post Admin Controller

const postAdminControllers = require('../../Controller/Admin/postAdminArticleController');

exports.postAdminCategoryRoutes = app.post('/category',postAdminControllers.postAdminCategoryController);
exports.postAdminCategoryRoutes = app.post('/article',postAdminControllers.postAdminArticleController);