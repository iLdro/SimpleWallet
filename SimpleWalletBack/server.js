const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const db = require('./config/database');
const UserModel = require('./models/userModel');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}
);
