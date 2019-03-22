const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

//connect mongodb
mongoose.connect('mongodb://localhost:27017/mean-users', { useNewUrlParser: true })
    .then(db => console.log('DB is Connected'))
    .catch(err => console.error(err));

const port = process.env.PORT || 3000;

//Settings
app.set('port', port);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users'))

//Static Files
app.use(express.static(__dirname + '/public/dist/users-app/'));

//Server is Listening
app.listen(app.get('port'), () => {
    console.log("Server On", app.get('port'));
});