const express=require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//hard coded data for people
let people={ people: [{ name: "Amit Kumar"  }] };

//for get
app.get('/people', (req, res)=>{
    res.json(people);
    res.end();
});

app.post('/people', (req, res)=>{
    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name}); //we're pushing a new object with a key called name and the name is = to req.body.names
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
});


app.put('/people', (req, res)=>{
    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name}); //we're pushing a new object with a key called name and the name is = to req.body.names
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
});

app.delete('/people', (req, res)=>{
    if(req.body && req.body.name)
    {
        people.people.push({name: req.body.name}); //we're pushing a new object with a key called name and the name is = to req.body.names
    }
    console.log(req.body.name);
    res.json(people);
    res.end();
});


//:name defines here that we have paramenter in the api, :name will get replaced with the value that is mentioned in the url
//same way we can do with multiple params
//like :name/:age but in that case age is mandate to fill in the url
//as it won't find any age in the the url it will print cannot /GET
// to solve this create another same get function but this time for name alone
//like below
app.get('/people/:name', (req, res)=>{
    console.log(req.body.name);
    res.json({name: req.params.name});
    res.end();
});


app.listen("3000", ()=>{
    console.log("server started");
});