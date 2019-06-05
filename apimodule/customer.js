const express = require('express');
const router = express.Router();


const customer = ([
    {"id":1,"name":"banphot Khongpom","salary":20000},
    {"id":2,"name":"Dianabao","salary":3000}
]);

// เราใช้คำสั่ง use() เพื่อเรียกใช้งาน middleware function
// middleware ที่กำงานใน router instance ก่อนเข้าไปทำงานใน route function
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/',(req,res)=>{
    res.send('root of customer web');
});

router.get('/customers',(req,res)=>{
    res.send(customer);
});

router.get('/customers/:id',(req,res)=>{
    const result = customer.find(c=>c.id==req.params.id);
    if(result) {
        res.send(result);
    }
    else {
        res.status(404).send("Not found that item");
    }
});

router.post('/customers',(req,res)=>{
    const resultdb = {
        id : customer.length+1,
        name : req.body.name,
        salary : req.body.salary
    }

    customer.push(resultdb);
    res.send(customer);
});


module.exports = router;