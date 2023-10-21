const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

const cookieParser = require('cookie-parser');

const db = require('./config/database');
const UserModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');
const testRoutes = require('./routes/testRoutes');
const cors = require('cors');

app.use(cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:5173'];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
}));
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

app.use('/users', userRoutes);
app.use('/test', testRoutes);



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}
);
