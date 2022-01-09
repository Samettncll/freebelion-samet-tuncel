const express = require("express")
const express_session = require("express-session")
const app = express();
const body_parser = require("body-parser");
const  path = require('path')

app.use(body_parser.urlencoded({extended : true}));

app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','Pug')
app.set('views','./View')

// Database

const database = require("./Utility/database");

//Models

const Category = require("./Models/Category");
const Article = require("./Models/Article");



Article.belongsTo(Category),

database.authenticate().then(()=>console.log("sqltite connection")).catch(err=>console.log(err));
database.sync({force : false})

// Article Routes

const ArticleRoutes = require('./Routes/Article/getArticleRoutes');
app.use('/',ArticleRoutes.getIndexRoute)

// Admin Routes

const AdminRoutes = require('./Routes/Admin/getAdminRoutes');
const PostadminRoutes = require('./Routes/Admin/postAdminRoutes');
app.use('/admin',AdminRoutes.getAdminIndexRoute);
app.use('/admin',PostadminRoutes.postAdminCategoryRoutes);


app.listen(4000,()=> {
    console.log("Server running") 
});