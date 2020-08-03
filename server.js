const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const router = express.Router();
const appRoutes = require('./app/routes/api')(router);
const connectDB = require('./config/db');
const cors = require('cors');
const passport = require('passport');
const social = require('./app/passport/passport')(app, passport)
connectDB();

//---middleware
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/dist/public/'));
app.use('/api', appRoutes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/dist/public/index.html'))
})
try {
    app.listen(PORT, () => {
        console.log(`Server has been started on port : ${PORT}`)
    })

} catch (e) {
    console.log(e)
}
