const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.static("../App"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("start"));
}
require("./Routes/ApiRoutes")(app);
require("./Routes/HtmlRoutes")(app);

const PORT = process.env.PORT ||  8117;

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})