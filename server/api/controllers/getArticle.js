const Article = require('../models/Article');
const Tag = require('../models/Tag.js');

exports.getAllArticles = async (req, res) => {
    try {
        const tag = req.body.tag;

        const currentTag = await Tag.findOne({ name: tag }).exec();
        const articles = await Article.find({ _id: { $in: currentTag.articles } }).select('_id title').exec();
        return res.status(200).send({
            success: true,
            data: articles
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            success: false,
            message: err
        });
    }
}

exports.getArticle = async (req, res) => {
    try {
        const articleId = req.body.id;

        const article = await Article.findById(articleId).select('title body').exec();
        return res.status(200).send({
            success: true,
            data: article
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            success: false,
            message: err
        });
    }
}