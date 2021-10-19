const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const postsPageRoute = require('./routes/posts');
require('dotenv').config();
// codes
mongoose.connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }).then(()=>console.log('Database Connected!!')).catch(err=>console.log("Authentication failed"));

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postsPageRoute);

app.listen(3000, ()=> console.log("Server running on localhost 3000"));
