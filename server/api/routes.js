const express = require('express');
const router = express.Router();

const addArticle = require('./controllers/addArticle');
const getArticle = require('./controllers/getArticle');

router.get('/status',(req,res)=>{
    res.json({msg: "Api running"});
})

router.get('/newArticle', addArticle.getTags);
router.post('/newArticle', addArticle.newArticle);

router.get('/getAllArticles', getArticle.getAllArticles);
router.get('/getArticle', getArticle.getArticle);

module.exports = router;