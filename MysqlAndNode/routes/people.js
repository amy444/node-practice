const express=require('express');
const router=express.Router();
const mysqlConnection= require('../connection');
router.get('/',(req, res)=>{

mysqlConnection.query("select * from people", (err, rows, fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
});

});

module.exports=router;