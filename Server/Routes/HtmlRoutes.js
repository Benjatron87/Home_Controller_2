const path = require("path");
module.exports = function(app) {    
    
    app.get("/Home", (req, res) => {
        if (req.session.loggedin) {
            res.sendFile(path.join(__dirname, "../../App/Views/Home.html"));
        }
        else{
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));
        }
    });
    app.get("/Controls", (req, res) => {
        if (req.session.loggedin) {
            res.sendFile(path.join(__dirname, "../../App/Views/Controls.html"));
        }
        else{
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));
        }
    })
    app.get("/Data", (req, res) => {
        if (req.session.loggedin) {
            res.sendFile(path.join(__dirname, "../../App/Views/Data.html"));
        }
        else{
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));
        }
    })
    app.get("/Settings", (req, res) => {
        if (req.session.loggedin) {
            res.sendFile(path.join(__dirname, "../../App/Views/Settings.html"));
        }
        else{
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));
        }
    })
    app.get('/Logout', (req, res) => {
        if(req.session.loggedin){
            req.session.loggedin = false;
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));            
        }
        else{            
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));           
        }
    });

    app.get('/NewLogin', (req, res) => {       
            res.sendFile(path.join(__dirname, "../../App/Views/NewLogin.html"));   
    });

    app.get('/NewAccountSuccess', (req, res) => {       
        console.log(req.session);
        res.sendFile(path.join(__dirname, "../../App/Views/NewAccountSuccess.html"));   
    });

    app.get('/*', function(req, res) {
        if (req.session.loggedin) {
            res.sendFile(path.join(__dirname, "../../App/Views/Home.html"));
        }
        else{
            res.sendFile(path.join(__dirname, "../../App/Views/Login.html"));
        }
    });
};