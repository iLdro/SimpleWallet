const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const db = require('./config/database');
const UserModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/users/CreateUser', userRoutes);



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}
);
