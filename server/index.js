const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = process.env.PORT || 8080;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

const router = require('./routers/router.index')


//Middle Wares

// to Prase req.body in json format => to get the data from route which is send in json format
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Mongo DB Connection
mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log(`Connected to MongoDB...`);
    })
    .catch(err => console.log(`Error connecting to mongoDB Atlas: ${err}`))

// Calling Route
app.use('/', router)




app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
})


