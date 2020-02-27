const mysql=require('mysql');
const express=require('express');
const bodyPraser=require('body-parser');
const PeopleRoutes=require('./routes/people');
const mysqlConnection=require('./connection');

var app=express();

app.use(bodyPraser.json());
app.use('/people', PeopleRoutes);



app.listen('3000', ()=>{
    console.log('node server started')
})