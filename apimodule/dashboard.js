const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('Root of Dashboard...');
});

router.get('/monthly',(req,res)=>{
    res.send('Test get data dashbaord');
});

module.exports = router;