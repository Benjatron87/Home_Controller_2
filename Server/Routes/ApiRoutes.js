const db = require("../../Database/models");

module.exports = function(app) {

    app.post('/Login', function(req, res) {      
        var username = req.body.username;
        var password = req.body.password;        
        if (username && password) {   
          db.USER.findOne({ where: 
            {
            userName: username,
            password: password
            }
          }).then((results) => {
            if (results && results.dataValues) {    
              //req.session.loggedin = true;
              req.session.loggedin = true;
              req.session.username = username;
              req.session.currentUser = results
              res.redirect('/Home');
            } else {
              res.json({ errMsg: 'Incorrect Username and/or Password!' });
            }			
            res.end();
          });
        }
        else {
          res.json({ errMsg: 'Please enter Username and Password!' });
          res.end();
        }    
    });

    app.post('/CreateNewLogin', function(req, res) {      
      var data = req.body;

      if(!data.username || !data.firstName || !data.lastName || !data.password || !data.confirmPassword){
        res.json({ errMsg: 'All fields must be filled in!' });
        res.end();
      }
      else if(data.password !== data.confirmPassword){
        res.json({ errMsg: 'Passwords must match!' });
        res.end();
      }
      else{
        db.USER.build({
          userName: req.body.username,
          firstName: req.body.firstName,
          lastName: req.body.lastName,          
          password: req.body.password          
        }).save()
        .then(anotherTask => {
          console.log('The account was saved!');
          res.redirect('/NewAccountSuccess');
          res.end();
          // you can now access the currently saved task with the variable anotherTask... nice!
        })
        .catch(error => {
          if(error.parent.errno == 1062){
            res.json({ errMsg: 'An account with this username already exists!' });
          }
         
          res.end();
          // Ooops, do some error-handling
        })      
      }
  });
    
    app.get("/currentUser", (req, res) => {
        res.send({currentUser: {
          firstName: req.session.currentUser.firstName,
          lastName: req.session.currentUser.lastName,
          userName: req.session.currentUser.userName,
        }});
    })

    app.get("/api/dataItems/values", (req, res)=> {
      if(req.session.loggedin){
        db.DATAITEM.findAll({ where: 
          {
            userId: req.session.username,
            type: 'text'
          }
        })
        .then( (result) => {
          res.json({data: result});
          res.end();
        })
      }
    });

    app.get("/api/dataItems/switches", (req, res)=> {
      console.log(req.session.username);
      if(req.session.loggedin){
        db.DATAITEM.findAll({ where: 
          {
            userId: req.session.username,
            type: 'switch'
          }
        })
        .then( (result) => {
          res.json(result);       
          res.end();   
        })
      }
    });

    app.get("/api/dataItems/arduinoSwitches/:userName", (req, res)=> {
        db.DATAITEM.findAll({ where: 
          {
            userId: req.params.userName,
            type: 'switch'
          }
        })
        .then( (result) => {
          var filtered = [];
          for(let i = 0; i < result.length; i++)
          {
            filtered.push({pin: result[i].pin, value: result[i].value});
          }
          res.json(filtered);          
          res.end();
        })      
    });


    app.post("/api/dataItems/:id", (req, res)=> {      
      if(req.session.loggedin){
        db.DATAITEM.findOne({ where: 
          {
          id: req.params.id
          }
        })
        .then(val => {
          val.update({
            value: req.body.value == 'true' ? 'Off' : 'On'
          });
          res.end();
        });
      }
    });   

    app.post("/api/updateData/:userName", (req, res)=> {    
      console.log(req.body.data);  
      var data = req.body.data;   
      for(let i = 0; i < data.length; i++){
          db.DATAITEM.findOne({ where: 
            {
            pin: data[i].pin,
            userId: req.params.userName
            }
          })
          .then(val => {
            console.log(val);
            val.update({
              value: data[i].value
            });            
          });
      }
      res.end();    
    });   

    app.post("/api/saveDataItem", (req, res)=> {     
      if(req.session.loggedin){ 
        var data = req.body.dataItem;
        db.DATAITEM.build({ 
          title: data.title, 
          unit: data.units, 
          type: data.type,
          userId: req.session.username,
          pin: data.pin
        })
        .save()
        .then(anotherTask => {
          console.log('the data saved!');
          res.end();
          // you can now access the currently saved task with the variable anotherTask... nice!
        })
        .catch(error => {
          console.log("uh oh something wasn't right!");
          console.log(error);          
          // Ooops, do some error-handling
        })      
      }
    });   

    app.post("/api/dataItems/deleteRow/:id", (req, res)=> {
      if(req.session.loggedin){
        db.DATAITEM.destroy({ where: 
          {
          id: req.params.id,
          userId: req.session.username
          }
        })
        .then(anotherTask => {
          console.log('the data was deleted!');
          res.end();
          // you can now access the currently saved task with the variable anotherTask... nice!
        })
        .catch(error => {
          console.log("uh oh something wasn't right!");
          console.log(error);
          // Ooops, do some error-handling
        })  
      }    
    });
};