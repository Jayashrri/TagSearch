const Article = require('../models/Article.js');
const Tag = require('../models/Tag.js');

exports.searchSuggestions = async (req, res) => {
    try {
        const regexp = new RegExp("^" + req.body.search);
        const suggestedTags = await Tag.find({ name: regexp }).select('name').exec();

        return res.status(200).send({
            success: true,
            data: suggestedTags
        });
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            success: false,
            message: err
        });
    }
}