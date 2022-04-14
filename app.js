const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const router = require('./Router/index');

const app = express();

const port = process.env.PORT || 9828;
const hostname = 'localhost';

// const locID = 'mongodb://127.0.0.1:27017/zomato_re';
const serverDB = 'mongodb+srv://zomato_res:anitha2591998@cluster0.oijcg.mongodb.net/zomato_re?retryWrites=true&w=majority';

const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};
 
app.use(cors(corsOpts));
app.use(express.json());
app.use('/', router);

mongoose.connect(serverDB,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`);
        })
    })
    .catch(err => console.log(`Something went wrong while connecting ${err}`));

