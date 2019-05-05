var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Team = require('./models/Team');
var bodyParser = require('body-parser');

var port = 3030;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
   });

mongoose.connect('mongodb://Centrale7:C7morethanrugby@ds149676.mlab.com:49676/c7teams', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/teams/reinitialize/:gender', (req, res) => {
    Team.update({gender : req.params.gender}, {$set : {group : ""}}, {new : true, runValidators : true, useFindAndModify : false, multi : true},(err, teams) => {
        if (err){
            res.send(err);
        } else {
            res.send(teams);
        }
    })
})

app.get('/teams/:gender', (req, res) => {
    Team.paginate({gender : req.params.gender, group : ""}).then((err, teams) => {
        if (err){
            res.send(err);
        } else {
            res.send(teams);
        }
    })
})

app.get('/teams/:gender/:group', (req, res) => {
    Team.paginate({gender : req.params.gender, group : req.params.group}).then((err, teams) => {
        if (err){
            res.send(err);
        } else {
            res.send(teams);
        }
    })
})

app.get('/team/setgroup/:teamId/:group', (req, res) => {
    Team.findOneAndUpdate({_id : req.params.teamId}, {$set : {group : req.params.group}}, {new : true, runValidators : true, useFindAndModify : false},(err, team) => {
        if (err){
            res.send(err);
        } else {
            res.send(team);
        }
    })
})

app.listen(port, function(){
    console.log('App started on port ' + port);
});