const express = require('express');
const router = express.Router();

const article = require('./controllers/addArticle');

router.get('/status',(req,res)=>{
    res.json({msg: "Api running"});
})

router.get('/newArticle', article.getTags);
router.post('/newArticle', article.newArticle);

module.exports = router;