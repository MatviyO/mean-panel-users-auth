const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;

const morgan = require('morgan')
const User = require('./app/models/user')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const connectDB = require('./config/db');
app.use(morgan('dev'));
connectDB();
app.get('/home', (req, res) => {
    res.send('home');
})
app.post('/users',  (req,res) => {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;

    user.save();
    res.send('user created');
})

app.listen(PORT, () => {
    console.log(`Server has been started on port : ${PORT}`)
})
