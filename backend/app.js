const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const connectdb = require('./db/db');
const userRoutes = require('./routes/user-routes');
const cookieParser = require('cookie-parser')
const captainRoutes = require('./routes/captain-routes')




connectdb(); // Connect to the MongoDB database

// middleware
const cors = require('cors');
app.use(cors({
  origin: 'https://uber-clone-mauve-delta.vercel.app', // Replace with your frontend URL
  credentials: true, // Allow credentials
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// routes

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.use('/user', userRoutes)
app.use('/captain', captainRoutes )


app.listen(3000, ()=>{
    console.log('server running at 3000 port');
    
})
