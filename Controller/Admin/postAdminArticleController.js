// Models 
const CategoryModel = require('../../Models/Category');
const ArticleModel = require('../../Models/Article');

exports.postAdminCategoryController = (req,res) => {
    const name = req.body.name;
    
    const category = CategoryModel.build({
        name : name
    })
    category.save().then(()=>res.redirect('/admin'))
}
exports.postAdminArticleController = (req,res) => {
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const category = req.body.category;

    CategoryModel.findAll({where : {name :category}}).then(ctg => {
        const article = ArticleModel.build({
        title : title,
        image : image,
        description : description,
        CategoryId : ctg[0].id
        })
        article.save().then(()=>{res.redirect('/admin')});
    })
}