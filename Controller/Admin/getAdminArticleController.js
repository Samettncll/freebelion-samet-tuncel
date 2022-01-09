//Models


const CategoryModels = require('../../Models/Category');
const ArticleModels = require('../../Models/Article');


exports.getAdminIndexController = (req,res) => {
    CategoryModels.findAll().then(categories=>{
        ArticleModels.findAll({include : ['Category']}).then(articles=>{
            res.render('admin-index',{'categories':categories,'articles':articles});
            
        }) 
    })   
}
exports.getAdminCategoryController = (req,res) => {
    res.render('admin-category-page')
}
exports.getAdminArticleController = (req,res) => {
    CategoryModels.findAll().then(categories=> {
        res.render('admin-article-page',{'categories':categories})
    })
}