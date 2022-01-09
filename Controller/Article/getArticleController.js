const CategoryModels = require('../../Models/Category');
const ArticleModels = require('../../Models/Article');
const Article = require('../../Models/Article');


exports.getIndexController = (req,res) => {
    CategoryModels.findAll().then(categories=>{
        ArticleModels.findAll({include : ['Category']}).then(articles=>{
            res.render('index',{'categories':categories,'articles':articles});
            
        }) 
    })
}
exports.getIndexDetailController = (req,res) => {
    const articleId = req.params.id;
    ArticleModels.findAll({include : ['Category'], where : { id : articleId}}).then(article=> {
        res.render('index-detail',{'article':article});
        
    })
}