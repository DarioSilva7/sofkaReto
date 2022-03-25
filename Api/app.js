const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors= require('cors')

const authRoutes = require('./src/routes/authRoutes')
const userRoutes = require('./src/routes/userRoutes')
const questionRoutes = require('./src/routes/questionRoutes')
const categoryRoutes = require('./src/routes/categoryRoutes')
const gameRoutes = require('./src/routes/gameRoutes')


app.use(express.json())
app.use(cors())
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/question', questionRoutes)
app.use('/game', gameRoutes)
app.use('/category', categoryRoutes)

module.exports= app