const express = require('express');
const router = express.Router();

const addArticle = require('./controllers/addArticle');
const getArticle = require('./controllers/getArticle');
const searchArticle = require('./controllers/searchArticle');

router.get('/status',(req,res)=>{
    res.json({msg: "Api running"});
})

router.get('/newArticle', addArticle.getTags);
router.post('/newArticle', addArticle.newArticle);

router.post('/getAllArticles', getArticle.getAllArticles);
router.post('/getArticle', getArticle.getArticle);

router.post('/searchSuggestions', searchArticle.searchSuggestions);

module.exports = router;