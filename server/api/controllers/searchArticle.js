const Article = require('../models/Article.js');
const Tag = require('../models/Tag.js');

exports.searchSuggestions = async (req, res) => {
    try {
        const tags = JSON.parse(req.body.search)
        let suggestedTags = [];
        let initialTags = [];
        let matchedTags;

        if (tags.length == 1) {
            const regexp = new RegExp("^" + tags[0]);
            matchedTags = await Tag.find({ name: regexp }).select('name').exec();
            for (let i = 0; i < matchedTags.length; i++)
                suggestedTags.push({
                    _id: [matchedTags[i]._id],
                    name: [matchedTags[i].name]
                });
        } else {
            if (tags[tags.length - 1] != "") {
                const regexp = new RegExp("^" + tags[tags.length - 1]);
                matchedTags = await Tag.find({ name: regexp }).select('name').exec();
                tags.pop();
                const confirmedTags = await Tag.find({ name: { $in: tags } }).select('name').exec();
                const confirmedTagIds = [];
                const confirmedTagNames = [];
                confirmedTags.forEach(tag => {
                    confirmedTagIds.push(tag._id);
                    confirmedTagNames.push(tag.name);
                });
                for (let i = 0; i < matchedTags.length; i++) {
                    if (confirmedTagNames.includes(matchedTags[i].name) == false) {
                        const totalTagIds = confirmedTagIds.concat([matchedTags[i]._id]);
                        const count = await Article.find({ tags: { $all: totalTagIds } }).count();
                        if (count != 0) {
                            suggestedTags.push({
                                _id: totalTagIds,
                                name: confirmedTagNames.concat([matchedTags[i].name])
                            });
                        }
                    }
                }
            }
        }

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