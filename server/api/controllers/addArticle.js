const Article = require('../models/Article.js');
const Tag = require('../models/Tag.js');

exports.newArticle = async (req, res) => {
    try {
        const title = req.body.title;
        const body = req.body.body;
        const tags = JSON.parse(req.body.tags);

        const article = await Article.create({ title: title, body: body });
        let tagList = [];

        for (let i = 0; i < tags.length; i++) {
            let currentTag = await Tag.findOne({ name: tags[i] }).exec();
            if (!currentTag) {
                currentTag = await Tag.create({ name: tags[i], articles: [article._id] });
            } else {
                currentTag.articles.push(article._id);
                currentTag.save();
            }
            tagList.push(currentTag._id);
        }

        article.tags = article.tags.concat(tagList);
        article.save();

        return res.status(200).send({
            success: true
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: err,
            success: false
        });
    }
}

exports.getTags = async (req, res) => {
    try {
        let tagList = [];
        const tags = await Tag.find().exec();

        tags.forEach(async (tag) => {
            tagList.push(tag.name);
        });

        return res.status(200).send({
            success: true,
            data: tagList
        });

    } catch (err) {
        console.error(err);
        return res.status(500).send({
            message: err,
            success: false
        });
    }
}